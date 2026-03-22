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
  headlineSize = "text-4xl sm:text-5xl lg:text-6xl",
}: ServiceSectionHeaderProps) {
  return (
    <div className={`mb-20 ${align}`}>
      <BannerBadge text={badgeText} />

      <h2
        className={`mb-6 ${headlineSize} font-bold text-gray-900 animate-slide-up`}
      >
        {headline}
      </h2>

      {intro && (
        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 animate-fade-in-delay">
          {intro}
        </p>
      )}
    </div>
  );
}
