import type { Metadata } from 'next';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import TrendyTuringLabel from '@/components/TrendyTuringLabel';

export const metadata: Metadata = {
  title: 'Our Services - Custom Software Development Solutions | Throoout',
  description: 'Explore Throoout\'s comprehensive software development services: Web Development, Mobile Apps, Cloud Solutions, API Development, E-commerce, AI/ML, DevOps, and UI/UX Design. Custom solutions tailored to your business needs.',
  keywords: [
    'software development services',
    'web development',
    'mobile app development',
    'cloud solutions',
    'API development',
    'e-commerce development',
    'AI ML solutions',
    'DevOps services',
    'UI UX design',
    'custom software',
    'enterprise solutions',
    'React development',
    'Next.js development',
    'Node.js development',
    'Flutter development',
    'AWS cloud services',
    'Azure cloud services'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://throoout.com/services',
    siteName: 'Throoout',
    title: 'Our Services - Custom Software Development | Throoout',
    description: 'Comprehensive software development services including web, mobile, cloud, AI/ML, and more.',
    images: [
      {
        url: '/images/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Throoout Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Services | Throoout',
    description: 'Web, mobile, cloud, AI/ML, and custom software solutions.',
    images: ['/images/twitter-services.png'],
  },
  alternates: {
    canonical: 'https://throoout.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 ">


      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Grid */}
      <ServicesGridSection />

      {/* CTA Section */}
      <ServicesCTASection />
       <TrendyTuringLabel />

 
    </div>
  );
}
