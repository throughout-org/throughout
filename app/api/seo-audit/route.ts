import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch("http://127.0.0.1:8000/seo-audit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
    });

    const data = await response.json();
    return NextResponse.json(data, {status: response.status});
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    return NextResponse.json(
      {error: timedOut ? "SEO audit timed out" : "SEO audit service unavailable"},
      {status: timedOut ? 504 : 502},
    );
  }
}
