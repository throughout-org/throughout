"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { FiCode, FiTrendingUp, FiLock, FiShield } from "react-icons/fi";

export default function TrustSection() {
  const badgeText = "ENGINEERING";
  const headline = "Engineering Standards We Follow";
  const intro =
    "Our development practices ensure every product we build is secure, scalable, and built for long-term stability.";

  const standards = [
    {
      number: "01",
      title: "Clean Engineering",
      description:
        "We enforce strict coding standards, peer reviews, and automated code analysis (SonarQube) to keep your software maintainable as it grows.",
      icon: <FiCode />,
      color: "from-blue-500 to-indigo-500",
      glow: "shadow-blue-500/20",
    },
    {
      number: "02",
      title: "Modern Infrastructure",
      description:
        "We use Infrastructure as Code and automated CI/CD pipelines to deploy software faster and reduce operational risks.",
      icon: <FiTrendingUp />,
      color: "from-emerald-500 to-teal-500",
      glow: "shadow-emerald-500/20",
    },
    {
      number: "03",
      title: "Security First",
      description:
        "We follow industry security standards including the OWASP Top 10 to protect your application from vulnerabilities.",
      icon: <FiLock />,
      color: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/20",
    },
    {
      number: "04",
      title: "Data Privacy",
      description:
        "We implement strong encryption and data governance practices to ensure your application meets global privacy standards.",
      icon: <FiShield />,
      color: "from-fuchsia-500 to-purple-500",
      glow: "shadow-fuchsia-500/20",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100 mix-blend-multiply filter blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-100 mix-blend-multiply filter blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div> */}

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase border border-blue-200 rounded-full bg-blue-50">
              {badgeText}
            </span>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {headline}
            </h2>
            <p className="max-w-2xl text-lg text-slate-600 md:text-xl">
              {intro}
            </p>
          </div>
        </div>

        {/* Standards Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {standards.map((standard, index) => (
            <motion.div
              variants={item}
              key={index}
              className="relative p-8 overflow-hidden transition-all duration-500 border rounded-3xl bg-white shadow-lg border-slate-100 hover:border-slate-200 group hover:-translate-y-1 hover:shadow-xl hover:bg-slate-50"
            >
              {/* Giant Background Number */}
              <div className="absolute top-4 right-6 text-8xl font-black text-slate-900/[0.03] transition-colors duration-500 select-none group-hover:text-slate-900/[0.06]">
                {standard.number}
              </div>

              {/* Icon & Title Row */}
              <div className="relative z-10 flex items-center gap-6 mb-6">
                <div
                  className={`flex items-center justify-center w-16 h-16 text-3xl text-white rounded-2xl bg-gradient-to-br ${standard.color} shadow-lg ${standard.glow} group-hover:scale-110 transition-transform duration-500`}
                >
                  {standard.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {standard.title}
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 leading-relaxed text-slate-600 text-lg group-hover:text-slate-700 transition-colors duration-300">
                {standard.description}
              </p>

              {/* Glowing Accent Line at the bottom */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${standard.color} transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
