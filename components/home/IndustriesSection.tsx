"use client";
import React, { useEffect, useRef, useState } from 'react';

// Auto-scrollable industries for mobile
type Industry = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

interface AutoScrollIndustriesProps {
  industries: Industry[];
}

function AutoScrollIndustries({ industries }: AutoScrollIndustriesProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardCount = industries.length;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardCount);
    }, 3500);
    return () => clearInterval(interval);
  }, [cardCount]);

  // Scroll to active card
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = (container.children as HTMLCollectionOf<HTMLElement>);
      const card = children[activeIndex];
      if (card) {
        // Only scroll horizontally, never vertically
        const containerRect = container.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        // If card is out of view horizontally, scroll only horizontally
        if (cardRect.left < containerRect.left || cardRect.right > containerRect.right) {
          const scrollLeft = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
      }
    }
  }, [activeIndex]);

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none', borderBottom: 'none' }}
      >
        {industries.map((industry: Industry, idx: number) => (
          <div
            key={industry.id}
            className="min-w-[90vw] max-w-[90vw] snap-center flex-shrink-0"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br via-blue-200 rounded-3xl flex items-center justify-center shadow-md p-0.5">
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <span className="text-3xl">{industry.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">{industry.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {industry.id === 0 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Tenant Portals</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">AI Maintenance</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Automated Workflows</span></>)}
                {industry.id === 1 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Booking Engines</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Dynamic Pricing</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">High Concurrency</span></>)}
                {industry.id === 2 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Headless Commerce</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Payment Gateways</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Personalization</span></>)}
                {industry.id === 3 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">LMS Platforms</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Video Streaming</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Gamified Learning</span></>)}
                {industry.id === 4 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Case Management</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">AI Drafting</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Bank-Grade Security</span></>)}
                {industry.id === 5 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Auditing Tools</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Compliance Dashboards</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Auto Tracking</span></>)}
                {industry.id === 6 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">HIPAA Compliant</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Telemedicine</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold border-2 border-sky-200 shadow-sm transition-all">Real-time Monitoring</span></>)}
              </div>
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Explore {industry.title} Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {industries.map((_: Industry, idx: number) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-blue-500 scale-110' : 'bg-gray-300'}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to industry ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const industries = [
    {
      id: 0,
      name: 'PropTech',
      title: 'Property',
      icon: '🏢',
      description: 'Streamline property management with automated workflows. We build platforms that integrate tenant portals, automate lease documentation, and use AI to predict maintenance needs, unlocking the full potential of your real estate portfolio.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 1,
      name: 'Travel',
      title: 'Travel & Hospitality',
      icon: '✈️',
      description: 'Create seamless booking experiences. We engineer high-concurrency booking engines and dynamic pricing algorithms that handle seasonal traffic spikes, ensuring your guests have a flawless experience from search to check-out.',
      color: 'from-sky-500 to-pink-500'
    },
    {
      id: 2,
      name: 'E-Commerce',
      title: 'E-Commerce',
      icon: '🛒',
      description: 'Scale beyond standard templates. We specialize in Headless Commerce (Next.js + Shopify/Laravel) to deliver sub-second page loads, custom payment gateway integrations, and personalized shopping experiences that drive higher conversion rates.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      name: 'EdTech',
      title: 'Education',
      icon: '📚',
      description: 'Digitalize the classroom securely. We build interactive Learning Management Systems (LMS) and student portals that support real-time video streaming, gamified learning, and secure data storage for institutions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      name: 'Legal',
      title: 'Legal Services',
      icon: '⚖️',
      description: 'Automate the fine print. Our secure solutions help law firms manage case files, automate document drafting using AI, and ensure client confidentiality with bank-grade encryption and access controls.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 5,
      name: 'Compliance',
      title: 'Regulatory Compliance',
      icon: '📋',
      description: 'Tech that follows the rules. We build auditing tools and compliance dashboards that automatically track regulatory changes, ensuring your business meets industry standards without the manual headache.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 6,
      name: 'HealthTech',
      title: 'Healthcare',
      icon: '🏥',
      description: 'Patient care meets digital efficiency. We develop HIPAA-compliant telemedicine platforms and patient management systems that prioritize data privacy, interoperability, and real-time health monitoring.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const tabCount = industries.length;

  // Auto-scroll effect for desktop tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabCount);
    }, 3500);
    return () => clearInterval(interval);
  }, [tabCount]);

  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            Industries We Serve
          </span> */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">
              Reshaping Industries Through Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored digital solutions for sector-specific challenges.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="relative mb-4">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex items-center justify-center gap-2 p-2 bg-white rounded-2xl shadow-xl max-w-6xl mx-auto">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`group relative flex-1 px-4 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === industry.id
                    ? 'bg-gradient-to-br from-blue-50 to-sky-50 text-blue-700 shadow-md border-2 border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </span>
                  <span className="text-sm">{industry.name}</span>
                </div>
                {activeTab === industry.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* Mobile auto-scrollable industry cards with dots */}
          <div className="block lg:hidden">
            <AutoScrollIndustries industries={industries} />
          </div>
          <div className="hidden lg:block">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`transition-all duration-500 ${
                  activeTab === industry.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 absolute inset-0 pointer-events-none -translate-y-4'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-10 ">
                  <div className="max-w-4xl mx-auto">
                    {/* Icon and Title Row */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br via-blue-200 rounded-3xl flex items-center justify-center shadow-md p-0.5`}>
                        <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                          <span className="text-4xl">{industry.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {industry.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    {/* Key Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.id === 0 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Tenant Portals</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">AI Maintenance</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Automated Workflows</span></>)}
                      {industry.id === 1 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Booking Engines</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Dynamic Pricing</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">High Concurrency</span></>)}
                      {industry.id === 2 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Headless Commerce</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Payment Gateways</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Personalization</span></>)}
                      {industry.id === 3 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">LMS Platforms</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Video Streaming</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Gamified Learning</span></>)}
                      {industry.id === 4 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Case Management</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">AI Drafting</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Bank-Grade Security</span></>)}
                      {industry.id === 5 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Auditing Tools</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Compliance Dashboards</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Auto Tracking</span></>)}
                      {industry.id === 6 && (<><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">HIPAA Compliant</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Telemedicine</span><span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm sm:text-base font-semibold border-2 border-sky-200 shadow-sm transition-all">Real-time Monitoring</span></>)}
                    </div>
                    {/* CTA Button */}
                    <div>
                      <a
                        href="/contact"
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
                      >
                        Explore {industry.title} Solutions
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
