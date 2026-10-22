import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowUpRight, FiCheckCircle, FiEdit3, FiFileText, FiSearch } from "react-icons/fi";
import MakeoverForm from "@/components/website-makeover/MakeoverForm";

export const metadata: Metadata = {
  title: "Website Makeover for Growing Businesses | Throughout",
  description: "Apply for a free homepage redesign concept. Website packages for Sri Lankan businesses start at Rs. 25,000.",
  alternates: { canonical: "https://www.throughout.io/website-makeover" },
};

const packages = [
  { name: "Landing Page", pages: "1", price: "Rs. 25,000", delivery: "3–4 days" },
  { name: "Starter Website", pages: "3", price: "Rs. 40,000", delivery: "4–6 days" },
  { name: "Business Website", pages: "5", price: "Rs. 65,000", delivery: "5–7 days" },
  { name: "Professional Website", pages: "7", price: "Rs. 85,000", delivery: "7–10 days" },
  { name: "Premium Corporate", pages: "10", price: "Rs. 120,000", delivery: "10–14 days" },
  { name: "Product Catalogue", pages: "5–8 + products", price: "Rs. 95,000–145,000", delivery: "10–14 days" },
  { name: "E-commerce Website", pages: "5–8 + shop", price: "From Rs. 160,000", delivery: "2–4 weeks" },
];
const services = [
  { name: "Basic Website Maintenance", price: "Rs. 25,000" },
  { name: "Starter SEO", price: "Rs. 25,000" },
  { name: "Growth SEO", price: "Rs. 35,000" },
  { name: "Starter SEO + Maintenance Bundle", price: "From Rs. 45,000" },
];
const steps = [
  { title: "Apply", description: "Tell us about your business.", icon: FiFileText },
  { title: "We review", description: "We select five businesses.", icon: FiSearch },
  { title: "See your concept", description: "Selected businesses receive a free desktop homepage concept.", icon: FiEdit3 },
  { title: "Choose what’s next", description: "Build with us if you like. No obligation.", icon: FiCheckCircle },
];
const questions = [
  ["Is the homepage concept really free?", "Yes. Selected businesses receive one desktop homepage design concept at no cost. Applying does not guarantee selection."],
  ["Do I have to purchase a website?", "No. The concept comes with no obligation to proceed. If you want us to build your website, we will agree on the scope and price first."],
  ["How long will development take?", "Estimated delivery times are listed for each package. The final schedule depends on the scope, content and features, and will be agreed before the project begins."],
  ["Can I apply if I don't have a website yet?", "Absolutely. Tell us about your business and what you need in the application."],
];

