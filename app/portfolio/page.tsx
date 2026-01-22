import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

const siteUrl = "https://throoout.com";
const pagePath = "/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Our Client Success Stories",
  description:
    "Explore Throoout's portfolio of successful projects including web development, AI solutions, mobile apps, and custom software implementations.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Portfolio | Our Client Success Stories | Throoout",
    description:
      "Explore Throoout's portfolio of successful projects including web development, AI solutions, mobile apps, and custom software implementations.",
    url: `${siteUrl}${pagePath}`,
    siteName: "Throoout",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Throoout Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Our Client Success Stories | Throoout",
    description:
      "Explore Throoout's portfolio of successful projects including web development, AI solutions, mobile apps, and custom software implementations.",
    images: [`${siteUrl}/images/twitter-default.png`],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
