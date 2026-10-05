import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import { client } from "@/src/sanity/client";

const siteUrl = "https://www.throughout.io";
const pagePath = "/insights";
const imageLicenseUrl = `${siteUrl}/privacy-policy#terms-of-service`;
const acquireLicensePageUrl = `${siteUrl}/#contact-form`;

type Author = {
  name: string;
  role?: string;
  avatarUrl?: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string[];
  date: string;
  image?: { asset?: { url: string } } | string;
  excerpt: string;
  author?: Author | null;
};

async function fetchPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    `*[_type == "post"] | order(date desc) {
      _id,
      title,
      slug,
      category,
      date,
      image {
        asset->{url}
      },
      excerpt,
      author->{
        name,
        role,
        "avatarUrl": image.asset->url
      }
    }`,
  );

  return Array.isArray(posts) ? posts : [];
}

export const metadata: Metadata = {
  title: "Insights & Blog",
  description:
    "Explore Throughout (PVT) LTD's latest insights on custom software, AI development, automation, and product strategy.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Insights & Blog | Throughout (PVT) LTD",
    description:
      "Explore Throughout (PVT) LTD's latest insights on custom software, AI development, automation, and product strategy.",
    url: `${siteUrl}${pagePath}`,
    siteName: "Throughout (PVT) LTD",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Throughout (PVT) LTD Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog | Throughout (PVT) LTD",
    description:
      "Explore Throughout (PVT) LTD's latest insights on custom software, AI development, automation, and product strategy.",
    images: [`${siteUrl}/images/twitter-default.png`],
  },
};

export default async function InsightsPage() {
  const posts = await fetchPosts();

  const imageObjects = posts
    .filter(
      (post) => typeof post.image !== "string" && Boolean(post.image?.asset?.url),
    )
    .map((post) => ({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: typeof post.image === "string" ? post.image : post.image?.asset?.url,
      name: post.title,
      description: post.excerpt || post.title,
      license: imageLicenseUrl,
      acquireLicensePage: acquireLicensePageUrl,
      creditText: "Throughout (PVT) LTD Insights",
      creator: {
        "@type": "Organization",
        name: "Throughout (PVT) LTD",
      },
      copyrightNotice: "© Throughout (PVT) LTD",
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
      <InsightsClient posts={posts} />
    </>
  );
}
