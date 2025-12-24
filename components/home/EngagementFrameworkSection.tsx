'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EngagementFrameworkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel with consistent timing
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1500); // Change every 1.5 seconds for smoother experience

    return () => clearInterval(interval);
  }, [isPaused, activeStep]); // Added activeStep to ensure clean resets

  const steps = [
    {
      number: '01',
      title: 'Discovery & Alignment',
      icon: '🤝',
      headline: 'Identify Priorities',
      description: "We don't guess. We analyze your current infrastructure and business goals to identify exactly what needs to be built. We align technical requirements with your customer's needs.",
      color: 'from-blue-600 via-blue-500 to-blue-400',
      bgColor: 'from-blue-100 via-blue-50 to-blue-50',
      ringColor: '#3b82f6',
      glowColor: 'shadow-blue-500/50',
    },
    {
      number: '02',
      title: 'Strategic Roadmap',
      icon: '🧭',
      headline: 'Define Success Criteria',
      description: 'Before a line of code is written, we define what "winning" looks like. We craft a technical specification and project plan that outlines scope, budget, and timeline.',
      color: 'from-blue-600 via-blue-500 to-blue-400',
      bgColor: 'from-blue-100 via-blue-50 to-blue-50',
      ringColor: '#3b82f6',
      glowColor: 'shadow-blue-500/50',
    },
    {
      number: '03',
      title: 'Agile Execution',
      icon: '⚙️',
      headline: 'Iterative Milestones',
      description: 'We break the project into short, achievable sprints. This gives you clear visibility into progress and allows us to adapt quickly to feedback without derailing the project.',
      color: 'from-blue-600 via-blue-500 to-blue-400',
      bgColor: 'from-blue-100 via-blue-50 to-blue-50',
      ringColor: '#3b82f6',
      glowColor: 'shadow-blue-500/50',
    },
    {
      number: '04',
      title: 'Continuous Evolution',
      icon: '📈',
      headline: 'Measurable Outcomes',
      description: 'Launch is just the beginning. We monitor performance metrics and user feedback to continuously improve the software, ensuring it scales as your business grows.',
      color: 'from-blue-600 via-blue-500 to-blue-400',
      bgColor: 'from-blue-100 via-blue-50 to-blue-50',
      ringColor: '#3b82f6',
      glowColor: 'shadow-blue-500/50',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">
           
              Engagement Framework
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            A collaborative path from concept to code
          </p>
        </div>

        {/* Desktop: Circular Diagram */}
        <div 
          className="hidden lg:block relative max-w-7xl mx-auto mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Central Circle */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-white via-gray-50 to-white rounded-full shadow-2xl ${steps[activeStep].glowColor} flex items-center justify-center z-20 border-4 border-white ring-2 ring-gray-100 transition-all duration-500`}>
              <div className="text-center p-3">
                <div className="text-5xl mb-2 animate-pulse flex justify-center items-center text-center ">{steps[activeStep].icon}</div>
                <div className={`text-base font-bold bg-gradient-to-r ${steps[activeStep].color} bg-clip-text text-transparent mb-1`}>
                  {steps[activeStep].title}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {steps[activeStep].headline}
                </div>
              </div>
            </div>

            {/* Circular Background Ring */}
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Outer Ring Segments using SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-2xl" viewBox="0 0 400 400">
                {steps.map((step, index) => {
                  const angle = (index * 90); // 90 degrees per segment for 4 steps
                  const endAngle = angle + 88; // Slight gap between segments
                  const largeArcFlag = 0;
                  
                  const startRad = (angle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  const outerRadius = 120;
                  const innerRadius = 90;
                  
                  const x1 = 200 + outerRadius * Math.cos(startRad);
                  const y1 = 200 + outerRadius * Math.sin(startRad);
                  const x2 = 200 + outerRadius * Math.cos(endRad);
                  const y2 = 200 + outerRadius * Math.sin(endRad);
                  const x3 = 200 + innerRadius * Math.cos(endRad);
                  const y3 = 200 + innerRadius * Math.sin(endRad);
                  const x4 = 200 + innerRadius * Math.cos(startRad);
                  const y4 = 200 + innerRadius * Math.sin(startRad);
                  
                  return (
                    <g key={step.number}>
                      {/* Glow effect layer */}
                      <path
                        d={`M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`}
                        className={`transition-all duration-500 ${
                          activeStep === index ? 'opacity-40 blur-sm' : 'opacity-0'
                        }`}
                        fill={step.ringColor}
                        onClick={() => setActiveStep(index)}
                      />
                      {/* Main segment */}
                      <path
                        d={`M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`}
                        className={`cursor-pointer transition-all duration-500 ${
                          activeStep === index 
                            ? 'opacity-100 scale-105' 
                            : 'opacity-40 hover:opacity-70 hover:scale-105'
                        }`}
                        fill={step.ringColor}
                        onClick={() => setActiveStep(index)}
                        style={{ transformOrigin: '200px 200px' }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Step Circles positioned around the ring */}
              {steps.map((step, index) => {
                const angle = (index * 90) + 44 - 90; // Center of each segment, adjusted for -rotate-90
                const rad = (angle * Math.PI) / 180;
                const x = 50 + (26.5 * Math.cos(rad)); // Position on ring
                const y = 50 + (26.5 * Math.sin(rad));

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold transition-all duration-500 shadow-xl hover:scale-110 border-2 border-white/60 backdrop-blur-md bg-white/30 bg-opacity-60 overflow-hidden ${
                      activeStep === index
                        ? `ring-4 ring-white ${step.glowColor}`
                        : 'hover:shadow-2xl'
                    }`}
                    style={{ left: `${x}%`, top: `${y}%`, boxShadow: activeStep === index ? '0 0 0 6px rgba(0,0,0,0.04), 0 8px 32px 0 rgba(31, 38, 135, 0.18)' : undefined }}
                  >
                    {/* Gradient overlay for trendy look */}
                    <span className={`absolute inset-0 rounded-full pointer-events-none ${activeStep === index ? `bg-gradient-to-br ${step.color} opacity-80` : `bg-gradient-to-br ${step.bgColor} opacity-60`} z-0`}></span>
                    {/* Glowing ring for active */}
                    {activeStep === index && (
                      <span className={`absolute inset-0 rounded-full pointer-events-none ${step.glowColor} opacity-30 z-0`}></span>
                    )}
                    <span className="relative z-10 text-2xl">{step.icon}</span>
                    <span className="relative z-10 text-[11px] font-bold mt-0.5 tracking-wide text-white drop-shadow-sm" style={{textShadow:'0 1px 4px rgba(0,0,0,0.12)'}}>{step.number}</span>
                  </button>
                );
              })}
            </div>

            {/* Description Cards in 4 Corners */}
            {/* Top Left - Step 3 */}
            {/* Top Left - Step 3 */}
            <div 
              className="absolute top-0 left-0 max-w-xs cursor-pointer "
              onClick={() => setActiveStep(3)}
            >
              <div className="flex items-center gap-2 justify-center mb-2">
                <div className="w-8 h-8 flex items-center rounded-lg bg-white/80 border border-emerald-200 justify-center items-center text-center">
                  <span className="text-xl">{steps[3].icon}</span>
                </div>
                <h3 className="text-base font-bold text-blue-600">
                  {steps[3].headline}
                </h3>
              </div>
              <div className={`bg-gradient-to-br p-[2px] rounded-full shadow-lg transition-all duration-500 ${
                activeStep === 3 ? `shadow-2xl scale-105 ${steps[3].glowColor}` : 'hover:shadow-xl hover:scale-105'
              }`}>
                <div className={`bg-gradient-to-br ${activeStep === 3 ? `${steps[3].color} to-blue-100` : 'from-white to-gray-50'} border border-blue-400 border-2 rounded-full p-4 transition-all duration-500`}>
                  <div className="mt-1 text-center">
                    <p className={`text-sm ${activeStep === 3 ? 'text-white' : 'text-gray-700'}`} style={{margin:0, lineHeight:'1.5'}}>
                      {steps[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right - Step 0 */}
            <div 
              className="absolute top-0 right-0 max-w-xs cursor-pointer"
              onClick={() => setActiveStep(0)}
            >
              <div className="flex items-center gap-2 justify-center mb-2">
                <div className="w-8 h-8 flex items-center rounded-lg bg-white/80 border border-blue-200 justify-center items-center text-center">
                  <span className="text-xl">{steps[0].icon}</span>
                </div>
                <h3 className="text-base font-bold text-blue-600">
                  {steps[0].headline}
                </h3>
              </div>
              <div className={`bg-gradient-to-br p-[2px] rounded-full shadow-lg transition-all duration-500 ${
                activeStep === 0 ? `shadow-2xl scale-105 ${steps[0].glowColor}` : 'hover:shadow-xl hover:scale-105'
              }`}>
                <div className={`bg-gradient-to-br ${activeStep === 0 ? `${steps[0].color} to-blue-100` : 'from-white to-gray-50'} border border-blue-400 border-2 rounded-full p-4 transition-all duration-500`}>
                  <div className="mt-1 text-center">
                    <p className={`text-sm ${activeStep === 0 ? 'text-white' : 'text-gray-700'}`} style={{margin:0, lineHeight:'1.5'}}>
                      {steps[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Step 1 */}
            <div 
              className="absolute bottom-0 right-0 max-w-xs cursor-pointer"
              onClick={() => setActiveStep(1)}
            >
              <div className="flex items-center gap-2 justify-center mb-2">
                <div className="w-8 h-8 flex items-center rounded-lg bg-white/80 border border-sky-200 justify-center items-center text-center">
                  <span className="text-xl">{steps[1].icon}</span>
                </div>
                <h3 className="text-base font-bold text-blue-600">
                  {steps[1].headline}
                </h3>
              </div>
              <div className={`bg-gradient-to-br p-[2px] rounded-full shadow-lg transition-all duration-500 ${
                activeStep === 1 ? `shadow-2xl scale-105 ${steps[1].glowColor}` : 'hover:shadow-xl hover:scale-105'
              }`}>
                <div className={`bg-gradient-to-br ${activeStep === 1 ? `${steps[1].color} to-blue-100` : 'from-white to-gray-50'} border border-blue-400 border-2 rounded-full p-4 transition-all duration-500`}>
                  <div className="mt-1 text-center">
                    <p className={`text-sm ${activeStep === 1 ? 'text-white' : 'text-gray-700'}`} style={{margin:0, lineHeight:'1.5'}}>
                      {steps[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Step 2 */}
            <div 
              className="absolute bottom-0 left-0 max-w-xs cursor-pointer"
              onClick={() => setActiveStep(2)}
            >
              <div className="flex items-center gap-2 justify-center mb-2">
                <div className="w-8 h-8 flex items-center rounded-lg bg-white/80 border border-orange-200 justify-center items-center text-center">
                  <span className="text-xl">{steps[2].icon}</span>
                </div>
                <h3 className="text-base font-bold text-blue-600">
                  {steps[2].headline}
                </h3>
              </div>
              <div className={`bg-gradient-to-br p-[2px] rounded-full shadow-lg transition-all duration-500 ${
                activeStep === 2 ? `shadow-2xl scale-105 ${steps[2].glowColor}` : 'hover:shadow-xl hover:scale-105'
              }`}>
                <div className={`bg-gradient-to-br ${activeStep === 2 ? `${steps[2].color} to-blue-100` : 'from-white to-gray-50'} border border-blue-400 border-2 rounded-full p-4 transition-all duration-500`}>
                  <div className="mt-1 text-center">
                    <p className={`text-sm ${activeStep === 2 ? 'text-white' : 'text-gray-700'}`} style={{margin:0, lineHeight:'1.5'}}>
                      {steps[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Card Grid */}
        <div 
          className="lg:hidden grid md:grid-cols-2 gap-6 mb-12 "
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`text-left transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 ${
                activeStep === index ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`${activeStep === index ? `bg-gradient-to-br ${step.color}` : 'bg-gradient-to-br from-gray-100 to-gray-50'} p-6`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl ${activeStep === index ? 'bg-white/20' : `bg-gradient-to-br ${step.bgColor}`} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-bold mb-1 ${activeStep === index ? 'text-white/80' : 'text-gray-500'}`}>{step.number}</div>
                    <h3 className={`text-lg font-bold mb-1 ${activeStep === index ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`text-sm font-medium ${activeStep === index ? 'text-white/90' : 'text-gray-600'}`}>{step.headline}</p>
                  </div>
                </div>
                
                {activeStep === index && (
                  <p className="text-white/95 text-sm leading-relaxed animate-fadeIn">
                    {step.description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <button
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md border transition-all duration-300 ${
                  activeStep === index
                    ? `bg-gradient-to-r ${step.color} text-white border-transparent shadow-lg scale-105`
                    : 'bg-white text-gray-700 border-gray-200 hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeStep === index ? 'bg-white' : `bg-gradient-to-r ${step.color}`}`}></div>
                <span className="text-sm font-medium">{step.title.split(' ')[0]}</span>
              </button>
              {index < steps.length - 1 && (
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Journey
              <svg className="inline-block w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
