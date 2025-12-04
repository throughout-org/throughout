import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Throoout | Free Consultation',
  description: 'Ready to start your project? Contact Throoout for a free consultation. Get expert advice on web development, mobile apps, cloud solutions, and custom software. Email: info@throoout.com',
  keywords: [
    'contact Throoout',
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
    url: 'https://throoout.com/contact',
    siteName: 'Throoout',
    title: 'Contact Throoout - Free Consultation & Project Quote',
    description: 'Get in touch with our team for expert software development services. Free consultation available.',
    images: [
      {
        url: '/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Throoout',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Throoout - Start Your Project',
    description: 'Get in touch for a free consultation on your software development needs.',
    images: ['/images/twitter-contact.png'],
  },
  alternates: {
    canonical: 'https://throoout.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
