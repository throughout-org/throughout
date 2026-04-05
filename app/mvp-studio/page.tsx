import type { Metadata } from "next";
import MvpStudioClient from "./MvpStudioClient";

export const metadata: Metadata = {
  title: "MVP Studio | Build Your SaaS MVP in 3 Weeks",
  description:
    "Build a production-ready SaaS MVP in 3 weeks with Throughout (PVT) LTD. Fixed-scope sprints, transparent pricing, and AI-accelerated engineering.",
  openGraph: {
    title: "MVP Studio | Throughout (PVT) LTD",
    description: "Your SaaS MVP in 3 weeks. No hourly billing. No surprises.",
    url: "https://www.throughout.io/mvp-studio",
    type: "website",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "MVP Studio by Throughout (PVT) LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Studio | Throughout (PVT) LTD",
    description:
      "Build your SaaS MVP in 3 weeks with fixed-scope, flat-fee delivery.",
    images: ["/images/twitter-default.png"],
  },
  alternates: {
    canonical: "https://www.throughout.io/mvp-studio",
  },
};

export default function MvpStudioPage() {
  return <MvpStudioClient />;
}
