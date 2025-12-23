'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TechnologiesSectionProps {
  headline: string;
  description?: string;
  stack: {
    name: string;
    icon: string;
  }[];
}
export default function TechnologiesSection({ headline, description, stack }: TechnologiesSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="technologies" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
              Tech Stack
            </span>
          </div> */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {headline}
            </span>
          </h2>
          {description && (
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {/* Tech Stack Grid */}
        <div className="relative overflow-hidden py-8">
          <div
            className={`flex gap-6 min-w-[200%]${isMounted ? ' animate-scroll-ltr' : ''}`}
            style={{ willChange: 'transform' }}
          >
            {/* Duplicate the array twice for seamless infinite scroll */}
            {[...stack, ...stack].map((tech, index) => (
              <div 
                key={index}
                className="group relative flex-shrink-0 w-[160px]"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`
                }}
              >
              {/* Card */}
              <div className="relative h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  {/* Icon Container with Glow Effect */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-400 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Tech Name */}
                  <div className="text-center">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
                
                {/* Bottom Accent Line */}
                {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8/12 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div> */}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
