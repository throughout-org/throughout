import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MC_API_KEY = process.env.MAILCHIMP_API_KEY ?? "";
const MC_LIST_ID = process.env.MAILCHIMP_LIST_ID ?? "";
// Derive the data center from the API key (e.g. "us21" from "xxxx-us21")
const MC_DC = MC_API_KEY.split("-").pop() ?? "us1";
const MC_URL = `https://${MC_DC}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members`;

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 });
    }

    if (!MC_API_KEY || !MC_LIST_ID) {
      return NextResponse.json({ success: false, error: "Newsletter not configured" }, { status: 503 });
    }

    const subscriberHash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");

    // UPSERT (PUT) — idempotent, won't error if already subscribed
    const res = await fetch(`${MC_URL}/${subscriberHash}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${MC_API_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: firstName ?? "",
          SOURCE: source ?? "website",
        },
        tags: ["website", source ?? "footer"],
      }),
    });

    const data = await res.json();

    if (!res.ok && data.title !== "Member Exists") {
      console.error("Mailchimp error:", data);
      return NextResponse.json({ success: false, error: data.detail ?? "Subscription failed" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
