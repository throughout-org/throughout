import type { Metadata } from "next";
import Script from "next/script";
import InnerBanner from "@/components/ui/InnerBanner";
import HeroCTA from "@/components/ui/HeroCTA";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import TypewriterText from "@/components/ui/TypewriterText";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import LatestBlogsSection from "@/components/home/LatestBlogsSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Digital Marketing, Engineering & Design Agency | Throughout (PVT) LTD",
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

const homepageFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Throughout (PVT) LTD offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Throughout offers three core services: Digital Marketing (SEO, paid ads, social media, content strategy), Engineering (web and mobile app development, cloud infrastructure, AI automation), and Design (brand identity, UI/UX design, web design, and creative visuals).",
      },
    },
    {
      "@type": "Question",
      name: "Is Throughout a digital marketing agency or a software company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Throughout is a full-stack digital growth studio — we combine Digital Marketing, Engineering, and Design under one team. This means we can handle everything from building your website to running your marketing campaigns and designing your brand identity.",
      },
    },
    {
      "@type": "Question",
      name: "Does Throughout work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Throughout specializes in working with startups, e-commerce businesses, and agencies. We offer lean, founder-friendly engagement models that deliver results without enterprise-scale costs.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Throughout located and do you work internationally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Throughout (PVT) LTD is based in Colombo, Sri Lanka, and works with clients worldwide. We serve clients across Sri Lanka, the UK, Australia, the UAE, and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Throughout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a free strategy call via our Calendly link, fill out our contact form at throughout.io/contact, or email us at info@throughout.io. We'll get back to you within 24 hours.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }}
      />

      {/* Hero Section with Background Animation */}
      <div className="relative flex min-h-screen items-stretch isolate">
        <div className="absolute inset-0 w-full h-full">
          <ParticlesClient />
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="Digital Growth Studio"
            title={
              <TypewriterText
                lines={[
                  { text: "Design. Engineer. Market.", breakAfter: true },
                  { text: "Grow With One Team." },
                ]}
                typingSpeed={80}
                delayBetweenLines={300}
                startDelay={400}
              />
            }
            description="Throughout combines creative design, modern engineering, and data-driven marketing into a single coordinated growth engine for your business."
            cta={<HeroCTA />}
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
      {/* Latest Blogs */}
      <LatestBlogsSection />

      {/* Footer */}
      <ServicesCTASection
        headline={"Ready to Grow Your Digital Business?"}
        subtext={
          "Design. Engineering. Marketing. One team, one goal — building and growing your digital presence with momentum."
        }
        buttonText={"Get a Free Strategy Call"}
      />
      {/* <TrendyTuringLabel /> */}
    </div>
  );
}
