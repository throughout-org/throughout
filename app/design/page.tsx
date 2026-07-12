import type { Metadata } from "next";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import DesignPageClient from "./DesignPageClient";

const designFaqs = [
  {
    question: "What design services does Throughout offer?",
    answer:
      "Brand identity and logo design, UI/UX design, web design, motion and video graphics, and social media creatives — covering everything from first brand concept to a finished, developer-ready interface.",
  },
  {
    question: "Do you design brand identity or only UI/UX?",
    answer:
      "Both. We build complete brand identities — logo, guidelines, positioning, collateral — as well as UI/UX design for web apps, mobile apps, and SaaS dashboards.",
  },
  {
    question: "Will the design files be ready for developers to build?",
    answer:
      "Yes. Every UI/UX project is handed off with clean components, annotations, and a design system, so it's build-ready whether our engineering team or yours implements it.",
  },
  {
    question: "Can Throughout design and build the final product?",
    answer:
      "Yes. Because Design, Engineering, and Digital Marketing sit under one team, we can take a project from brand concept through to a fully built, launched product without handing it to a separate vendor.",
  },
  {
    question: "Do you follow accessibility standards?",
    answer:
      "Yes. WCAG accessibility considerations are built into our UI/UX process from the first wireframe, not added as an afterthought.",
  },
  {
    question: "How do I start a design project with Throughout?",
    answer:
      "Book a free design call. We'll review your brand or product, recommend the right scope, and outline a clear timeline before any commitment.",
  },
];

export const metadata: Metadata = {
  title: "Design Services | Throughout (PVT) LTD",
  description:
    "Brand identity, UI/UX design, web design, motion graphics, and creative direction — design that builds trust and drives conversions.",
  keywords: [
    "brand identity design agency",
    "UI UX design agency",
    "web design company",
    "logo design Sri Lanka",
    "creative design studio",
    "motion graphics agency",
    "social media creatives agency",
    "Throughout (PVT) LTD",
    "Throughout design",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.throughout.io/design" },
  openGraph: {
    title: "Design Services | Throughout (PVT) LTD",
    description:
      "Creative design services covering brand identity, UI/UX, web design, and visual communication.",
    url: "https://www.throughout.io/design",
    siteName: "Throughout (PVT) LTD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Services | Throughout (PVT) LTD",
    description:
      "Creative design services covering brand identity, UI/UX, web design, and visual communication.",
  },
};

export default function DesignPage() {
  return (
    <>
      <DesignPageClient />
      <ServiceFAQ
        id="faq"
        badgeText="Common questions"
        headline="Design, Answered."
        intro="What clients usually ask before starting a design engagement with us."
        faqs={designFaqs}
      />
      <ServicesCTASection
        headline="Ready to Build a Brand That Stands Out?"
        subtext="Let's create designs that communicate clearly, convert consistently, and make your business look like the best option in the room."
        buttonText="Book a Free Design Call"
      />
    </>
  );
}
