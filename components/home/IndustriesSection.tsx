'use client';
import { useState } from 'react';

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
      color: 'from-purple-500 to-pink-500'
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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            Industries We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Reshaping Industries Through Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored digital solutions for sector-specific challenges.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="relative mb-12">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex items-center justify-center gap-2 p-2 bg-white rounded-2xl shadow-xl max-w-6xl mx-auto">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`group relative flex-1 px-4 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === industry.id
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 text-blue-700 shadow-md border-2 border-blue-200'
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
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Tabs */}
          <div className="lg:hidden">
            {/* Active Tab Display */}
            <div className="bg-white rounded-2xl shadow-xl p-4 mb-4">
              <div className={`flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 ${industries[activeTab].color.replace('from-', 'border-').split(' ')[0].replace('to-', '')} rounded-xl`}>
                <div className={`flex items-center gap-3 bg-gradient-to-r ${industries[activeTab].color} bg-clip-text text-transparent`}>
                  <span className="text-4xl">{industries[activeTab].icon}</span>
                  <span className="font-bold text-lg text-gray-800">{industries[activeTab].title}</span>
                </div>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Mobile Tab Grid */}
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === industry.id
                      ? `bg-gradient-to-br from-blue-50 to-purple-50 border-2 ${industry.color.replace('from-', 'border-').split(' ')[0].replace('to-', '')} shadow-lg scale-105`
                      : 'bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl">{industry.icon}</span>
                    <span className={`text-xs ${activeTab === industry.id ? 'text-gray-800 font-bold' : ''}`}>{industry.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`transition-all duration-500 ${
                activeTab === industry.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 absolute inset-0 pointer-events-none -translate-y-4'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-10 border border-gray-200">
                <div className="max-w-4xl mx-auto">
                  {/* Icon and Title Row */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-md`}>
                      <span className="text-4xl">{industry.icon}</span>
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
                    {industry.id === 0 && (
                      <>
                        <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">Tenant Portals</span>
                        <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">AI Maintenance</span>
                        <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">Automated Workflows</span>
                      </>
                    )}
                    {industry.id === 1 && (
                      <>
                        <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Booking Engines</span>
                        <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Dynamic Pricing</span>
                        <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">High Concurrency</span>
                      </>
                    )}
                    {industry.id === 2 && (
                      <>
                        <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">Headless Commerce</span>
                        <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">Payment Gateways</span>
                        <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">Personalization</span>
                      </>
                    )}
                    {industry.id === 3 && (
                      <>
                        <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-200">LMS Platforms</span>
                        <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-200">Video Streaming</span>
                        <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-200">Gamified Learning</span>
                      </>
                    )}
                    {industry.id === 4 && (
                      <>
                        <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200">Case Management</span>
                        <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200">AI Drafting</span>
                        <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200">Bank-Grade Security</span>
                      </>
                    )}
                    {industry.id === 5 && (
                      <>
                        <span className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-200">Auditing Tools</span>
                        <span className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-200">Compliance Dashboards</span>
                        <span className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-200">Auto Tracking</span>
                      </>
                    )}
                    {industry.id === 6 && (
                      <>
                        <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium border border-rose-200">HIPAA Compliant</span>
                        <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium border border-rose-200">Telemedicine</span>
                        <span className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium border border-rose-200">Real-time Monitoring</span>
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div>
                    <a
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${industry.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      Explore {industry.title} Solutions
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
}
