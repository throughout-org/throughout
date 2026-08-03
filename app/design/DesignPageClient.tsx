"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight, FiCheck,
  FiPenTool, FiLayout, FiMonitor, FiImage,
  FiStar, FiZap, FiGrid, FiEye, FiPackage, FiFilm,
} from "react-icons/fi";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import BannerBadge from "@/components/ui/BannerBadge";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const designServices = [
  {
    id: "01",
    slug: "brand-identity",
    label: "Brand Identity",
    icon: <FiStar />,
    headline: "Brands People Remember",
    description:
      "A brand is more than a logo — it's the feeling people get when they interact with your business. We craft complete brand identities that communicate who you are, build trust, and make you the obvious choice.",
    image: "/images/ai-generated/brand-identity-studio.png",
    offerings: [
      { icon: <FiPackage />, name: "Logo & Visual Identity" },
      { icon: <FiPenTool />, name: "Brand Guidelines" },
      { icon: <FiImage />,   name: "Brand Collateral" },
      { icon: <FiStar />,    name: "Brand Naming & Positioning" },
    ],
    qualities: [
      "Research-led — every decision is grounded in your market and competitors",
      "Built for scale — guidelines that keep your brand consistent as you grow",
      "All formats delivered — vector files, web assets, and full brand kit",
    ],
  },
  {
    id: "02",
    slug: "ui-ux-design",
    label: "UI/UX Design",
    icon: <FiLayout />,
    headline: "Interfaces That Feel Effortless",
    description:
      "Good UI/UX removes friction. We design digital interfaces — web apps, mobile apps, SaaS dashboards — that guide users naturally, reduce drop-off, and turn visitors into customers.",
    image: "/images/ai-generated/ux-design-studio.png",
    offerings: [
      { icon: <FiGrid />,   name: "Wireframes & User Flows" },
      { icon: <FiLayout />, name: "High-Fidelity UI Design" },
      { icon: <FiEye />,    name: "Interactive Prototypes" },
      { icon: <FiMonitor />,name: "Design Systems" },
    ],
    qualities: [
      "User-first — every screen decision validated against real user behaviour",
      "Developer-ready — files handed off with clean components and annotations",
      "Accessibility baked in — WCAG compliance from day one",
    ],
  },
  {
    id: "03",
    slug: "web-design",
    label: "Web Design",
    icon: <FiMonitor />,
    headline: "Websites That Convert",
    description:
      "Your website is your best sales rep. We design websites and landing pages that communicate your value clearly, look credible instantly, and convert visitors into leads and customers.",
    image: "/images/our-services/Pair programming.jpeg",
    offerings: [
      { icon: <FiMonitor />, name: "Marketing Websites" },
      { icon: <FiZap />,     name: "Landing Pages" },
      { icon: <FiLayout />,  name: "E-Commerce Design" },
      { icon: <FiGrid />,    name: "Responsive Design" },
    ],
    qualities: [
      "Speed-optimised — designs built with performance in mind from the start",
      "SEO-friendly structure — layouts that help search engines understand your content",
      "Integrated with engineering — handed directly to our dev team if needed",
    ],
  },
  {
    id: "04",
    slug: "creative-visuals",
    label: "Creative & Visuals",
    icon: <FiImage />,
    headline: "Creative That Stops the Scroll",
    description:
      "Social media creatives, ad visuals, motion graphics, and presentation design that capture attention and communicate your message in seconds — on every platform your audience uses.",
    image: "/images/our-services/Pair programming.jpeg",
    offerings: [
      { icon: <FiImage />,   name: "Social Media Creatives" },
      { icon: <FiFilm />,    name: "Motion Graphics & Reels" },
      { icon: <FiStar />,    name: "Pitch Decks & Presentations" },
      { icon: <FiPenTool />, name: "Campaign Visuals" },
    ],
    qualities: [
      "Platform-native — designed for the right dimensions per channel",
      "Brand-consistent — all creative follows your brand guidelines",
      "Fast turnaround — built for marketing teams that move quickly",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.12 },
  }),
};

export default function DesignPageClient() {
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
              <BannerBadge text="Design" />
            </motion.div>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl leading-tight"
            >
              Design That{" "}
              <span className="text-sky-600">Builds Businesses.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              Brand identity, UI/UX, web design, and creative visuals — everything your business
              needs to look credible, communicate clearly, and convert consistently.
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
                  Start a Design Project <FiArrowRight />
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

      {/* Quick nav */}
      <div className="sticky top-14 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {designServices.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950 transition whitespace-nowrap"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service sections — editorial layout */}
      {designServices.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`${isEven ? "bg-white" : "bg-slate-50"} px-4 py-20 sm:px-6 lg:px-8 scroll-mt-28 border-t border-slate-100`}
          >
            <div className="mx-auto max-w-7xl">
              <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={!isEven ? "lg:col-start-2" : ""}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-900/15">
                    <Image
                      src={service.image}
                      alt={service.headline}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm">
                      <span className="text-sky-600 text-lg">{service.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-950">{service.label}</span>
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
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">{service.id} — {service.label}</p>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{service.headline}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>

                  {/* Offering cards */}
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {service.offerings.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 text-sm">
                          {item.icon}
                        </span>
                        <span className="text-xs font-semibold text-slate-700 leading-tight">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quality strip */}
                  <div className="mt-6 space-y-2">
                    {service.qualities.map((q, i) => (
                      <motion.div
                        key={q}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs">
                          <FiCheck />
                        </span>
                        <span className="text-sm leading-6 text-slate-600">{q}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-700 hover:shadow-lg transition"
                    >
                      Start a {service.label} project <FiArrowRight />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

    </div>
  );
}
