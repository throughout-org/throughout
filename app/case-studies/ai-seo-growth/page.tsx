import React from "react";
import { FiTrendingUp, FiTarget, FiSearch, FiEdit3 } from "react-icons/fi";
import { Metadata } from "next";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import { CaseStudySidebar, CaseStudySection } from "@/components/case-studies/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AI SEO Growth Experiment | Case Study",
  description: "How we used an AI-driven SEO strategy to increase organic impressions and achieve top 10 rankings for a publishing blog.",
};

export default function AISEOCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] items-stretch isolate">
        <div className="absolute inset-0 h-full w-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="AI + SEO"
            title="AI SEO Growth Experiment"
            description="Running an intensive SEO growth experiment using AI to scale content, optimize technical aspects, and significantly boost organic visibility."
            cta={null}
            isBackgroundColored={false}
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-16">
          
          <CaseStudySection number="1" title="Overview">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Client:</span>
                  <span className="text-gray-600">Niche Publishing Blog</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Industry:</span>
                  <span className="text-gray-600">Publishing / Content</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Services:</span>
                  <span className="text-gray-600">AI-Driven SEO, Content Strategy</span>
                </li>
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection number="2" title="The Problem" heading="Stagnant traffic and invisible content.">
            <p className="text-lg text-gray-600 leading-relaxed">
              Despite publishing highly informational content, the client's website had shockingly low organic visibility. Their content wasn't structured for modern search engines, and they lacked the resources to manually research keywords and optimize existing posts. Traffic was flatlining and entirely reliant on unpredictable social media algorithms.
            </p>
          </CaseStudySection>

          <CaseStudySection number="3" title="Our Solution" heading="An AI-powered content engine.">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We shifted to a data-driven, AI-assisted approach. Instead of guessing what would rank, we used AI to identify gaps, optimize intent, and structure content technically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <FiSearch className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">AI Keyword Discovery</h4>
                <p className="text-gray-600 text-sm">Used AI models to process large datasets and uncover long-tail, low-competition keywords.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <FiEdit3 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Content Optimization</h4>
                <p className="text-gray-600 text-sm">Structured programmatic content briefs and enforced semantic HTML using NLP principles.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <FiTarget className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Technical SEO</h4>
                <p className="text-gray-600 text-sm">Fixed broken links, structured schema markup automatically, and improved internal linking.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Continuous Monitoring</h4>
                <p className="text-gray-600 text-sm">Set up automated tracking via Google Search Console APIs to adapt the strategy rapidly.</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="4" title="Visual Proof">
            <div className="bg-white rounded-3xl p-8 overflow-hidden relative shadow-lg border border-gray-200">
               <div className="mb-6">
                 <h4 className="text-lg font-bold text-gray-800">Organic Growth Trend (90 Days)</h4>
                 <p className="text-sm text-gray-500">Google Search Console Impressions vs Clicks</p>
               </div>
               {/* Abstract chart representation */}
               <div className="w-full h-64 relative flex items-end justify-between border-b-2 border-l-2 border-gray-200 pb-2 pl-2">
                 {[15, 20, 25, 23, 30, 45, 60, 55, 75, 85, 95, 100].map((height, i) => (
                    <div key={i} className="flex flex-col justify-end items-center w-1/12 group h-full">
                       <div 
                         className="w-full mx-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-sm transition-all duration-500 group-hover:opacity-80 relative"
                         style={{ height: `${height}%` }}
                       >
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                           Day {i * 7 + 7}
                         </div>
                       </div>
                    </div>
                 ))}
                 
                 {/* Trend line overlay */}
                 <svg className="absolute inset-0 h-full w-full object-fill pointer-events-none" preserveAspectRatio="none">
                   <path d="M0,200 Q100,180 200,160 T400,100 T600,60 T800,20" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 5" opacity="0.6"/>
                 </svg>
               </div>
            </div>
          </CaseStudySection>

        </div>

        {/* Sidebar */}
        <CaseStudySidebar 
          metrics={[
            {
              label: "Organic Traffic Growth",
              value: <>+72% <FiTrendingUp className="text-green-500 ml-3 w-8 h-8"/></>,
            },
            {
              label: "Top 10 Rankings",
              value: "24 new keywords",
              valueClassName: "text-3xl",
              description: "First-page Google rankings."
            },
            {
              label: "Organic Impressions",
              value: "3.5x Increase",
              valueClassName: "text-purple-600 text-3xl",
              description: "Measured over the 90-day period."
            }
          ]}
          technologies={['OpenAI APIs', 'Google Search Console', 'Ahrefs API', 'Python NLP', 'Next.js App Router', 'MDX']}
          ctaText="Want scalable traffic?"
          ctaSubtext="Stop guessing what works. Let's build a data-driven, AI-powered system for your content."
          ctaButtonText="Plan Your SEO Strategy"
          ctaLink="/contact"
        />
      </div>
    </main>
  );
}
