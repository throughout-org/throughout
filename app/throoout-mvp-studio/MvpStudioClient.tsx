"use client";

import { useEffect, useState } from "react";
import { DM_Sans, Syne } from "next/font/google";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";
import { CalendlyButton } from "@/components/CalendlyPopup";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTrpc, SiStripe, SiVercel, SiOpenai } from "react-icons/si";
import { FiShield, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ServicesCTASection from "@/components/services/ServicesCTASection";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function MvpStudioClient() {
  const featuredProjects = portfolioProjects.slice(0, 3);
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);

  const handleNextCaseStudy = () => {
    setCurrentCaseStudyIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevCaseStudy = () => {
    setCurrentCaseStudyIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const getDeliveryLine = (results: string[]) => {
    const timeline = results.find((item) =>
      /day|week|weeks|month|months/i.test(item),
    );
    return timeline ?? "Delivery timeline shared after scope lock";
  };

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const parent = entry.target.parentElement;
          const siblings = parent
            ? Array.from(
              parent.querySelectorAll<HTMLElement>(".reveal:not(.visible)"),
            )
            : [];

          const delay =
            Math.max(siblings.indexOf(entry.target as HTMLElement), 0) * 70;

          window.setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }, delay);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className={`${syne.variable} ${dmSans.variable} relative overflow-x-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-sky-50 text-slate-900`}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-[5%] pb-20 pt-36 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-blob absolute -right-[10%] -top-[20%] h-[80vh] w-[60vw] rounded-full bg-blue-300/25 blur-3xl" />
          <div className="animate-blob animation-delay-2000 absolute -left-[5%] bottom-0 h-[50vh] w-[40vw] rounded-full bg-sky-300/20 blur-3xl" />
        </div>

        {/* <div className="relative z-10 mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />
          AI-First MVP Studio · Sri Lanka
        </div> */}

        {/* Badge */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
              AI-First MVP Studio · Sri Lanka
            </span>
          </div>
        </div>

        <h1 className="relative z-10 max-w-225  text-[clamp(3rem,7.5vw,5.4rem)] font-extrabold leading-none tracking-[-0.04em]">
          Your SaaS MVP.
          <br />
          <em className="not-italic text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 bg-clip-text">
            3 Weeks.
          </em>
          <span className="block text-slate-500">
            No Hourly Billing.
            <br />
            No Surprises.
          </span>
        </h1>

        <p className="relative z-10 mb-10 mt-7 max-w-140 text-[1.05rem] leading-[1.75] text-slate-600">
          We build SaaS MVPs for founders who need to validate fast before they
          raise or scale.{" "}
          <strong className="font-medium text-slate-900">
            Next.js, AI-accelerated workflows, flat-fee pricing.
          </strong>{" "}
          Senior-level engineering at startup-friendly pricing.
        </p>

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 my-5">
          <PrimaryButton href="#pricing">See Packages</PrimaryButton>
          <SecondaryButton href="#process">How It Works</SecondaryButton>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-10 mt-16">
          <div className="proof-stat">
            <div className=" text-3xl font-extrabold tracking-[-0.03em]">
              3<span className="text-blue-600">wk</span>
            </div>
            <div className="text-xs text-slate-600">Average MVP launch</div>
          </div>
          <div className="hidden w-px bg-blue-300/50 sm:block" />
          <div className="proof-stat">
            <div className=" text-3xl font-extrabold tracking-[-0.03em]">
              80<span className="text-blue-600">%</span>
            </div>
            <div className="text-xs text-slate-600">Less than US/EU rates</div>
          </div>
          <div className="hidden w-px bg-blue-300/50 sm:block" />
          <div className="proof-stat">
            <div className=" text-3xl font-extrabold tracking-[-0.03em]">
              0<span className="text-blue-600">h</span>
            </div>
            <div className="text-xs text-slate-600">Hourly billing. Ever.</div>
          </div>
          <div className="hidden w-px bg-blue-300/50 sm:block" />
          <div className="proof-stat">
            <div className=" text-3xl font-extrabold tracking-[-0.03em]">
              1<span className="text-blue-600"> team</span>
            </div>
            <div className="text-xs text-slate-600">Direct founder access</div>
          </div>
        </div>
      </section>

      {/* <div className="border-y border-blue-200/70 bg-white/80 px-[5%] py-4">
        <div className="mx-auto flex max-w-300 flex-wrap justify-center gap-2.5">
          <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
            AI-Assisted Delivery
          </span>
          <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Next.js and React
          </span>
          <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Flat-Fee Sprints
          </span>
          <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Launch in 3 Weeks
          </span>
          <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Founder-to-Founder Updates
          </span>
        </div>
      </div> */}

      <section className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-16 text-center transition-all duration-700 translate-y-6 opacity-0 reveal">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
              MVPs We&apos;ve Shipped
            </p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              Real products. <em>Real outcomes.</em>
            </h2>
          </div>

          <div className="relative transition-all duration-700 translate-y-6 opacity-0 reveal group max-w-5xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevCaseStudy}
              className="absolute left-0 z-20 flex items-center justify-center w-12 h-12 transition-all -translate-y-1/2 bg-white border rounded-full shadow-lg border-slate-100 top-1/2 text-slate-400 hover:text-blue-600 hover:shadow-xl md:-left-5 cursor-pointer"
              aria-label="Previous case study"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextCaseStudy}
              className="absolute right-0 z-20 flex items-center justify-center w-12 h-12 transition-all -translate-y-1/2 bg-white border rounded-full shadow-lg border-slate-100 top-1/2 text-slate-400 hover:text-blue-600 hover:shadow-xl md:-right-5 cursor-pointer"
              aria-label="Next case study"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Case Study Container */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentCaseStudyIndex * 100}%)` }}>
                {featuredProjects.map((project) => (
                  <div key={project.id} className="w-full shrink-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image - Right */}
                      <div className="relative min-h-[300px] w-full md:w-1/2 rounded-[2rem]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-[2rem]"
                        />
                      </div>

                      {/* Text Content - Left */}
                      <div className="flex flex-col justify-center p-8 md:w-1/2 lg:p-14">
                        <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 text-[0.95rem] leading-[1.8] text-slate-600">
                          {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={`${project.id}-${tech}`}
                              className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-[0.75rem] font-medium text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-6 mt-8 border-t border-slate-100">
                          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                            <div>
                              <p className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-slate-400">
                                Delivery
                              </p>
                              <p className="font-semibold text-slate-900">
                                {getDeliveryLine(project.results)}
                              </p>
                            </div>
                            <div>
                              <p className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-slate-400">
                                Result
                              </p>
                              <p className="font-semibold text-blue-600">
                                {project.results[0]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {featuredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCaseStudyIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentCaseStudyIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] pb-24">
        <div className="flex flex-col items-center justify-center gap-4 mx-auto text-center max-w-300">
          <p className="text-[0.9rem] text-slate-600">
            Ready to validate your SaaS idea? Book a free MVP feasibility call.
          </p>
          <CalendlyButton className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 px-8 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_6px_24px_rgba(56,189,248,0.18),0_2px_10px_rgba(99,102,241,0.1)] transition hover:-translate-y-0.5 hover:opacity-90">
            Free MVP Feasibility Call
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </CalendlyButton>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="transition-all duration-700 translate-y-6 opacity-0 reveal">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
                Why Throoout
              </p>
              <h2 className="mb-5  text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
                Most agencies build everything you ask for.
                <br />
                <em className="not-italic text-blue-600">
                  We build what gets your first users.
                </em>
              </h2>
              <p className="mb-6 max-w-140 text-[0.97rem] leading-[1.8] text-slate-600">
                No agency hoops. No freelancer uncertainty. Just a lean,
                technical team who treats your MVP like it is our own because we
                know what it costs to launch without traction.
              </p>
              <p className="max-w-140 text-[0.97rem] leading-[1.8] text-slate-600">
                Traditional agencies can take months. Freelancers can be
                unpredictable. We sit in the middle: dedicated sprint execution
                with strong engineering systems at startup- friendly pricing.
              </p>
            </div>
            <div className="flex flex-col gap-4 transition-all duration-700 translate-y-6 opacity-0 reveal">
              <div className="flex gap-4 p-6 transition border rounded-xl border-blue-200/70 bg-sky-50 hover:translate-x-1 hover:border-blue-500/35">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-blue-500/15 text-[0.72rem] font-bold">
                  AI
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold">
                    AI-Accelerated Engineering
                  </h4>
                  <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                    AI handles boilerplate, testing scaffolds, and refactors so
                    senior engineers focus on architecture and product
                    decisions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 transition border rounded-xl border-blue-200/70 bg-sky-50 hover:translate-x-1 hover:border-blue-500/35">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-sky-400/20 text-[0.72rem] font-bold">
                  Scope
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold">
                    Ruthlessly Scoped Sprints
                  </h4>
                  <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                    We prioritize the few features that unlock early traction,
                    then iterate based on real user signals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 transition border rounded-xl border-blue-200/70 bg-sky-50 hover:translate-x-1 hover:border-blue-500/35">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-cyan-400/20 text-[0.72rem] font-bold">
                  Direct
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold">
                    Founder-to-Founder Comms
                  </h4>
                  <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                    You speak directly with the team building your product
                    through fast, async, transparent updates.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 transition border rounded-xl border-blue-200/70 bg-sky-50 hover:translate-x-1 hover:border-blue-500/35">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-blue-400/20 text-[0.72rem] font-bold">
                  Fees
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold">
                    Flat Fees, Full Transparency
                  </h4>
                  <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                    Scope, timelines, and pricing are agreed before development
                    starts. No surprise invoices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-blue-50/70 px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
                <div>
                  <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
                    How It Works
                  </p>
                  <h2 className=" text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
                    Three weeks.
                    <br />
                    <em className="not-italic text-blue-600">End to end.</em>
                  </h2>
                </div>
              </div>

              <div className="relative pl-8 border-l border-blue-300/70">
                <div className="flex gap-6 mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
                  <div className="-ml-12.25 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-300 bg-white font-bold">
                    1
                  </div>
                  <div className="step-body">
                    <div className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-blue-600">
                      Before Week 1
                    </div>
                    <div className="mb-2 text-lg font-bold">
                      Discovery and Scope Lock
                    </div>
                    <p className="text-[0.88rem] leading-[1.7] text-slate-600">
                      We align on users, outcomes, and a clear definition of
                      done before the build begins.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        30-min call
                      </span>
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Feature prioritization
                      </span>
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Fixed scope doc
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
                  <div className="-ml-12.25 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-300 bg-white font-bold">
                    2
                  </div>
                  <div className="step-body">
                    <div className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-blue-600">
                      Week 1
                    </div>
                    <div className="mb-2 text-lg font-bold">
                      Strategy, Architecture and Design
                    </div>
                    <p className="text-[0.88rem] leading-[1.7] text-slate-600">
                      Wireframes, architecture, and data model are finalized. A
                      clickable prototype validates flow before coding.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Wireframes
                      </span>
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        DB schema
                      </span>
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Prototype
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
                  <div className="-ml-12.25 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-300 bg-white font-bold">
                    3
                  </div>
                  <div className="step-body">
                    <div className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-blue-600">
                      Weeks 2 and 3
                    </div>
                    <div className="mb-2 text-lg font-bold">
                      Full Build and QA
                    </div>
                    <p className="text-[0.88rem] leading-[1.7] text-slate-600">
                      Daily progress, deployable increments, and quality passes
                      keep delivery fast and stable.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Frontend
                      </span>
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Backend API
                      </span>
                      <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
                        Auth + payments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-700 translate-y-6 opacity-0 reveal lg:sticky lg:top-30">
              <div className="p-6 bg-white border rounded-2xl border-blue-200/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold ">Sprint Overview</span>
                  <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-[0.68rem] font-semibold text-sky-600">
                    Live Build
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden border rounded-lg border-blue-300/60 bg-blue-500/10">
                    <div className="flex justify-between px-4 py-2 text-[0.72rem] font-semibold text-blue-600">
                      <span>Week 1 - Foundation</span>
                      <span>7 days</span>
                    </div>
                    <div className="flex flex-col gap-1 bg-black/5 px-4 py-2 text-[0.72rem] text-slate-700">
                      <div>• Scope lock</div>
                      <div>• Wireframes</div>
                      <div>• Data model + API design</div>
                    </div>
                  </div>
                  <div className="overflow-hidden border rounded-lg border-sky-300/60 bg-sky-400/10">
                    <div className="flex justify-between px-4 py-2 text-[0.72rem] font-semibold text-sky-600">
                      <span>Week 2 - Core Build</span>
                      <span>7 days</span>
                    </div>
                    <div className="flex flex-col gap-1 bg-black/5 px-4 py-2 text-[0.72rem] text-slate-700">
                      <div>• Authentication and roles</div>
                      <div>• Core feature implementation</div>
                      <div>• Integrations + QA pass</div>
                    </div>
                  </div>
                  <div className="overflow-hidden border rounded-lg border-cyan-300/60 bg-cyan-500/10">
                    <div className="flex justify-between px-4 py-2 text-[0.72rem] font-semibold text-blue-600">
                      <span>Week 3 - Launch</span>
                      <span>7 days</span>
                    </div>
                    <div className="flex flex-col gap-1 bg-black/5 px-4 py-2 text-[0.72rem] text-slate-700">
                      <div>• Polish and edge cases</div>
                      <div>• Deployment + docs</div>
                      <div>• Go live</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-sky-300/60 bg-sky-400/10 p-3 text-center text-[0.78rem] text-blue-600">
                  Our average MVP goes live around day 21 with a shippable core
                  before final handoff.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-8 text-center transition-all duration-700 translate-y-6 opacity-0 reveal">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
              Transparent Pricing
            </p>
            <h2 className=" text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              Fixed scope. <em>Fixed price.</em>
            </h2>
            <p className="mt-3 text-[0.9rem] text-slate-600">
              No hourly billing. No change-order surprises. Pick your sprint,
              lock the scope, start building.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="transition-all duration-700 translate-y-6 bg-white border shadow-md opacity-0 reveal rounded-2xl border-blue-200/80 p-7 shadow-blue-100/40 hover:-translate-y-1 hover:shadow-xl">
              <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-slate-500">
                Starter
              </p>
              <h3 className="text-2xl font-bold text-slate-900">
                Landing Page Sprint
              </h3>
              <div className="flex items-end gap-2 mt-3">
                <span className="text-xs tracking-wide uppercase text-slate-500">
                  from
                </span>
                <span className="text-4xl font-extrabold text-slate-900">
                  $990
                </span>
              </div>
              <p className="mt-4 border-b border-blue-100 pb-4 text-[0.88rem] leading-[1.75] text-slate-600">
                A high-converting, production-ready landing page to validate
                your idea and start collecting leads before you commit to a full
                build.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 text-[0.85rem] text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Custom Next.js landing page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Waitlist / email capture form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Analytics and Hotjar setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Deployed to your domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>1-week delivery</span>
                </li>
                <li className="flex items-start gap-2 opacity-45">
                  <span className="mt-0.5 text-slate-400">-</span>
                  <span>Full application build</span>
                </li>
                <li className="flex items-start gap-2 opacity-45">
                  <span className="mt-0.5 text-slate-400">-</span>
                  <span>Backend / database</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="flex items-center justify-center px-4 py-3 mt-6 font-semibold transition border border-blue-200 rounded-lg bg-slate-50 text-slate-900 hover:bg-white"
              >
                Get Started →
              </a>
            </div>

            <div className="relative transition-all duration-700 translate-y-6 border border-blue-500 shadow-xl opacity-0 reveal rounded-2xl bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 p-7 shadow-blue-200/60 hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Most Popular
              </div>
              <p className="pt-2 mb-2 text-xs font-semibold tracking-widest text-blue-700 uppercase">
                Most Popular
              </p>
              <h3 className="text-2xl font-bold text-slate-900">
                3-Week MVP Build
              </h3>
              <div className="flex items-end gap-2 mt-3">
                <span className="text-xs tracking-wide uppercase text-slate-500">
                  from
                </span>
                <span className="text-4xl font-extrabold text-slate-900">
                  $3,990
                </span>
              </div>
              <p className="mt-4 border-b border-blue-200 pb-4 text-[0.88rem] leading-[1.75] text-slate-700">
                A fully functional, production-ready SaaS MVP. Core features,
                real users, real data launched in 21 days. This is our flagship
                sprint.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 text-[0.85rem] text-blue-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>Everything in Landing Page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>Full Next.js / React frontend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>Backend API + database</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>Auth (social login, magic link)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>Payment integration (Stripe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>3rd party API integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>CI/CD + production deploy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>30-day bug-fix warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>Full codebase ownership</span>
                </li>
                <li className="mt-1 rounded-lg border border-blue-200/80 bg-white/80 px-3 py-2 text-[0.78rem] text-slate-700">
                  Includes up to 5 core features, up to 15 screens, and 1 main
                  user role.
                </li>
              </ul>
              <a
                href="/contact"
                className="flex items-center justify-center px-4 py-3 mt-6 font-semibold text-white transition border rounded-lg shadow-lg border-white/30 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 hover:opacity-90"
              >
                Book Free Discovery →
              </a>
            </div>

            <div className="transition-all duration-700 translate-y-6 bg-white border shadow-md opacity-0 reveal rounded-2xl border-blue-200/80 p-7 shadow-blue-100/40 hover:-translate-y-1 hover:shadow-xl">
              <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-slate-500">
                Deep Dive
              </p>
              <h3 className="text-2xl font-bold text-slate-900">
                Strategy Sprint
              </h3>
              <div className="flex items-end gap-2 mt-3">
                <span className="text-xs tracking-wide uppercase text-slate-500">
                  from
                </span>
                <span className="text-4xl font-extrabold text-slate-900">
                  $800
                </span>
              </div>
              <p className="mt-4 border-b border-blue-100 pb-4 text-[0.88rem] leading-[1.75] text-slate-600">
                Not sure what to build yet? We turn your idea into a bankable
                technical plan with architecture, wireframes, and cost breakdown
                in one week.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 text-[0.85rem] text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>2× 1hr founder workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Full product roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Figma wireframes (all screens)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Tech stack recommendation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Database and API design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Build cost estimate (itemised)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-sky-600">✓</span>
                  <span>Redeemable vs. MVP Build</span>
                </li>
                <li className="flex items-start gap-2 opacity-45">
                  <span className="mt-0.5 text-slate-400">-</span>
                  <span>Code / development</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="flex items-center justify-center px-4 py-3 mt-6 font-semibold transition border border-blue-200 rounded-lg bg-slate-50 text-slate-900 hover:bg-white"
              >
                Start Here →
              </a>
            </div>
          </div>
          <p className="mt-5 text-xs text-center text-slate-500">
            All prices in USD. LKR pricing available for local clients. Need
            something custom? Let&apos;s talk.
          </p>
        </div>
      </section>

      <section className="bg-blue-50/70 px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
              Market Context
            </p>
            <h2 className=" text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              How we stack up <em>honestly.</em>
            </h2>
            <p className="mt-3 max-w-140 text-[0.97rem] leading-[1.8] text-slate-600">
              Compare delivery models before you choose a partner. Categories
              below represent typical options founders evaluate.
            </p>
          </div>
          <div className="transition-all duration-700 translate-y-6 opacity-0 reveal">
            <div className="flex items-center justify-between px-4 py-3 mb-4 bg-white border shadow-sm rounded-xl border-blue-200/70">
              <p className="text-sm font-semibold text-slate-700">
                Quick Comparison
              </p>
              <span className="px-3 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-500/10">
                Founder View
              </span>
            </div>

            <div className="grid gap-3 lg:hidden">
              <div className="p-4 bg-white border shadow-sm rounded-xl border-blue-200/70">
                <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-slate-500">
                  Delivery timeline
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="px-2 py-1 font-semibold text-center text-blue-600 rounded-md bg-blue-500/10">
                    Throoout: 3 weeks
                  </span>
                  <span className="px-2 py-1 text-center text-blue-600 rounded-md bg-cyan-500/10">
                    Enterprise agency: 8-16 weeks
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-sky-500/10 text-sky-700">
                    Boutique studio: 4-8 weeks
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-slate-100 text-slate-600">
                    Freelancer: Variable
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border shadow-sm rounded-xl border-blue-200/70">
                <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-slate-500">
                  Pricing model
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="px-2 py-1 font-semibold text-center text-blue-600 rounded-md bg-blue-500/10">
                    Flat-fee sprint
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-slate-100 text-slate-600">
                    Scope + retainer
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-sky-500/10 text-sky-700">
                    Package + custom
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-slate-100 text-slate-600">
                    Hourly / variable
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border shadow-sm rounded-xl border-blue-200/70">
                <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-slate-500">
                  Starting price (MVP)
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="px-2 py-1 font-semibold text-center text-blue-600 rounded-md bg-blue-500/10">
                    ~$4,800
                  </span>
                  <span className="px-2 py-1 text-center text-blue-600 rounded-md bg-cyan-500/10">
                    Often undisclosed
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-sky-500/10 text-sky-700">
                    ~$6K-$15K
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-sky-500/10 text-sky-600">
                    $3-10K+ (risk)
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white border shadow-sm rounded-xl border-blue-200/70">
                <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-slate-500">
                  AI-assisted development
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="px-2 py-1 font-semibold text-center text-blue-600 rounded-md bg-blue-500/10">
                    Core workflow
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-sky-500/10 text-sky-600">
                    Optional
                  </span>
                  <span className="px-2 py-1 text-center rounded-md bg-sky-500/10 text-sky-700">
                    Varies by team
                  </span>
                  <span className="px-2 py-1 text-center text-blue-600 rounded-md bg-cyan-500/10">
                    Rarely
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden overflow-x-auto bg-white border shadow-lg rounded-2xl border-blue-200/80 shadow-blue-100/40 lg:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-50 to-blue-50">
                    <th className="px-6 py-4 text-xs font-semibold tracking-wide uppercase text-slate-500">
                      What matters
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wide text-center text-blue-600 uppercase">
                      Throoout
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wide text-center uppercase text-slate-500">
                      Enterprise Agency
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wide text-center uppercase text-slate-500">
                      Boutique MVP Studio
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wide text-center uppercase text-slate-500">
                      Freelancer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Delivery timeline
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      3 weeks
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-blue-600">
                      8-16 weeks
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      4-8 weeks
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Unpredictable
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Pricing model
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      Flat-fee sprint
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Scope + retainer
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      Package + custom
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Hourly / variable
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Starting price (MVP)
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      ~$4,800
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-blue-600">
                      Often undisclosed
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      ~$6K-$15K
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      $3-10K+ (risk)
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      AI-assisted development
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      ✓ Core workflow
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      Optional
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      Varies by team
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-blue-600">
                      Rarely
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Direct founder access
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      ✓ Always
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Usually account manager
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Sometimes direct
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      ✓ Yes
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Full code ownership
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      ✓ From day 1
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      Usually yes
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      Usually yes
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-blue-600">
                      Sometimes
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Post-launch support
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      30-day warranty
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Paid retainer
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Limited window
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-blue-600">
                      Rarely included
                    </td>
                  </tr>
                  <tr className="transition hover:bg-blue-50/40">
                    <td className="border-t border-blue-100 px-6 py-4 text-[0.9rem] font-medium text-slate-900">
                      Free initial consult
                    </td>
                    <td className="border-t border-blue-100 bg-blue-500/10 px-6 py-4 text-center text-[0.9rem] font-semibold text-blue-600">
                      ✓ 30 min call
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-sky-600">
                      Discovery call
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-slate-500">
                      Lead form
                    </td>
                    <td className="border-t border-blue-100 px-6 py-4 text-center text-[0.9rem] text-blue-600">
                      No standard
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Category benchmarks vary by scope and complexity. Use these as a
              founder-side planning guide, not absolute guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="grid grid-cols-1 gap-10 rounded-2xl border border-blue-200/80 bg-gradient-to-r from-white to-sky-50 p-8 lg:grid-cols-[1.1fr_1fr] lg:p-10">
            <div className="transition-all duration-700 translate-y-6 opacity-0 reveal">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
                Who Builds Your MVP
              </p>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-slate-900">
                Founded by engineers who have shipped SaaS products.
              </h2>
              <p className="mt-4 max-w-140 text-[0.95rem] leading-[1.8] text-slate-600">
                You work directly with builders, not layers of account
                management. The same team who scopes your sprint owns delivery
                decisions end to end.
              </p>
            </div>
            <div className="transition-all duration-700 translate-y-6 opacity-0 reveal">
              <div className="p-6 bg-white border border-blue-200 shadow-md rounded-2xl shadow-blue-100/50">
                <p className="text-sm font-semibold text-slate-900">
                  Founder Note
                </p>
                <p className="mt-3 text-[0.86rem] leading-[1.75] text-slate-600">
                  Add your founder photo and a short story here to increase
                  trust even further. This block is intentionally ready for that
                  final personal layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-8 text-center transition-all duration-700 translate-y-6 opacity-0 reveal">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
              Our Stack
            </p>
            <h2 className=" text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              Production-grade from <em>day one.</em>
            </h2>
            <p className="mx-auto mt-3 max-w-140 text-[0.97rem] leading-[1.8] text-slate-600">
              We select stable, scalable technologies so your MVP can evolve
              without a full rewrite.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiNextdotjs size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">Next.js 14</div>
              <div className="text-[0.73rem] text-slate-600">
                Frontend and SSR
              </div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiTypescript size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">TypeScript</div>
              <div className="text-[0.73rem] text-slate-600">
                Type-safe codebase
              </div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiPostgresql size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">PostgreSQL</div>
              <div className="text-[0.73rem] text-slate-600">
                Primary database
              </div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiTrpc size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">tRPC / REST</div>
              <div className="text-[0.73rem] text-slate-600">API layer</div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <FiShield size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">NextAuth.js</div>
              <div className="text-[0.73rem] text-slate-600">
                Authentication
              </div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiStripe size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">Stripe</div>
              <div className="text-[0.73rem] text-slate-600">Payments</div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiVercel size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">Vercel / AWS</div>
              <div className="text-[0.73rem] text-slate-600">
                Hosting and CDN
              </div>
            </div>
            <div className="p-5 text-center flex flex-col items-center transition-all duration-700 translate-y-6 border opacity-0 reveal rounded-xl border-blue-200/70 bg-white hover:bg-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1">
              <div className="mb-4 text-blue-600">
                <SiOpenai size={40} />
              </div>
              <div className="mb-1 text-[1rem] font-bold">AI Tooling</div>
              <div className="text-[0.73rem] text-slate-600">
                Accelerated development
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/70 px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-blue-600">
              Common Questions
            </p>
            <h2 className=" text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              The stuff founders <em>actually ask.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                Can you really build a working MVP in 3 weeks?
              </div>
              <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                Yes — with a ruthlessly scoped feature set. The keyword is MVP,
                not full product. We&apos;ll challenge your list on Day 1 and
                cut anything that doesn&apos;t help you get your first 100
                users. <b>Our average delivery is 21 days.</b> We won&apos;t
                start if we don&apos;t believe we can hit it.
              </p>
            </div>
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                What if I need changes during the build?
              </div>
              <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                Minor adjustments (copy, colours, flow tweaks) are absorbed.
                Scope additions are scoped and priced transparently —{" "}
                <b>always before any work begins</b>. We&apos;d rather pause for
                one day to align than surprise you with a bill at the end.
              </p>
            </div>
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                Do I own the code?
              </div>
              <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                <b>100%, from day one.</b> Everything goes into your GitHub. All
                IP belongs to you — we have zero claim on anything built during
                the sprint. You can take the code and work with any developer
                after we&apos;re done.
              </p>
            </div>
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                We&apos;re pre-revenue. Is this right for us?
              </div>
              <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                It&apos;s built for you. Our Strategy Sprint ($800) is
                specifically designed for founders who are still shaping their
                idea. You&apos;ll get a full roadmap, wireframes, and a clear
                build cost —{" "}
                <b>redeemable against the MVP if you move forward.</b>
              </p>
            </div>
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                What industries do you work in?
              </div>
              <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                SaaS, marketplaces, fintech, e-commerce tools, AI products, and
                EdTech. We&apos;re comfortable with most B2B and B2C digital
                products.{" "}
                <b>
                  We won&apos;t take a project if we don&apos;t think we can
                  deliver it well
                </b>{" "}
                — we&apos;ll tell you directly.
              </p>
            </div>
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                What happens after launch?
              </div>
              <p className="text-[0.86rem] leading-[1.7] text-slate-600">
                30-day bug-fix cover is included in every build. After that, we
                offer ongoing retainers or per-sprint engagements.
                <b>Most clients continue with us for 2–3 post-MVP sprints</b>
                based on real user feedback — not guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative overflow-hidden bg-white px-[5%] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_100%,rgba(56,189,248,0.2)_0%,transparent_60%)]" />
        <div className="mx-auto max-w-300">
          <div className="relative mx-auto text-center transition-all duration-700 translate-y-6 opacity-0 reveal max-w-190">
            <h2 className="mb-4  text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              Ready to stop planning
              <br />
              and start{" "}
              <em className="not-italic text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 bg-clip-text">
                building?
              </em>
            </h2>
            <p className="text-base leading-[1.75] text-slate-600">
              In one 30-minute call, we can map what is achievable in 3 weeks,
              what it costs, and whether we are the right fit.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 my-5">
              <CalendlyButton className="inline-flex items-center rounded-lg border border-white/30 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 px-8 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_6px_24px_rgba(56,189,248,0.18),0_2px_10px_rgba(99,102,241,0.1)] transition hover:-translate-y-0.5 hover:opacity-90">
                Free MVP Feasibility Call
              </CalendlyButton>
              <SecondaryButton href="#pricing">View Pricing</SecondaryButton>
            </div>
            <p className="mt-3 text-[0.8rem] text-slate-500">
              We&apos;ll tell you honestly if your idea is buildable in 3 weeks.
            </p>
          </div>
        </div>
      </section> */}

      <ServicesCTASection
        headline={"Ready to stop planning and start building?"}
        subtext={
          "In one 30-minute call, we can map what is achievable in 3 weeks, what it costs, and whether we are the right fit. We'll tell you honestly if your idea is buildable in 3 weeks."
        }
        buttonText={"Free MVP Feasibility Call"}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you really build a working MVP in 3 weeks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — with a ruthlessly scoped feature set. The keyword is MVP, not full product. We'll challenge your list on Day 1 and cut anything that doesn't help you get your first 100 users. Our average delivery is 21 days. We won't start if we don't believe we can hit it.",
                },
              },
              {
                "@type": "Question",
                name: "What if I need changes during the build?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Minor adjustments (copy, colours, flow tweaks) are absorbed. Scope additions are scoped and priced transparently — always before any work begins. We'd rather pause for one day to align than surprise you with a bill at the end.",
                },
              },
              {
                "@type": "Question",
                name: "Do I own the code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "100%, from day one. Everything goes into your GitHub. All IP belongs to you — we have zero claim on anything built during the sprint. You can take the code and work with any developer after we're done.",
                },
              },
              {
                "@type": "Question",
                name: "We're pre-revenue. Is this right for us?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It's built for you. Our Strategy Sprint ($800) is specifically designed for founders who are still shaping their idea. You'll get a full roadmap, wireframes, and a clear build cost — redeemable against the MVP if you move forward.",
                },
              },
              {
                "@type": "Question",
                name: "What industries do you work in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SaaS, marketplaces, fintech, e-commerce tools, AI products, and EdTech. We're comfortable with most B2B and B2C digital products. We won't take a project if we don't think we can deliver it well — we'll tell you directly.",
                },
              },
              {
                "@type": "Question",
                name: "What happens after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "30-day bug-fix cover is included in every build. After that, we offer ongoing retainers or per-sprint engagements. Most clients continue with us for 2–3 post-MVP sprints based on real user feedback — not guesswork.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
