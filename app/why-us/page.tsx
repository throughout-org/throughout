import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import WhyUsHeroSection from '@/components/whyus/WhyUsHeroSection';
import CoreStrengthsSection from '@/components/whyus/CoreStrengthsSection';
import OurApproachSection from '@/components/whyus/OurApproachSection';
import TechnologyExpertiseSection from '@/components/whyus/TechnologyExpertiseSection';
import ClientSuccessSection from '@/components/whyus/ClientSuccessSection';
import TrendyTuringLabel from '@/components/TrendyTuringLabel';

export const metadata: Metadata = {
  title: 'Why Choose Throughout (PVT) LTD - Your Software Development Partner',
  description: 'Discover why businesses trust Throughout (PVT) LTD for software development. Fast delivery, clean architecture, 99% client satisfaction, modern tech stack, and proven track record. Get 3x faster delivery with 45% cost reduction.',
  keywords: [
    'why choose Throughout (PVT) LTD',
    'software development partner',
    'fast delivery',
    'clean architecture',
    'client satisfaction',
    'modern tech stack',
    'agile methodology',
    'quality assurance',
    'continuous support',
    'cost effective solutions',
    'reliable software development',
    'experienced development team',
    '24/7 support',
    'on-time delivery'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.throughout.io/why-us',
    siteName: 'Throughout (PVT) LTD',
    title: 'Why Choose Throughout (PVT) LTD - Your Trusted Development Partner',
    description: '99% client satisfaction, 3x faster delivery, 45% cost reduction. Experience excellence in software development.',
    images: [
      {
        url: '/images/og-why-us.png',
        width: 1200,
        height: 630,
        alt: 'Why Choose Throughout (PVT) LTD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Throughout (PVT) LTD for Software Development',
    description: 'Fast delivery, modern tech, 99% satisfaction. Your trusted development partner.',
    images: ['/images/twitter-why-us.png'],
  },
  alternates: {
    canonical: 'https://www.throughout.io/why-us',
  },
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
 
      
      {/* Hero Section */}
      <WhyUsHeroSection />

      {/* Main Content Section */}
      <section className="relative px-4 py-16 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Background Decorative Elements */}
        <div className="absolute bg-blue-100 rounded-full top-20 left-10 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-100 mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Core Strengths */}
          <CoreStrengthsSection />

          {/* Our Approach */}
          <OurApproachSection />

          {/* Technology Expertise */}
          {/* <TechnologyExpertiseSection /> */}

          {/* Client Success Stories */}
          {/* <ClientSuccessSection /> */}
        </div>
      </section>

      <ServicesCTASection
        headline="Ready to Partner with Throughout (PVT) LTD?"
        subtext="Let's discuss how our expertise can accelerate your digital transformation journey."
        buttonText="Schedule a Consultation"
      />
  {/* <TrendyTuringLabel /> */}
    </main>
  );
}
