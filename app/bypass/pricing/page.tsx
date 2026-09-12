import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import BypassPricingCard from "@/components/bypass/BypassPricingCard";

export const metadata: Metadata = {
  title: "Bypass Pricing",
  description: "Simple, per-user pricing for Bypass — an unofficial mobile client for Shortcut. 7-day free trial, then $2.99/user/month or $24/user/year.",
  alternates: { canonical: "https://www.throughout.io/bypass/pricing" },
};

const included = [
  "My Work — everything assigned to you, grouped by workflow state",
  "Browse & filter by owner, type, state, team, epic, label, or iteration",
  "Story details — descriptions, comments, tasks, status, estimate, owners",
  "Push notifications for stories you own",
  "Team management for admins — invite teammates, manage roles",
  "Unlimited stories and workspaces",
  "AES-256-GCM encrypted Shortcut token storage",
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — every new account starts with a 7-day free trial with full access. No card is charged until the trial ends.",
  },
  {
    q: "Do I need a Shortcut account?",
    a: "Yes. Bypass is a client for your existing Shortcut workspace — you'll link your own personal Shortcut API token after your admin creates your Bypass account.",
  },
  {
    q: "How is billing calculated?",
    a: "Bypass is billed per user, per month or per year. Annual billing works out to about $2/user/month, roughly 33% less than paying monthly.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There's no long-term commitment — cancel anytime and you won't be charged again.",
  },
  {
    q: "Is my Shortcut data safe?",
    a: "Your Shortcut API token is encrypted at rest with AES-256-GCM and never leaves our backend. See the Privacy Policy for full details.",
  },
  {
    q: "Is Bypass affiliated with Shortcut?",
    a: "No. Bypass is an unofficial third-party client built and operated independently by Throughout. It is not affiliated with, endorsed by, or supported by Shortcut.",
  },
];

export default function BypassPricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="px-4 pb-4 pt-16 text-center sm:px-6 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4c4bcd]">Pricing</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Simple, per-user pricing
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            One plan, every feature included. Try Bypass free for 7 days, no card required.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <BypassPricingCard />
      </section>

      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            What&rsquo;s included
          </h2>
          <ul className="mt-8 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                <FiCheck className="mt-1 h-4 w-4 shrink-0 text-[#4c4bcd]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-8 last:border-0">
                <h3 className="font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          Questions about pricing?{" "}
          <a href="mailto:info@throughout.io" className="font-semibold text-[#4c4bcd] underline underline-offset-2">
            info@throughout.io
          </a>
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Bypass is not affiliated with, endorsed by, or supported by Shortcut. See the{" "}
          <Link href="/bypass/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
