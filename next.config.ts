import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/services/:path*", destination: "/#services", permanent: true },
      { source: "/engineering", destination: "/#services", permanent: true },
      { source: "/design", destination: "/#services", permanent: true },
      { source: "/digital-marketing", destination: "/#services", permanent: true },
      { source: "/dedicated-teams", destination: "/#engagement-models", permanent: true },
      { source: "/agency-partners", destination: "/#engagement-models", permanent: true },
      { source: "/about", destination: "/#team", permanent: true },
      { source: "/case-studies/:path*", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#contact-form", permanent: true },
      { source: "/internships", destination: "/careers", permanent: true },
      { source: "/internships/:path*", destination: "/careers/:path*", permanent: true },
      { source: "/portfolio", destination: "/#work", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
