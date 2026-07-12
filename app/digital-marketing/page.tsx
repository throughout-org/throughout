import type { Metadata } from "next";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import DigitalMarketingClient from "./DigitalMarketingClient";

const digitalMarketingFaqs = [
  {
    question: "What digital marketing services does Throughout offer?",
    answer:
      "SEO and content strategy, Google and Meta ads, social media management, email marketing, analytics and reporting, and influencer/PR strategy — run by a team that also builds the websites and tracking infrastructure behind the campaigns.",
  },
  {
    question: "Why combine marketing with engineering and design?",
    answer:
      "Marketing campaigns fail without a fast, well-tracked website and clear creative behind them. Because Throughout owns design and engineering too, landing pages, tracking, and creative ship in sync with the campaign instead of waiting on a separate vendor.",
  },
  {
    question: "Do you run paid ads or only organic SEO?",
    answer:
      "Both. We run Google and Meta ad campaigns alongside SEO and content strategy, and report on both under one analytics setup so you can see what's actually driving results.",
  },
  {
    question: "How do you measure marketing performance?",
    answer:
      "Through analytics and reporting tied to real business outcomes — leads, conversions, and revenue — not just vanity metrics like impressions or followers.",
  },
  {
    question: "Do you build the landing pages for campaigns too?",
    answer:
      "Yes. Our engineering team builds high-converting landing pages and tracking setup as part of the same engagement, so campaigns launch with a page built to convert, not a generic template.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free strategy call. We'll review your current marketing, identify the highest-leverage opportunities, and propose a plan before any commitment.",
  },
];

export const metadata: Metadata = {
  title: "Digital Marketing Services | Throughout (PVT) LTD",
  description:
    "Full-stack digital growth combining Design, Marketing, and Engineering. SEO, social media, paid ads, branding, and technical marketing systems.",
  keywords: [
    "digital marketing agency",
    "SEO agency Sri Lanka",
    "Google Ads agency",
    "Meta ads agency",
    "social media management agency",
    "content marketing agency",
    "email marketing agency",
    "growth marketing agency",
    "Throughout (PVT) LTD",
    "Throughout digital marketing",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.throughout.io/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Services | Throughout (PVT) LTD",
    description:
      "We combine Design, Marketing strategy, and Engineering to build and grow digital products and businesses.",
    url: "https://www.throughout.io/digital-marketing",
    siteName: "Throughout (PVT) LTD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Throughout (PVT) LTD",
    description:
      "We combine Design, Marketing strategy, and Engineering to build and grow digital products and businesses.",
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingClient />
      <ServiceFAQ
        id="faq"
        badgeText="Common questions"
        headline="Digital Marketing, Answered."
        intro="What clients usually ask before starting a marketing engagement with us."
        faqs={digitalMarketingFaqs}
      />
      <ServicesCTASection
        headline="Ready to Grow Your Digital Presence?"
        subtext="Let's combine design, strategy, and engineering to build something that actually grows."
        buttonText="Book a Free Strategy Call"
      />
    </>
  );
}
