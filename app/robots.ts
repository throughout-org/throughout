import { MetadataRoute } from "next";

const SITE = "https://www.throughout.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers — full access
      { userAgent: "*", allow: "/", disallow: ["/api/"] },

      // AI / LLM crawlers — explicitly allowed for GEO/AEO visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: [`${SITE}/sitemap.xml`],
  };
}
