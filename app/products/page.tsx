import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiBox } from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Throughout (PVT) LTD Products | Coming Soon",
  description: "Internal products and SaaS offerings coming soon.",
};

export default function ThroughoutProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
        <div className="w-20 h-20 bg-indigo-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FiBox className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Throughout (PVT) LTD Products</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We build tools to make modern work faster and more efficient. Our product lineup is currently under construction and will be showcased here soon.
        </p>
        <Link href="/" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-indigo-50 px-6 py-3 rounded-full w-full justify-center">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    </main>
  );
}
