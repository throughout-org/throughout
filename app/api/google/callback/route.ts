import { NextRequest, NextResponse } from "next/server";
import { exchangeGoogleCode } from "@/lib/google";

export const runtime = "nodejs";

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
    const tokens = await exchangeGoogleCode(code);

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
