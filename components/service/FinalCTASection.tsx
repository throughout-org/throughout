"use client";

import React from "react";
import { CalendlyButton } from "@/components/CalendlyPopup";

interface FinalCTASectionProps {
  headline: string;
  subtext: string;
  buttonText: string;
}

export default function FinalCTASection({
  headline,
  subtext,
  buttonText,
}: FinalCTASectionProps) {
  return (
    <>
      <section className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500 to-red-500">
        {/* Light Gradient Background with Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-sky-50">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-sky-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-700 sm:text-5xl">
            {headline}
          </h2>
          <p className="mb-8 text-xl text-gray-700">{subtext}</p>
          <div className="flex justify-center">
            <CalendlyButton className="flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:shadow-2xl hover:scale-105">
              {buttonText}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
