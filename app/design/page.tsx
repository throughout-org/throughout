import type { Metadata } from "next";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import DesignPageClient from "./DesignPageClient";

export const metadata: Metadata = {
  title: "Design Services | Throughout (PVT) LTD",
  description:
    "Brand identity, UI/UX design, web design, motion graphics, and creative direction — design that builds trust and drives conversions.",
  alternates: { canonical: "https://www.throughout.io/design" },
  openGraph: {
    title: "Design Services | Throughout (PVT) LTD",
    description:
      "Creative design services covering brand identity, UI/UX, web design, and visual communication.",
    url: "https://www.throughout.io/design",
    siteName: "Throughout (PVT) LTD",
    type: "website",
  },
};

export default function DesignPage() {
  return (
    <>
      <DesignPageClient />
      <ServicesCTASection
        headline="Ready to Build a Brand That Stands Out?"
        subtext="Let's create designs that communicate clearly, convert consistently, and make your business look like the best option in the room."
        buttonText="Book a Free Design Call"
      />
    </>
  );
}
