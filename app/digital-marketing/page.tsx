import type { Metadata } from "next";
import { FiBarChart2, FiEdit3, FiMail, FiSearch, FiTarget, FiTrendingUp } from "react-icons/fi";
import UnifiedServicePage from "@/components/service/UnifiedServicePage";

const faqs = [
  { question: "What digital marketing services does Throughout offer?", answer: "We provide SEO, content strategy, paid search and social campaigns, lifecycle email, conversion optimisation, analytics, and campaign landing-page support." },
  { question: "Do you run paid advertising and organic growth?", answer: "Yes. We can combine paid campaigns with SEO and content so short-term acquisition and long-term discoverability support the same commercial goal." },
  { question: "How do you measure performance?", answer: "We define useful conversion events and reporting around leads, sales, acquisition efficiency, and other agreed business outcomes rather than relying only on reach or impressions." },
  { question: "Can you improve landing pages and tracking?", answer: "Yes. Our design and engineering capability can support landing pages, analytics implementation, technical SEO, CRM integration, and conversion improvements." },
  { question: "How does a marketing engagement begin?", answer: "We begin with a free consultation to understand the audience, offer, current channels, measurement setup, and highest-priority growth constraint." },
];

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Services",
  description: "SEO, content, paid media, lifecycle marketing, analytics, and conversion optimisation connected to design and engineering delivery.",
  alternates: { canonical: "https://www.throughout.io/digital-marketing" },
  openGraph: { type: "website", url: "https://www.throughout.io/digital-marketing", title: "Digital Marketing & SEO Services | Throughout", description: "Connect strategy, creative, measurement, and technical execution around commercial growth." },
};

export default function DigitalMarketingPage() {
  return <UnifiedServicePage
    eyebrow="Digital Marketing"
    title="Marketing connected to the product and the numbers."
    intro="We combine strategy, creative, analytics, and technical execution to help the right audience discover, understand, and act on your offer."
    primaryCTA="Plan Your Growth Strategy"
    outcomes={[
      { title: "Commercial focus", copy: "Channels and campaigns start with the business outcome they need to support." },
      { title: "Connected execution", copy: "Creative, landing pages, tracking, and campaigns move together instead of through separate vendors." },
      { title: "Useful measurement", copy: "Reporting prioritises meaningful actions and agreed conversion signals." },
    ]}
    capabilitiesTitle="A connected system for demand and conversion."
    capabilitiesIntro="Choose a focused channel engagement or combine the work around one growth objective."
    capabilities={[
      { icon: FiSearch, title: "SEO", copy: "Technical, on-page, and content improvements aligned to relevant search demand." },
      { icon: FiEdit3, title: "Content strategy", copy: "Useful content planned around audience questions, search intent, and buying decisions." },
      { icon: FiTarget, title: "Paid media", copy: "Google and Meta campaigns with clear audiences, offers, creative, and conversion paths." },
      { icon: FiTrendingUp, title: "Conversion optimisation", copy: "Landing-page and funnel improvements guided by behaviour and performance data." },
      { icon: FiMail, title: "Lifecycle marketing", copy: "Email journeys and retention communication connected to customer actions." },
      { icon: FiBarChart2, title: "Analytics & reporting", copy: "Tracking foundations and reporting that make performance easier to understand." },
    ]}
    process={[
      { title: "Diagnose", copy: "We review the audience, offer, channels, funnel, tracking, and current constraints." },
      { title: "Prioritise", copy: "We choose the opportunities, messages, channels, and measures most relevant to the goal." },
      { title: "Launch & learn", copy: "We ship, measure meaningful behaviour, and improve the work using what the data shows." },
    ]}
    faqs={faqs}
    faqTitle="Digital marketing, answered."
    finalTitle="Ready for a clearer growth plan?"
    finalCopy="Tell us what you sell, who it is for, and where growth is getting stuck. We will help identify the most practical next move."
  />;
}
