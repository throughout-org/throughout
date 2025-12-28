import { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://throoout.com";
  const now = new Date();

  // Static pages (indexable only)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
    },
  ];

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
  }));

  return [...staticPages, ...servicePages];
}
