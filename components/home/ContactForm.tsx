"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { trackContactFormSubmit } from "@/lib/analytics";

const empty = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(empty);
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
      setFormData(empty);
      setStatus("success");
      trackContactFormSubmit("homepage");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const field =
    "mt-2 min-h-12 w-full rounded-md border border-pale/25 bg-paper/5 px-4 py-3 text-base text-on-sapphire outline-none transition placeholder:text-on-sapphire-muted/60 focus:border-signal focus:ring-2 focus:ring-signal/30";
  const label = "text-sm font-medium text-on-sapphire";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Name
          <input id="contact-name" className={field} type="text" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} />
        </label>
        <label className={label}>
          Work email
          <input id="contact-email" className={field} type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <label className={label}>
        Phone <span className="text-on-sapphire-muted">(optional)</span>
        <input id="contact-phone" className={field} type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} />
      </label>
      <label className={label}>
        What can we help with?
        <textarea id="contact-message" className={`${field} min-h-32 resize-y`} name="message" required value={formData.message} onChange={handleChange} placeholder="A product, a project, or the team you need." />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-sapphire transition hover:bg-primary-soft disabled:cursor-wait disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"} <FiArrowRight aria-hidden="true" />
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "success" && <span className="text-on-sapphire">Thanks. Your message has reached us.</span>}
          {status === "error" && <span className="text-pale underline decoration-pale/60">That didn&apos;t send. Try again, or email info@throughout.io.</span>}
        </p>
      </div>
    </form>
  );
}
