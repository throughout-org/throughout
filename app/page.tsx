import type { Metadata } from "next";
import Link from "next/link";
import InnerBanner from "@/components/ui/InnerBanner";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import EngagementFrameworkSection from "@/components/home/EngagementFrameworkSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Throoout - Smart Software Solutions | Web & Mobile App Development",
  description:
    "Transform your business with Throoout's expert software development services. We build fast, secure, and scalable web applications, mobile apps, APIs, and automation solutions. Get started with a free consultation today.",
  keywords: [
    "software development",
    "web application development",
    "mobile app development",
    "custom software solutions",
    "API development",
    "automation solutions",
    "React development",
    "Next.js development",
    "Node.js development",
    "cloud solutions",
    "software engineering",
    "digital transformation",
    "enterprise software",
    "startup software development",
    "agile development",
    "full stack development",
  ],
  authors: [{ name: "Bavaram Karunaharan", url: "https://bavaram.info" }],
  creator: "Throoout",
  publisher: "Throoout",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://throoout.com",
    siteName: "Throoout",
    title: "Throoout - Smart Software Solutions | Web & Mobile App Development",
    description:
      "Transform your business with expert software development. Fast, secure, and scalable digital solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Throoout - Smart Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Throoout - Smart Software Solutions",
    description:
      "Expert software development for web, mobile, and cloud solutions.",
    images: ["/images/twitter-image.png"],
    creator: "@throoout",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://throoout.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section */}
      <InnerBanner
        badgeText="Product Engineering Studio"
        title={
          <>
            Launch Your Product Faster
            <br className="hidden md:block" />
            With a Dedicated Engineering Team
          </>
        }
        description="From MVPs to enterprise platforms, we build fast, scalable software using modern technologies."
        cta={
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-linear-to-r from-[#3698fd] via-[#3698fd] to-[#377bff] hover:shadow-xl hover:scale-[1.02]"
            >
              View Our Work
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white border-2 border-gray-200 rounded-full hover:border-gray-900 hover:shadow-lg"
            >
              Book a Free Call
            </Link>
          </div>
        }
      />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Engagement Framework */}
      <EngagementFrameworkSection />

      {/* Trust Section */}
      <TrustSection />
      {/* Technology Stack Showcase */}
      <TechStackSection />
      {/* Footer */}
      <ServicesCTASection
        headline={"Ready to Build Something Amazing?"}
        subtext={
          "Building the future, one line of code at a time. We transform ideas into powerful digital solutions."
        }
        buttonText={"Book Free Strategy Call"}
      />
      {/* <TrendyTuringLabel /> */}
    </div>
  );
}
