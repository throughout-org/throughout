import { MetadataRoute } from "next";
import { client } from "@/src/sanity/client";

const BASE = "https://www.throughout.io";
const now = new Date();

function page(path: string, priority = 0.8, changefreq: "daily" | "weekly" | "monthly" = "weekly") {
  return { url: `${BASE}${path}`, lastModified: now, priority, changeFrequency: changefreq };
}

async function getBlogSlugs(): Promise<string[]> {
  try {
    const posts = await client.fetch<{ slug: string }[]>(
      `*[_type == "post"] | order(date desc) { "slug": slug.current }`,
    );
    return posts.map((p) => p.slug).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getBlogSlugs();

  return [
    // Core pages
    page("/", 1.0, "daily"),
    // Content
    page("/insights", 0.85, "daily"),
    page("/careers", 0.6, "weekly"),

    // Legal
    page("/privacy-policy", 0.3, "monthly"),

    // Blog posts
    ...blogSlugs.map((slug) => page(`/insights/${slug}`, 0.75, "monthly")),
  ];
}
