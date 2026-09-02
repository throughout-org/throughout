import type { Metadata } from "next";
import Script from "next/script";
import HomepageRedesign, { homepageFAQs } from "@/components/home/HomepageRedesign";

export const metadata: Metadata = {
  title: "Dedicated Development Teams & Digital Services | Throughout",
  description:
    "Build and scale digital products with a dedicated engineering, design, data, AI, DevOps, QA, or marketing team from Throughout. Book a free consultation.",
  alternates: { canonical: "https://www.throughout.io" },
  openGraph: {
    type: "website",
    url: "https://www.throughout.io",
    title: "Dedicated Teams That Build, Launch and Scale Digital Products",
    description:
      "Senior engineering, design, data, AI, DevOps, QA, and marketing expertise assembled around your goals.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Throughout dedicated digital teams" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedicated Development Teams & Digital Services | Throughout",
    description: "Build a project team or a long-term offshore team with Throughout.",
    images: ["/twitter-image"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFAQs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <main className="bg-white text-slate-950">
      <Script id="homepage-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <HomepageRedesign />
    </main>
  );
}
