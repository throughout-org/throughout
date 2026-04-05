import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Throughout (PVT) LTD | Free Consultation',
  description: 'Ready to start your project? Contact Throughout (PVT) LTD for a free consultation. Get expert advice on web development, mobile apps, cloud solutions, and custom software. Email: info@throughout.io',
  keywords: [
    'contact Throughout (PVT) LTD',
    'get in touch',
    'free consultation',
    'software development inquiry',
    'project quote',
    'hire developers',
    'software development contact',
    'tech consultation',
    'business inquiry',
    'partnership opportunities'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.throughout.io/contact',
    siteName: 'Throughout (PVT) LTD',
    title: 'Contact Throughout (PVT) LTD - Free Consultation & Project Quote',
    description: 'Get in touch with our team for expert software development services. Free consultation available.',
    images: [
      {
        url: '/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Throughout (PVT) LTD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Throughout (PVT) LTD - Start Your Project',
    description: 'Get in touch for a free consultation on your software development needs.',
    images: ['/images/twitter-contact.png'],
  },
  alternates: {
    canonical: 'https://www.throughout.io/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
