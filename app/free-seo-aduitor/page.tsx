
import React from "react";
import FreeSeoAuditor from "../../components/free-seo-aduitor/FreeSeoAuditor";

import type { Metadata } from "next";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Free SEO Audit Tool | Instant Website SEO Checker",
  description: "Analyze your website SEO for free. Get instant technical SEO audit, health score, and actionable recommendations. No signup required.",
  keywords: [
    "free seo tool",
    "seo audit",
    "website seo checker",
    "technical seo audit",
    "seo analyzer",
    "instant seo report",
    "on-page seo checker"
  ],
  openGraph: {
    title: "Free SEO Audit Tool | Instant Website SEO Checker",
    description: "Analyze your website SEO for free. Get instant technical SEO audit, health score, and actionable recommendations. No signup required.",
    url: "https://throoout.com/free-seo-aduitor",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Free SEO Audit Tool by Throoout"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Audit Tool | Instant Website SEO Checker",
    description: "Analyze your website SEO for free. Get instant technical SEO audit, health score, and actionable recommendations. No signup required.",
    images: ["/images/twitter-default.png"]
  }
};


export default function FreeSeoAuditorPage() {
  return (
    <>
      <FreeSeoAuditor />
    </>
  );
}
