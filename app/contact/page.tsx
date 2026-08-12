import { FiArrowRight } from "react-icons/fi";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import { CalendlyButton } from "@/components/CalendlyPopup";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Contact</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Let&apos;s talk about what you need next.</h1>
            <div><p className="max-w-xl text-lg leading-8 text-slate-600">A product to build, a team to grow, or a delivery challenge to solve. Start with a focused conversation.</p><div className="mt-6"><CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700">Book a Free Consultation <FiArrowRight aria-hidden="true" /></CalendlyButton></div></div>
          </div>
        </div>
      </section>
      <ContactInfoSection />
    </main>
  );
}
