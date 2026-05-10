import type { Metadata } from "next";
import Link from "next/link";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import TypewriterText from "@/components/ui/TypewriterText";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Throughout (PVT) LTD - Smart Software Solutions | Web & Mobile App Development",
  description:
    "Transform your business with Throughout (PVT) LTD's expert software development services. We build fast, secure, and scalable web applications, mobile apps, APIs, and automation solutions. Get started with a free consultation today.",
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
  creator: "Throughout (PVT) LTD",
  publisher: "Throughout (PVT) LTD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.throughout.io",
    siteName: "Throughout (PVT) LTD",
    title: "Throughout (PVT) LTD - Smart Software Solutions | Web & Mobile App Development",
    description:
      "Transform your business with expert software development. Fast, secure, and scalable digital solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Throughout (PVT) LTD - Smart Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Throughout (PVT) LTD - Smart Software Solutions",
    description:
      "Expert software development for web, mobile, and cloud solutions.",
    images: ["/images/twitter-image.png"],
    creator: "@throughout",
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
    canonical: "https://www.throughout.io",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section with Background Animation */}
      <div className="relative flex min-h-screen items-stretch isolate">
        <div className="absolute inset-0 w-full h-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="Product Engineering Studio"
            title={
              <TypewriterText
                lines={[
                  { text: "Launch Your Product Faster", breakAfter: true },
                  { text: "With a Dedicated Engineering Team" },
                ]}
                typingSpeed={105}
                delayBetweenLines={300}
                startDelay={500}
              />
            }
            description="From MVPs to enterprise platforms, we build fast, scalable software using modern technologies."
            cta={
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                >
                  View Our Work
                  <span aria-hidden="true">→</span>
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

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Engagement Framework */}
      {/* <EngagementFrameworkSection /> */}

      {/* Trust Section */}
      {/* <TrustSection /> */}
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
