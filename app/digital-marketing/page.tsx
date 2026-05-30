import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import DigitalMarketingClient from "./DigitalMarketingClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Throughout (PVT) LTD",
  description:
    "Full-stack digital growth combining Design, Marketing, and Engineering. SEO, social media, paid ads, branding, and technical marketing systems.",
  alternates: { canonical: "/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Services | Throughout (PVT) LTD",
    description:
      "We combine Design, Marketing strategy, and Engineering to build and grow digital products and businesses.",
    url: "https://www.throughout.io/digital-marketing",
    siteName: "Throughout (PVT) LTD",
    type: "website",
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingClient />
      <ServicesCTASection
        headline="Ready to Grow Your Digital Presence?"
        subtext="Let's combine design, strategy, and engineering to build something that actually grows."
        buttonText="Book a Free Strategy Call"
      />
    </>
  );
}
