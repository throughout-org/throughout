import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiActivity,
  FiTrendingUp,
  FiShoppingBag,
  FiCpu,
  FiMonitor,
} from "react-icons/fi";
import { Metadata } from "next";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import InnerBanner from "@/components/ui/InnerBanner";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
  title: "Case Studies | Real Results & Real Projects",
  description:
    "Explore how we design, build, and optimize digital products that help companies grow faster and operate more efficiently.",
};

const caseStudies = [
  {
    id: "website-performance-optimization",
    title: "Website Performance Optimization",
    industry: "E-Commerce / Content",
    service: "Performance Optimization",
    result: "Page load time: 5.1s → 1.7s",
    icon: <FiActivity className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "ai-seo-growth",
    title: "AI SEO Growth Experiment",
    industry: "Publishing / Blog",
    service: "AI-Driven SEO",
    result: "+72% organic traffic growth",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "from-[#3698fd] to-[#377bff]",
  },
  {
    id: "shopify-store-conversion",
    title: "Shopify Store Conversion Improvement",
    industry: "Retail / E-Commerce",
    service: "Shopify Development",
    result: "+38% conversion rate",
    icon: <FiShoppingBag className="w-6 h-6" />,
    color: "from-orange-400 to-red-500",
  },
  {
    id: "workflow-automation-system",
    title: "Workflow Automation System",
    industry: "B2B Services",
    service: "Workflow Automation",
    result: "Reduced manual work by 80%",
    icon: <FiCpu className="w-6 h-6" />,
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "mvp-product-launch",
    title: "SaaS MVP Development",
    industry: "Technology / Startup",
    service: "Software Development",
    result: "Launched in 4 weeks",
    icon: <FiMonitor className="w-6 h-6" />,
    color: "from-[#3698fd] to-[#377bff]",
  },
];

export default function CaseStudiesPage() {
  const featured = caseStudies[0];
  const gridItems = caseStudies.slice(1);

  return (
    <>
      {/* Hero Section */}
      <InnerBanner
        badgeText="Case Studies"
        title={
          <>
            Real projects. <br className="hidden md:block" />
            Real problems. Real results.
          </>
        }
        description="Explore how we design, build, and optimize digital products that help companies grow faster and operate more efficiently."
      />
      <main className="flex flex-col items-center min-h-screen bg-gray-50">
        {/* Featured Case Study */}
        <section className="w-full px-6 py-16 mx-auto max-w-7xl lg:py-24">
          <div className="flex flex-col overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-xl lg:flex-row rounded-3xl hover:shadow-2xl hover:-translate-y-1">
            <div className="flex flex-col justify-center p-10 lg:w-1/2 lg:p-16">
              <div className="flex items-center mb-6 space-x-3">
                <span
                  className={`p-2 rounded-lg bg-gradient-to-br ${featured.color} text-white shadow-md`}
                >
                  {featured.icon}
                </span>
                <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  Featured
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                {featured.title}
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                  {featured.industry}
                </span>
                <span className="px-3 py-1 text-sm font-medium text-[#3698fd] rounded-full bg-[#3698fd]/10">
                  {featured.service}
                </span>
              </div>
              <p className="mb-8 text-lg text-gray-600">
                Watch how we managed to take a sluggish, unoptimized website and
                transform it into a lightning-fast experience that users love
                and search engines reward.
              </p>
              <div className="p-6 mb-8 border border-blue-100 bg-blue-50 rounded-2xl">
                <p className="mb-1 text-sm font-bold tracking-wider text-[#3698fd] uppercase">
                  Key Result
                </p>
                <p className="text-2xl font-black text-gray-900">
                  {featured.result}
                </p>
              </div>
              <Link
                href={`/case-studies/${featured.id}`}
                className="inline-flex items-center text-[#3698fd] font-bold hover:text-[#377bff] transition-colors text-lg"
              >
                Read Full Case Study <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 bg-gray-900 relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
              {/* A stylized placeholder for an image representing performance */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-90" />
              <div className="z-10 flex flex-col w-full max-w-sm space-y-4">
                <div className="p-6 border border-gray-700 shadow-2xl bg-gray-800/80 backdrop-blur-md rounded-xl animate-float">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-3 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center justify-center w-16 h-8 text-sm font-bold text-white bg-red-500 rounded-lg">
                      48
                    </div>
                  </div>
                  <div className="w-full h-2 mb-2 bg-gray-700 rounded-full">
                    <div className="w-1/3 h-full bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-400">Before Optimization</p>
                </div>

                <div className="p-6 translate-x-8 border border-gray-700 shadow-2xl bg-gray-800/80 backdrop-blur-md rounded-xl animate-float filter animation-delay-2000">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-24 h-3 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center justify-center w-16 h-8 text-sm font-bold text-white bg-green-500 rounded-lg">
                      92
                    </div>
                  </div>
                  <div className="w-full h-2 mb-2 bg-gray-700 rounded-full">
                    <div className="h-full bg-green-500 rounded-full w-11/12 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
                  <p className="text-xs text-gray-400">After Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="w-full px-6 py-12 mx-auto max-w-7xl lg:py-16">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                More Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Explore our recent work across different verticals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {gridItems.map((study, idx) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="relative flex flex-col h-full p-8 overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-sm group rounded-3xl hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <FiArrowRight className="w-6 h-6 text-gray-400 transition-transform duration-300 transform translate-x-4 group-hover:text-[#3698fd] group-hover:translate-x-0" />
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.color} text-white flex items-center justify-center mb-8 shadow-lg`}
                >
                  {study.icon}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-[#3698fd]">
                  {study.title}
                </h3>

                <div className="pt-6 mt-auto border-t border-gray-100">
                  <p className="mb-1 text-sm font-medium tracking-wider text-gray-500 uppercase">
                    Impact
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    {study.result}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative w-full px-6 py-24 mt-12 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-blue-950"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-blue-500 opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h2 className="mb-8 text-2xl font-light leading-relaxed text-white md:text-4xl">
              &quot;Throoout helped us scale our e-commerce platform and
              dramatically improve our search visibility. The ROI was virtually
              immediate.&quot;
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 border-2 border-blue-300 rounded-full shadow-lg bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">Sarah Jenkins</p>
                <p className="font-medium text-blue-300">
                  Founder, Retail Brand
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="flex flex-col items-center justify-center w-full px-6 py-24 text-center bg-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            Ready to Build Something Similar?
                        </h2>
                        <p className="mb-10 text-xl text-gray-600">
                            Let&apos;s talk about your next project and see how we can help you achieve results like these.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <PrimaryButton href="/contact">
                                Book a Strategy Call
                            </PrimaryButton>
                            <SecondaryButton href="/portfolio">
                                View Full Portfolio
                            </SecondaryButton>
                        </div>
                    </div>
                </section> */}
      </main>
      <ServicesCTASection
        headline={"Ready to Build Something Amazing?"}
        subtext={
          "Building the future, one line of code at a time. We transform ideas into powerful digital solutions."
        }
        buttonText={"Book Free Strategy Call"}
      />
    </>
  );
}
