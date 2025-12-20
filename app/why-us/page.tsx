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
  title: 'Why Choose Throoout - Your Software Development Partner',
  description: 'Discover why businesses trust Throoout for software development. Fast delivery, clean architecture, 99% client satisfaction, modern tech stack, and proven track record. Get 3x faster delivery with 45% cost reduction.',
  keywords: [
    'why choose Throoout',
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
    url: 'https://throoout.com/why-us',
    siteName: 'Throoout',
    title: 'Why Choose Throoout - Your Trusted Development Partner',
    description: '99% client satisfaction, 3x faster delivery, 45% cost reduction. Experience excellence in software development.',
    images: [
      {
        url: '/images/og-why-us.png',
        width: 1200,
        height: 630,
        alt: 'Why Choose Throoout',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Throoout for Software Development',
    description: 'Fast delivery, modern tech, 99% satisfaction. Your trusted development partner.',
    images: ['/images/twitter-why-us.png'],
  },
  alternates: {
    canonical: 'https://throoout.com/why-us',
  },
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
 
      
      {/* Hero Section */}
      <WhyUsHeroSection />

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
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

      <ServicesCTASection />
  <TrendyTuringLabel />
    </main>
  );
}
