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
    page("/digital-marketing", 0.95, "weekly"),
    page("/engineering", 0.95, "weekly"),
    page("/design", 0.95, "weekly"),
    page("/agency-partners", 0.95, "weekly"),

    // Work & portfolio
    page("/portfolio", 0.9, "weekly"),

    // Company
    page("/about", 0.8, "monthly"),
    page("/contact", 0.85, "monthly"),
    page("/case-studies", 0.8, "weekly"),
    page("/case-studies/ai-seo-growth", 0.7, "monthly"),
    page("/case-studies/mvp-product-launch", 0.7, "monthly"),
    page("/case-studies/shopify-store-conversion", 0.7, "monthly"),
    page("/case-studies/website-performance-optimization", 0.7, "monthly"),
    page("/case-studies/workflow-automation-system", 0.7, "monthly"),

    // Content
    page("/insights", 0.85, "daily"),
    page("/careers", 0.6, "weekly"),

    // Legal
    page("/privacy-policy", 0.3, "monthly"),
    page("/terms-of-service", 0.3, "monthly"),

    // Blog posts
    ...blogSlugs.map((slug) => page(`/insights/${slug}`, 0.75, "monthly")),
  ];
}
