'use client';

import React from 'react';

export default function TrustSection() {
  const standards = [
    {
      number: '01',
      title: 'Clean Engineering Practices',
      description: 'We hate messy code. We enforce strict coding standards (PSR/ESLint), conduct mandatory peer code reviews, and use static analysis tools like SonarQube to ensure your software is maintainable for years to come.',
      icon: '✨',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Modern Tech Stack',
      description: 'We leverage "Infrastructure as Code" and automated CI/CD pipelines. This reduces manual deployment errors and cuts your long-term testing and server costs by up to 45%.',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'Security & Compliance',
      description: "Security isn't an afterthought. We adhere strictly to the OWASP Top 10 security protocols, performing regular vulnerability scans and penetration testing to protect your application from threats.",
      icon: '🔒',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '04',
      title: 'Data Privacy First',
      description: 'Your user data is sacred. We implement strict encryption standards and data governance protocols to ensure full compliance with privacy laws, giving your customers peace of mind.',
      icon: '🛡️',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '05',
      title: 'Staff Continuity',
      description: "We invest heavily in our team's growth. By constantly training our developers in the latest technologies, we maintain low attrition rates—meaning the experts who build your software stay to support it.",
      icon: '👥',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      number: '06',
      title: 'Flexible Talent Pool',
      description: 'Whether you need a dedicated squad or a single expert, we align with your purpose. Our simplified engagement model gives you access to top-tier talent without the recruitment overhead.',
      icon: '⚡',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Partner You Can{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trust
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Engineering standards that guarantee stability
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Number Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${standard.color} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{standard.icon}</span>
                </div>
                <span className="text-sm font-bold text-gray-400">{standard.number}</span>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${standard.color} bg-clip-text text-transparent`}>
                {standard.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {standard.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${standard.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm text-gray-600">Code Quality Standards</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              45%
            </div>
            <p className="text-sm text-gray-600">Cost Reduction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-sm text-gray-600">Security Monitoring</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              OWASP
            </div>
            <p className="text-sm text-gray-600">Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
