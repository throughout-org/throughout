import type { Metadata } from "next";
import { cache } from "react";
import InsightDetails from "@/components/insights/InsightDetails";
import { client } from "@/src/sanity/client";

type Params = { slug: string };
const siteUrl = "https://www.throughout.io";
const imageLicenseUrl = `${siteUrl}/privacy-policy#terms-of-service`;
const acquireLicensePageUrl = `${siteUrl}/contact`;

const fetchPost = cache(async (slug: string) => {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      content,
      category,
      date,
      image {
        asset->{url}
      },
      "imageUrl": coalesce(image.asset->url, ""),
      excerpt,
      author->{
        name,
        role,
        "avatarUrl": image.asset->url
      }
    }`,
    { slug },
  );
  return post;
});

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = slug ? await fetchPost(slug) : null;

  const canonical = `${siteUrl}/insights/${slug}`;

  if (!post) {
    return {
      title: "Insight not found",
      description: "Requested insight could not be found.",
      alternates: { canonical },
    };
  }

  const title = `${post.title} | Throughout (PVT) LTD Insights`;
  const description =
    post.excerpt ||
    "Explore detailed insights from Throughout (PVT) LTD on software, AI, and automation.";
  const image = post.imageUrl || `${siteUrl}/images/og-default.png`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "Throughout (PVT) LTD",
      publishedTime: post.date,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = slug ? await fetchPost(slug) : null;

  const imageObject =
    post && post.imageUrl
      ? {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          contentUrl: post.imageUrl,
          name: post.title,
          description:
            post.excerpt ||
            "Explore detailed insights from Throughout (PVT) LTD on software, AI, and automation.",
          license: imageLicenseUrl,
          acquireLicensePage: acquireLicensePageUrl,
          creditText: "Throughout (PVT) LTD Insights",
          creator: {
            "@type": "Organization",
            name: "Throughout (PVT) LTD",
          },
          copyrightNotice: "© Throughout (PVT) LTD",
        }
      : null;

  return (
    <>
      {imageObject && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObject) }}
        />
      )}
      <InsightDetails post={post} />
    </>
  );
}
