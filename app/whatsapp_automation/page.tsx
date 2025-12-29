import LeadComparisonCards from "@/components/whatsAppApi/LeadComparisonCards";
import WhatsappAutomationHero from "@/components/whatsAppApi/WhatsappAutomationHero";
import TechnicalEdge from "@/components/whatsAppApi/TechnicalEdge";
import InstantAnswersConnectivity from "@/components/whatsAppApi/InstantAnswersConnectivity";
import SalesFunnelHighlight from "@/components/SalesFunnelHighlight";
import StoreInChatHighlight from "@/components/StoreInChatHighlight";
import DashboardControlHighlight from "@/components/DashboardControlHighlight";
import AiMediaImageHighlight from "@/components/AiMediaImageHighlight";

export default function WhatsappAutomationPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-10">
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

