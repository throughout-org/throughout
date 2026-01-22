"use client";

import React from "react";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative mx-auto text-center max-w-7xl">
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-linear-to-r from-blue-600 to-blue-400">
              Portfolio
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            <span className="block text-gray-900">Our Work</span>
            <span className="block font-bold text-transparent bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text">
              Success Stories
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 sm:text-2xl">
            Explore how we've helped businesses transform through custom
            software, AI, and automation solutions.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600">
            Explore all the projects we've delivered
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.category.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 text-xs font-semibold text-blue-600 rounded bg-blue-50"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors line-clamp-2 group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs font-semibold text-gray-500">
                    {project.clientName}
                  </span>
                  <svg
                    className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
