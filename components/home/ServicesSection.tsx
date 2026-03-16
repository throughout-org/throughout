"use client";
import Link from "next/link";
import { FiTrendingUp, FiSettings, FiCpu } from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const coreServices = [
  {
    id: "01",
    title: "MVP Studio",
    description:
      "Launch your product fast. We design, build, and ship production-ready MVPs for startups and new ventures.",
    href: "/mvp-studio",
    icon: <FiTrendingUp className="text-white" />,
  },
  {
    id: "02",
    title: "Product Engineering",
    description:
      "Web, mobile, and cloud applications built with scalable architecture and modern frameworks.",
    href: "/services/software-development",
    icon: <FiSettings className="text-white" />,
  },
  {
    id: "03",
    title: "AI & Automation",
    description:
      "Integrate LLMs, intelligent workflows, and data automation to streamline operations and unlock new capabilities.",
    href: "/services/ai-automation",
    icon: <FiCpu className="text-white" />,
  },
];

export default function ServicesSection() {
  const badgeText = "OUR SERVICES";
  const headline = "Our Core Services";
  const intro =
    "We focus on three core capabilities that help companies design, build, and launch modern digital products.";

  return (
    <section id="services" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={intro}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-sky-100 bg-linear-to-br from-white to-sky-50/40 p-6 shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-sky-300 group-hover:shadow-xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-70" />

                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.18em] text-sky-500">
                    {service.id}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-300 text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-sky-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn more
                    <span className="ml-2">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center rounded-full border border-sky-200 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-sky-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50 hover:shadow-lg"
          >
            Explore All Services
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
