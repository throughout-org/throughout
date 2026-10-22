import type { Metadata } from "next";
import Link from "next/link";
import MakeoverForm from "@/components/website-makeover/MakeoverForm";

export const metadata: Metadata = {
  title: "Website Makeover for Growing Businesses | Throughout",
  description: "Apply for a free homepage redesign concept. Website development packages for growing businesses start at Rs. 40,000.",
  alternates: { canonical: "https://www.throughout.io/website-makeover" },
};

const packages = [
  { name: "Starter", price: "40,000", pages: "Up to 3 pages" },
  { name: "Business", price: "65,000", pages: "Up to 5 pages" },
  { name: "Professional", price: "85,000", pages: "Up to 7 pages" },
];
const steps = [
  ["01", "Tell us about your business", "Share your goals, budget and timing in the short application."],
  ["02", "We review applications", "We select a small number of businesses for the campaign."],
  ["03", "See a fresh direction", "Selected businesses receive one desktop homepage concept, free of charge."],
  ["04", "Decide what comes next", "If you like the direction, we can discuss a paid website build. There is no obligation."],
];
const questions = [
  ["Is the homepage concept really free?", "Yes. Selected businesses receive one desktop homepage design concept at no cost. Applying does not guarantee selection."],
  ["Do I have to purchase a website?", "No. The concept comes with no obligation to proceed. If you want us to build your website, we will agree on the scope and price first."],
  ["How long will development take?", "That depends on the scope, content and features. We will discuss a realistic timeline with you before any project begins."],
  ["Can I apply if I don't have a website yet?", "Absolutely. Tell us about your business and what you need in the application."],
];

