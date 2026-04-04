import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://www.throughout.io"),

  title: {
    default: "Custom Software & AI Development Company | Throughout (PVT) LTD",
    template: "%s | Throughout (PVT) LTD",
  },

  description:
    "Throughout (PVT) LTD is a custom software and AI development company building scalable web, mobile, and cloud solutions for startups and businesses.",

  creator: "Throughout (PVT) LTD",
  publisher: "Throughout (PVT) LTD",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    url: "https://www.throughout.io",
    siteName: "Throughout (PVT) LTD",
    title: "Custom Software & AI Development Company | Throughout (PVT) LTD",
    description:
      "Custom software, web, mobile, and AI solutions built to scale modern businesses.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Throughout (PVT) LTD Software & AI Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Development Company | Throughout (PVT) LTD",
    description:
      "Custom software, web, mobile, and AI solutions for modern businesses.",
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
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.throughout.io/#organization",
    name: "Throughout (PVT) LTD",
    url: "https://www.throughout.io",
    logo: "https://www.throughout.io/images/logo.png",
    description:
      "Custom software and AI development company delivering web, mobile, and cloud solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@throughout.io",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://twitter.com/throughout",
      "https://www.linkedin.com/company/throughout",
      "https://github.com/throughout",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="uf6mvfowatdceibrh83b3u1e5xdtpb"
        />
        {/* Preload manifest only; Next.js handles fonts and CSS */}
        <link rel="preload" as="manifest" href="/site.webmanifest" />
        {/* Calendly widget styles */}
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-70B910BNDJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-70B910BNDJ');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1251107350497461');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1251107350497461&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* <Preloader /> */}
        <Navbar />
        {/* Spacer to prevent fixed navbar from hiding content */}
        <div className="h-0 lg:h-[40px]" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
