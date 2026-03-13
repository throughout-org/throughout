import React from "react";

interface InnerBannerProps {
  badgeText: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function InnerBanner({ badgeText, title, description }: InnerBannerProps) {
  return (
    <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto text-center max-w-7xl">
        {/* Badge */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text uppercase tracking-widest">
              {badgeText}
            </span>
          </div>
        </div>
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="block text-gray-900 leading-tight">{title}</span>
        </h1>
        <div className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600">
          {description}
        </div>
      </div>
    </section>
  );
}
