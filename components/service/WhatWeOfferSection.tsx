"use client";

import { ServiceCard } from '@/data/services';
import { FiTrendingUp, FiZap, FiAward, FiTarget, FiActivity, FiStar, FiSun, FiCpu } from 'react-icons/fi';
import ServiceSectionHeader from '@/components/service/ServiceSectionHeader';

interface WhatWeOfferSectionProps {
  headline: string;
  intro: string;
  cards: ServiceCard[];
}

export default function WhatWeOfferSection({ headline, intro, cards }: WhatWeOfferSectionProps) {
  const cardIcons = [<FiTrendingUp key="1" />, <FiZap key="2" />, <FiAward key="3" />, <FiTarget key="4" />, <FiActivity key="5" />, <FiStar key="6" />, <FiSun key="7" />, <FiCpu key="8" />];
  const gradientColors = [
    'from-blue-500/10 to-cyan-500/10',
    'from-sky-500/10 to-pink-500/10',
    'from-orange-500/10 to-red-500/10',
    'from-green-500/10 to-emerald-500/10',
    'from-indigo-500/10 to-blue-500/10',
    'from-rose-500/10 to-pink-500/10',
    'from-amber-500/10 to-yellow-500/10',
    'from-teal-500/10 to-cyan-500/10',
  ];

  return (
    <section className="relative px-4 py-24 overflow-hidden sm:px-6 lg:px-8 bg-linear-to-b from-white via-gray-50 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 rounded-full top-20 w-96 h-96 bg-linear-to-br from-blue-100/30 to-sky-100/30 blur-3xl"></div>
        <div className="absolute left-0 rounded-full bottom-20 w-96 h-96 bg-linear-to-tr from-pink-100/30 to-orange-100/30 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <ServiceSectionHeader
          badgeText="WHAT WE OFFER"
          headline={headline}
          intro={intro}
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative p-8 transition-all duration-500 border group bg-white/80 backdrop-blur-sm border-gray-200/50 rounded-3xl hover:shadow-2xl hover:border-sky-200 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${gradientColors[index % gradientColors.length]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon and Concept Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-br from-blue-400 to-sky-400 rounded-2xl blur-xl group-hover:opacity-30"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 transition-all duration-300 transform bg-linear-to-br from-blue-500/10 to-sky-500/10 group-hover:from-blue-500/20 group-hover:to-sky-500/20 rounded-2xl group-hover:rotate-6 group-hover:scale-110">
                      <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                        {cardIcons[index % cardIcons.length]}
                      </span>
                    </div>
                  </div>
                  
                  {card.concept && (
                    <span className="px-4 py-1.5 bg-linear-to-r from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 text-blue-700 text-xs font-bold rounded-full border border-blue-100 transition-all duration-300">
                      {card.concept}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-sky-600 group-hover:bg-clip-text">
                  {card.title}
                </h3>
                
                {/* Content */}
                <p className="mb-6 text-base leading-relaxed text-gray-600">
                  {card.content}
                </p>

                {/* Ideal For Tags */}
                {card.idealFor && card.idealFor.length > 0 && (
                  <div className="pt-6 transition-colors duration-300 border-t border-gray-100 group-hover:border-sky-100">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-bold text-gray-700">Perfect for:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {card.idealFor.map((item, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 bg-linear-to-r from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-sky-50 text-gray-700 group-hover:text-blue-700 text-sm font-medium rounded-lg border border-gray-200 group-hover:border-blue-200 transition-all duration-300 hover:scale-105"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-500 opacity-0 bg-linear-to-br from-sky-400/0 to-sky-400/10 rounded-bl-3xl rounded-tr-3xl group-hover:opacity-100"></div>
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
