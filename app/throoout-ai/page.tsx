import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Throoout AI | Coming Soon",
  description: "Advanced AI solutions coming soon to Throoout.",
};

export default function ThroooutAIPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <div className="w-20 h-20 bg-indigo-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Throoout AI</h1>
        <p className="text-xl text-gray-600 mb-8">
          We are building something powerful. Our specialized AI development services page is currently under construction.
        </p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
          <FiArrowLeft className="mr-2" /> Return to Home
        </Link>
      </div>
    </main>
  );
}
