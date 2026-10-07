import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/insights";

const BASE = "https://www.throughout.io";
function page(path: string, priority = 0.8, changefreq: "daily" | "weekly" | "monthly" = "weekly", lastModified?: string | Date) {
  return { url: `${BASE}${path}`, lastModified, priority, changeFrequency: changefreq };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllArticles().filter(
    (post) => !post.noIndex && post.canonicalUrl.startsWith(`${BASE}/insights/`),
  );

  return [
    // Core pages
    page("/", 1.0, "daily"),
    // Content
    page("/insights", 0.85, "daily"),
    page("/careers", 0.6, "weekly"),

    // Legal
    page("/privacy-policy", 0.3, "monthly"),

    // Blog posts
    ...blogPosts.map((post) => page(`/insights/${post.slug}`, 0.75, "monthly", post.updatedDate)),
  ];
}
