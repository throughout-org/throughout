import React from "react";
import BannerBadge from "@/components/ui/BannerBadge";

interface ServiceSectionHeaderProps {
  badgeText: string;
  headline: string;
  intro?: string;
}

export default function ServiceSectionHeader({
  badgeText,
  headline,
  intro,
}: ServiceSectionHeaderProps) {
  return (
    <div className="mb-20 text-center">
      <BannerBadge text={badgeText} />

      <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up">
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
