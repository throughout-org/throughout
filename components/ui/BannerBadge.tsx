import React from "react";

interface BannerBadgeProps {
  text: string;
}

export default function BannerBadge({ text }: BannerBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
      <span className="relative flex w-2 h-2">
        <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-linear-to-r from-blue-500 to-sky-500"></span>
        <span className="relative inline-flex w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-sky-500"></span>
      </span>
      <span className="text-sm font-semibold text-transparent bg-linear-to-r from-blue-600 to-sky-600 bg-clip-text uppercase tracking-widest">
        {text}
      </span>
    </div>
  );
}
