import React from "react";
import BannerBadge from "@/components/ui/BannerBadge";

interface ServiceSectionHeaderProps {
  badgeText: string;
  headline: string;
  intro?: string;
  align?: "text-center" | "text-left" | "text-right";
  headlineSize?: string;
}

export default function ServiceSectionHeader({
  badgeText,
  headline,
  intro,
  align = "text-center",
  headlineSize = "text-3xl sm:text-4xl lg:text-5xl",
}: ServiceSectionHeaderProps) {
  return (
    <div className={`mb-12 ${align}`}>
      <BannerBadge text={badgeText} />

      <h2
        className={`mb-4 mt-3 ${headlineSize} font-bold tracking-tight text-slate-950 animate-slide-up`}
      >
        {headline}
      </h2>

      {intro && (
        <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg animate-fade-in-delay">
          {intro}
        </p>
      )}
    </div>
  );
}
