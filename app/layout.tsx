import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://throoout.com'),
  title: {
    default: "Throoout - Smart Software Solutions | Custom Web & Mobile Development",
    template: "%s | Throoout",
  },
  description: "Throoout delivers innovative software solutions for businesses. Expert web development, mobile apps, cloud services, AI/ML, and custom software. Transform your digital presence with our agile development team.",
  keywords: [
    "software development",
    "web applications",
    "mobile apps",
    "API development",
    "automation",
    "software engineering",
    "custom software",
    "cloud solutions",
    "AI ML development",
    "React development",
    "Next.js",
    "enterprise software"
  ],
  authors: [{ name: "Bavaram Karunaharan", url: "https://bavaram.info" }],
  creator: "Throoout",
  publisher: "Throoout",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://throoout.com",
    siteName: "Throoout",
    title: "Throoout - Smart Software Solutions",
    description: "Modern software engineering startup helping businesses build fast, secure, and scalable digital products.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Throoout Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Throoout - Smart Software Solutions",
    description: "Expert software development for modern businesses",
    creator: "@throoout",
    images: ["/images/twitter-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Throoout',
    url: 'https://throoout.com',
    logo: 'https://throoout.com/images/logo.png',
    description: 'Smart software solutions for modern businesses. Custom web development, mobile apps, and cloud services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@throoout.com',
    },
    sameAs: [
      'https://twitter.com/throoout',
      'https://linkedin.com/company/throoout',
      'https://github.com/throoout',
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <Preloader /> */}
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
