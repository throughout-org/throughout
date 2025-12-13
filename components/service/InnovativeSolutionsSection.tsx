"use client";

import { useState } from 'react';
import { ServiceCard } from '@/data/services';

interface InnovativeSolutionsSectionProps {
  cards: ServiceCard[];
}

export default function InnovativeSolutionsSection({ cards }: InnovativeSolutionsSectionProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              INNOVATIVE SOLUTIONS
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-slide-up">
            Innovative web solutions{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              tailored to your needs
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Explore our comprehensive range of cutting-edge solutions designed to transform your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Scrollable Cards */}
          <div className="relative">
            {/* Fade Gradient at Top */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scroll Container */}
            <div className="max-h-[650px] overflow-y-auto space-y-3 pr-4 py-2 custom-scrollbar">
              {cards.map((card, index) => {
                const isExpanded = expandedCard === index;
                return (
                  <div 
                    key={index} 
                    className={`group relative bg-white/90 backdrop-blur-md rounded-r-3xl shadow-lg transition-all duration-500 cursor-pointer animate-slide-in-right overflow-hidden ${
                      isExpanded 
                        ? 'border-l-4 border-blue-600' 
                        : 'border-l-4 border-orange-500/40 hover:border-orange-500'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-orange-50 via-blue-50 to-purple-50 rounded-r-3xl transition-opacity duration-500 ${
                      isExpanded ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-tr-3xl transition-opacity duration-500 ${
                      isExpanded ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    <div className="relative z-10">
                      {/* Header - Always Visible */}
                      <div className="flex items-center justify-between pl-8 pr-6 py-6">
                        <div className="flex-1">
                          {/* Index Badge */}
                          <div className={`absolute -left-11 top-6 w-8 h-8 bg-gradient-to-br rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                            isExpanded 
                              ? 'from-blue-600 to-purple-600 scale-125' 
                              : 'from-orange-500 to-orange-600'
                          }`}>
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          
                          {/* Concept Badge */}
                          {card.concept && (
                            <div className={`inline-flex items-center gap-1 mb-2 px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                              isExpanded
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-orange-100/60 text-orange-700'
                            }`}>
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {card.concept}
                            </div>
                          )}
                          
                          <h3 className={`text-xl font-bold transition-all duration-300 ${
                            isExpanded 
                              ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' 
                              : 'text-gray-900'
                          }`}>
                            {card.title}
                          </h3>
                        </div>
                        
                        {/* Expand/Collapse Icon */}
                        <div className={`ml-4 flex-shrink-0 transition-all duration-300 ${
                          isExpanded ? 'text-blue-600 rotate-180' : 'text-gray-400'
                        }`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Content - Expandable */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-8 pb-6 pr-6">
                          <p className="text-gray-600 leading-relaxed text-base mb-4">
                            {card.content}
                          </p>
                          
                          {/* Learn More Link */}
                          {/* <div className="flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors duration-300">
                            <span className="text-sm font-semibold">Learn more</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Fade Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scroll Indicator */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
              <div className="flex flex-col gap-1">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse animation-delay-500"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:sticky lg:top-8">
            <div className="relative group">
              {/* Main Card */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-100 via-blue-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-blue-200/50 to-pink-200/50 animate-gradient-shift"></div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/60 via-white/60 to-purple-200/60 rounded-full blur-3xl animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/60 via-white/60 to-yellow-200/60 rounded-full blur-3xl animate-float animation-delay-2000"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-200/60 via-white/60 to-blue-200/60 rounded-full blur-3xl animate-pulse"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                    <div className="relative text-8xl text-gray-800 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      💼
                    </div>
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 drop-shadow-lg">
                    Professional Solutions
                  </h3>
                  <p className="text-gray-700 text-lg max-w-sm drop-shadow-md">
                    Cutting-edge technology meets exceptional service
                  </p>
                  
                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-md">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-300">
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-xs text-gray-700">Projects</div>
                    </div>
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-300">
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-xs text-gray-700">Clients</div>
                    </div>
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-300">
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-xs text-gray-700">Support</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-200 via-blue-200 to-pink-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
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
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out both;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f97316, #3b82f6, #a855f7);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ea580c, #2563eb, #9333ea);
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f97316 transparent;
        }
      `}</style>
    </section>
  );
}
