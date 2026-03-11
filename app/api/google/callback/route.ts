import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

function getOAuth2Client() {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const redirectUri = process.env.GOOGLE_REDIRECT_URI?.trim();

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error(
      "Missing Google OAuth2 env vars. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REDIRECT_URI.",
    );
  }

  return new google.auth.OAuth2(clientId, clientSecret, redirectUri);
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Missing 'code' parameter in callback URL" },
      { status: 400 },
    );
  }

  try {
    const oAuth2Client = getOAuth2Client();
    const { tokens } = await oAuth2Client.getToken(code);

    const refreshToken = tokens.refresh_token;

    if (!refreshToken) {
      return NextResponse.json(
        {
          error:
            "No refresh_token returned. Make sure you requested access_type=offline and prompt=consent, then try again.",
          tokens,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        message:
          "Copy this refresh token into your env as GOOGLE_REFRESH_TOKEN.",
        refreshToken,
        note: "After adding it to your env, you can stop using this callback route.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Google OAuth callback error:", error);
    return NextResponse.json(
      { error: "Failed to exchange code for tokens" },
      { status: 500 },
    );
  }
}
