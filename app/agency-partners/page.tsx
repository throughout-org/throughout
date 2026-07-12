import type { Metadata } from "next";
import Link from "next/link";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import { CalendlyButton } from "@/components/CalendlyPopup";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import AgencyPartnersStats from "@/components/agency-partners/AgencyPartnersStats";
import AgencyPartnersProblem from "@/components/agency-partners/AgencyPartnersProblem";
import AgencyPartnersHowItWorks from "@/components/agency-partners/AgencyPartnersHowItWorks";
import AgencyPartnersFeatures from "@/components/agency-partners/AgencyPartnersFeatures";
import AgencyPartnersTransparency from "@/components/agency-partners/AgencyPartnersTransparency";
import AgencyPartnersForWho from "@/components/agency-partners/AgencyPartnersForWho";
import AgencyPartnersCommercial from "@/components/agency-partners/AgencyPartnersCommercial";
import AgencyPartnersFAQ from "@/components/agency-partners/AgencyPartnersFAQ";

export const metadata: Metadata = {
  title: "Agency Partner Programme | Throughout (PVT) LTD",
  description:
    "Your agency wins the client, we build the product. Join Throughout's Agency Partner Programme for a dedicated, fully transparent development team — no vendors, no freelancers, one long-term partner.",
  keywords: [
    "agency partner programme",
    "white label development agency",
    "dedicated development team",
    "technical delivery partner",
    "agency outsourcing partner",
    "software development for agencies",
    "Throughout (PVT) LTD",
    "Sri Lanka",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Agency Partner Programme | Throughout (PVT) LTD",
    description:
      "A dedicated development team that works exclusively for your agency — fully transparent on costs, timesheets, and delivery.",
    url: "https://www.throughout.io/agency-partners",
    type: "website",
    images: [
      {
        url: "https://www.throughout.io/og-agency-partners.png",
        width: 1200,
        height: 630,
        alt: "Agency Partner Programme — Throughout (PVT) LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Partner Programme | Throughout (PVT) LTD",
    description:
      "A dedicated development team that works exclusively for your agency — fully transparent on costs, timesheets, and delivery.",
    images: ["https://www.throughout.io/og-agency-partners.png"],
  },
  alternates: {
    canonical: "https://www.throughout.io/agency-partners",
  },
};

export default function AgencyPartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative flex min-h-[70vh] flex-col isolate">
        <div className="absolute inset-0 h-full w-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex flex-1 items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="Now accepting partnership applications"
            title={
              <>
                Your agency wins the client. <br className="hidden md:block" />
                <span className="text-sky-600">We build the product.</span>
              </>
            }
            description="A dedicated development team that works exclusively for your agency — fully transparent on costs, timesheets, and delivery. No vendors. No freelancers. One long-term partner."
            cta={
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <CalendlyButton className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white transition hover:bg-sky-700">
                  Apply for a partnership
                  <span aria-hidden="true">→</span>
                </CalendlyButton>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  See how it works ↓
                </Link>
              </div>
            }
            isBackgroundColored={false}
          />
        </div>
        <AgencyPartnersStats />
      </div>

      <AgencyPartnersProblem />
      <AgencyPartnersHowItWorks />
      <AgencyPartnersFeatures />
      <AgencyPartnersTransparency />
      <AgencyPartnersForWho />
      <AgencyPartnersCommercial />
      <AgencyPartnersFAQ />

      <ServicesCTASection
        headline="Ready to Stop Turning Down Projects?"
        subtext="Book a 30-minute discovery call. We'll understand your agency's needs and tell you honestly whether this partnership is the right fit."
        buttonText="Book Your Discovery Call"
      />
    </div>
  );
}
