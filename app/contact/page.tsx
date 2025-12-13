import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import ContactFAQSection from '@/components/contact/ContactFAQSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import TrendyTuringLabel from '@/components/TrendyTuringLabel';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactInfoSection />
      {/* <ContactMapSection /> */}
      <ContactFAQSection />
      <ServicesCTASection />
       <TrendyTuringLabel />
    </div>
  );
}
