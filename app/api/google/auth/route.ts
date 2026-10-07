import { NextResponse } from "next/server";
import { googleAuthUrl } from "@/lib/google";

export const runtime = "nodejs";

export async function GET() {
  try {
    return NextResponse.redirect(googleAuthUrl());
  } catch (error) {
    console.error("Google OAuth auth route error:", error);
    return NextResponse.json(
      { error: "Failed to generate Google OAuth URL" },
      { status: 500 },
    );
  }
}