export default function WebsiteMakeoverPage() {
  return (
    <main className="bg-[#f8f7f3] text-[#10233a]">
      <section className="overflow-hidden bg-[#062e60] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.18em] text-[#9cc9f5]">Throughout · Website Makeover 2026</p>
            <p className="mt-9 inline-flex rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#c7e1fc]">A limited offer for growing businesses</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[1.04] tracking-[-.04em]">Your website should make customers want to contact you.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100/85">See what your business website could become before you commit. Selected businesses receive a free homepage redesign concept, with no obligation to proceed.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#apply" className="rounded-md bg-white px-6 py-4 text-sm font-bold text-[#062e60] transition hover:bg-blue-100">Apply for your free concept <span aria-hidden="true">↗</span></a><a href="#pricing" className="rounded-md border border-white/35 px-6 py-4 text-sm font-semibold hover:bg-white/10">See website pricing</a></div>
            <p className="mt-5 text-sm text-blue-100/75">No obligation to purchase · Five businesses selected</p>
          </div>
          <div aria-hidden="true" className="relative rounded-xl border border-white/20 bg-white/10 p-4 shadow-2xl sm:p-6">
            <div className="rounded-lg bg-[#faf9f5] p-5 text-[#062e60] sm:p-8"><div className="flex items-center justify-between border-b border-slate-200 pb-5"><span className="text-sm font-bold">YOUR BUSINESS</span><span className="rounded-full bg-[#dcebf9] px-4 py-2 text-[10px] font-semibold">GET IN TOUCH</span></div><div className="grid gap-8 py-10 sm:grid-cols-2"><div><span className="text-[10px] font-bold uppercase tracking-widest text-[#6280a1]">A better first impression</span><div className="mt-4 text-3xl font-bold leading-tight">Made for the people you want to reach.</div><div className="mt-4 h-2 w-full rounded bg-slate-200"/><div className="mt-2 h-2 w-4/5 rounded bg-slate-200"/><div className="mt-6 inline-block rounded bg-[#062e60] px-4 py-3 text-[10px] font-semibold text-white">LET&apos;S TALK →</div></div><div className="flex min-h-40 items-center justify-center rounded bg-[#d6e5f1]"><div className="h-24 w-24 rounded-full border-[18px] border-[#8ab7dc]"/></div></div><div className="border-t border-slate-200 pt-4 text-xs text-[#6a8094]">A concept tailored to your business, not a template.</div></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-[#56718c]">01 / Website packages</p><div className="mt-5 flex flex-wrap items-end justify-between gap-5"><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple pricing.<br />No surprises.</h2><p className="max-w-md leading-7 text-slate-600">Start with the right size for your business. We&apos;ll confirm the scope and quote before work begins.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{packages.map((item) => <div key={item.name} className="flex min-h-64 flex-col rounded-xl border border-[#d9e0e5] bg-white p-6"><p className="font-semibold text-[#466581]">{item.name}</p><p className="mt-8 text-sm text-slate-500">From</p><p className="mt-1 text-3xl font-bold tracking-tight">Rs. {item.price}</p><p className="mt-4 text-sm text-slate-600">{item.pages}</p><a href="#apply" className="mt-auto pt-8 text-sm font-bold text-[#07529b]">Get a website quote ↗</a></div>)}<div className="flex min-h-64 flex-col rounded-xl bg-[#e5edf4] p-6"><p className="font-semibold text-[#466581]">Custom</p><p className="mt-12 text-3xl font-bold tracking-tight">Get a quote</p><p className="mt-4 text-sm text-slate-600">Advanced features and integrations</p><a href="#apply" className="mt-auto pt-8 text-sm font-bold text-[#07529b]">Tell us what you need ↗</a></div></div>
        <p className="mt-5 text-sm leading-6 text-slate-500">Indicative starting prices for standard business websites. Final quotes depend on content, features and integrations.</p>
      </section>

      <section className="border-y border-[#d9e0e5] bg-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"><p className="font-mono text-xs uppercase tracking-widest text-[#56718c]">02 / The process</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">A clear path from idea to launch.</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, body]) => <div key={number} className="border-t border-[#a4b9ca] pt-5"><p className="font-mono text-sm text-[#4774a0]">{number}</p><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></div>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-widest text-[#56718c]">03 / Built with purpose</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">More than a good-looking homepage.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">Your concept is a starting point. A paid website project turns that direction into a useful, responsive experience for your customers.</p></div><div className="grid gap-5 sm:grid-cols-2">{["Responsive design", "Basic on-page SEO", "Contact integration", "Launch support"].map((item) => <div key={item} className="rounded-xl border border-[#d9e0e5] bg-white p-6"><span className="text-xl text-[#377ebd]">↗</span><h3 className="mt-7 font-bold">{item}</h3></div>)}<p className="text-sm leading-6 text-slate-500 sm:col-span-2">The agreed proposal will set out exactly what your paid package includes.</p></div></section>

      <section className="bg-[#e9eff3]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-24"><div><p className="font-mono text-xs uppercase tracking-widest text-[#56718c]">04 / About Throughout</p><h2 className="mt-5 text-4xl font-bold tracking-tight">A team that builds for real businesses.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">We&apos;re a software and design studio based in Sri Lanka. We help businesses build websites, apps and digital products with practical, thoughtful design.</p><Link href="/#work" className="mt-6 inline-block font-bold text-[#07529b] underline underline-offset-4">Explore our work ↗</Link></div><div><h3 className="text-2xl font-bold">A few things worth knowing</h3><div className="mt-5 divide-y divide-slate-300">{questions.map(([q,a]) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none pr-5 font-semibold">{q} <span className="float-right text-[#4774a0] group-open:rotate-45">+</span></summary><p className="mt-3 leading-7 text-slate-600">{a}</p></details>)}</div></div></div></section>

      <section id="apply" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-widest text-[#56718c]">05 / Let&apos;s get started</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s see what your website could become.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Apply for a free concept or request a website quote. Tell us a little about your business and we&apos;ll review your application.</p><p className="mt-6 text-sm leading-6 text-slate-500">Free concepts are for selected businesses only. No purchase is required.</p></div><MakeoverForm /></section>
    </main>
  );
}
