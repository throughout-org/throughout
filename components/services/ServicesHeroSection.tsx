"use client";

import React from "react";
import { FiStar } from "react-icons/fi";

export default function ServicesHeroSection() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "7+", label: "Core Services" },
  ];

  return (
    <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mx-auto text-center max-w-7xl">
        {/* <div className="inline-block mb-6">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400">
            <FiStar className="inline-block w-4 h-4 mr-1 text-yellow-400" /> Premium Services
          </span>
        </div> */}
        {/* Badge */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
              What We Build
            </span>
          </div>
        </div>

        <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
          <span className="block text-gray-900">
            Engineering Services <br />
            for Modern
          </span>
          <span className="block pb-4 font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text">
            Digital Products
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 sm:text-2xl">
          We design and build scalable software, automation systems, and cloud
          infrastructure that help startups and businesses launch faster and
          operate more efficiently.
        </p>

        {/* Stats */}
        {/* <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mt-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 transition-all duration-300 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:-translate-y-1">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
