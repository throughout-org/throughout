import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">


      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Grid */}
      <ServicesGridSection />

      {/* CTA Section */}
      <ServicesCTASection />

 
    </div>
  );
}
