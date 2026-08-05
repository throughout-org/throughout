import type { Metadata } from "next";
import { FiCompass, FiGrid, FiLayout, FiMonitor, FiPenTool, FiUsers } from "react-icons/fi";
import UnifiedServicePage from "@/components/service/UnifiedServicePage";

const faqs = [
  { question: "What design services does Throughout offer?", answer: "We provide product strategy, user research, UX and interface design, prototyping, design systems, websites, and brand identity." },
  { question: "Do you design brand identities or only digital products?", answer: "Both. We can create a visual identity, design a product experience, or connect both into one consistent system." },
  { question: "Are the files ready for engineering?", answer: "Yes. Product work is organised around reusable components, responsive behaviour, interaction notes, and clear engineering handoff." },
  { question: "Can Throughout design and build the product?", answer: "Yes. Our designers and engineers can work as one team from discovery and prototyping through implementation and launch." },
  { question: "How does a design engagement begin?", answer: "We begin with a free consultation to understand the product, users, current experience, constraints, and the decision the design work needs to support." },
];

export const metadata: Metadata = {
  title: "Product & UI/UX Design Services",
  description: "Product strategy, UX research, UI design, prototypes, design systems, web design, and brand identity for useful digital products.",
  alternates: { canonical: "https://www.throughout.io/design" },
  openGraph: { type: "website", url: "https://www.throughout.io/design", title: "Product & UI/UX Design Services | Throughout", description: "Turn complex product decisions into clear, useful, and build-ready digital experiences." },
};

export default function DesignPage() {
  return <UnifiedServicePage
    eyebrow="Design"
    title="Design that makes the product easier to choose and use."
    intro="We turn product goals and user needs into clear interfaces, coherent systems, and build-ready experiences."
    primaryCTA="Start a Design Project"
    outcomes={[
      { title: "Clearer decisions", copy: "Research and product thinking focus the work before visual detail takes over." },
      { title: "Less friction", copy: "Flows and interfaces help users understand what to do and why it matters." },
      { title: "Ready to build", copy: "Reusable components and responsive behaviour make engineering handoff practical." },
    ]}
    capabilitiesTitle="From product thinking to polished interface."
    capabilitiesIntro="A connected design practice for products, websites, and brands."
    capabilities={[
      { icon: FiCompass, title: "Product strategy", copy: "Problem framing, feature priorities, experience direction, and roadmap support." },
      { icon: FiUsers, title: "UX research", copy: "User flows, interviews, journey mapping, and evidence-led product decisions." },
      { icon: FiLayout, title: "UI/UX design", copy: "Clear web, mobile, dashboard, and SaaS interfaces designed around real tasks." },
      { icon: FiPenTool, title: "Prototypes", copy: "Interactive concepts that make flows testable before engineering investment." },
      { icon: FiGrid, title: "Design systems", copy: "Reusable foundations that improve consistency and delivery speed." },
      { icon: FiMonitor, title: "Web & brand design", copy: "Conversion-focused websites and visual identities with a coherent digital expression." },
    ]}
    process={[
      { title: "Discover", copy: "We align on the audience, problem, business goal, evidence, and constraints." },
      { title: "Explore", copy: "We map flows, test directions, and turn the strongest route into a working prototype." },
      { title: "Refine & hand off", copy: "We resolve the system, responsive states, interactions, and implementation details." },
    ]}
    faqs={faqs}
    faqTitle="Design, answered."
    finalTitle="Ready to make the experience clearer?"
    finalCopy="Bring us the product, website, or brand challenge. We will help define the right design scope and next step."
  />;
}
