"use client";

import { useState } from "react";
import { FiArrowRight, FiMail, FiMessageCircle } from "react-icons/fi";
import { trackContactFormSubmit } from "@/lib/analytics";

export default function ContactInfoSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Contact request failed");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
      trackContactFormSubmit("contact_page");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100";

  return (
    <section id="contact-form" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl">Choose the easiest way to reach us.</h2>
          <p className="mt-5 leading-7 text-slate-600">Share enough context for us to understand the goal. We can discuss the detail together.</p>

          <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">
            <a href="mailto:info@throughout.io" className="group flex items-center gap-4 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700"><FiMail aria-hidden="true" /></span>
              <span><span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Email</span><span className="mt-1 block font-bold text-slate-950 group-hover:text-sky-700">info@throughout.io</span></span>
            </a>
            <a href="https://wa.me/94707007992" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700"><FiMessageCircle aria-hidden="true" /></span>
              <span><span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">WhatsApp</span><span className="mt-1 block font-bold text-slate-950 group-hover:text-sky-700">+94 70 700 7992</span></span>
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-950">Tell us what you need</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">A short outline is enough to start.</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-800">Name <span aria-hidden="true">*</span><input className={fieldClass} type="text" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder="Your name" /></label>
              <label className="text-sm font-bold text-slate-800">Work email <span aria-hidden="true">*</span><input className={fieldClass} type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" /></label>
            </div>
            <label className="block text-sm font-bold text-slate-800">Phone <span className="font-normal text-slate-500">(optional)</span><input className={fieldClass} type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="Your phone number" /></label>
            <label className="block text-sm font-bold text-slate-800">What can we help with? <span aria-hidden="true">*</span><textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required value={formData.message} onChange={handleChange} placeholder="A product, project, team, or challenge..." /></label>
            <button type="submit" disabled={status === "loading"} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
              {status === "loading" ? "Sending..." : "Send message"} <FiArrowRight aria-hidden="true" />
            </button>
            <div aria-live="polite" className="min-h-6 text-sm font-semibold">
              {status === "success" && <p className="text-emerald-700">Thanks. Your message has been sent.</p>}
              {status === "error" && <p className="text-red-700">We could not send your message. Please try again or email us directly.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
