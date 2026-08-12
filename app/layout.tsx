import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarSpacer from "@/components/NavbarSpacer";
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
    default: "Digital Marketing, Engineering & Design Agency | Throughout (PVT) LTD",
    template: "%s | Throughout (PVT) LTD",
  },

  description:
    "Throughout (PVT) LTD is a full-stack digital growth studio combining Digital Marketing, Engineering, and Design to build and grow businesses online.",

  keywords: [
    "digital marketing agency",
    "software engineering company",
    "web design agency",
    "SEO agency Sri Lanka",
    "digital growth studio",
    "brand identity design",
    "UI UX design",
    "web development company",
    "AI automation",
    "Shopify development",
    "Throughout Sri Lanka",
    "digital agency Colombo",
  ],

  creator: "Throughout (PVT) LTD",
  publisher: "Throughout (PVT) LTD",

  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    type: "website",
    url: "https://www.throughout.io",
    siteName: "Throughout (PVT) LTD",
    title: "Digital Marketing, Engineering & Design | Throughout (PVT) LTD",
    description:
      "Full-stack digital growth — design, engineering, and marketing under one roof for startups and growing businesses.",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Throughout (PVT) LTD" }],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, Engineering & Design | Throughout (PVT) LTD",
    description: "Full-stack digital growth — design, engineering, and marketing under one roof.",
    images: ["/images/twitter-default.png"],
    creator: "@throughout_io",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },

  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",

  alternates: { canonical: "https://www.throughout.io" },
};

const GA_ID = "G-70B910BNDJ";
const FB_PIXEL_ID = "1251107350497461";

// ── Schema Markup ────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.throughout.io/#organization",
  name: "Throughout (PVT) LTD",
  alternateName: "Throughout",
  url: "https://www.throughout.io",
  logo: {
    "@type": "ImageObject",
    url: "https://www.throughout.io/images/logo.png",
    width: 190,
    height: 90,
  },
  description:
    "Throughout is a full-stack digital growth studio combining Digital Marketing, Engineering, and Design to build and grow digital businesses.",
  foundingDate: "2022",
  areaServed: ["Sri Lanka", "Worldwide"],
  serviceType: ["Digital Marketing", "Software Engineering", "UI/UX Design", "Brand Identity", "Web Development", "AI Automation"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@throughout.io",
      availableLanguage: ["English"],
      url: "https://www.throughout.io/contact",
    },
    {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+94707007992",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressLocality: "Colombo",
  },
  sameAs: [
    "https://www.linkedin.com/company/throughout-io",
    "https://www.facebook.com/throughout.io",
    "https://www.instagram.com/throughout.io",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.throughout.io/#website",
  name: "Throughout (PVT) LTD",
  url: "https://www.throughout.io",
  publisher: { "@id": "https://www.throughout.io/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.throughout.io/insights?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/digital-marketing#service",
      name: "Digital Marketing",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "SEO, paid advertising, social media management, content strategy, and email marketing to grow your digital presence and generate leads.",
      url: "https://www.throughout.io/digital-marketing",
      serviceType: "Digital Marketing",
      areaServed: ["Sri Lanka", "Worldwide"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google & Meta Ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Marketing" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/engineering#service",
      name: "Engineering",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "Web and mobile app development, cloud infrastructure, AI automation, and workflow engineering for startups and growing businesses.",
      url: "https://www.throughout.io/engineering",
      serviceType: "Software Engineering",
      areaServed: ["Sri Lanka", "Worldwide"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web & Mobile App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Development" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/design#service",
      name: "Design",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "Brand identity, UI/UX design, web design, and creative visual production for businesses that want to look premium and convert consistently.",
      url: "https://www.throughout.io/design",
      serviceType: "Design",
      areaServed: ["Sri Lanka", "Worldwide"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Design Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity & Logo Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Creatives" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/dedicated-teams#service",
      name: "Dedicated Offshore Teams",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "Long-term dedicated offshore engineering, design, data, QA, DevOps, AI, and marketing teams shaped around a company's roadmap and working rhythm.",
      url: "https://www.throughout.io/dedicated-teams",
      serviceType: "Dedicated Offshore Team",
      areaServed: ["Sri Lanka", "Worldwide"],
      audience: { "@type": "Audience", audienceType: "Startups, product companies, digital agencies, and growing businesses" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-54NGRH8P');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        <meta name="facebook-domain-verification" content="uf6mvfowatdceibrh83b3u1e5xdtpb" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                send_page_view: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
              (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      </head>

      <body className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54NGRH8P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Meta Pixel noscript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" height="1" width="1" style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <Navbar />
        <NavbarSpacer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
