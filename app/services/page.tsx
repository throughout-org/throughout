import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import InnerBanner from "@/components/ui/InnerBanner";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import EngineeringPageClient from "./EngineeringPageClient";

export const metadata: Metadata = {
  title: "Engineering Services | Throughout (PVT) LTD",
  description:
    "Full-stack engineering services: Software Development, UI/UX, Shopify, CMS, Cloud Infrastructure, and Workflow Automation — all under one roof.",
  alternates: { canonical: "https://www.throughout.io/services" },
  openGraph: {
    title: "Engineering Services | Throughout (PVT) LTD",
    description:
      "One engineering team covering every layer — web, mobile, cloud, automation, and design.",
    url: "https://www.throughout.io/services",
    siteName: "Throughout (PVT) LTD",
    type: "website",
  },
};

const visibleServices = services.filter((s) => s.slug !== "ai-driven-seo");

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <InnerBanner
        fullScreen
        badgeText="Engineering"
        title="One Team. Every Layer."
        description="From product interfaces to cloud infrastructure, we handle the full engineering stack — so you don't have to stitch together multiple vendors."
        cta={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-sky-700 hover:shadow-xl transition"
            >
              Start a Project →
            </Link>
            <Link
              href="#software-development"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg transition"
            >
              Explore Services
            </Link>
          </div>
        }
      />

      {/* Quick-jump pill nav */}
      <div className="sticky top-14 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {visibleServices.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950 transition whitespace-nowrap"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service sections */}
      <EngineeringPageClient services={visibleServices} />

      <ServicesCTASection
        headline="Ready to Build?"
        subtext="Tell us what you need. One team, every layer, no hand-offs."
        buttonText="Book a Free Call"
      />
    </div>
  );
}
