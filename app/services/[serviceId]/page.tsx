import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/service/HeroSection";
import WhatWeOfferSection from "@/components/service/WhatWeOfferSection";
import InnovativeSolutionsSection from "@/components/service/InnovativeSolutionsSection";
import EngineeringDNASection from "@/components/service/EngineeringDNASection";
import TechnologiesSection from "@/components/service/TechnologiesSection";
import ScalableBanner from "@/components/service/ScalableBanner";
import EngagementModelsSection from "@/components/service/EngagementModelsSection";
import FinalCTASection from "@/components/service/FinalCTASection";
import Footer from "@/components/Footer";
import TrendyTuringLabel from "@/components/TrendyTuringLabel";

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = getServiceBySlug(serviceId);

  if (!service) {
    return {
      title: "Service Not Found | Throoout",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.title} - ${service.hero.headline} | Throoout`,
    description: service.hero.subheadline,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} development`,
      `${service.title.toLowerCase()} services`,
      "custom software development",
      "agile development",
      "scalable solutions",
      "enterprise solutions",
      ...service.technologies.stack.map((tech) => tech.name.toLowerCase()),
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://throoout.com/services/${serviceId}`,
      siteName: "Throoout",
      title: `${service.title} - ${service.hero.headline}`,
      description: service.hero.subheadline,
      images: [
        {
          url: `/images/og-${serviceId}.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Throoout`,
      description: service.hero.subheadline,
      images: [`/images/twitter-${serviceId}.png`],
    },
    alternates: {
      canonical: `https://throoout.com/services/${serviceId}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = getServiceBySlug(serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        headline={service.hero.headline}
        subheadline={service.hero.subheadline}
        primaryCTA={service.hero.primaryCTA}
        secondaryCTA={service.hero.secondaryCTA}
        badgeText={service.hero.badgeText}
        trustIndicators={service.hero.trustIndicators}
      />

      {/* What We Offer Section */}
      <WhatWeOfferSection
        headline={service.solutionsGridHeadline}
        intro={service.solutionsGridIntro}
        cards={service.solutionCards}
      />

      {/* Innovative Solutions Section */}
      <InnovativeSolutionsSection cards={service.solutionCards} />

      {/* Engineering DNA Section */}
      <EngineeringDNASection
        headline={service.engineeringDNAHeadline}
        intro={service.engineeringDNAIntro}
        features={service.engineeringFeatures}
      />

      {/* Technologies Section */}
      <TechnologiesSection
        headline={service.technologies.headline}
        description={service.technologies.description}
        stack={service.technologies.stack}
      />

      {/* Scalable Solutions Banner */}
      <ScalableBanner
        headline={service.scalableBanner.headline}
        description={service.scalableBanner.description}
      />

      {/* Engagement Models Section */}
      <EngagementModelsSection
        headline={service.engagementModels.headline}
        models={service.engagementModels.models}
      />

      {/* Final CTA Section */}
      <FinalCTASection
        headline={service.finalCTA.headline}
        subtext={service.finalCTA.subtext}
        buttonText={service.finalCTA.buttonText}
      />

      {/* Back to Services */}
      {/* <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto text-center max-w-7xl">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>
        </div>
      </section> */}
      {/* <TrendyTuringLabel /> */}
    </div>
  );
}
