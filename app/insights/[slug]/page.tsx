import type { Metadata } from "next";
import InsightDetails from "@/components/insights/InsightDetails";
import { client } from "@/src/sanity/client";

type Params = { slug: string };

async function fetchPostMeta(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      "imageUrl": coalesce(image.asset->url, ""),
      date
    }`,
    { slug },
  );
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = slug ? await fetchPostMeta(slug) : null;

  const siteUrl = "https://throoout.com";
  const canonical = `${siteUrl}/insights/${slug}`;

  if (!post) {
    return {
      title: "Insight not found",
      description: "Requested insight could not be found.",
      alternates: { canonical },
    };
  }

  const title = `${post.title} | Throoout Insights`;
  const description =
    post.excerpt ||
    "Explore detailed insights from Throoout on software, AI, and automation.";
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
      siteName: "Throoout",
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
  return <InsightDetails slug={slug} />;
}
