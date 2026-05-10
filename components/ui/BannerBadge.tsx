import React from "react";

interface BannerBadgeProps {
  text: string;
}

export default function BannerBadge({ text }: BannerBadgeProps) {
  return (
    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-sm animate-fade-in">
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
        {text}
      </span>
    </div>
  );
}
