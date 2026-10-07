// Plain fetch against Google's OAuth and Drive REST APIs. googleapis breaks on
// Cloudflare Workers: it receives gzipped token responses without decoding them.

export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/userinfo.email",
];

function requireEnv(...names: string[]): string[] {
  const values = names.map((name) => process.env[name]?.trim() || "");
  const missing = names.filter((_, i) => !values[i]);
  if (missing.length) throw new Error(`Missing Google OAuth2 env vars: ${missing.join(", ")}`);
  return values;
}

export function googleAuthUrl(): string {
  const [clientId, redirectUri] = requireEnv("GOOGLE_CLIENT_ID", "GOOGLE_REDIRECT_URI");
  const params = new URLSearchParams({
    access_type: "offline",
    prompt: "consent",
    scope: GOOGLE_SCOPES.join(" "),
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

type TokenResponse = { access_token?: string; refresh_token?: string; error?: string; error_description?: string };

async function requestToken(params: Record<string, string>): Promise<TokenResponse> {
  const [clientId, clientSecret] = requireEnv("GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, ...params }),
  });
  const data = (await response.json()) as TokenResponse;
  // The message keeps "invalid_grant" so callers can detect a revoked refresh token.
  if (!response.ok || data.error) throw new Error(`Google token request failed: ${data.error ?? response.status} ${data.error_description ?? ""}`);
  return data;
}

export async function exchangeGoogleCode(code: string): Promise<TokenResponse> {
  const [redirectUri] = requireEnv("GOOGLE_REDIRECT_URI");
  return requestToken({ code, redirect_uri: redirectUri, grant_type: "authorization_code" });
}

async function googleAccessToken(): Promise<string> {
  const [refreshToken] = requireEnv("GOOGLE_REFRESH_TOKEN");
  const { access_token } = await requestToken({ refresh_token: refreshToken, grant_type: "refresh_token" });
  if (!access_token) throw new Error("Google token request returned no access_token");
  return access_token;
}

async function driveFetch<T>(url: string, token: string, init: RequestInit): Promise<T> {
  const response = await fetch(url, { ...init, headers: { Authorization: `Bearer ${token}`, ...init.headers } });
  if (!response.ok) throw new Error(`Google Drive request failed: ${response.status} ${await response.text()}`);
  return (await response.json()) as T;
}

/** Uploads a PDF into the folder, makes it readable by link, and returns that link. */
export async function uploadPdfToDrive(bytes: ArrayBuffer, name: string, folderId: string): Promise<string> {
  const token = await googleAccessToken();
  const boundary = `throughout-${crypto.randomUUID()}`;
  const metadata = JSON.stringify({ name, parents: [folderId], mimeType: "application/pdf" });
  const body = new Blob([
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n`,
    `--${boundary}\r\nContent-Type: application/pdf\r\n\r\n`,
    bytes,
    `\r\n--${boundary}--`,
  ]);

  const file = await driveFetch<{ id?: string; webViewLink?: string }>(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink&supportsAllDrives=true",
    token,
    { method: "POST", headers: { "Content-Type": `multipart/related; boundary=${boundary}` }, body },
  );
  if (!file.id) throw new Error("Google Drive upload failed: missing file id");

  await driveFetch(`https://www.googleapis.com/drive/v3/files/${file.id}/permissions?supportsAllDrives=true`, token, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role: "reader", type: "anyone" }),
  });

  return file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`;
}
