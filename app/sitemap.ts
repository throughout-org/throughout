import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/insights";
import { getInternshipsFromCrm } from "@/lib/careersApi";

const BASE = "https://www.throughout.io";
function page(path: string, priority = 0.8, changefreq: "daily" | "weekly" | "monthly" = "weekly", lastModified?: string | Date) {
  return { url: `${BASE}${path}`, lastModified, priority, changeFrequency: changefreq };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = getAllArticles().filter(
    (post) => !post.noIndex && post.canonicalUrl.startsWith(`${BASE}/insights/`),
  );

  let careerEntries: MetadataRoute.Sitemap = [];
  try {
    const internships = await getInternshipsFromCrm({ includeClosed: true });
    careerEntries = internships.map((job) => page(`/careers/${job.slug}`, 0.6, "weekly"));
  } catch {
    // If CRM is unavailable, skip career entries but keep the rest of the sitemap
  }

  return [
    // Core pages
    page("/", 1.0, "daily"),
    page("/website-makeover", 0.8, "monthly"),
    // Content
    page("/insights", 0.85, "daily"),
    page("/careers", 0.6, "weekly"),
    ...careerEntries,

    // Legal
    page("/privacy-policy", 0.3, "monthly"),

    // Blog posts
    ...blogPosts.map((post) => page(`/insights/${post.slug}`, 0.75, "monthly", post.updatedDate)),
  ];
}
