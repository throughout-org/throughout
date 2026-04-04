import React from "react";

export default function WhatIsThroughoutAISection() {
  return (
    <section className="relative px-6 py-16 mx-auto overflow-hidden max-w-7xl lg:py-20">
      {/* <div className="absolute rounded-full top-10 -left-20 w-72 h-72 bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 rounded-full -bottom-12 w-72 h-72 bg-sky-200/30 blur-3xl" /> */}

      <div className="relative p-8 border border-gray-100 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl md:p-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-blue-50 to-sky-50">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#3698fd]"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-[#3698fd]"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-[#3698fd] uppercase">
            What is Throughout (PVT) LTD AI
          </span>
        </div>

        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
          AI That Actually Solves Problems
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-gray-600">
            Most companies experiment with artificial intelligence but struggle
            to integrate it into real workflows. Throughout (PVT) LTD AI focuses
            on building practical AI systems that connect with your existing
            tools, automate repetitive processes, and improve business
            efficiency.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Instead of isolated AI features, we build intelligent systems that
            operate inside your infrastructure and support your team every day.
          </p>
        </div>
      </div>
    </section>
  );
}
