import React from "react";
import { FiCheckCircle, FiShoppingCart, FiSmartphone, FiLayout, FiDollarSign } from "react-icons/fi";
import { Metadata } from "next";
import InnerBanner from "@/components/ui/InnerBanner";
import { CaseStudySidebar, CaseStudySection } from "@/components/case-studies/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Shopify Store Conversion Improvement | Case Study",
  description: "How we redesigned an underperforming Shopify store to increase conversions by 38% and significantly reduce cart abandonment.",
};

export default function ShopifyConversionCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerBanner 
        badgeText="Shopify UX"
        title="Shopify Store Conversion Improvement"
        description="Fixing an underperforming storefront by reimagining the user experience, streamlining checkout, and creating lightning-fast product pages."
      />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-16">
          
          <CaseStudySection number="1" title="Overview">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Client:</span>
                  <span className="text-gray-600">Consumer Lifestyle Brand</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Industry:</span>
                  <span className="text-gray-600">Retail / E-Commerce</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 w-32">Services:</span>
                  <span className="text-gray-600">Shopify Custom Theme, UX/UI Redesign</span>
                </li>
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection number="2" title="The Problem" heading="Traffic without traction.">
            <p className="text-lg text-gray-600 leading-relaxed">
              The brand was successfully driving traffic to their store through paid ads, but the traffic simply wasn't converting to sales. Customers were dropping off primarily at the product details page and abandoning full carts. The UX was confusing, the images took too long to load on mobile, and the checkout flow involved too many unnecessary steps.
            </p>
          </CaseStudySection>

          <CaseStudySection number="3" title="Our Solution" heading="Frictionless shopping experience.">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We identified the exact drop-off points using heatmaps and completely rebuilt the customer journey to remove all friction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <FiLayout className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">UX Redesign</h4>
                <p className="text-gray-600 text-sm">Redesigned product pages to focus on clear imagery, persuasive copy, and distinct add-to-cart actions.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-red-100 text-red-500 rounded-lg flex items-center justify-center mb-4">
                  <FiSmartphone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mobile-First UI</h4>
                <p className="text-gray-600 text-sm">Created a sticky "Buy Now" bar on mobile to ensure the conversion button is always accessible.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <FiShoppingCart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Better Checkout Flow</h4>
                <p className="text-gray-600 text-sm">Implemented a seamless slide-out cart and accelerated 1-click checkouts using Shop Pay/Apple Pay.</p>
              </div>
              <div className="bg-white border text-left border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <FiDollarSign className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Upsell Integration</h4>
                <p className="text-gray-600 text-sm">Added non-intrusive, complimentary product recommendations right before checkout.</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="4" title="Visual Proof">
            <div className="bg-gray-100 rounded-3xl p-8 overflow-hidden relative border border-gray-200 shadow-inner">
               {/* Dashboard mockup representation */}
               <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 p-6">
                 <div className="flex justify-between items-center mb-6">
                   <h4 className="text-lg font-bold text-gray-800">Store Analytics (Last 30 Days)</h4>
                   <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">+45% vs Previous</span>
                 </div>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                   <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 font-semibold mb-1">Total Sales</p>
                      <p className="text-xl font-bold text-gray-900">$48,290</p>
                   </div>
                   <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 shadow-sm">
                      <p className="text-xs text-orange-700 font-semibold mb-1">Conversion Rate</p>
                      <p className="text-xl font-black text-orange-600">3.4%</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500 font-semibold mb-1">Orders</p>
                      <p className="text-xl font-bold text-gray-900">842</p>
                   </div>
                   <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm">
                      <p className="text-xs text-green-700 font-semibold mb-1">Abandoned Cart</p>
                      <p className="text-xl font-bold text-green-600">↓ 12%</p>
                   </div>
                 </div>

                 <div className="h-32 bg-gradient-to-t from-orange-50 to-white w-full border-b border-gray-200 relative">
                    <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
                      <path d="M0,100 C100,80 200,90 300,50 C400,10 500,40 600,0 L600,100 Z" fill="rgba(249, 115, 22, 0.2)"/>
                      <path d="M0,100 C100,80 200,90 300,50 C400,10 500,40 600,0" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
                   </svg>
                 </div>
               </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="5" title="Client Testimonial">
            <div className="bg-orange-50 rounded-3xl p-10 border border-orange-100 relative">
              <FiCheckCircle className="absolute top-8 right-8 w-12 h-12 text-orange-200 opacity-50" />
              <p className="text-xl md:text-2xl text-gray-900 font-medium italic mb-8 leading-relaxed">
                &quot;The redesign changed the trajectory of our business. We were pouring money into ads without seeing returns. The new storefront is beautiful, functional, and most importantly, it actually turns our visitors into paying customers.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-200 rounded-full overflow-hidden flex items-center justify-center font-bold text-xl text-red-700">D</div>
                <div>
                  <p className="font-bold text-gray-900">David Reynolds</p>
                  <p className="text-sm text-gray-600">Founder</p>
                </div>
              </div>
            </div>
          </CaseStudySection>

        </div>

        {/* Sidebar */}
        <CaseStudySidebar 
          metrics={[
            {
              label: "Conversion Rate",
              value: "+38%",
              valueClassName: "text-4xl",
              description: "Sustained improvement over 3 months."
            },
            {
              label: "Cart Abandonment",
              value: "- 12%",
              valueClassName: "text-green-500 text-3xl",
              description: "Due to accelerated checkout process."
            },
            {
              label: "Mobile Performance",
              value: "2x Faster",
              valueClassName: "text-2xl",
              description: "Crucial for their Instagram-heavy ad strategy."
            }
          ]}
          technologies={['Shopify Liquid', 'Alpine.js', 'Tailwind CSS', 'Shop Pay integration', 'Hotjar', 'Google Analytics 4']}
          ctaText="Running a Shopify store?"
          ctaSubtext="Stop losing money on abandoned carts. Let's redesign your funnel for maximum conversions."
          ctaButtonText="Boost Your Sales"
          ctaLink="/contact"
        />
      </div>
    </main>
  );
}
