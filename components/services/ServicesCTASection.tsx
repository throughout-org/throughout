"use client";

import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

export default function ServicesCTASection() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Light Gradient Background with Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
          Ready to Build Something Amazing?
        </h2>
        {/* <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s collaborate and turn your vision into a powerful digital
          reality. Our expert team is ready to help you succeed.
        </p> */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="group px-8 py-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            Book Free Consultation
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
          {/* Calendly Modal */}
          {showCalendly && (
            <div
              className="calendly-popup"
              onClick={() => setShowCalendly(false)}
            >
              <div
                className="calendly-stoppropagation"
                onClick={(e) => e.stopPropagation()}
              >
                <InlineWidget
                  url="https://calendly.com/turing-global2025/30min"
                  styles={{ height: "700px", width: "100%" }}
                />
              </div>
            </div>
          )}

          {/* <a
            href="https://wa.me/767000249"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 text-lg font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
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
        {/* <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-900 text-sm">
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
        /* Calendly popup overlay */
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

        /* Calendly widget itself */
        .calendly-popup .calendly-inline-widget {
          width: 100%;
          max-width: 900px;
          height: 700px;
          border-radius: 8px;
          /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); */
          min-width: 1000px;
        }
      `}</style>
    </>
  );
}
