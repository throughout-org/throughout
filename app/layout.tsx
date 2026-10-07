import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
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
    default: "Offshore Software Development & Dedicated Teams | Throughout",
    template: "%s | Throughout",
  },

  description:
    "Throughout is an offshore software development studio in Colombo, Sri Lanka. Hire dedicated developers or a project team to build websites, apps and SaaS.",

  keywords: [
    "offshore software development",
    "hire dedicated developers",
    "dedicated development team",
    "dedicated software development team",
    "outsource web development",
    "offshore web development",
    "MVP development company",
    "SaaS development company",
    "web development agency",
    "Shopify development agency",
    "UI UX design agency",
    "software development Sri Lanka",
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
      "Full-stack digital growth with design, engineering, and marketing under one roof for startups and growing businesses.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, Engineering & Design | Throughout (PVT) LTD",
    description: "Full-stack digital growth with design, engineering, and marketing under one roof.",
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
    "Throughout is an offshore software development studio in Colombo, Sri Lanka. We design, build and grow websites, apps and SaaS platforms, and provide dedicated development teams for companies in Australia, Europe and beyond.",
  foundingDate: "2022",
  areaServed: ["Australia", "New Zealand", "Europe", "United Kingdom", "Middle East", "Sri Lanka"],
  serviceType: ["Software Development", "Web Development", "Mobile App Development", "UI/UX Design", "SEO and Digital Marketing", "Dedicated Development Teams"],
  knowsAbout: ["Next.js", "React", "Node.js", "Laravel", "Shopify", "SaaS development", "MVP development", "AI automation", "SEO"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@throughout.io",
      availableLanguage: ["English"],
      url: "https://www.throughout.io/#contact-form",
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
      "@id": "https://www.throughout.io/#software-development",
      name: "Software Development",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "Custom software development for web, mobile and SaaS: websites, web apps, mobile apps, MVPs and e-commerce, from first release to scale.",
      url: "https://www.throughout.io/#services",
      serviceType: "Software Development",
      areaServed: ["Australia", "New Zealand", "Europe", "United Kingdom", "Middle East"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & web app development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile app development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS & MVP development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & workflow automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify & e-commerce development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud, DevOps & QA" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/#design",
      name: "UI/UX & Website Design",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "UI/UX design, website design, prototypes and design systems built around real user tasks.",
      url: "https://www.throughout.io/#services",
      serviceType: "UI/UX Design",
      areaServed: ["Australia", "New Zealand", "Europe", "United Kingdom", "Middle East"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "UI/UX & Website Design",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & landing page design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design systems" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand identity" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/#marketing",
      name: "SEO & Digital Marketing",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "SEO services, content, Google and Meta ads, and conversion optimisation that turn visits into customers.",
      url: "https://www.throughout.io/#services",
      serviceType: "Digital Marketing",
      areaServed: ["Australia", "New Zealand", "Europe", "United Kingdom", "Middle East"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO & Digital Marketing",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google & Meta ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion optimisation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email & messaging campaigns" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.throughout.io/#dedicated-teams",
      name: "Dedicated Development Teams",
      provider: { "@id": "https://www.throughout.io/#organization" },
      description: "Hire dedicated developers, designers, QA and marketers who work inside your company, tools and roadmap, from Colombo, Sri Lanka (GMT+5:30).",
      url: "https://www.throughout.io/#engagement-models",
      serviceType: "Dedicated Development Team",
      areaServed: ["Australia", "New Zealand", "Europe", "United Kingdom", "Middle East"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="uf6mvfowatdceibrh83b3u1e5xdtpb" />

        {/* GTM, GA4 and the Meta Pixel. Queues exist from the start so no event is lost;
            the scripts themselves download on the first scroll, tap or key press, or 8s
            after load, so they stay off the critical path (they cost ~250ms of main thread). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true, cookie_flags: 'SameSite=None;Secure' });
              !function(f,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[]}(window);
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
              (function(){
                var loaded = false, events = ['scroll','pointerdown','keydown','touchstart'];
                function add(src){ var s = document.createElement('script'); s.async = true; s.src = src; document.head.appendChild(s); }
                function load(){
                  if (loaded) return; loaded = true;
                  events.forEach(function(e){ removeEventListener(e, load); });
                  add('https://www.googletagmanager.com/gtm.js?id=GTM-54NGRH8P');
                  add('https://www.googletagmanager.com/gtag/js?id=${GA_ID}');
                  add('https://connect.facebook.net/en_US/fbevents.js');
                }
                events.forEach(function(e){ addEventListener(e, load, { once: true, passive: true }); });
                addEventListener('load', function(){ setTimeout(load, 8000); });
              })();
            `,
          }}
        />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      </head>

      <body className={`${archivo.variable} ${hanken.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
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

        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
