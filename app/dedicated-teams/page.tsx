import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiPenTool,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import { CalendlyButton } from "@/components/CalendlyPopup";

export const metadata: Metadata = {
  title: "Dedicated Offshore Development Teams",
  description:
    "Build a dedicated offshore engineering, design, data, QA, DevOps, AI, or marketing team with Throughout. A long-term team shaped around your roadmap.",
  alternates: { canonical: "https://www.throughout.io/dedicated-teams" },
  openGraph: {
    type: "website",
    url: "https://www.throughout.io/dedicated-teams",
    title: "Dedicated Offshore Development Teams | Throughout",
    description:
      "Build a long-term digital team shaped around your product, tools, and ways of working.",
  },
};

const capabilities = [
  { icon: FiCode, label: "Engineering" },
  { icon: FiPenTool, label: "Product design" },
  { icon: FiServer, label: "Data & DevOps" },
  { icon: FiUsers, label: "QA, AI & marketing" },
];

export default function DedicatedTeamsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="px-4 pt-32 pb-20 border-b border-slate-200 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-800">
            Dedicated offshore teams
          </p>
          <h1 className="mx-auto mt-7 max-w-5xl text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Build a team that works like part of yours.
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-8 mt-7 text-slate-600">
            Throughout assembles long-term engineering, design, data, QA,
            DevOps, AI, and marketing teams around your roadmap, technical
            environment, and working rhythm.
          </p>
          <div className="flex flex-col justify-center gap-3 mt-9 sm:flex-row">
            <CalendlyButton className="inline-flex items-center justify-center gap-2 py-3 text-sm font-bold text-white transition rounded-full min-h-12 bg-sky-600 px-7 hover:bg-sky-700">
              Build Your Team <FiArrowRight aria-hidden="true" />
            </CalendlyButton>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center py-3 text-sm font-bold transition border rounded-full min-h-12 border-slate-300 px-7 hover:bg-slate-50"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="supported-teams-heading"
        className="px-4 border-b border-slate-200 py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                Teams we support
              </p>
              <h2
                id="supported-teams-heading"
                className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl"
              >
                Dedicated technical capability in action.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Long-term product and delivery support shaped around each
              company&apos;s work.
            </p>
          </div>

          <div className="grid gap-4 mt-8 md:grid-cols-2">
            <a
              href="https://codemorphs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid min-h-40 grid-cols-[0.8fr_1.2fr] items-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="flex items-center justify-center h-full bg-white min-h-40 p-7">
                <Image
                  src="/images/logos/codemorphs-logo.png"
                  alt="CodeMorphs"
                  width={730}
                  height={362}
                  className="object-contain w-full h-auto max-w-44"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  Creative + tech studio
                </p>
                <h3 className="mt-2 text-xl font-bold">CodeMorphs</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dedicated technical delivery support.
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-slate-950">
                  Visit website{" "}
                  <FiArrowRight
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>

            <a
              href="https://comflo.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid min-h-40 grid-cols-[0.8fr_1.2fr] items-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="relative h-full min-h-40 overflow-hidden bg-[#0b4f45]">
                <Image
                  src="/images/logos/comflo-logo.png"
                  alt="Comflo"
                  fill
                  sizes="(max-width: 767px) 40vw, 250px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                  Commerce operations product
                </p>
                <h3 className="mt-2 text-xl font-bold">Comflo</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dedicated product engineering support.
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-slate-950">
                  Visit website{" "}
                  <FiArrowRight
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                Built around the need
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
                The capability you need, without building the hiring operation
                alone.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-5 border rounded-2xl border-slate-200"
                >
                  <span className="flex items-center justify-center text-white h-11 w-11 rounded-xl bg-slate-950">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="px-4 py-20 text-white scroll-mt-24 bg-slate-950 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            How it works
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
            From an open role to an integrated team.
          </h2>
          <ol className="grid gap-8 mt-12 md:grid-cols-3">
            {[
              [
                "01",
                "Define",
                "We clarify the roadmap, roles, skills, seniority, and collaboration needs.",
              ],
              [
                "02",
                "Assemble",
                "We shape the team and align responsibilities, tools, and delivery expectations.",
              ],
              [
                "03",
                "Integrate",
                "Your team joins the working rhythm with clear ownership, reviews, and ongoing support.",
              ],
            ].map(([number, title, copy]) => (
              <li key={number} className="pt-6 border-t border-white/20">
                <span className="font-mono text-sm text-sky-300">{number}</span>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-10 mx-auto max-w-7xl lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Designed for continuity
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
              More than additional capacity.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              A dedicated team builds context, retains knowledge, and grows with
              your product. Throughout supports team formation and delivery
              while your people stay connected to priorities and decisions.
            </p>
          </div>
          <ul className="space-y-4 rounded-3xl bg-slate-50 p-7 sm:p-9">
            {[
              "Roles matched to your roadmap and technical environment",
              "Direct collaboration with the people doing the work",
              "A stable team designed for long-term product knowledge",
              "Clear ownership and a visible delivery rhythm",
            ].map((item) => (
              <li key={item} className="flex gap-3 font-semibold">
                <FiCheck
                  className="mt-1 shrink-0 text-sky-700"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="px-6 mx-auto text-center max-w-7xl rounded-3xl bg-sky-50 py-14 sm:px-10 sm:py-18">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready to build your dedicated team?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 leading-7 text-slate-600">
            Tell us where your team needs more capability. We will help define
            the roles and a practical next step.
          </p>
          <div className="mt-8">
            <CalendlyButton className="inline-flex items-center justify-center gap-2 py-3 text-sm font-bold text-white transition rounded-full min-h-12 bg-sky-600 px-7 hover:bg-sky-700">
              Book a Free Consultation <FiArrowRight aria-hidden="true" />
            </CalendlyButton>
          </div>
        </div>
      </section>
    </main>
  );
}
