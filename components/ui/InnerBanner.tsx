import React from "react";
import BannerBadge from "@/components/ui/BannerBadge";

interface InnerBannerProps {
  badgeText: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: React.ReactNode | null;
  isBackgroundColored?: boolean;
}

export default function InnerBanner(props: InnerBannerProps) {
  const {
    badgeText = "Welcome to Throughout (PVT) LTD",
    title = "Smart Software Solutions for Your Business",
    description = "Transform your business with Throughout (PVT) LTD's expert software development services. We build fast, secure, and scalable web applications, mobile apps, APIs, and automation solutions. Get started with a free consultation today.",
    cta = null,
    isBackgroundColored = true,
  } = props;
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      {isBackgroundColored && (
        <div className="absolute inset-0 z-0">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Badge */}
        <div className="mb-6 text-center">
          <BannerBadge text={badgeText} />
        </div>
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block leading-tight text-slate-950">{title}</span>
        </h1>
        <div className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg lg:text-xl">
          {description}
        </div>
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
