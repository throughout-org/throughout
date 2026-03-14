import type { Metadata } from "next";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Portfolio | Our Work - Throoout",
  description:
    "Explore our portfolio of web development, mobile apps, AI solutions, and automation projects. See how we deliver results for our clients.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "mobile app development",
    "AI projects",
    "automation solutions",
    "software development portfolio",
  ],
  openGraph: {
    title: "Portfolio | Our Work - Throoout",
    description:
      "Explore our portfolio of web, mobile, AI, and automation projects.",
    url: "https://throoout.com/portfolio",
    images: [
      {
        url: "/images/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Throoout Portfolio",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioShowcase />
      <ServicesCTASection
        headline={"Ready to Build Something Amazing?"}
        subtext={
          "Building the future, one line of code at a time. We transform ideas into powerful digital solutions."
        }
        buttonText={"Book Free Strategy Call"}
      />
    </>
  );
}
