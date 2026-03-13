'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesGridSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Choose from our comprehensive suite of services designed to elevate your business
          </p>
        </div> */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="relative overflow-hidden transition-all duration-500 bg-white shadow-xl group rounded-3xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full p-8">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="text-3xl filter drop-shadow-sm">{service.icon}</span>
                </div>

                {/* Badge */}
                <div className="absolute transition-opacity duration-300 opacity-0 top-6 right-6 group-hover:opacity-100">
                  <div className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    Recommended
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-sky-600">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-gray-600 line-clamp-2">
                  {service.hero.subheadline}
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  {service.solutionCards.slice(0, 3).map((solution, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className={`w-4 h-4 mr-2 text-green-500`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="line-clamp-1">{solution.title}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Pushed to bottom */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                  <span className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Explore Service
                  </span>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient} group-hover:shadow-lg transition-all duration-300 group-hover:translate-x-1`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
