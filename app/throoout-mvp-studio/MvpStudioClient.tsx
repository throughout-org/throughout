"use client";

import { useEffect } from "react";
import { DM_Sans, Syne } from "next/font/google";
import InnerBanner from "@/components/ui/InnerBanner";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import TechStackSection from "@/components/home/TechStackSection";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";
import Button from "@/components/Button";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";

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

const Step1Visual = () => (
  <div className="relative bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-100 flex items-center justify-center overflow-hidden h-[300px] lg:h-[350px] w-full shadow-lg shadow-blue-900/5">
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    ></div>
    <div className="relative z-10 w-full max-w-[320px] mx-auto flex flex-col gap-3">
      <div className="flex items-center gap-3 p-3 bg-white border border-blue-100 shadow-sm rounded-xl">
        <div className="flex w-8 h-8 bg-blue-100 rounded-lg shrink-0" />
        <div className="w-full h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="w-2/3 h-full bg-blue-400"></div>
        </div>
      </div>
      <div className="flex justify-center gap-3 pl-6">
        <div className="h-6 w-0.5 rounded-full bg-blue-200" />
      </div>
      <div className="flex gap-3">
        <div className="flex items-center flex-1 gap-3 p-3 bg-white border border-blue-100 shadow-sm rounded-xl opacity-80">
          <div className="flex w-6 h-6 bg-indigo-100 rounded-md shrink-0" />
          <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
        </div>
        <div className="flex items-center flex-1 gap-3 p-3 bg-white border border-blue-100 shadow-sm rounded-xl">
          <div className="flex w-6 h-6 rounded-md shrink-0 bg-sky-100" />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
        </div>
      </div>
      <div className="flex justify-end gap-3 pr-12">
        <div className="h-6 w-0.5 rounded-full bg-blue-200" />
      </div>
      <div className="flex items-center self-end w-4/5 gap-3 p-3 bg-white border border-blue-100 shadow-sm rounded-xl">
        <div className="flex w-8 h-8 rounded-lg shrink-0 bg-cyan-100" />
        <div className="flex w-full flex-col gap-1.5">
          <div className="h-1.5 w-full rounded-full bg-slate-100" />
          <div className="h-1.5 w-3/4 rounded-full bg-slate-100" />
        </div>
      </div>
    </div>
  </div>
);

