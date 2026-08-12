import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCode, FiMessageSquare, FiUsers } from "react-icons/fi";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Throughout | Dedicated Digital Product Teams",
  description:
    "Meet Throughout, a Sri Lanka-based team helping startups, agencies, and product companies build dependable digital products and dedicated offshore teams.",
  alternates: { canonical: "https://www.throughout.io/about" },
  openGraph: {
    type: "website",
    url: "https://www.throughout.io/about",
    title: "About Throughout | Dedicated Digital Product Teams",
    description:
      "A focused engineering, design, data, AI, QA, DevOps, and marketing team for ambitious digital products.",
    images: [{ url: "/about/opengraph-image", width: 1200, height: 630, alt: "About Throughout" }],
  },
};

const principles = [
  {
    icon: FiCode,
    title: "Depth over headcount",
    copy: "We shape teams around the work, with the technical judgement needed to make sound product decisions.",
  },
  {
    icon: FiMessageSquare,
    title: "Work stays visible",
    copy: "Direct communication, clear ownership, and regular reviews keep delivery easy to follow.",
  },
  {
    icon: FiUsers,
    title: "Built to work together",
    copy: "Our specialists integrate with your team, tools, and working rhythm instead of operating at a distance.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">About Throughout</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              A focused team for ambitious digital products.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              We help startups, agencies, and product companies build dependable products and long-term digital teams.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Who we are</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">One team, shaped around the work.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Throughout is a Sri Lanka-based digital delivery company bringing together engineering, product design, data, AI, quality assurance, DevOps, and marketing expertise.
            </p>
            <p>
              Companies work with us for a defined project or to build a dedicated offshore team that becomes part of their day-to-day operation. In both models, the aim is the same: capable people, clear communication, and dependable delivery.
            </p>
            <div className="pt-2">
              <Link href="/#engagement-models" className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900">
                Explore how we work <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="bg-white p-7 sm:p-8">
                <Icon className="text-2xl text-sky-700" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-bold tracking-tight">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TeamSection />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Work with us</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight">Build the product or team you need next.</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-100">
            Book a Free Consultation <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
