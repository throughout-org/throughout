import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Throoout - Smart Software Solutions | Web & Mobile App Development',
  description: 'Transform your business with Throoout\'s expert software development services. We build fast, secure, and scalable web applications, mobile apps, APIs, and automation solutions. Get started with a free consultation today.',
  keywords: [
    'software development',
    'web application development',
    'mobile app development',
    'custom software solutions',
    'API development',
    'automation solutions',
    'React development',
    'Next.js development',
    'Node.js development',
    'cloud solutions',
    'software engineering',
    'digital transformation',
    'enterprise software',
    'startup software development',
    'agile development',
    'full stack development'
  ],
  authors: [{ name: 'Throoout', url: 'https://throoout.com' }],
  creator: 'Throoout',
  publisher: 'Throoout',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://throoout.com',
    siteName: 'Throoout',
    title: 'Throoout - Smart Software Solutions | Web & Mobile App Development',
    description: 'Transform your business with expert software development. Fast, secure, and scalable digital solutions.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Throoout - Smart Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Throoout - Smart Software Solutions',
    description: 'Expert software development for web, mobile, and cloud solutions.',
    images: ['/images/twitter-image.png'],
    creator: '@throoout',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://throoout.com',
  },
};

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