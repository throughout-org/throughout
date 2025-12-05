import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutIntroSection from '@/components/about/AboutIntroSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import WhatWeDoSection from '@/components/about/WhatWeDoSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';

export const metadata: Metadata = {
  title: 'About Throoout - Your Trusted Software Development Partner',
  description: 'Learn about Throoout\'s mission to deliver innovative software solutions. We specialize in web development, mobile apps, cloud solutions, and AI/ML. Discover our core values, vision, and commitment to excellence in software engineering.',
  keywords: [
    'about Throoout',
    'software development company',
    'our mission',
    'our vision',
    'company values',
    'innovation',
    'excellence',
    'integrity',
    'software engineering team',
    'agile methodology',
    'quality assurance',
    'client success',
    'digital transformation experts'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://throoout.com/about',
    siteName: 'Throoout',
    title: 'About Throoout - Your Trusted Software Development Partner',
    description: 'Discover Throoout\'s mission, vision, and values. Expert software development with innovation and excellence.',
    images: [
      {
        url: '/images/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Throoout',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Throoout - Software Development Experts',
    description: 'Our mission, vision, and commitment to delivering exceptional software solutions.',
    images: ['/images/twitter-about.png'],
  },
  alternates: {
    canonical: 'https://throoout.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
 
      
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
 
    </main>
  );
}
