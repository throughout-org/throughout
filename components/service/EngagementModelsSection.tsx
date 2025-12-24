'use client';

import { useEffect, useState } from 'react';

interface EngagementModel {
  title: string;
  description: string;
}

interface EngagementModelsSectionProps {
  headline: string;
  models: EngagementModel[];
}

export default function EngagementModelsSection({ headline, models }: EngagementModelsSectionProps) {
  const gradients = [
    'from-indigo-600 via-blue-400 to-cyan-300',
    'from-pink-500 via-fuchsia-400 to-blue-300',
    'from-emerald-400 via-teal-300 to-sky-200'
  ];

  const iconBackgrounds = [
    'from-indigo-400 to-cyan-200',
    'from-pink-400 to-blue-200',
    'from-emerald-300 to-sky-200'
  ];

  const icons = [
    <svg key="icon1" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a6 6 0 0112 0z" /></svg>,
    <svg key="icon2" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 7h20" /></svg>,
    <svg key="icon3" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
  ];

  

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glassmorphism & Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50/60 to-sky-100/60 backdrop-blur-2xl"></div>
      {/* Floating Glass Cards */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-tr from-blue-200/30 via-pink-200/20 to-cyan-100/30 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-fuchsia-200/30 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000 z-0"></div>
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white text-base font-bold rounded-full shadow-xl tracking-widest uppercase inline-block mb-4 animate-fadeInUp">
            Flexible Solutions
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 mt-2 tracking-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
              {headline}
            </span>
          </h2>
        </div>
        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
            >
              {/* Glass Card */}
              <div className="relative h-full bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-white/40 ring-1 ring-blue-100/40 hover:ring-4 hover:ring-cyan-200/60">
                {/* Gradient Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}></div>
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[index]} rounded-t-3xl`}></div>
                <div className="relative flex flex-col items-center">
                  {/* Icon Container */}
                  <div className="relative mb-8 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${iconBackgrounds[index]} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    <div className={`relative flex items-center justify-center w-20 h-20 bg-gradient-to-br ${iconBackgrounds[index]} rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/60`}>
                      <span className="text-4xl text-white drop-shadow-lg">{icons[index]}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-cyan-600 transition-all duration-300 tracking-tight">
                    {model.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium text-center">
                    {model.description}
                  </p>
                  {/* Bottom Decorative Element */}
                  <div className="mt-8 flex items-center gap-2">
                    <div className={`h-1.5 w-16 bg-gradient-to-r ${gradients[index]} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    <div className={`w-3 h-3 bg-gradient-to-r ${gradients[index]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </div>
              {/* Floating Number Badge */}
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-br from-gray-900 to-indigo-700/90 backdrop-blur-md border-4 border-white/40 rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-2xl group-hover:scale-125 transition-transform duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </section>
  );
}
