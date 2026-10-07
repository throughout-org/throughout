import type { Metadata } from "next";
import Link from "next/link";
import {
  FiCheckSquare,
  FiFilter,
  FiFileText,
  FiBell,
  FiUsers,
  FiLock,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";
import BypassPricingCard from "@/components/bypass/BypassPricingCard";
import BypassLogo from "@/components/bypass/BypassLogo";

// Static content; tells the Cloudflare build to cache it at the edge.
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bypass — Unofficial Mobile Client for Shortcut",
  description:
    "An unofficial third-party client for Shortcut — browse & manage your stories.",
  alternates: { canonical: "https://www.throughout.io/bypass" },
};

const features = [
  {
    icon: FiCheckSquare,
    color: "indigo",
    title: "My Work",
    description: "See everything assigned to you, grouped by workflow state.",
  },
  {
    icon: FiFilter,
    color: "purple",
    title: "Browse & filter",
    description: "Find stories by owner, type, state, team, epic, label, or iteration.",
  },
  {
    icon: FiFileText,
    color: "pink",
    title: "Story details",
    description: "Read descriptions, comments, and tasks; update status, estimate, and owners.",
  },
  {
    icon: FiBell,
    color: "orange",
    title: "Push notifications",
    description: "Get notified when a story you own changes or gets a new comment.",
  },
  {
    icon: FiUsers,
    color: "violet",
    title: "Team management",
    description: "Admins invite teammates and manage roles from their phone.",
  },
];

const steps = [
  {
    number: "1",
    title: "Your admin creates your account",
    description: "Each teammate signs in with an account created by their team's admin — no self sign-up.",
  },
  {
    number: "2",
    title: "Link your own Shortcut token",
    description: "You connect your personal Shortcut API token, never a shared credential.",
  },
  {
    number: "3",
    title: "It's you, in Shortcut",
    description: "Every action you take in Bypass is attributed to you, exactly as if made from shortcut.com.",
  },
];

const securityPoints = [
  {
    icon: FiLock,
    title: "Encrypted at rest",
    description: "Your Shortcut token is encrypted with AES-256-GCM and never leaves our backend.",
  },
  {
    icon: FiShield,
    title: "Never sold or shared",
    description: "We don't sell your data or share it with advertisers or data brokers.",
  },
  {
    icon: FiSmartphone,
    title: "Full control, anytime",
    description: "Disconnect your token or ask your admin to disable your account whenever you want.",
  },
];

const colorClasses: Record<string, string> = {
  indigo: "bg-[#4c4bcd]/12 text-[#4c4bcd]",
  purple: "bg-purple-100 text-purple-600",
  pink: "bg-pink-100 text-pink-600",
  orange: "bg-orange-100 text-orange-600",
  violet: "bg-violet-100 text-violet-600",
};

export default function BypassLanding() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-white">
          <div className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-[#4c4bcd]/30 blur-3xl" />
          <div className="absolute right-[10%] top-[28%] h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
          <div className="absolute bottom-[5%] left-[42%] h-56 w-56 rounded-full bg-[#4c4bcd]/20 blur-3xl" />
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_center,rgba(76,75,205,0.25)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <BypassLogo size={64} />
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4c4bcd]/20 bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4c4bcd] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4c4bcd]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#4140ae]">
              Unofficial Shortcut client
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Bypass
          </h1>

          <div className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            <span className="block text-lg font-semibold text-slate-900 sm:text-xl">
              An unofficial third-party client for Shortcut — browse &amp; manage your stories.
            </span>
            <span className="mt-4 block">
              Bypass gives your team a fast, focused mobile view into your existing Shortcut
              workspace — built for developers who want to check their work, update stories,
              and stay on top of activity without opening a laptop.
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex cursor-default items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-slate-400">
                App Store — Coming soon
              </span>
              <span className="inline-flex cursor-default items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-slate-400">
                Google Play — Coming soon
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Bypass is not affiliated with, endorsed by, or supported by Shortcut.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              What you can do
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses[feature.color]}`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-slate-950">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              How it works
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#4c4bcd] font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 font-bold text-slate-950">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Built with your data in mind
            </h2>
            <p className="mt-4 text-slate-600">
              Bypass is built and maintained independently by Throughout and is not a Shortcut
              product. See the{" "}
              <Link href="/bypass/privacy" className="font-semibold text-[#4c4bcd] underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {securityPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4c4bcd]/12 text-[#4c4bcd]">
                  <point.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-slate-950">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Simple, per-user pricing
            </h2>
            <p className="mt-4 text-slate-600">
              One plan, every feature included. Try Bypass free for 7 days.
            </p>
          </div>
          <div className="mt-12">
            <BypassPricingCard />
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/bypass/pricing"
              className="text-sm font-semibold text-[#4c4bcd] underline underline-offset-2"
            >
              See full pricing details &amp; FAQ →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Get Bypass
          </h2>
          <p className="mt-4 text-slate-600">
            Bypass is a product of Throughout ·{" "}
            <a
              href="https://throughout.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4c4bcd] underline underline-offset-2"
            >
              throughout.io
            </a>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex cursor-default items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-slate-400">
              App Store — Coming soon
            </span>
            <span className="inline-flex cursor-default items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-slate-400">
              Google Play — Coming soon
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
