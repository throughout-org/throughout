import React from "react";
import Link from "next/link";
import { FiArrowRight, FiActivity, FiTrendingUp, FiShoppingBag, FiCpu, FiMonitor } from "react-icons/fi";
import { Metadata } from "next";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import InnerBanner from "@/components/ui/InnerBanner";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata: Metadata = {
    title: "Case Studies | Real Results & Real Projects",
    description: "Explore how we design, build, and optimize digital products that help companies grow faster and operate more efficiently.",
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
        color: "from-purple-500 to-pink-500",
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
        color: "from-indigo-500 to-blue-600",
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
                title={<>Real projects. <br className='hidden md:block' />Real problems. Real results.</>}
                description="Explore how we design, build, and optimize digital products that help companies grow faster and operate more efficiently."
            />
            <main className="min-h-screen bg-gray-50 flex flex-col items-center">
                {/* Featured Case Study */}
                <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
                    <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className={`p-2 rounded-lg bg-gradient-to-br ${featured.color} text-white shadow-md`}>
                                    {featured.icon}
                                </span>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Featured</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{featured.title}</h2>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                    {featured.industry}
                                </span>
                                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full">
                                    {featured.service}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-8 text-lg">
                                Watch how we managed to take a sluggish, unoptimized website and transform it into a lightning-fast experience that users love and search engines reward.
                            </p>
                            <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-1">Key Result</p>
                                <p className="text-2xl font-black text-gray-900">{featured.result}</p>
                            </div>
                            <Link
                                href={`/case-studies/${featured.id}`}
                                className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-lg"
                            >
                                Read Full Case Study <FiArrowRight className="ml-2" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 bg-gray-900 relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
                            {/* A stylized placeholder for an image representing performance */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 opacity-90 z-0" />
                            <div className="z-10 flex flex-col space-y-4 w-full max-w-sm">
                                <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-2xl animate-float">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="h-3 w-24 bg-gray-600 rounded-full"></div>
                                        <div className="h-8 w-16 bg-red-500 text-white font-bold flex items-center justify-center rounded-lg text-sm">48</div>
                                    </div>
                                    <div className="h-2 w-full bg-gray-700 rounded-full mb-2">
                                        <div className="h-full bg-red-500 rounded-full w-1/3"></div>
                                    </div>
                                    <p className="text-xs text-gray-400">Before Optimization</p>
                                </div>

                                <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-2xl translate-x-8 animate-float filter animation-delay-2000">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="h-3 w-24 bg-gray-600 rounded-full"></div>
                                        <div className="h-8 w-16 bg-green-500 text-white font-bold flex items-center justify-center rounded-lg text-sm">92</div>
                                    </div>
                                    <div className="h-2 w-full bg-gray-700 rounded-full mb-2">
                                        <div className="h-full bg-green-500 rounded-full w-11/12 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    </div>
                                    <p className="text-xs text-gray-400">After Optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Grid */}
                <section className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-16">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">More Success Stories</h2>
                            <p className="text-lg text-gray-600">Explore our recent work across different verticals.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {gridItems.map((study, idx) => (
                            <Link
                                key={study.id}
                                href={`/case-studies/${study.id}`}
                                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FiArrowRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                                </div>

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                                    {study.icon}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider rounded-full">
                                        {study.industry}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {study.title}
                                </h3>

                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Impact</p>
                                    <p className="text-xl font-bold text-gray-900">{study.result}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="w-full bg-gray-900 py-24 px-6 relative overflow-hidden mt-12">
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-blue-950"></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <svg className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <h2 className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8">
                            &quot;Throoout helped us scale our e-commerce platform and dramatically improve our search visibility. The ROI was virtually immediate.&quot;
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg border-2 border-blue-300"></div>
                            <div className="text-left">
                                <p className="text-white font-bold text-lg">Sarah Jenkins</p>
                                <p className="text-blue-300 font-medium">Founder, Retail Brand</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className="w-full py-24 px-6 bg-white flex flex-col items-center justify-center text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Ready to Build Something Similar?
                        </h2>
                        <p className="text-xl text-gray-600 mb-10">
                            Let&apos;s talk about your next project and see how we can help you achieve results like these.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
