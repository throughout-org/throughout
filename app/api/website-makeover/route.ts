import { NextRequest, NextResponse } from "next/server";
import { createMailTransport } from "@/lib/email";

const choices: Record<string, string[]> = {
  offer: ["Free homepage concept", "Website development quote"],
  need: ["Redesign my existing website", "Build a new website", "Just exploring options"],
  budget: ["Below Rs. 40,000", "Rs. 40,000–70,000", "Rs. 70,000–120,000", "Above Rs. 120,000", "Not sure yet"],
  timeline: ["As soon as possible", "Within 1 month", "Within 2–3 months", "Just researching"],
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const get = (key: string, max: number) => typeof data[key] === "string" ? data[key].trim().slice(0, max) : "";
    const name = get("name", 120), business = get("business", 120), email = get("email", 254), phone = get("phone", 40), website = get("website", 500);
    if (!name || !business || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email) || Object.entries(choices).some(([key, options]) => !options.includes(get(key, 100)))) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    if (website) { try { if (!/^https?:$/.test(new URL(website).protocol)) throw new Error(); } catch { return NextResponse.json({ success: false }, { status: 400 }); } }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return NextResponse.json({ success: false }, { status: 503 });
    const attribution = data.attribution && typeof data.attribution === "object" ? data.attribution : {};
    const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map((key) => `${key}: ${typeof attribution[key] === "string" ? attribution[key].slice(0, 200) : "-"}`).join("\n");
    await createMailTransport().sendMail({
      from: process.env.SMTP_USER, to: process.env.SMTP_USER, replyTo: email,
      subject: "New website makeover application",
      text: `Contact: ${name}\nBusiness: ${business}\nEmail: ${email}\nWhatsApp: ${phone}\nWebsite: ${website || "-"}\nOffer: ${get("offer", 100)}\nNeed: ${get("need", 100)}\nBudget: ${get("budget", 100)}\nTimeline: ${get("timeline", 100)}\n\nAttribution:\n${utms}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Website makeover application error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
