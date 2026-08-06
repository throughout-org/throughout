import React from "react";
import Link from "next/link";

interface CaseStudySidebarProps {
  metrics: {
    label: string;
    value: React.ReactNode;
    description?: string;
    valueClassName?: string;
  }[];
  technologies: string[];
  ctaText: string;
  ctaSubtext: string;
  ctaButtonText: string;
  ctaLink: string;
  themeColor?: string; // e.g. 'indigo-600', allows slight theming if needed while keeping structure consistent
}

export function CaseStudySidebar({
  metrics,
  technologies,
  ctaText,
  ctaSubtext,
  ctaButtonText,
  ctaLink,
}: CaseStudySidebarProps) {
  return (
    <div className="lg:w-1/3">
      <div className="sticky top-24 space-y-8">
        {/* Results */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-sky-500"></div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">
            The Results
          </h2>

          <div className="space-y-6">
            {metrics.map((metric, idx) => (
              <React.Fragment key={idx}>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">
                    {metric.label}
                  </p>
                  <div
                    className={`text-3xl md:text-4xl font-black text-gray-900 flex items-center ${
                      metric.valueClassName || ""
                    }`}
                  >
                    {metric.value}
                  </div>
                  {metric.description && (
                    <p className="text-xs text-gray-400 mt-2">
                      {metric.description}
                    </p>
                  )}
                </div>
                {idx < metrics.length - 1 && (
                  <div className="w-full h-px bg-gray-100"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Technology Used */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">
            Technology Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-sm border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-sky-600/20 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
          <h2 className="text-2xl font-bold mb-4 relative z-10">{ctaText}</h2>
          <p className="text-gray-300 text-sm mb-6 relative z-10">
            {ctaSubtext}
          </p>
          <div className="relative z-10 text-center">
             <Link href={ctaLink} className="block w-full py-4 bg-white text-gray-900 text-center font-bold rounded-xl hover:bg-blue-50 transition-colors">
               {ctaButtonText}
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CaseStudySectionProps {
  number: string;
  title: string;
  heading?: string;
  children: React.ReactNode;
}

export function CaseStudySection({ number, title, heading, children }: CaseStudySectionProps) {
  return (
    <section>
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
        {number}. {title}
      </h2>
      {heading && <h3 className="text-3xl font-bold text-gray-900 mb-6">{heading}</h3>}
      {children}
    </section>
  );
}
