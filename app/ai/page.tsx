import React from "react";
import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import InnerBanner from "@/components/ui/InnerBanner";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import { SecondaryButton } from "@/components/ui/Button";
import { CalendlyButton } from "@/components/CalendlyPopup";
import WhatWeOfferSection from "@/components/service/WhatWeOfferSection";
import TechnologiesSection from "@/components/service/TechnologiesSection";
import EngineeringDNASection from "@/components/service/EngineeringDNASection";
import WhatIsThroughoutAISection from "@/components/throughout-ai/WhatIsThroughoutAISection";
import type { EngineeringFeature, ServiceCard } from "@/data/services";

export const metadata: Metadata = {
  title: "Throughout (PVT) LTD AI | Artificial Intelligence for Real Business Automation",
  description:
    "We design and deploy AI-powered systems that automate workflows, enhance decision making, and integrate intelligence directly into your digital products.",
};

const whatWeBuildCards: ServiceCard[] = [
  {
    title: "AI Workflow Automation",
    concept: "Intelligent Workflows",
    content:
      "Automate repetitive operations using intelligent workflows that connect APIs, databases, and business tools.",
    idealFor: [
      "automated lead qualification",
      "smart email responses",
      "internal reporting automation",
    ],
  },
  {
    title: "AI Assistants for Businesses",
    concept: "Team & Customer Support",
    content: "Custom AI assistants that support internal teams and customers.",
    idealFor: [
      "support chat assistants",
      "internal knowledge assistants",
      "document analysis tools",
    ],
  },
  {
    title: "AI Data Processing",
    concept: "Data Intelligence",
    content:
      "Transform large amounts of data into structured insights and automated reports.",
    idealFor: [
      "document extraction",
      "data classification",
      "AI summarization systems",
    ],
  },
  {
    title: "AI Integration for Software Products",
    concept: "Product-Level AI",
    content:
      "Integrate AI capabilities directly into your applications and SaaS platforms.",
    idealFor: [
      "AI search",
      "recommendation engines",
      "intelligent automation features",
    ],
  },
];

const technologyStack = [
  { name: "OpenAI", icon: "/images/tech/openai.svg" },
  { name: "LangChain", icon: "/images/tech/langchain.svg" },
  { name: "Python", icon: "/images/tech/python.svg" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg" },
];

const useCaseCards: ServiceCard[] = [
  {
    title: "Sales Automation",
    concept: "Use Case",
    content:
      "Automatically qualify leads, send responses, and update CRM systems.",
  },
  {
    title: "Customer Support",
    concept: "Use Case",
    content: "AI assistants that answer questions and handle common requests.",
  },
  {
    title: "Content & Knowledge Systems",
    concept: "Use Case",
    content: "AI tools that analyze documents and provide instant answers.",
  },
  {
    title: "Operational Automation",
    concept: "Use Case",
    content: "Automate repetitive internal processes and data workflows.",
  },
];

const engineeringFeatures: EngineeringFeature[] = [
  {
    title: "Practical Implementation",
    copy: "We build AI systems that actually run inside your operations, not experimental prototypes.",
  },
  {
    title: "Seamless Integration",
    copy: "AI tools integrate with your existing software stack and workflows.",
  },
  {
    title: "Scalable Architecture",
    copy: "Systems are designed to scale as your business grows.",
  },
];

export default function ThroughoutAIPage() {
  return (
    <>
      <InnerBanner
        badgeText="Throughout (PVT) LTD AI"
        title={<>Artificial Intelligence for Real Business Automation</>}
        description="We design and deploy AI-powered systems that automate workflows, enhance decision making, and integrate intelligence directly into your digital products."
        cta={
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CalendlyButton className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-linear-to-r from-[#3698fd] via-[#3698fd] to-[#377bff] hover:shadow-xl hover:scale-[1.02]">
              Build an AI System
              <FiArrowRight className="w-5 h-5" />
            </CalendlyButton>
            <SecondaryButton href="/contact" className="px-8 py-4">
              Schedule a Strategy Call
            </SecondaryButton>
          </div>
        }
      />

      <main className="min-h-screen">
        <WhatIsThroughoutAISection />

        <WhatWeOfferSection
          headline="What We Build"
          intro="From workflow automation to AI-powered product capabilities, we build systems that create measurable business outcomes."
          cards={whatWeBuildCards}
        />

        <TechnologiesSection
          headline="Technologies We Use"
          description="Modern AI systems are built using tools and platforms such as OpenAI, LangChain, Python, and Next.js. These technologies allow us to build scalable AI systems that integrate seamlessly with existing infrastructure."
          stack={technologyStack}
        />

        <WhatWeOfferSection
          headline="Example Use Cases"
          intro="Practical AI use cases we implement across sales, support, knowledge, and operations."
          cards={useCaseCards}
        />

        <EngineeringDNASection
          badgeText="Throughout (PVT) LTD AI"
          headline="Why Companies Use Throughout (PVT) LTD AI"
          intro="We focus on practical AI engineering that fits real business operations from day one."
          features={engineeringFeatures}
        />
      </main>

      <ServicesCTASection
        headline={"Build Your AI System"}
        subtext={
          "Whether you're looking to automate internal workflows or integrate AI capabilities into your product, our team can design and deploy a tailored AI solution."
        }
        buttonText={"Start an AI Project"}
      />
    </>
  );
}
