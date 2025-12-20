"use client";

import { EngineeringFeature } from '@/data/services';

interface EngineeringDNASectionProps {
  headline: string;
  intro?: string;
  features: EngineeringFeature[];
}

export default function EngineeringDNASection({ headline, intro, features }: EngineeringDNASectionProps) {
  const icons = ['✨', '🚀', '🔐', '⚡', '💎', '🎯'];
  
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-sky-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-sky-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6 animate-fade-in">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-gray-700">
              A PARTNER YOU CAN TRUST
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            {headline}
          </h2>
          
          {intro && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              {intro}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-t-3xl p-8 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl  animate-fade-in-up border border-gray-100/50 hover:border-blue-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 via-sky-200/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-sky-200/20 group-hover:to-pink-500/20 rounded-t-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-sky-200/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500/10 to-sky-200/10 group-hover:from-blue-500/20 group-hover:to-sky-200/20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {icons[index % icons.length]}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                {feature.copy}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
