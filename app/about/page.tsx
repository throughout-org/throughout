import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutIntroSection from '@/components/about/AboutIntroSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import WhatWeDoSection from '@/components/about/WhatWeDoSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Intro Section */}
          <AboutIntroSection />

          {/* Mission & Vision */}
          <MissionVisionSection />

          {/* Core Values */}
          <CoreValuesSection />

          {/* What We Do */}
          <WhatWeDoSection />

          {/* Why Choose Us */}
          <WhyChooseUsSection />
        </div>
      </section>

      <ServicesCTASection />
      <Footer />
    </main>
  );
}
