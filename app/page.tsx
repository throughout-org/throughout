'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import TechStackSection from '@/components/home/TechStackSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import EngagementFrameworkSection from '@/components/home/EngagementFrameworkSection';
import TrustSection from '@/components/home/TrustSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Engagement Framework */}
      <EngagementFrameworkSection />

      {/* Trust Section */}
      <TrustSection />
       {/* Technology Stack Showcase */}
      <TechStackSection />
      {/* Footer */}
        <ServicesCTASection />
     

      
    </div>
  );
}