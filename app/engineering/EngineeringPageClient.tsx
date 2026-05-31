"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import type { Service } from "@/data/services";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Props {
  services: Service[];
}

export default function EngineeringPageClient({ services }: Props) {
  return (
    <div>
      {services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`${isEven ? "bg-white" : "bg-slate-50"} px-4 py-20 sm:px-6 lg:px-8 scroll-mt-28 border-t border-slate-100`}
          >
            <div className="mx-auto max-w-7xl">
              {/* Section header */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-start lg:gap-8"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white text-2xl shadow-md">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 mb-2">
                    {service.hero.badgeText || service.title}
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {service.hero.headline}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600 max-w-3xl">
                    {service.hero.subheadline}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 group"
                  >
                    Start a {service.title} project
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Solution cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {service.solutionCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: EASE, delay: i * 0.09 }}
                    className={`rounded-2xl border border-slate-200 ${isEven ? "bg-slate-50" : "bg-white"} p-5`}
                  >
                    <span className="inline-block rounded-full px-2.5 py-1 text-xs font-bold bg-sky-50 text-sky-700 mb-3">
                      {card.concept}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 line-clamp-3">
                      {card.content}
                    </p>
                    {card.idealFor && card.idealFor.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {card.idealFor.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Engineering features strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 mb-4">
                  How we build it
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {service.engineeringFeatures.map((feat, i) => (
                    <motion.div
                      key={feat.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs">
                        <FiCheck />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-950">{feat.title}</p>
                        <p className="text-xs leading-5 text-slate-600 mt-0.5">{feat.copy}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tech stack */}
              {service.technologies.stack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-6 flex flex-wrap gap-2 items-center"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-1">
                    Stack:
                  </span>
                  {service.technologies.stack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                    >
                      <Image src={tech.icon} alt={tech.name} width={14} height={14} className="object-contain" />
                      {tech.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
