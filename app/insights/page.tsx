'use client';
import React, { useState } from 'react';
import { Insights } from '@/data/insights';

export default function InsightsPage() {
  const [page, setPage] = useState(1);
  const perPage = 6; // Show 6 insights per page
  const totalPages = Math.ceil(Insights.length / perPage);
  const paginated = Insights.slice((page - 1) * perPage, page * perPage);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 pb-24">
      {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-sky-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-semibold rounded-full shadow-lg">
                💡 Insights
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Throoout <span className="text-sky-500">Insights</span></span>
              <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">
                Trends & Ideas
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our latest insights, articles, and thought leadership on technology, innovation, and business transformation. Stay ahead with expert perspectives, industry trends, and actionable strategies from the Throoout team.
            </p>
          </div>
        </section>

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginated.map((Insight) => (
            <div
              key={Insight.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-200 to-indigo-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0" />
              <img
                src={Insight.image}
                alt={Insight.title}
                className="w-full h-52 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative p-8 flex-1 flex flex-col z-10">
                {/* Date badge */}
                <div className="absolute top-4 ">
                  <span className="px-3 py-1 bg-gradient-to-r from-gray-200 via-gray-100 to-white text-gray-700 text-xs font-semibold rounded-lg shadow">
                    {Insight.date}
                  </span>
                </div>
                {/* Title */}
                <h2 className="mt-5 text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-sky-600 transition-all duration-300 line-clamp-2">
                  {Insight.title}
                </h2>
                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 text-base">{Insight.excerpt}</p>
                {/* Read More Button */}
                <div className="w-full flex justify-end">
                  <a
                    href={`/insights/${Insight.slug}`}
                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            </div>
          ))}
        </div>
        {/* Trendy Pagination */}
        <div className="flex justify-center mt-14">
          <nav className="inline-flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                className={
                  (page === i + 1
                    ? 'bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow '
                    : 'bg-white text-gray-700 border border-blue-200 hover:bg-blue-50 ') +
                  'px-5 py-2 rounded-full font-bold transition-all hover:scale-105'
                }
              >
                {i + 1}
              </button>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
