"use client";

import React from "react";

export default function TrendyTuringLabel() {
  return (
    <div
      className="relative w-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500  shadow-2xl border border-white/30 overflow-hidden"
      style={{ backdropFilter: "blur(18px) saturate(1.5)" }}
    >
      {/* Floating glassy blobs */}
      <div
        className="absolute -top-10 -left-10 w-60 h-60 bg-white/30 rounded-full blur-2xl animate-blob z-0"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute -bottom-16 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-blob z-0"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-4 text-center lg:text-left">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:max-w-4xl mb-2 md:mb-0">
          <span
            className="inline-flex items-center justify-center bg-white/90 rounded-full shadow-lg text-3xl lg:text-4xl text-blue-900 border border-white/40 backdrop-blur-lg mx-auto md:mx-0 md:self-start"
            style={{
              width: 52,
              height: 52,
              minWidth: 52,
              minHeight: 52,
              padding: 0,
            }}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6.75v-1.5A2.25 2.25 0 0 0 13.5 3h-3A2.25 2.25 0 0 0 8.25 5.25v1.5m7.5 0h-7.5m7.5 0a2.25 2.25 0 0 1 2.25 2.25v1.5m-11.25-3.75a2.25 2.25 0 0 0-2.25 2.25v1.5m0 0h15m-15 0v7.5A2.25 2.25 0 0 0 5.25 20.25h13.5A2.25 2.25 0 0 0 21 18V10.5m-15 0v-1.5m15 1.5v-1.5"
              />
            </svg>
          </span>
          <div className="w-full text-center md:text-left">
            <h2 className="text-white text-2xl lg:text-3xl font-extrabold mb-1 drop-shadow-lg break-words text-center md:text-left">
              AI Research &amp; Development
            </h2>
            <p className="text-white/90 text-base lg:text-lg font-medium w-full break-words text-center md:text-left">
              Our dedicated <span className="font-bold">Turing</span> team is focused on cutting-edge AI research and innovation.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center md:justify-end lg:justify-end lg:ml-4 lg:basis-2/5 lg:max-w-2/5 mt-4 lg:mt-0">
          <a
            href="http://turing.global/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-4xl gap-2 px-4 py-1.5 bg-gradient-to-r from-sky-100 via-blue-200 to-blue-300 text-blue-900 font-extrabold rounded-2xl shadow-xl border border-blue-100 scale-105 hover:scale-110 hover:shadow-2xl hover:bg-blue-50/80 transition-all duration-300 text-base backdrop-blur-lg ring-1 ring-white/40 w-full max-w-xs lg:w-auto lg:max-w-none"
            style={{ backdropFilter: "blur(12px) saturate(1.3)" }}
          >
            <span className="inline-block text-xl">🔬</span>
            <span className="whitespace-nowrap">Reserch & Development</span>
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
