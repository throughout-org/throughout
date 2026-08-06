"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck, FiMail } from "react-icons/fi";
import { trackNewsletterSignup } from "@/lib/analytics";

interface Props {
  source?: string;
  variant?: "footer" | "inline";
  heading?: string;
  subtext?: string;
}

export default function NewsletterSignup({
  source = "footer",
  variant = "footer",
  heading = "Get Digital Growth Insights",
  subtext = "SEO tips, marketing strategies, and engineering insights — delivered monthly.",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        trackNewsletterSignup(source);
      } else {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Connection error. Please try again.");
    }
  };

  if (variant === "inline") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-center gap-2 mb-2">
          <FiMail className="text-sky-600" />
          <h3 className="text-sm font-bold text-slate-950">{heading}</h3>
        </div>
        <p className="text-xs text-slate-600 mb-4">{subtext}</p>
        <NewsletterForm email={email} setEmail={setEmail} status={status} error={error} onSubmit={handleSubmit} compact />
      </div>
    );
  }

  return (
    <div>
      {heading && <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white mb-1">{heading}</h3>}
      {subtext && <p className="text-xs text-slate-400 mb-4">{subtext}</p>}
      <NewsletterForm email={email} setEmail={setEmail} status={status} error={error} onSubmit={handleSubmit} dark />
    </div>
  );
}

function NewsletterForm({
  email, setEmail, status, error, onSubmit, dark,
}: {
  email: string;
  setEmail: (v: string) => void;
  status: "idle" | "loading" | "success" | "error";
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <div aria-live="polite">
      {status === "success" ? (
        <div
          className={`flex items-center gap-2 text-sm font-semibold ${dark ? "text-emerald-400" : "text-emerald-600"}`}
        >
          <FiCheck />
          You&apos;re in! Check your inbox soon.
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className={dark
            ? "relative flex items-center rounded-full border border-white/85 bg-transparent p-1.5 pl-4 transition focus-within:border-sky-300 focus-within:ring-2 focus-within:ring-sky-400/20"
            : "relative flex flex-row gap-2"}
        >
          <input
            type="email"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dark ? "jason@gmail.com" : "your@email.com"}
            className={`min-w-0 flex-1 outline-none transition ${
              dark
                ? "bg-transparent px-2 py-2 text-sm text-white placeholder:text-slate-400 sm:text-base"
                : "rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-950 placeholder-slate-400 focus:ring-2 focus:ring-sky-500"
            }`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            aria-label="Subscribe to newsletter"
            className={dark
              ? "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-slate-950 transition hover:scale-105 hover:bg-sky-100 disabled:opacity-60 sm:h-11 sm:w-11"
              : "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-700 disabled:opacity-60"}
          >
            {status === "loading" ? (
              <span aria-hidden="true">…</span>
            ) : dark ? (
              <FiArrowRight aria-hidden="true" />
            ) : (
              <>Subscribe <FiArrowRight aria-hidden="true" /></>
            )}
          </button>
          {error && <p role="alert" className={`absolute left-4 top-full mt-2 text-xs ${dark ? "text-red-400" : "text-red-600"}`}>{error}</p>}
        </form>
      )}
    </div>
  );
}
