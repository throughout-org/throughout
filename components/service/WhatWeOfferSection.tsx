"use client";

import { ServiceCard } from '@/data/services';

interface WhatWeOfferSectionProps {
  headline: string;
  intro: string;
  cards: ServiceCard[];
}

export default function WhatWeOfferSection({ headline, intro, cards }: WhatWeOfferSectionProps) {
  const cardIcons = ['🚀', '⚡', '💎', '🎯', '🔥', '✨', '🌟', '💡'];
  const gradientColors = [
    'from-blue-500/10 to-cyan-500/10',
    'from-purple-500/10 to-pink-500/10',
    'from-orange-500/10 to-red-500/10',
    'from-green-500/10 to-emerald-500/10',
    'from-indigo-500/10 to-blue-500/10',
    'from-rose-500/10 to-pink-500/10',
    'from-amber-500/10 to-yellow-500/10',
    'from-teal-500/10 to-cyan-500/10',
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WHAT WE OFFER
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            {headline}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            {intro}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon and Concept Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {cardIcons[index % cardIcons.length]}
                      </span>
                    </div>
                  </div>
                  
                  {card.concept && (
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 text-blue-700 text-xs font-bold rounded-full border border-blue-100 transition-all duration-300">
                      {card.concept}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {card.title}
                </h3>
                
                {/* Content */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {card.content}
                </p>

                {/* Ideal For Tags */}
                {card.idealFor && card.idealFor.length > 0 && (
                  <div className="pt-6 border-t border-gray-100 group-hover:border-purple-100 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-bold text-gray-700">Perfect for:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {card.idealFor.map((item, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 text-gray-700 group-hover:text-blue-700 text-sm font-medium rounded-lg border border-gray-200 group-hover:border-blue-200 transition-all duration-300 hover:scale-105"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/0 to-purple-400/10 rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
