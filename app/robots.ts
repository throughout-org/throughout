import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://www.throughout.io";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/login/",
          "/signup/",
          "/search",
        ],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/insights/sitemap.xml`],
  };
}