const Step2Visual = () => (
  <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-4 shadow-lg shadow-blue-900/5 sm:p-6 lg:h-[350px] lg:p-8">
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    ></div>
    <div className="relative z-10 w-full text-center">
      <div className="mx-auto w-full max-w-[520px] px-2">
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6 sm:gap-5">
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:p-2.5">
            <img
              alt="Lovable"
              className="object-contain w-8 h-8 rounded-lg sm:h-12 sm:w-12"
              src="/images/logos/lovable.jpeg"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-lg"></div>';
              }}
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:p-2.5">
            <img
              alt="Cursor"
              className="object-contain w-8 h-8 rounded-lg sm:h-12 sm:w-12"
              src="/images/logos/cursor.png"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-lg"></div>';
              }}
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:p-2.5">
            <img
              alt="ChatGPT"
              className="object-contain w-8 h-8 rounded-lg sm:h-12 sm:w-12"
              src="/images/logos/chatgpt.png"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-lg"></div>';
              }}
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:p-2.5">
            <img
              alt="Claude"
              className="object-contain w-8 h-8 rounded-lg sm:h-12 sm:w-12"
              src="/images/logos/claude.png"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 rounded-lg"></div>';
              }}
            />
          </div>
        </div>
        <div className="relative w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] text-left shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-2 py-1.5 sm:px-3 sm:py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span>
            <span className="ml-auto font-mono text-[10px] text-white/60">
              app/api/route.ts
            </span>
          </div>
          <div className="p-3 overflow-x-auto sm:p-4">
            <pre className="m-0 block p-0 font-mono text-[11px] leading-5 text-white/90 sm:text-xs sm:leading-6">
              <span className="text-purple-400">import</span> {"{"} NextResponse{" "}
              {"}"} <span className="text-purple-400">from</span>{" "}
              <span className="text-emerald-300">"next/server"</span>;{"\n\n"}
              <span className="text-purple-400">
                export async function
              </span>{" "}
              <span className="text-blue-400">POST</span>(request: Request){" "}
              {"{"}
              {"\n  "}
              <span className="text-purple-400">const</span> {"{"} prompt {"}"}{" "}
              = <span className="text-purple-400">await</span> request.json();
              {"\n  "}
              <span className="text-purple-400">return</span> NextResponse.json(
              {"{"} result:{" "}
              <span className="text-emerald-300">
                "AI-Assisted Development"
              </span>{" "}
              {"}"});
              {"\n}"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Step3Visual = () => (
  <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-4 shadow-lg shadow-blue-900/5 sm:p-6 lg:h-[350px] lg:p-8">
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    ></div>
    <div className="relative z-10 mx-auto w-full max-w-[320px]">
      <div className="p-4 mb-4 bg-white border shadow-sm rounded-2xl border-sky-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse bg-emerald-400" />
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Live Build
            </div>
          </div>
          <div className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
            100% Passes
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-600">
              ✓
            </div>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="w-full h-full bg-emerald-400"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-600">
              ✓
            </div>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="w-full h-full bg-emerald-400"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-5 h-5 p-1 bg-blue-100 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="w-2/3 h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center flex-1 gap-2 p-3 bg-white border shadow-sm rounded-xl border-sky-100">
          <div className="text-xl font-bold text-slate-800">
            22<span className="ml-1 text-xs text-slate-400">ms</span>
          </div>
          <div className="text-[9px] font-medium uppercase tracking-wider text-slate-500">
            Latency
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-2 p-3 text-white shadow-md rounded-xl bg-gradient-to-br from-blue-500 to-sky-500">
          <div className="text-xl font-bold">Deploy</div>
          <div className="text-[9px] font-medium uppercase tracking-wider text-blue-100">
            Production
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function MvpStudioClient() {
  const pricingBadgeText = "Transparent Pricing";
  const pricingHeadline = "Fixed scope. Fixed price.";
  const pricingIntro =
    "No hourly billing. No change-order surprises. Pick your sprint, lock the scope, start building.";

  const marketBadgeText = "Market Context";
  const marketHeadline = "How we stack up honestly.";
  const marketIntro =
    "Compare delivery models before you choose a partner. Categories below represent typical options founders evaluate.";

  const faqBadgeText = "Common Questions";
  const faqHeadline = "The stuff founders actually ask.";

  const bodyTextClass = "text-[0.95rem] leading-[1.75] text-slate-600";

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
      className={`${syne.variable} ${dmSans.variable} relative overflow-x-hidden  text-slate-900`}
    >
      <InnerBanner
        badgeText="AI-First MVP Studio · Sri Lanka"
        title={
          <>
            Your SaaS MVP.
            <br className="hidden md:block" />
            3 Weeks.
            <br className="hidden md:block" />
            No Hourly Billing. No Surprises.
          </>
        }
        description="We build SaaS MVPs for founders who need to validate fast before they raise or scale. Next.js, AI-accelerated workflows, flat-fee pricing. Senior-level engineering at startup-friendly pricing."
        cta={
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#pricing" className="sm:w-auto sm:px-8">
              See Packages
            </Button>
            <Button
              variant="secondary"
              href="#process"
              className="sm:w-auto sm:px-8"
            >
              How It Works
            </Button>
          </div>
        }
      />

      <PortfolioShowcase showBanner={false} />

      <section className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="transition-all duration-700 translate-y-6 opacity-0 reveal">
              <ServiceSectionHeader
                badgeText="Why Throoout"
                headline="Most agencies build everything you ask for. We build what gets your first users."
                intro="No agency hoops. No freelancer uncertainty. Just a lean, technical team who treats your MVP like it is our own because we know what it costs to launch without traction. Traditional agencies can take months. Freelancers can be unpredictable. We sit in the middle: dedicated sprint execution with strong engineering systems at startup-friendly pricing."
                align="text-left"
                headlineSize="text-2xl sm:text-3xl lg:text-4xl"
              />
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
                  <p className={bodyTextClass}>
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
                  <p className={bodyTextClass}>
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
                  <p className={bodyTextClass}>
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
                  <p className={bodyTextClass}>
                    Scope, timelines, and pricing are agreed before development
                    starts. No surprise invoices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-white px-[5%] py-24 border-t border-slate-100"
      >
        <div className="mx-auto max-w-300">
          <div className="mb-16 text-center transition-all duration-700 translate-y-6 opacity-0 reveal">
            <ServiceSectionHeader
              badgeText="How It Works"
              headline="Three weeks. End to end."
              intro="A highly technical, transparent sprint process to get you from scope lock to production without bloated timelines or endless meetings."
            />
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {/* Row 1: Discovery */}
            <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 transition-all duration-700 translate-y-6 opacity-0 lg:order-1 reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 font-bold leading-none text-blue-600 bg-blue-100 rounded-full shrink-0">
                    1
                  </div>
                  <div className="text-sm font-semibold tracking-[0.12em] text-blue-600 uppercase">
                    Before Week 1
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Discovery and Scope Lock
                </h3>
                <p className={`${bodyTextClass} mb-6`}>
                  We align on users, outcomes, and a clear definition of done
                  before the build begins.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    30-min call
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Feature prioritization
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Fixed scope doc
                  </span>
                </div>
              </div>
              <div className="order-1 transition-all duration-700 delay-100 translate-y-6 opacity-0 lg:order-2 reveal">
                <Step1Visual />
              </div>
            </div>

            {/* Row 2: Strategy */}
            <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="order-1 transition-all duration-700 translate-y-6 opacity-0 lg:order-1 reveal">
                <Step2Visual />
              </div>
              <div className="order-2 transition-all duration-700 delay-100 translate-y-6 opacity-0 lg:order-2 reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 font-bold leading-none text-blue-600 bg-blue-100 rounded-full shrink-0">
                    2
                  </div>
                  <div className="text-sm font-semibold tracking-[0.12em] text-blue-600 uppercase">
                    Week 1
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Strategy, Architecture and Design
                </h3>
                <p className={`${bodyTextClass} mb-6`}>
                  Wireframes, architecture, and data model are finalized. A
                  clickable prototype validates flow before coding.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Wireframes
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    DB schema
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Prototype
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3: Build & QA */}
            <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 transition-all duration-700 translate-y-6 opacity-0 lg:order-1 reveal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 font-bold leading-none text-blue-600 bg-blue-100 rounded-full shrink-0">
                    3
                  </div>
                  <div className="text-sm font-semibold tracking-[0.12em] text-blue-600 uppercase">
                    Weeks 2 and 3
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Full Build and QA
                </h3>
                <p className={`${bodyTextClass} mb-6`}>
                  Daily progress, deployable increments, and quality passes keep
                  delivery fast and stable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Frontend
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Backend API
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 rounded-full text-slate-600">
                    Auth + payments
                  </span>
                </div>
              </div>
              <div className="order-1 transition-all duration-700 delay-100 translate-y-6 opacity-0 lg:order-2 reveal">
                <Step3Visual />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-8 text-center transition-all duration-700 translate-y-6 opacity-0 reveal">
            <ServiceSectionHeader
              badgeText={pricingBadgeText}
              headline={pricingHeadline}
              intro={pricingIntro}
            />
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
              <p
                className={`mt-4 border-b border-blue-100 pb-4 ${bodyTextClass}`}
              >
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
              <Button
                variant="secondary"
                href="/contact"
                className="mt-6 sm:w-full"
              >
                Get Started
              </Button>
            </div>

            <div className="relative transition-all duration-700 translate-y-6 border border-blue-500 shadow-xl opacity-0 reveal rounded-2xl p-7 shadow-blue-200/60 hover:-translate-y-1">
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
              <p className="mt-4 border-b border-blue-200 pb-4 text-[0.95rem] leading-[1.75] text-slate-700">
                A fully functional, production-ready SaaS MVP. Core features,
                real users, real data launched in 21 days. This is our flagship
                sprint.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 text-[0.85rem]">
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
              <Button href="/contact" className="mt-6 sm:w-full">
                Book Free Discovery
              </Button>
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
              <p
                className={`mt-4 border-b border-blue-100 pb-4 ${bodyTextClass}`}
              >
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
              <Button
                variant="secondary"
                href="/contact"
                className="mt-6 sm:w-full"
              >
                Start Here
              </Button>
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
            <ServiceSectionHeader
              badgeText={marketBadgeText}
              headline={marketHeadline}
              intro={marketIntro}
            />
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

      <TechStackSection />

      <section className="bg-blue-50/70 px-[5%] py-24">
        <div className="mx-auto max-w-300">
          <div className="mb-8 transition-all duration-700 translate-y-6 opacity-0 reveal">
            <ServiceSectionHeader
              badgeText={faqBadgeText}
              headline={faqHeadline}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="p-6 transition-all duration-700 translate-y-6 bg-white border opacity-0 reveal rounded-xl border-blue-200/70">
              <div className="mb-2  text-[0.95rem] font-bold">
                Can you really build a working MVP in 3 weeks?
              </div>
              <p className={bodyTextClass}>
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
              <p className={bodyTextClass}>
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
              <p className={bodyTextClass}>
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
              <p className={bodyTextClass}>
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
              <p className={bodyTextClass}>
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
              <p className={bodyTextClass}>
                30-day bug-fix cover is included in every build. After that, we
                offer ongoing retainers or per-sprint engagements.
                <b>Most clients continue with us for 2–3 post-MVP sprints</b>
                based on real user feedback — not guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

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
