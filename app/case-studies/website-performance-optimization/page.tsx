import React from "react";
import { FiCheckCircle, FiActivity, FiZap, FiImage, FiCode, FiArrowRight } from "react-icons/fi";
import { Metadata } from "next";
import InnerBanner from "@/components/ui/InnerBanner";
import { CaseStudySidebar, CaseStudySection } from "@/components/case-studies/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Website Performance Optimization | Case Study",
  description: "How we optimized a sluggish website, improving PageSpeed score from 48 to 92 and reducing load time by 3.4 seconds.",
};

export default function WebsitePerformanceCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerBanner 
        badgeText="Performance"
        title="Website Performance Optimization"
        description="Taking a sluggish, unoptimized website and transforming it into a lightning-fast experience that users love and search engines reward."
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-16">
          
          <CaseStudySection number="1" title="Overview">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Client:</span>
                  <span className="text-gray-600">E-commerce fashion brand</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Industry:</span>
                  <span className="text-gray-600">Retail / E-Commerce</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Services:</span>
                  <span className="text-gray-600">Performance Optimization, CDN Setup</span>
                </li>
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection number="2" title="The Problem" heading="Losing sales to load screens.">
            <p className="text-lg text-gray-600 leading-relaxed">
              The client struggled with a bloated website that performed exceptionally poorly, especially on mobile devices. Heavy unoptimized images, excessive third-party scripts, and a lack of proper caching meant that the website loaded slowly. This resulted in high bounce rates, poor user experience, and a direct loss in conversions.
            </p>
          </CaseStudySection>

          <CaseStudySection number="3" title="Our Solution" heading="A complete performance overhaul.">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We conducted a comprehensive performance audit and implemented targeted optimizations across the entire stack.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <FiImage className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Image Optimization</h4>
                <p className="text-gray-600 text-sm">Implemented next-gen formats (WebP/AVIF) and responsive image sizing.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <FiCode className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Code Minification</h4>
                <p className="text-gray-600 text-sm">Minified and bundled CSS/JS, and deferred non-critical scripts.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <FiZap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Edge Caching</h4>
                <p className="text-gray-600 text-sm">Configured aggressively cached edge rules using a global CDN.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <FiActivity className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Core Web Vitals</h4>
                <p className="text-gray-600 text-sm">Eliminated layout shifts and optimized the largest contentful paint.</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="4" title="Visual Proof">
            <div className="bg-gray-900 rounded-3xl p-8 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-center">
                 {/* Before */}
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full md:w-1/2">
                   <p className="text-gray-400 text-sm font-semibold uppercase mb-4 text-center">Before Optimization</p>
                   <div className="flex justify-center mb-4">
                     <div className="w-32 h-32 rounded-full border-8 border-red-500 flex items-center justify-center bg-gray-900 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                        <span className="text-4xl font-black text-white">48</span>
                     </div>
                   </div>
                   <div className="space-y-3">
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-400">Load Time</span>
                       <span className="font-bold text-red-400">5.1s</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-400">LCP</span>
                       <span className="font-bold text-red-400">4.8s</span>
                     </div>
                   </div>
                 </div>

                 <div className="text-white bg-indigo-600 p-3 rounded-full shadow-lg z-20 hidden md:block">
                   <FiArrowRight className="w-6 h-6" />
                 </div>

                 {/* After */}
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full md:w-1/2">
                   <p className="text-white text-sm font-bold uppercase mb-4 text-center">After Optimization</p>
                   <div className="flex justify-center mb-4">
                     <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center bg-gray-900 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                        <span className="text-4xl font-black text-white">92</span>
                     </div>
                   </div>
                   <div className="space-y-3">
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-300">Load Time</span>
                       <span className="font-bold text-green-400">1.7s</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-300">LCP</span>
                       <span className="font-bold text-green-400">1.2s</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="5" title="Client Testimonial">
            <div className="bg-blue-50/50 rounded-3xl p-10 border border-blue-100 relative">
              <FiCheckCircle className="absolute top-8 right-8 w-12 h-12 text-blue-200 opacity-50" />
              <p className="text-xl md:text-2xl text-gray-900 font-medium italic mb-8 leading-relaxed">
                &quot;The difference is night and day. Our mobile conversion rate shot up immediately after the optimization. We didn&apos;t realize how much money we were leaving on the table because of a slow website.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center font-bold text-xl text-gray-500">M</div>
                <div>
                  <p className="font-bold text-gray-900">Mark Thompson</p>
                  <p className="text-sm text-gray-600">CTO, E-commerce Fashion Brand</p>
                </div>
              </div>
            </div>
          </CaseStudySection>

        </div>

        {/* Sidebar */}
        <CaseStudySidebar 
          metrics={[
            {
              label: "PageSpeed Score",
              value: <>48 <span className="text-xl text-gray-400 mx-2">→</span> 92</>,
            },
            {
              label: "Load Time",
              value: <>5.1s <span className="text-xl text-gray-400 mx-2">→</span> 1.7s</>,
            },
            {
              label: "Core Web Vitals",
              value: <><FiCheckCircle className="mr-2" /> Fully Passed</>,
              valueClassName: "text-green-600 text-xl font-bold"
            },
            {
              label: "Conversion Rate",
              value: "+28%",
              valueClassName: "text-blue-600",
              description: "Correlated directly with performance boost."
            }
          ]}
          technologies={['Next.js', 'React', 'Cloudflare', 'Google PageSpeed Insights', 'Lighthouse', 'Vercel']}
          ctaText="Is your website losing sales?"
          ctaSubtext="Find out how much faster your site could be. Let's fix your performance issues."
          ctaButtonText="Book a Strategy Call"
          ctaLink="/contact"
        />
      </div>
    </main>
  );
}
