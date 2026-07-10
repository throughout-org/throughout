"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 text-sm font-semibold ${dark ? "text-emerald-400" : "text-emerald-600"}`}
        >
          <FiCheck />
          You're in! Check your inbox soon.
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} className="flex gap-2 flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-sky-500 ${
              dark
                ? "bg-white/10 border border-white/15 text-white placeholder-slate-400"
                : "bg-white border border-slate-200 text-slate-950 placeholder-slate-400"
            }`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-700 disabled:opacity-60 shrink-0"
          >
            {status === "loading" ? "Subscribing…" : <>Subscribe <FiArrowRight /></>}
          </button>
          {error && <p className={`text-xs mt-1 ${dark ? "text-red-400" : "text-red-600"}`}>{error}</p>}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
