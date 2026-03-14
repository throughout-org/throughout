"use client";

import React from "react";
import { CalendlyButton } from "@/components/CalendlyPopup";

interface FinalCTASectionProps {
  headline: string;
  subtext: string;
  buttonText: string;
}

export default function ServicesCTASection({
  headline,
  subtext,
  buttonText,
}: FinalCTASectionProps) {
  return (
    <>
      <section
        className="relative px-4 py-24 overflow-hidden shadow-lg services-cta-wrapper lg:p-20"
        style={{
          borderRadius: "50px",
          border: "10px solid #ffffff",
          backgroundImage:
            "linear-gradient(to right, rgb(15 23 42 / 7%), rgb(15 23 42 / 0%)), url(/images/ctabg.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 flex flex-col max-w-6xl gap-6 mr-auto text-left">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            {headline}
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-700">
            {subtext}
          </p>

          <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
            <CalendlyButton className="flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full group bg-linear-to-r from-sky-400 via-sky-500 to-sky-600 hover:scale-105 hover:shadow-2xl">
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

            {/* <a
            href="https://wa.me/707007992"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white border-2 border-gray-200 rounded-full group hover:shadow-xl hover:scale-105"
          >
            <svg
              className="w-6 h-6 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-900">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Flexible Engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>24/7 Support</span>
          </div>
        </div> */}
        </div>
      </section>
      <style jsx global>{`
        .services-cta-wrapper {
          background-position: center right;
          margin: 0 10px 80px;
        }

        @media (min-width: 640px) {
          .services-cta-wrapper {
            background-position: center;
            margin: 60px;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}
