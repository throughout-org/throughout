"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiActivity,
  FiArrowRight,
  FiBook,
  FiBriefcase,
  FiClipboard,
  FiNavigation,
  FiShield,
  FiShoppingCart,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

type Industry = {
  id: number;
  name: string;
  title: string;
  eyebrow: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  metric: string;
  media: {
    type: "video" | "image";
    src: string;
  };
};

const industryVideos = {
  sleep:
    "/images/industries/From KlickPin CF 28 Fresh Sleep Routine Tips for Everyday - Pin-74661306318443830.mp4",
  soloTravel:
    "/images/industries/From KlickPin CF Copy these budget-friendly solo travel tips that bring style function and personality together for a polished look that still feels personal and - Pin-580542208257093841.mp4",
  travel:
    "/images/industries/From KlickPin CF Pin by Daniella Marroquín on Guardado rápido _ Cool instagram pictures Travel video ideas Beautiful places to travel.mp4",
  education:
    "/images/industries/medium-shot-young-pastor-preaching-church.jpg",
};

const industries: Industry[] = [
  {
    id: 0,
    name: "PropTech",
    title: "Property Operations",
    eyebrow: "Tenant, asset, and workflow systems",
    icon: <FiBriefcase />,
    description:
      "We build property platforms that connect tenant portals, lease workflows, maintenance requests, and reporting into one operational layer.",
    tags: ["Tenant portals", "AI maintenance", "Workflow automation"],
    metric: "Portfolio-ready platforms",
    media: { type: "video", src: industryVideos.soloTravel },
  },
  {
    id: 1,
    name: "Travel",
    title: "Travel & Hospitality",
    eyebrow: "Booking experiences built for peak demand",
    icon: <FiNavigation />,
    description:
      "From booking engines to dynamic pricing, we engineer travel products that stay fast and reliable during high-traffic windows.",
    tags: ["Booking engines", "Dynamic pricing", "Guest portals"],
    metric: "High-concurrency flows",
    media: { type: "video", src: industryVideos.travel },
  },
  {
    id: 2,
    name: "Commerce",
    title: "E-Commerce",
    eyebrow: "Conversion-focused storefronts",
    icon: <FiShoppingCart />,
    description:
      "We create headless storefronts, payment integrations, and personalized shopping journeys that help teams scale beyond template limits.",
    tags: ["Headless commerce", "Payment gateways", "Personalization"],
    metric: "Sub-second storefronts",
    media: { type: "video", src: industryVideos.soloTravel },
  },
  {
    id: 3,
    name: "EdTech",
    title: "Education Platforms",
    eyebrow: "Learning systems for modern institutions",
    icon: <FiBook />,
    description:
      "We design LMS products, student portals, and secure media experiences for institutions that need learning to feel smooth and measurable.",
    tags: ["LMS platforms", "Video learning", "Student portals"],
    metric: "Structured learning paths",
    media: { type: "image", src: industryVideos.education },
  },
  {
    id: 4,
    name: "Legal",
    title: "Legal Services",
    eyebrow: "Secure systems for sensitive work",
    icon: <FiShield />,
    description:
      "We help legal teams manage cases, automate document drafting, and protect client data with controlled access and secure workflows.",
    tags: ["Case management", "AI drafting", "Access control"],
    metric: "Confidential by design",
    media: { type: "video", src: industryVideos.soloTravel },
  },
  {
    id: 5,
    name: "Compliance",
    title: "Regulatory Compliance",
    eyebrow: "Audit trails without manual overhead",
    icon: <FiClipboard />,
    description:
      "We build compliance dashboards and audit tools that track obligations, surface risk, and make reporting easier for internal teams.",
    tags: ["Audit tools", "Risk dashboards", "Auto tracking"],
    metric: "Always visible status",
    media: { type: "video", src: industryVideos.sleep },
  },
  {
    id: 6,
    name: "HealthTech",
    title: "Healthcare",
    eyebrow: "Private, reliable patient experiences",
    icon: <FiActivity />,
    description:
      "We develop telemedicine, patient management, and monitoring systems that prioritize privacy, interoperability, and dependable care.",
    tags: ["Telemedicine", "Patient portals", "Monitoring"],
    metric: "Care-first workflows",
    media: { type: "video", src: industryVideos.sleep },
  },
];

export default function IndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const activeIndustry = useMemo(
    () =>
      industries.find((industry) => industry.id === activeIndustryId) ??
      industries[0],
    [activeIndustryId],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndustryId((currentId) => {
        const currentIndex = industries.findIndex(
          (industry) => industry.id === currentId,
        );
        return industries[(currentIndex + 1) % industries.length].id;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="INDUSTRIES"
          headline="Sector-Specific Products, Built With Real Operating Context"
          intro="We design software around the workflows, risks, and growth patterns that make each industry different."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Active industry panel */}
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-slate-950 shadow-xl shadow-slate-900/15">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id + "-media"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                {activeIndustry.media.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={activeIndustry.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={activeIndustry.media.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.id + "-badge"}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    <span className="text-lg">{activeIndustry.icon}</span>
                    {activeIndustry.name}
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndustry.id + "-num"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-950"
                  >
                    {String(activeIndustry.id + 1).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id + "-content"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-xl"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sky-200">
                    {activeIndustry.eyebrow}
                  </p>
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {activeIndustry.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
                    {activeIndustry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeIndustry.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, delay: 0.1 + i * 0.06 }}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-100"
                    >
                      Explore solutions
                      <FiArrowRight />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Industry selector grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry, index) => {
              const isActive = activeIndustry.id === industry.id;

              return (
                <motion.button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveIndustryId(industry.id)}
                  onMouseEnter={() => setActiveIndustryId(industry.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group min-h-[172px] rounded-2xl border p-5 text-left transition ${
                    isActive
                      ? "border-sky-300 bg-sky-50 shadow-lg shadow-sky-900/10"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl transition ${
                        isActive
                          ? "bg-sky-600 text-white"
                          : "bg-white text-slate-700 group-hover:bg-slate-900 group-hover:text-white"
                      }`}
                    >
                      {industry.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {String(industry.id + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-950">
                    {industry.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                    {industry.eyebrow}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-sky-700">
                    {industry.metric}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
