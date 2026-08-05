import Link from "next/link";
import type { IconType } from "react-icons";
import { FiArrowRight } from "react-icons/fi";
import { CalendlyButton } from "@/components/CalendlyPopup";
import ServiceFAQ, { type ServiceFAQItem } from "@/components/service/ServiceFAQ";

type Item = { title: string; copy: string; icon: IconType };

interface UnifiedServicePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCTA: string;
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: Item[];
  outcomes: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  faqs: ServiceFAQItem[];
  faqTitle: string;
  finalTitle: string;
  finalCopy: string;
}

export default function UnifiedServicePage({
  eyebrow,
  title,
  intro,
  primaryCTA,
  capabilitiesTitle,
  capabilitiesIntro,
  capabilities,
  outcomes,
  process,
  faqs,
  faqTitle,
  finalTitle,
  finalCopy,
}: UnifiedServicePageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate overflow-hidden border-b border-slate-200 px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[70rem] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="mx-auto max-w-7xl text-center">
          <p className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-800">{eyebrow}</p>
          <h1 className="mx-auto mt-7 max-w-5xl text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-sky-700">{primaryCTA} <FiArrowRight aria-hidden="true" /></CalendlyButton>
            <Link href="#capabilities" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold transition hover:bg-slate-50">Explore capabilities</Link>
          </div>
        </div>
      </section>

      <section aria-label={`${eyebrow} advantages`} className="border-b border-slate-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
          {outcomes.map((item) => <article key={item.title} className="bg-white p-6"><h2 className="font-bold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p></article>)}
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Capabilities</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">{capabilitiesTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{capabilitiesIntro}</p></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title: itemTitle, copy, icon: Icon }) => <article key={itemTitle} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white"><Icon aria-hidden="true" /></span><h3 className="mt-6 text-xl font-bold">{itemTitle}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">How we work</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">A clear path from brief to delivery.</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">{process.map((item, index) => <li key={item.title} className="border-t border-white/20 pt-6"><span className="font-mono text-sm text-sky-300">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-sky-50 p-7 sm:p-10 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">Need ongoing capacity?</p><h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Add this capability to a dedicated team.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Build a long-term team that works inside your tools, roadmap, and delivery rhythm.</p></div><Link href="/dedicated-teams" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-800">Explore Dedicated Teams <FiArrowRight aria-hidden="true" /></Link></div>
      </section>

      <ServiceFAQ id="faq" badgeText="Common questions" headline={faqTitle} intro={`What clients usually ask before starting a ${eyebrow.toLowerCase()} engagement.`} faqs={faqs} />

      <section className="px-4 pb-20 pt-16 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-6 py-14 text-center text-white sm:px-10 sm:py-20"><h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl">{finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">{finalCopy}</p><div className="mt-8"><CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-100">Book a Free Consultation <FiArrowRight aria-hidden="true" /></CalendlyButton></div></div>
      </section>
    </main>
  );
}
