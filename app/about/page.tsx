import type { Metadata } from "next";
import Link from "next/link";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CoreStrengthsSection from "@/components/whyus/CoreStrengthsSection";
import OurApproachSection from "@/components/whyus/OurApproachSection";

export const metsssadata: Metadata = {
  title:
    "About Throughout (PVT) LTD - Your Trusted Software Development Partner",
  description:
    "Learn about Throughout (PVT) LTD's mission to deliver innovative software solutions. We specialize in web development, mobile apps, cloud solutions, and AI/ML. Discover our core values, vision, and commitment to excellence in software engineering.",
  keywords: [
    "about Throughout (PVT) LTD",
    "software development company",
    "our mission",
    "our vision",
    "company values",
    "innovation",
    "excellence",
    "integrity",
    "software engineering team",
    "agile methodology",
    "quality assurance",
    "client success",
    "digital transformation experts",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.throughout.io/about",
    siteName: "Throughout (PVT) LTD",
    title:
      "About Throughout (PVT) LTD - Your Trusted Software Development Partner",
    description:
      "Discover Throughout (PVT) LTD's mission, vision, and values. Expert software development with innovation and excellence.",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Throughout (PVT) LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Throughout (PVT) LTD - Software Development Experts",
    description:
      "Our mission, vision, and commitment to delivering exceptional software solutions.",
    images: ["/images/twitter-about.png"],
  },
  alternates: {
    canonical: "https://www.throughout.io/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative flex min-h-[78vh] items-stretch isolate">
        <div className="absolute inset-0 h-full w-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="About Throughout"
            title={
              <>
                Engineering Digital Products <br className="hidden md:block" />
                With Practical Momentum
              </>
            }
            description="A dedicated product engineering team combining strategy, clean architecture, and transparent delivery to turn ideas into dependable software."
            cta={
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                >
                  View Our Work
                  <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg"
                >
                  Book a Free Call
                </Link>
              </div>
            }
            isBackgroundColored={false}
          />
        </div>
      </div>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MissionVisionSection />
          <CoreValuesSection />
          <TeamSection />
          <CoreStrengthsSection />
          <OurApproachSection />
        </div>
      </section>

      <ServicesCTASection
        headline="Ready to Accelerate Your Digital Growth?"
        subtext="Let's build innovative software solutions that transform your business operations and delight your customers."
        buttonText="Get in Touch Today"
      />
      {/* <TrendyTuringLabel /> */}
    </div>
  );
}
