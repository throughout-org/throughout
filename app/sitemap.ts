import { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { servicePages } from "@/data/services";
import { getAllArticles, insightCategories } from "@/lib/insights";

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
    page("/website-makeover", 0.8, "monthly"),
    // Services
    ...servicePages.map((service) => page(`/services/${service.slug}`, 0.9, "monthly")),
    ...caseStudies.map((study) => page(`/case-studies/${study.slug}`, 0.85, "monthly", study.dateModified)),
    // Content
    page("/insights", 0.85, "daily"),
    ...insightCategories.map((category) => page(`/insights/category/${category.slug}`, 0.6, "weekly")),
    page("/careers", 0.6, "weekly"),

    // Legal
    page("/privacy-policy", 0.3, "monthly"),

    // Blog posts
    ...blogPosts.map((post) => page(`/insights/${post.slug}`, 0.75, "monthly", post.updatedDate)),
  ];
}
