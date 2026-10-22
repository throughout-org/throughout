"use client";

import { useEffect, useState } from "react";
import { BOOK_CALL_URL } from "@/components/BookCallLink";

const field = "mt-2 min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200";
const label = "block text-sm font-semibold text-[#18324c]";
const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export default function MakeoverForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [attribution, setAttribution] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const current: Record<string, string> = {};
    for (const key of utmKeys) {
      const value = params.get(key);
      if (value) current[key] = value.slice(0, 200);
    }
    try {
      if (Object.keys(current).length) sessionStorage.setItem("makeover_utm", JSON.stringify(current));
      else Object.assign(current, JSON.parse(sessionStorage.getItem("makeover_utm") || "{}"));
    } catch { /* The application still works if storage is unavailable. */ }
    setAttribution(current);
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch("/api/website-makeover", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, attribution }) });
      if (!response.ok) throw new Error("Unable to submit");
      setStatus("success");
    } catch { setStatus("error"); }
  }

  if (status === "success") return <div role="status" className="rounded-xl border border-[#c9dbe8] bg-white p-8"><p className="font-mono text-xs uppercase tracking-widest text-[#56718c]">Application received</p><h3 className="mt-5 text-3xl font-bold">Thank you for getting in touch.</h3><p className="mt-4 leading-7 text-slate-600">We&apos;ll review your application and get back to you. Applying does not guarantee a free concept.</p><p className="mt-4 leading-7 text-slate-600">You can wait for our review, or book a discovery call if you&apos;d like to talk sooner.</p><a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-md bg-[#062e60] px-6 py-4 text-sm font-semibold text-white">Book a discovery call ↗</a></div>;

  return <form onSubmit={submit} className="grid gap-5 rounded-xl border border-[#d9e0e5] bg-white p-6 shadow-sm sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Contact name<input className={field} name="name" autoComplete="name" maxLength={120} required /></label><label className={label}>Business name<input className={field} name="business" autoComplete="organization" maxLength={120} required /></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Email<input className={field} name="email" type="email" autoComplete="email" maxLength={254} required /></label><label className={label}>WhatsApp number<input className={field} name="phone" type="tel" autoComplete="tel" maxLength={40} required /></label></div>
    <label className={label}>Current website <span className="font-normal text-slate-500">(optional)</span><input className={field} name="website" type="url" maxLength={500} placeholder="https://" /></label>
    <label className={label}>I&apos;m interested in<select name="offer" className={field} defaultValue="" required><option value="" disabled>Select an option</option><option>Free homepage concept</option><option>Website development quote</option></select></label>
    <label className={label}>What do you need?<select name="need" className={field} defaultValue="" required><option value="" disabled>Select an option</option><option>Redesign my existing website</option><option>Build a new website</option><option>Just exploring options</option></select></label>
    <div className="grid gap-5 sm:grid-cols-2"><label className={label}>Approximate development budget<select name="budget" className={field} defaultValue="" required><option value="" disabled>Select a budget</option><option>Below Rs. 40,000</option><option>Rs. 40,000–70,000</option><option>Rs. 70,000–120,000</option><option>Above Rs. 120,000</option><option>Not sure yet</option></select></label><label className={label}>When would you like to launch?<select name="timeline" className={field} defaultValue="" required><option value="" disabled>Select a timeframe</option><option>As soon as possible</option><option>Within 1 month</option><option>Within 2–3 months</option><option>Just researching</option></select></label></div>
    <p className="text-sm leading-6 text-slate-500">We&apos;ll use your details to respond to your enquiry. See our <a href="/privacy-policy" className="underline">privacy policy</a>.</p>
    <button disabled={status === "sending"} className="min-h-12 rounded-md bg-[#062e60] px-6 py-4 text-sm font-bold text-white hover:bg-[#174b7d] disabled:opacity-60">{status === "sending" ? "Sending…" : "Submit application ↗"}</button>
    {status === "error" && <p role="alert" className="text-sm text-red-700">We couldn&apos;t send your application. Please try again or email info@throughout.io.</p>}
  </form>;
}
