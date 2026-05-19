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
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

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
    <div className="min-h-screen bg-white">
      <div className="relative flex min-h-[78vh] items-stretch isolate">
        <div className="absolute inset-0 h-full w-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="Case Studies"
            title={
              <>
                Real Projects. <br className="hidden md:block" />
                Real Problems. Real Results.
              </>
            }
            description="Explore how we design, build, and optimize digital products that help companies grow faster and operate more efficiently."
            cta={
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                >
                  Start a Project
                  <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg"
                >
                  View Portfolio
                </Link>
              </div>
            }
            isBackgroundColored={false}
          />
        </div>
      </div>

      <main className="flex min-h-screen flex-col items-center bg-slate-50">
        {/* Featured Case Study */}
        <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ServiceSectionHeader
            badgeText="FEATURED STORY"
            headline="A Practical Look at Performance, Growth, and Delivery"
            intro="Each case study focuses on the problem, the engineering approach, and the business result."
          />
          <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 lg:flex-row">
            <div className="flex flex-col justify-center p-10 lg:w-1/2 lg:p-16">
              <div className="flex items-center mb-6 space-x-3">
                <span
                  className={`p-2 rounded-lg bg-gradient-to-br ${featured.color} text-white shadow-md`}
                >
                  {featured.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  Featured
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
                {featured.title}
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-600">
                  {featured.industry}
                </span>
                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800">
                  {featured.service}
                </span>
              </div>
              <p className="mb-8 text-base leading-7 text-slate-600 lg:text-lg">
                Watch how we managed to take a sluggish, unoptimized website and
                transform it into a lightning-fast experience that users love
                and search engines reward.
              </p>
              <div className="mb-8 rounded-2xl border border-sky-100 bg-sky-50 p-6">
                <p className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
                  Key Result
                </p>
                <p className="text-2xl font-black text-slate-950">
                  {featured.result}
                </p>
              </div>
              <Link
                href={`/case-studies/${featured.id}`}
                className="inline-flex items-center text-lg font-bold text-sky-700 transition hover:text-sky-900"
              >
                Read Full Case Study <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-slate-950 p-12 lg:w-1/2">
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
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ServiceSectionHeader
            badgeText="MORE WORK"
            headline="More Success Stories"
            intro="Explore recent work across different product, automation, and commerce challenges."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {gridItems.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
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
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
                    {study.industry}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-950 transition-colors group-hover:text-sky-700">
                  {study.title}
                </h3>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  <p className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    Impact
                  </p>
                  <p className="text-xl font-bold text-slate-950">
                    {study.result}
                  </p>
                </div>
              </Link>
            ))}
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
    </div>
  );
}
