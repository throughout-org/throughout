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
import ServicesCTASection from "@/components/services/ServicesCTASection";

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

  // Only show extra AI-specific sections for the AI service
  const isAI = service.slug === "ai-integrations-automation";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        headline={service.hero.headline}
        subheadline={service.hero.subheadline}
        primaryCTA={service.hero.primaryCTA}
        secondaryCTA={isAI ? "Explore AI Solutions" : service.hero.secondaryCTA}
        badgeText={service.hero.badgeText}
        trustIndicators={service.hero.trustIndicators}
      />

      {/* What We Offer Section */}
      <WhatWeOfferSection
        headline={service.solutionsGridHeadline}
        intro={service.solutionsGridIntro}
        cards={service.solutionCards}
      />

      {/* AI-specific: Real Business Use Cases */}
      {isAI && (
        <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Real Business Use Cases
            </h3>
            <p className="text-lg text-gray-700">
              AI becomes powerful when applied to real operational challenges.
              Some of the solutions we build include:
            </p>
          </div>
          <div className="grid max-w-3xl gap-4 mx-auto text-base text-gray-700">
            <ul className="space-y-1 list-disc list-inside">
              <li>AI assistants trained on company documentation</li>
              <li>Automated invoice and document data extraction</li>
              <li>Internal workflow automation across business tools</li>
              <li>AI copilots integrated into SaaS platforms</li>
              <li>Knowledge search systems using vector databases</li>
              <li>Automated report generation from business data</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Our goal is always the same:{" "}
              <span className="font-semibold text-sky-700">
                Replace manual processes with intelligent systems that run
                automatically.
              </span>
            </p>
          </div>
        </section>
      )}

      {/* Innovative Solutions Section (skip for AI, already covered above) */}
      {!isAI && <InnovativeSolutionsSection cards={service.solutionCards} />}

      {/* Engineering DNA Section */}
      <EngineeringDNASection
        headline={
          isAI
            ? "Responsible AI Implementation"
            : service.engineeringDNAHeadline
        }
        intro={isAI ? "" : service.engineeringDNAIntro}
        features={
          isAI
            ? [
                {
                  title: "Data Privacy & Security",
                  copy: "We ensure your proprietary data is sanitized before interacting with public models, or we deploy local LLMs to keep data entirely within your infrastructure.",
                },
                {
                  title: "Model Fine-Tuning",
                  copy: "Generic models aren't enough. We fine-tune models on your specific industry terminology to ensure high accuracy in responses.",
                },
                {
                  title: "Cost Optimization",
                  copy: "Token usage can get expensive. We architect efficient prompt engineering strategies and caching layers to keep your AI running costs low.",
                },
              ]
            : service.engineeringFeatures
        }
      />

      {/* Technologies Section */}
      <TechnologiesSection
        headline={isAI ? "Technologies" : service.technologies.headline}
        description={
          isAI
            ? "We integrate cutting-edge AI technologies including OpenAI APIs and open-source models, leveraging Python with LangChain for orchestration, vector databases for semantic search, and PyTorch for custom model training."
            : service.technologies.description
        }
        stack={
          isAI
            ? [
                { name: "OpenAI", icon: "/images/tech/openai.svg" },
                { name: "Python", icon: "/images/tech/python.svg" },
                { name: "LangChain", icon: "/images/tech/langchain.svg" },
                { name: "Pinecone", icon: "/images/tech/pinecone.svg" },
                { name: "PyTorch", icon: "/images/tech/pytorch.svg" },
                { name: "Hugging Face", icon: "/images/tech/huggingface.svg" },
              ]
            : service.technologies.stack
        }
      />

      {/* AI-specific: Secure Self-Hosted AI Infrastructure */}
      {isAI && (
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-sky-50">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Secure Self-Hosted AI Infrastructure
            </h3>
            <p className="text-lg text-gray-700">
              Many businesses hesitate to adopt AI because of data security and
              SaaS limitations. We help companies deploy AI solutions securely
              within their own infrastructure.
            </p>
          </div>
          <div className="grid max-w-3xl gap-4 mx-auto text-base text-gray-700">
            <ul className="mb-2 space-y-1 list-disc list-inside">
              <li>
                <span className="font-semibold text-sky-700">
                  Data Sovereignty:
                </span>{" "}
                Your business data stays inside your environment.
              </li>
              <li>
                <span className="font-semibold text-sky-700">
                  No SaaS Workflow Limits:
                </span>{" "}
                Run unlimited automations without per-task costs.
              </li>
              <li>
                <span className="font-semibold text-sky-700">
                  Secure AI Integrations:
                </span>{" "}
                Connect internal databases, APIs, and private systems.
              </li>
              <li>
                <span className="font-semibold text-sky-700">
                  Scalable Infrastructure:
                </span>{" "}
                Deploy AI workflows that scale as your business grows.
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              For automation pipelines and integrations we often implement
              self-hosted workflow systems alongside AI services.
            </p>
          </div>
        </section>
      )}

      {/* Scalable Solutions Banner */}
      <ScalableBanner
        headline={
          isAI
            ? "Automate your workflows and unlock AI-powered intelligence"
            : service.scalableBanner.headline
        }
        description={
          isAI
            ? "Stop wasting time on repetitive tasks. Our AI solutions automate business processes, extract insights from documents, and provide intelligent customer support through custom chatbots. From data automation to machine learning integration, we help you leverage AI to reduce costs, improve efficiency, and stay ahead of the competition."
            : service.scalableBanner.description
        }
      />

      {/* Engagement Models Section */}
      {/* <EngagementModelsSection
        headline={isAI ? "Engagement Model" : service.engagementModels.headline}
        models={
          isAI
            ? [
                {
                  title: "Consulting & Prototype",
                  description:
                    "Feasibility study and MVP build for your AI idea.",
                },
                {
                  title: "Project-Based",
                  description: "End-to-end development of automation tools.",
                },
                {
                  title: "Dedicated Team",
                  description:
                    "AI Engineers to integrate intelligence into your existing product.",
                },
              ]
            : service.engagementModels.models
        }
      /> */}

      {/* AI-specific: Business Impact */}
      {isAI && (
        <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Business Impact
            </h3>
            <p className="text-lg text-gray-700">
              Companies adopt AI to improve efficiency and reduce operational
              costs. Well-designed automation systems can deliver measurable
              impact:
            </p>
          </div>
          <div className="grid max-w-3xl gap-2 mx-auto text-base text-gray-700">
            <ul className="space-y-1 list-disc list-inside">
              <li>Reduce repetitive manual work</li>
              <li>Accelerate internal operations</li>
              <li>Improve customer support response times</li>
              <li>Enable smarter product features</li>
              <li>Unlock insights from existing data</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Our focus is not experimental AI. We build practical systems that
              deliver real operational value.
            </p>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {/* <FinalCTASection
        headline={
          isAI ? "Future-Proof Your Business" : service.finalCTA.headline
        }
        subtext={
          isAI
            ? "Discover how AI can reduce costs and increase efficiency."
            : service.finalCTA.subtext
        }
        buttonText={
          isAI ? "Schedule AI Consultation" : service.finalCTA.buttonText
        }
      /> */}

      <ServicesCTASection
        headline={service.finalCTA.headline}
        subtext={service.finalCTA.subtext}
        buttonText={service.finalCTA.buttonText}
      />
    </div>
  );
}
