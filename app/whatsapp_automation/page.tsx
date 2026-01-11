
import type { Metadata } from "next";
import LeadComparisonCards from "@/components/whatsAppApi/LeadComparisonCards";
import WhatsappAutomationHero from "@/components/whatsAppApi/WhatsappAutomationHero";
import TechnicalEdge from "@/components/whatsAppApi/TechnicalEdge";
import InstantAnswersConnectivity from "@/components/whatsAppApi/InstantAnswersConnectivity";
import SalesFunnelHighlight from "@/components/SalesFunnelHighlight";
import StoreInChatHighlight from "@/components/StoreInChatHighlight";
import DashboardControlHighlight from "@/components/DashboardControlHighlight";
import AiMediaImageHighlight from "@/components/AiMediaImageHighlight";

export const metadata: Metadata = {
  title: "WhatsApp Automation Platform | AI Chatbot & CRM Integration",
  description: "Automate WhatsApp for business: AI chatbot, CRM integration, instant lead capture, and sales automation. Boost engagement and conversions with Throoout's WhatsApp Automation.",
  keywords: [
    "whatsapp automation",
    "whatsapp api",
    "ai chatbot whatsapp",
    "whatsapp crm integration",
    "whatsapp business automation",
    "lead capture whatsapp",
    "sales automation whatsapp"
  ],
  openGraph: {
    title: "WhatsApp Automation Platform | AI Chatbot & CRM Integration",
    description: "Automate WhatsApp for business: AI chatbot, CRM integration, instant lead capture, and sales automation. Boost engagement and conversions with Throoout's WhatsApp Automation.",
    url: "https://throoout.com/whatsapp_automation",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Automation by Throoout"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation Platform | AI Chatbot & CRM Integration",
    description: "Automate WhatsApp for business: AI chatbot, CRM integration, instant lead capture, and sales automation. Boost engagement and conversions with Throoout's WhatsApp Automation.",
    images: ["/images/twitter-default.png"]
  }
};

export default function WhatsappAutomationPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-20 pb-20">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <WhatsappAutomationHero />
      </div>
      <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <LeadComparisonCards />
      </div>
      <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <TechnicalEdge />
      </div>
       <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <InstantAnswersConnectivity />
      </div>
        <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <SalesFunnelHighlight />
      </div>
        <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <StoreInChatHighlight />
      </div>
         <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <DashboardControlHighlight />
      </div>
        <div className="w-full flex flex-col items-center px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
        <AiMediaImageHighlight />
      </div>
    </main>
  );
}

