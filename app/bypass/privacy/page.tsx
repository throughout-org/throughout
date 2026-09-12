import type { Metadata } from "next";
import BypassLogo from "@/components/bypass/BypassLogo";

export const metadata: Metadata = {
  title: "Bypass Privacy Policy",
  description:
    "What Bypass collects, why, how it's protected, and who it's shared with.",
  alternates: { canonical: "https://www.throughout.io/bypass/privacy" },
};

const dataTable: { data: string; why: React.ReactNode }[] = [
  {
    data: "Name & email address",
    why: "Creates your app account; identifies you to your team's admin",
  },
  {
    data: "Password",
    why: "Stored only as a salted scrypt hash — we never store or can see your plaintext password",
  },
  {
    data: "Your Shortcut API token",
    why: "Lets Bypass act on your behalf against Shortcut's own API, so your actions show up as you in Shortcut",
  },
  {
    data: "Push notification device token",
    why: "Delivers notifications when a story you own changes",
  },
  {
    data: "In-app activity log",
    why: "Security & accountability — records actions like sign-in, linking Shortcut, or an admin disabling an account",
  },
  {
    data: "Subscription status",
    why: "If billing is enabled, tracks your plan/trial state via RevenueCat — we never see your card details",
  },
  {
    data: "Basic request logs (IP, timestamp)",
    why: "Abuse prevention and rate limiting; kept briefly, not used to build a profile of you",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-gray-200 pt-10 first:border-0 first:pt-0"
    >
      <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function BypassPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-4 pb-24 pt-36 text-slate-950 sm:px-6 sm:pt-44 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="pb-10">
          <BypassLogo size={48} className="mb-6" />
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#4c4bcd]">
            Privacy policy
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Bypass
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated 13 September 2026 · Effective for all versions of the Bypass app
          </p>

          <div className="mt-8 rounded-xl border border-[#4c4bcd]/20 bg-[#4c4bcd]/8 p-5 text-sm leading-6 text-slate-700">
            Bypass is an unofficial third-party client for{" "}
            <a
              href="https://www.shortcut.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4c4bcd] underline underline-offset-2"
            >
              Shortcut
            </a>
            . It is not affiliated with, endorsed by, or supported by Shortcut. It is built
            and operated independently by Throughout.
          </div>

          <p className="mt-8 leading-7 text-slate-600">
            This page explains what Bypass collects, why, how it&rsquo;s protected, and who
            it&rsquo;s shared with. If anything here is unclear, contact us at the address at
            the bottom of this page.
          </p>
        </header>

        <div className="space-y-10">
          <Section id="who-operates-bypass" title="Who operates Bypass">
            <p>
              Bypass is developed and operated by{" "}
              <strong className="font-semibold text-slate-950">Throughout</strong> (
              <a
                href="https://throughout.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4c4bcd] underline underline-offset-2"
              >
                throughout.io
              </a>
              ). Throughout is the data controller for the information described below.
            </p>
          </Section>

          <Section id="what-we-collect" title="What we collect">
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      Data
                    </th>
                    <th className="px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      Why we collect it
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((row, index) => (
                    <tr
                      key={row.data}
                      className={index !== dataTable.length - 1 ? "border-b border-gray-200" : ""}
                    >
                      <td className="px-4 py-3 align-top font-semibold text-slate-950">
                        {row.data}
                      </td>
                      <td className="px-4 py-3 align-top text-slate-600">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Bypass also{" "}
              <strong className="font-semibold text-slate-950">temporarily caches</strong>{" "}
              read-only Shortcut workspace data — member names, workflow states, labels,
              teams, epics — for 3&ndash;10 minutes at a time, purely to avoid hammering
              Shortcut&rsquo;s API. Story content, comments, and tasks are always fetched live
              and never cached.
            </p>
          </Section>

          <Section id="token-protection" title="How your Shortcut token is protected">
            <p>
              Your Shortcut API token is encrypted at rest using{" "}
              <strong className="font-semibold text-slate-950">AES-256-GCM</strong> before
              it&rsquo;s stored, and decrypted only in memory, for the moment a request needs
              it. It is never logged, never sent to your device, and never visible to us in
              plaintext. You can remove it at any time from Settings → Disconnect Shortcut,
              which deletes the stored credential immediately.
            </p>
          </Section>

          <Section id="who-we-share-with" title="Who we share data with">
            <ul className="list-disc space-y-2 pl-5 marker:text-slate-300">
              <li>
                <strong className="font-semibold text-slate-950">
                  Shortcut (api.app.shortcut.com)
                </strong>{" "}
                — your own linked token is used to call Shortcut&rsquo;s API on your behalf.
                This is the core function of the app, not optional data sharing.
              </li>
              <li>
                <strong className="font-semibold text-slate-950">Expo (exp.host)</strong> — relays
                push notification content to Apple (APNs) and Google (FCM) so notifications
                reach your device.
              </li>
              <li>
                <strong className="font-semibold text-slate-950">RevenueCat</strong> — manages
                subscription state if billing is enabled. Payment details are handled entirely
                by Apple/Google, never by us.
              </li>
            </ul>
            <p>
              We do <strong className="font-semibold text-slate-950">not</strong> sell your data,
              and we do not share it with advertisers or data brokers.
            </p>
          </Section>

          <Section id="retention" title="How long we keep it">
            <ul className="list-disc space-y-2 pl-5 marker:text-slate-300">
              <li>Cached Shortcut reference data expires automatically within minutes.</li>
              <li>Account data is kept while your account is active.</li>
              <li>
                Disabling your account revokes access immediately; data can be fully deleted
                on request (see Contact below).
              </li>
            </ul>
          </Section>

          <Section id="your-choices" title="Your choices">
            <ul className="list-disc space-y-2 pl-5 marker:text-slate-300">
              <li>
                Unlink your Shortcut token anytime from Settings — this deletes the stored
                credential immediately.
              </li>
              <li>
                Ask your workspace admin to disable your account, which revokes access on your
                very next request.
              </li>
              <li>Contact us to request a copy of your data or full deletion.</li>
            </ul>
          </Section>

          <Section id="childrens-privacy" title="Children's privacy">
            <p>
              Bypass is a workplace tool distributed by a company to its own team members via
              an admin-issued account. It is not directed at children, and we do not knowingly
              collect data from anyone under 16.
            </p>
          </Section>

          <Section id="changes" title="Changes to this policy">
            <p>
              If this policy changes materially, we&rsquo;ll note the new date at the top of
              this page and, where appropriate, notify admins in-app.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <p>
              Questions, data requests, or deletion requests:{" "}
              <a
                href="mailto:info@throughout.io"
                className="font-semibold text-[#4c4bcd] underline underline-offset-2"
              >
                info@throughout.io
              </a>
            </p>
          </Section>
        </div>

        <footer className="mt-16 border-t border-gray-200 pt-6 text-xs text-slate-400">
          Bypass is a product of Throughout ·{" "}
          <a
            href="https://throughout.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 underline underline-offset-2 hover:text-slate-600"
          >
            throughout.io
          </a>
        </footer>
      </div>
    </main>
  );
}
