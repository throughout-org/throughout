import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import WhatWeDoSection from "@/components/about/WhatWeDoSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import TrendyTuringLabel from "@/components/TrendyTuringLabel";
import CoreStrengthsSection from "@/components/whyus/CoreStrengthsSection";
import OurApproachSection from "@/components/whyus/OurApproachSection";

export const metadata: Metadata = {
  title: "About Throughout (PVT) LTD - Your Trusted Software Development Partner",
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
    title: "About Throughout (PVT) LTD - Your Trusted Software Development Partner",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Main Content Section */}
      <section className="relative px-4 py-16 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background Decorative Elements */}
        <div className="absolute bg-blue-100 rounded-full top-20 left-10 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-100 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Intro Section */}
          {/* <AboutIntroSection /> */}

          {/* Mission & Vision */}
          <MissionVisionSection />

          {/* Core Values */}
          <CoreValuesSection />

          {/* Core Strengths */}
          <CoreStrengthsSection />

           {/* Our Approach */}
          <OurApproachSection />

          {/* What We Do */}
          {/* <WhatWeDoSection /> */}

          {/* Why Choose Us */}
          {/* <WhyChooseUsSection /> */}
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
