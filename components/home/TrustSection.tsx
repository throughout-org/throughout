"use client";

import React from "react";

export default function TrustSection() {
  const standards = [
    {
      number: "01",
      title: "Clean Engineering",
      description:
        "We enforce strict coding standards, peer reviews, and automated code analysis (SonarQube) to keep your software maintainable as it grows.",
      icon: "✨",
      color: "from-blue-500 to-cyan-300",
    },
    {
      number: "02",
      title: "Modern Infrastructure",
      description:
        "We use Infrastructure as Code and automated CI/CD pipelines to deploy software faster and reduce operational risks.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-300",
    },
    {
      number: "03",
      title: "Security First",
      description:
        "We follow industry security standards including the OWASP Top 10 to protect your application from vulnerabilities.",
      icon: "🔒",
      color: "from-blue-500 to-cyan-300",
    },
    {
      number: "04",
      title: "Data Privacy",
      description:
        "We implement strong encryption and data governance practices to ensure your application meets global privacy standards.",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-300",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Engineering Standards We{" "}
            <span className="pb-4 font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text">
              Follow
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our development practices ensure every product we build is secure,
            scalable, and built for long-term stability.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="relative p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl hover:border-gray-200"
            >
              {/* Number Badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${standard.color} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{standard.icon}</span>
                </div>
                <span className="text-sm font-bold text-gray-400">
                  {standard.number}
                </span>
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-3 bg-gradient-to-r ${standard.color} bg-clip-text text-transparent`}
              >
                {standard.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {standard.description}
              </p>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${standard.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto mt-16 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text">
              CI/CD
            </div>
            <p className="text-sm text-gray-600">Automated Deployments</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text">
              OWASP
            </div>
            <p className="text-sm text-gray-600">Security Standards</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text">
              24/7
            </div>
            <p className="text-sm text-gray-600">Infrastructure Monitoring</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text">
              Cloud
            </div>
            <p className="text-sm text-gray-600">Scalable Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
