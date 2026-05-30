"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight, FiCheck,
  FiPenTool, FiTrendingUp, FiCode,
  FiBarChart2, FiInstagram, FiSearch,
  FiTarget, FiZap, FiLayout, FiStar,
} from "react-icons/fi";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import BannerBadge from "@/components/ui/BannerBadge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const pillars = [
  {
    id: "01",
    slug: "design",
    label: "Design",
    icon: <FiPenTool />,
    headline: "Creative That Stops the Scroll",
    description:
      "Brand identity, visual design, and UI/UX that make your business impossible to ignore. We craft experiences people remember — from logos to landing pages.",
    image: "/images/our-services/Corporate Strategy Workshop with Colorful Ideas Wall.jpeg",
    services: [
      { icon: <FiLayout />,    name: "Brand Identity & Logo Design" },
      { icon: <FiPenTool />,   name: "UI/UX Design" },
      { icon: <FiStar />,      name: "Social Media Creatives" },
      { icon: <FiLayout />,    name: "Landing Page Design" },
      { icon: <FiPenTool />,   name: "Marketing Collateral" },
      { icon: <FiZap />,       name: "Motion & Video Graphics" },
    ],
  },
  {
    id: "02",
    slug: "marketing",
    label: "Marketing",
    icon: <FiTrendingUp />,
    headline: "Strategy That Drives Real Growth",
    description:
      "SEO, paid ads, social media, and content strategy that turn visitors into customers. Data-driven campaigns built around what your audience actually responds to.",
    image: "/images/our-services/Monitoring and analyzing website traffic and user.jpeg",
    services: [
      { icon: <FiSearch />,    name: "SEO & Content Strategy" },
      { icon: <FiTarget />,    name: "Google & Meta Ads" },
      { icon: <FiInstagram />, name: "Social Media Management" },
      { icon: <FiBarChart2 />, name: "Analytics & Reporting" },
      { icon: <FiTrendingUp />,name: "Email Marketing" },
      { icon: <FiStar />,      name: "Influencer & PR Strategy" },
    ],
  },
  {
    id: "03",
    slug: "engineering",
    label: "Engineering",
    icon: <FiCode />,
    headline: "Tech That Powers Your Marketing",
    description:
      "High-converting landing pages, marketing automation, CRM integrations, and tracking infrastructure — engineering built specifically to support growth goals.",
    image: "/images/our-services/Pair programming.jpeg",
    services: [
      { icon: <FiLayout />, name: "High-Converting Landing Pages" },
      { icon: <FiZap />,    name: "Marketing Automation" },
      { icon: <FiCode />,   name: "CRM Integration & Setup" },
      { icon: <FiBarChart2 />, name: "Analytics & Tracking Setup" },
      { icon: <FiSearch />, name: "Technical SEO Implementation" },
      { icon: <FiCode />,   name: "Lead Gen & Funnel Engineering" },
    ],
  },
];

const differentiators = [
  "Design, strategy, and engineering owned by one team from day one",
  "No outsourcing — senior talent across all three disciplines",
  "Transparent reporting tied to actual business outcomes",
  "Built for startups, scaleups, and growth-stage companies",
  "We don't silo marketing from tech — they work together",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.12 },
  }),
};

export default function DigitalMarketingClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative flex min-h-screen items-stretch isolate">
        <div className="absolute inset-0 w-full h-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-6">
              <BannerBadge text="Digital Marketing" />
            </motion.div>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl leading-tight"
            >
              Design. Market.{" "}
              <span className="text-sky-600">Engineer. Grow.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              We combine creative design, data-driven marketing, and engineering
              to build and grow digital businesses — not just run campaigns.
            </motion.p>
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-sky-700 hover:shadow-xl transition"
                >
                  Get a Free Strategy Call <FiArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg transition"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Positioning banner */}
      <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-4">Our Positioning</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl max-w-3xl mx-auto leading-snug">
              Most agencies do marketing{" "}
              <span className="text-slate-400 italic">or</span>{" "}
              development.{" "}
              <span className="text-sky-300">We do both — intentionally.</span>
            </h2>
            <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-base leading-7">
              When design, strategy, and engineering are owned by one team, the results are faster,
              cheaper, and more coherent than stitching together three vendors.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Digital Marketing", icon: <FiTrendingUp />, desc: "SEO, ads, social, content strategy" },
              { label: "Engineering", icon: <FiCode />, desc: "Web, apps, automation, integrations" },
              { label: "Design", icon: <FiPenTool />, desc: "Brand, UI/UX, creative visuals" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-2xl text-white">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-white">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars — editorial layout */}
      {pillars.map((pillar, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={pillar.slug}
            id={pillar.slug}
            className={`${isEven ? "bg-white" : "bg-slate-50"} px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20 border-t border-slate-100`}
          >
            <div className="mx-auto max-w-7xl">
              <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`${!isEven ? "lg:col-start-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-900/15">
                    <Image
                      src={pillar.image}
                      alt={pillar.headline}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">
                      <span className="text-sky-600 text-lg">{pillar.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-950">{pillar.label}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 28 : -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">{pillar.id} — {pillar.label}</p>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{pillar.headline}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {pillar.services.map((svc, i) => (
                      <motion.div
                        key={svc.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 text-sm">
                          {svc.icon}
                        </span>
                        <span className="text-xs font-semibold text-slate-700 leading-tight">{svc.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
                    className="mt-8"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-700 hover:shadow-lg transition"
                    >
                      Get started <FiArrowRight />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Throughout */}
      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-3">Why Throughout</p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                One team for the whole growth stack.
              </h2>
              <p className="mt-5 text-lg text-slate-400 leading-8">
                We're not a traditional agency. We're a product-minded growth team
                that understands how marketing and technology work together.
              </p>
              <ul className="mt-8 space-y-4">
                {differentiators.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs">
                      <FiCheck />
                    </span>
                    <span className="text-sm leading-6 text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-sky-50 transition"
                >
                  Talk to our team <FiArrowRight />
                </Link>
              </motion.div>
            </motion.div>

            {/* Metric tiles */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "3×", label: "Disciplines in one team" },
                { value: "Full-stack", label: "Design → Marketing → Engineering" },
                { value: "Startup-ready", label: "Lean engagements, big results" },
                { value: "AI-powered", label: "Tools and automation built in" },
              ].map((tile, i) => (
                <motion.div
                  key={tile.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: EASE, delay: i * 0.09 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-3xl font-extrabold tracking-tight text-white">{tile.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-400 leading-snug">{tile.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
