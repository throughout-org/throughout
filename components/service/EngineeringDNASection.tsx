"use client";

import { EngineeringFeature } from "@/data/services";
import {
  FiStar,
  FiTrendingUp,
  FiLock,
  FiZap,
  FiAward,
  FiTarget,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

interface EngineeringDNASectionProps {
  badgeText: string;
  headline: string;
  intro?: string;
  features: EngineeringFeature[];
}

export default function EngineeringDNASection({
  badgeText,
  headline,
  intro,
  features,
}: EngineeringDNASectionProps) {
  const icons = [
    <FiStar key="1" />,
    <FiTrendingUp key="2" />,
    <FiLock key="3" />,
    <FiZap key="4" />,
    <FiAward key="5" />,
    <FiTarget key="6" />,
  ];

  return (
    <section className="relative px-4 py-24 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-sky-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-sky-100/30 blur-3xl"></div>
        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={intro}
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 transition-all duration-500 border group bg-white/70 backdrop-blur-sm rounded-t-3xl hover:bg-white hover:-translate-y-2 hover:shadow-xl animate-fade-in-up border-gray-100/50 hover:border-blue-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 via-sky-200/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-sky-200/20 group-hover:to-pink-500/20 rounded-t-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-400/30 to-sky-200/30 rounded-2xl blur-xl group-hover:opacity-100"></div>
                <div className="relative flex items-center justify-center transition-all duration-500 transform w-14 h-14 bg-gradient-to-br from-blue-500/10 to-sky-200/10 group-hover:from-blue-500/20 group-hover:to-sky-200/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    {icons[index % icons.length]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 group-hover:bg-clip-text">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                {feature.copy}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-blue-500 via-sky-500 to-pink-500 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
