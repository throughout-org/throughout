"use client";

import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

interface FinalCTASectionProps {
  headline: string;
  subtext: string;
  buttonText: string;
}

export default function FinalCTASection({ headline, subtext, buttonText }: FinalCTASectionProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-sky-500 to-red-500">
        {/* Light Gradient Background with Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-sky-50">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-6">
            {headline}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {subtext}
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              {buttonText}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
          {showCalendly && (
            <div
              className="calendly-popup"
              onClick={() => setShowCalendly(false)}
            >
              <div
                className="calendly-stoppropagation"
                onClick={e => e.stopPropagation()}
              >
                <InlineWidget
                  url="https://calendly.com/turing-global2025/30min"
                  styles={{ height: "700px", width: "100%" }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <style jsx global>{`
        .calendly-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }
        .calendly-popup .calendly-inline-widget {
          width: 100%;
          max-width: 900px;
          height: 700px;
          border-radius: 8px;
          min-width: 1000px;
        }
      `}</style>
    </>
  );
}