export default function WebsiteMakeoverPage() {
  return (
    <main className="bg-canvas text-ink">
      <section className="overflow-hidden bg-sapphire text-on-sapphire">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.18em] text-on-sapphire-muted">Throughout · Website Makeover 2026</p>
            <h1 className="font-display mt-8 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-[750]">A better website starts here.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-on-sapphire-muted">Apply for a free homepage concept for your business. We&apos;ll select five businesses, with no obligation to purchase.</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"><a href="#apply" className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-white py-1 pl-5 pr-1 text-sm font-semibold text-sapphire transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">Apply for your free concept <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal text-sapphire transition-transform duration-300 group-hover:rotate-45"><FiArrowUpRight aria-hidden="true" /></span></a><a href="#pricing" className="link-draw inline-flex min-h-11 items-center gap-2 text-sm font-semibold">See pricing <FiArrowRight aria-hidden="true" /></a></div>
            <p className="mt-5 text-sm text-on-sapphire-muted">Website packages from Rs. 25,000</p>
          </div>
          <div className="border-t border-white/30 pt-5">
            <div className="flex items-baseline justify-between gap-4"><p className="font-mono text-xs uppercase tracking-widest text-blue-100/75">A look at our work</p><Link href="/#work" className="text-sm font-semibold text-white underline underline-offset-4">More projects ↗</Link></div>
            <a href="https://tryout.lk/" target="_blank" rel="noopener noreferrer" className="group mt-5 block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"><div className="frame-scroll relative aspect-[3/2] overflow-hidden bg-white/10"><Image src="/images/work/screencapture-tryout-lk-2026-10-22-14_15_02.png" alt="Tryout custom T-shirt website preview" width={2940} height={15178} sizes="(min-width: 1024px) 45vw, 100vw" className="absolute left-0 h-auto w-full" /></div><div className="mt-4 flex justify-between gap-4 border-b border-white/30 pb-4"><span className="text-sm font-semibold">Tryout</span><span className="text-sm text-blue-100/75">Visit website ↗</span></div></a>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-2">01 / Website packages</p><div className="mt-5 flex flex-wrap items-end justify-between gap-5"><h2 className="font-display text-4xl font-[720] sm:text-5xl">Website pricing.</h2><p className="max-w-md leading-7 text-ink-2">Introductory rates for Sri Lankan clients, in LKR. We&apos;ll confirm your quote before work begins.</p></div>
        <div className="mt-10 hidden overflow-x-auto sm:block"><table className="w-full text-left"><caption className="sr-only">Website package prices and estimated delivery times</caption><thead className="border-b border-hairline-strong text-xs uppercase tracking-wider text-ink-2"><tr><th scope="col" className="py-4 pr-4 font-medium">Package</th><th scope="col" className="py-4 pr-4 font-medium">Pages</th><th scope="col" className="py-4 pr-4 font-medium">Price</th><th scope="col" className="py-4 font-medium">Delivery</th></tr></thead><tbody>{packages.map((item) => <tr key={item.name} className="border-b border-hairline"><th scope="row" className="py-5 pr-4 font-semibold">{item.name}</th><td className="py-5 pr-4 text-ink-2">{item.pages}</td><td className="py-5 pr-4 font-semibold">{item.price}</td><td className="py-5 text-ink-2">{item.delivery}</td></tr>)}</tbody></table></div>
        <div className="mt-10 grid gap-0 border-t border-hairline-strong sm:hidden">{packages.map((item) => <div key={item.name} className="border-b border-hairline py-5"><h3 className="font-semibold">{item.name}</h3><p className="mt-2 text-lg font-semibold">{item.price}</p><p className="mt-1 text-sm text-ink-2">Pages: {item.pages} · Delivery: {item.delivery}</p></div>)}</div>
        <p className="mt-5 text-sm leading-6 text-ink-2">Delivery times are estimates. Final quotes and schedules depend on content, features and integrations.</p>
        <div className="mt-16 grid gap-8 border-t border-hairline-strong pt-8 lg:grid-cols-[1fr_2fr]"><div><p className="font-mono text-xs uppercase tracking-widest text-ink-2">Ongoing support</p><h3 className="mt-4 text-2xl font-bold">Monthly services.</h3></div><table className="w-full text-left"><caption className="sr-only">Monthly service prices</caption><thead className="border-b border-hairline text-xs uppercase tracking-wider text-ink-2"><tr><th scope="col" className="pb-4 pr-4 font-medium">Service</th><th scope="col" className="pb-4 font-medium">Monthly price</th></tr></thead><tbody>{services.map((item) => <tr key={item.name} className="border-b border-hairline"><th scope="row" className="py-5 pr-4 font-medium">{item.name}</th><td className="py-5 font-semibold">{item.price}</td></tr>)}</tbody></table></div>
        <a href="#apply" className="link-draw mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-sapphire">Request a website quote <FiArrowRight aria-hidden="true" /></a>
      </section>

      <section className="border-y border-hairline bg-mist"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"><p className="font-mono text-xs uppercase tracking-widest text-ink-2">02 / The process</p><h2 className="font-display mt-5 text-4xl font-[720] sm:text-5xl">How it works.</h2><ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ title, description, icon: Icon }, index) => <li key={title} className="border-t border-hairline-strong pt-5"><div className="flex items-center justify-between text-sapphire"><Icon aria-hidden="true" className="h-6 w-6" /><span className="font-mono text-xs text-ink-2">0{index + 1}</span></div><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-ink-2">{description}</p></li>)}</ol></div></section>

      <section><div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8"><div><p className="font-mono text-xs uppercase tracking-widest text-ink-2">03 / About Throughout</p><h2 className="font-display mt-5 text-4xl font-[720]">Designed and built in Sri Lanka.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-ink-2">We build websites and digital products for growing businesses.</p><Link href="/#work" className="link-draw mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-sapphire">Explore our work <FiArrowRight aria-hidden="true" /></Link></div><div><h3 className="text-2xl font-semibold">Frequently asked questions</h3><div className="mt-5 divide-y divide-hairline">{questions.map(([q,a]) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none pr-5 font-semibold">{q} <span className="float-right text-sapphire group-open:rotate-45">+</span></summary><p className="mt-3 leading-7 text-ink-2">{a}</p></details>)}</div></div></div></section>

      <section id="apply" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 border-t border-hairline px-4 py-20 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-widest text-ink-2">04 / Get started</p><h2 className="font-display mt-5 text-4xl font-[720] sm:text-5xl">Tell us about your website.</h2><p className="mt-6 text-lg leading-8 text-ink-2">Apply for a free concept or request a quote.</p><p className="mt-6 text-sm leading-6 text-ink-2">Free concepts are for selected businesses only. No purchase is required.</p></div><MakeoverForm /></section>
    </main>
  );
}
