import { MetadataRoute } from "next";

const SITE = "https://www.throughout.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers — full access
      { userAgent: "*", allow: "/", disallow: ["/api/"] },

      // AI / LLM crawlers: explicitly allowed for GEO/AEO visibility, minus the API routes
      {
        userAgent: [
          "GPTBot", "OAI-SearchBot", "ChatGPT-User",
          "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
          "PerplexityBot", "Perplexity-User", "YouBot",
          "Google-Extended", "Applebot-Extended", "cohere-ai",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [`${SITE}/sitemap.xml`],
  };
}
