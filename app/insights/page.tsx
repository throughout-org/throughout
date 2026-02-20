import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import { client } from "@/src/sanity/client";

const siteUrl = "https://throoout.com";
const pagePath = "/insights";
const imageLicenseUrl = `${siteUrl}/terms-of-service`;
const acquireLicensePageUrl = `${siteUrl}/contact`;

type InsightImageMeta = {
  _id: string;
  title: string;
  excerpt?: string;
  imageUrl?: string;
};

async function fetchInsightImages(): Promise<InsightImageMeta[]> {
  const posts = await client.fetch(
    `*[_type == "post"] | order(date desc) {
      _id,
      title,
      excerpt,
      "imageUrl": coalesce(image.asset->url, "")
    }`,
  );

  return Array.isArray(posts) ? posts : [];
}

export const metadata: Metadata = {
  title: "Insights & Blog",
  description:
    "Explore Throoout's latest insights on custom software, AI development, automation, and product strategy.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Insights & Blog | Throoout",
    description:
      "Explore Throoout's latest insights on custom software, AI development, automation, and product strategy.",
    url: `${siteUrl}${pagePath}`,
    siteName: "Throoout",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Throoout Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog | Throoout",
    description:
      "Explore Throoout's latest insights on custom software, AI development, automation, and product strategy.",
    images: [`${siteUrl}/images/twitter-default.png`],
  },
};

export default async function InsightsPage() {
  const posts = await fetchInsightImages();

  const imageObjects = posts
    .filter(
      (post) => typeof post.imageUrl === "string" && post.imageUrl.length > 0,
    )
    .map((post) => ({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: post.imageUrl,
      name: post.title,
      description: post.excerpt || post.title,
      license: imageLicenseUrl,
      acquireLicensePage: acquireLicensePageUrl,
      creditText: "Throoout Insights",
      creator: {
        "@type": "Organization",
        name: "Throoout",
      },
      copyrightNotice: "© Throoout",
    }));

  return (
    <>
      {imageObjects.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": imageObjects,
            }),
          }}
        />
      )}
      <InsightsClient />
    </>
  );
}
