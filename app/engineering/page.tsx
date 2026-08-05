import type { Metadata } from "next";
import { FiCloud, FiCode, FiCpu, FiDatabase, FiLayers, FiShield } from "react-icons/fi";
import UnifiedServicePage from "@/components/service/UnifiedServicePage";

const faqs = [
  { question: "What engineering services does Throughout offer?", answer: "We deliver web and mobile products, SaaS platforms, APIs, AI and workflow automation, data systems, cloud infrastructure, DevOps, and quality assurance." },
  { question: "Can you work with an existing codebase?", answer: "Yes. We begin by understanding the architecture, deployment setup, risks, and priorities before changing an existing product." },
  { question: "Can one team cover product and infrastructure?", answer: "Yes. We can combine front-end, back-end, cloud, DevOps, data, and QA capability around one roadmap and delivery rhythm." },
  { question: "Do you offer a dedicated engineering team?", answer: "Yes. You can engage a focused project team or build a long-term dedicated team that integrates with your company." },
  { question: "How does an engineering engagement begin?", answer: "We start with a free consultation to clarify the product, constraints, existing systems, required capabilities, and the most practical next step." },
];

export const metadata: Metadata = {
  title: "Software Engineering Services",
  description: "Product engineering, web and mobile development, AI automation, data engineering, QA, cloud, and DevOps services from one dedicated team.",
  alternates: { canonical: "https://www.throughout.io/engineering" },
  openGraph: { type: "website", url: "https://www.throughout.io/engineering", title: "Software Engineering Services | Throughout", description: "Build dependable digital products with one engineering team across product, data, cloud, QA, and AI." },
};

export default function EngineeringPage() {
  return <UnifiedServicePage
    eyebrow="Engineering"
    title="Engineering that moves the product forward."
    intro="We design, build, modernise, and operate digital products across application, data, automation, and cloud layers without fragmented ownership."
    primaryCTA="Start an Engineering Project"
    outcomes={[
      { title: "Full-stack ownership", copy: "One accountable team across interfaces, systems, infrastructure, and quality." },
      { title: "Built for change", copy: "Architecture and delivery choices that support the product beyond its first release." },
      { title: "Visible progress", copy: "Clear priorities, direct communication, and regular review points." },
    ]}
    capabilitiesTitle="The engineering capability your roadmap needs."
    capabilitiesIntro="Use one discipline or combine several into a focused product team."
    capabilities={[
      { icon: FiCode, title: "Web & mobile products", copy: "Responsive applications, SaaS platforms, internal tools, and mobile experiences." },
      { icon: FiLayers, title: "Platforms & APIs", copy: "Back-end services, integrations, APIs, and systems designed for dependable operation." },
      { icon: FiCpu, title: "AI & automation", copy: "Practical AI features and workflows connected to real business processes." },
      { icon: FiDatabase, title: "Data engineering", copy: "Pipelines, integrations, data platforms, and reporting foundations." },
      { icon: FiCloud, title: "Cloud & DevOps", copy: "Infrastructure, CI/CD, observability, deployment, and cloud optimisation." },
      { icon: FiShield, title: "Quality assurance", copy: "Manual and automated testing integrated throughout delivery." },
    ]}
    process={[
      { title: "Understand", copy: "We clarify the product goal, users, systems, risks, and delivery constraints." },
      { title: "Shape", copy: "We define the technical approach, team, priorities, and first delivery milestones." },
      { title: "Build & improve", copy: "We ship in visible increments, review the work, and adapt as the product develops." },
    ]}
    faqs={faqs}
    faqTitle="Engineering, answered."
    finalTitle="Have a product or platform to build?"
    finalCopy="Tell us what needs to change, launch, or scale. We will help shape the right engineering team and next step."
  />;
}
