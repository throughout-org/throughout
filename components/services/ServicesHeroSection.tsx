'use client';

import React from 'react';

export default function ServicesHeroSection() {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '7+', label: 'Core Services' }
  ];

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
            ✨ Premium Services
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block text-gray-900">Transform Your</span>
          <span className="block bg-gradient-to-r pb-2 from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Digital Experience
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Enterprise-grade solutions powered by cutting-edge technology and innovative design
        </p>
        
        {/* Stats */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
