"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiZap,
  FiTarget,
  FiLayout,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const coreServices = [
  {
    id: "01",
    title: "Digital Marketing",
    kicker: "Grow. Convert. Retain.",
    description:
      "SEO, paid ads, social media, and content strategy built around your audience. We run campaigns that generate leads and build lasting brand authority.",
    href: "/digital-marketing",
    icon: <FiTrendingUp />,
    image: "/images/ai-generated/brand-identity-studio.png",
    features: ["SEO & Paid Ads", "Social Media", "Content Strategy"],
  },
  {
    id: "02",
    title: "Engineering",
    kicker: "Web, mobile, cloud, AI",
    description:
      "From MVPs to enterprise platforms — we build fast, scalable software using modern technologies and engineering discipline that holds up at scale.",
    href: "/engineering",
    icon: <FiCode />,
    image: "/images/ai-generated/engineering-workspace.png",
    features: ["Web & Mobile Apps", "Cloud & DevOps", "AI Automation"],
  },
  {
    id: "03",
    title: "Design",
    kicker: "Brand, UI/UX, creatives",
    description:
      "Brand identity, user interface design, and creative visuals that make your business look premium, communicate clearly, and convert consistently.",
    href: "/design",
    icon: <FiPenTool />,
    image: "/images/ai-generated/ux-design-studio.png",
    features: ["Brand Identity", "UI/UX Design", "Web & Ad Creatives"],
  },
];

const highlights = [
  {
    icon: <FiTrendingUp />,
    title: "Marketing that converts",
    description: "Data-driven campaigns tied to real business outcomes, not vanity metrics.",
  },
  {
    icon: <FiZap />,
    title: "Engineering that scales",
    description: "Clean architecture, modern stack, and delivery you can inspect every week.",
  },
  {
    icon: <FiLayout />,
    title: "Design that sells",
    description: "Every visual decision is made to build trust and guide users to action.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.1 },
  }),
};

const panelVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="OUR SERVICES"
          headline="Three Capabilities. One Team."
          intro="We combine Digital Marketing, Engineering, and Design into a single, coordinated growth engine for your business."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={index}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/10 ${
                index === 0 ? "lg:mt-6" : index === 2 ? "lg:mt-10" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                <div className="absolute flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-full shadow-sm left-5 top-5 bg-white/90 text-slate-950 backdrop-blur">
                  <span className="text-lg text-sky-600">{service.icon}</span>
                  {service.id}
                </div>
                <p className="absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {service.kicker}
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-bold transition text-slate-950 hover:text-sky-700 group/link"
                >
                  Learn more
                  <FiArrowRight className="transition-transform duration-200 group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom panel */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-[3.75rem] overflow-hidden bg-white border shadow-lg rounded-3xl border-slate-200 shadow-slate-900/5"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[25px]">
              <Image
                src="/images/our-services/colleagues-working-project-discussing-details.jpg"
                alt="Throughout team working together"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="rounded-[25px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                Why it works
              </p>
              <h3 className="max-w-2xl mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                When marketing, engineering, and design share one team — everything moves faster.
              </h3>

              <div className="grid gap-4 mt-8 sm:grid-cols-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-2xl bg-slate-50"
                  >
                    <div className="flex items-center justify-center w-10 h-10 text-lg text-white rounded-xl bg-sky-600">
                      {item.icon}
                    </div>
                    <h4 className="mt-4 text-sm font-bold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
