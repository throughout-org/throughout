import type { Metadata } from "next";
import HomepageRedesign, { homepageFAQs } from "@/components/home/HomepageRedesign";

// Static content; tells the Cloudflare build to cache it at the edge.
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Offshore Software Development in Sri Lanka | Throughout" },
  description:
    "Offshore software development studio in Colombo, Sri Lanka. Hire dedicated developers or a project team to build websites, apps and SaaS for Australia and Europe.",
  alternates: { canonical: "https://www.throughout.io" },
  openGraph: {
    type: "website",
    url: "https://www.throughout.io",
    title: "Offshore Software Development in Sri Lanka | Throughout",
    description:
      "Websites, apps and SaaS for founders and agencies in Australia, Europe and beyond. Hire dedicated developers or a project team, at offshore rates.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Throughout, offshore software development and dedicated teams" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offshore Software Development in Sri Lanka | Throughout",
    description: "Hire dedicated developers or a project team to build websites, apps and SaaS, at offshore rates.",
    images: ["/twitter-image.png"],
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
    <main className="bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomepageRedesign />
    </main>
  );
}
