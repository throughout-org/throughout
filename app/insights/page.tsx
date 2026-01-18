import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

const siteUrl = "https://throoout.com";
const pagePath = "/insights";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description:
    "Explore Throoout's latest insights on custom software, AI development, automation, and product strategy.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Insights & Blog | Throoout",
    description:
      "Explore Throoout's latest insights on custom software, AI development, automation, and product strategy.",
    url: `${siteUrl}${pagePath}`,
    siteName: "Throoout",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Throoout Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog | Throoout",
    description:
      "Explore Throoout's latest insights on custom software, AI development, automation, and product strategy.",
    images: [`${siteUrl}/images/twitter-default.png`],
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
