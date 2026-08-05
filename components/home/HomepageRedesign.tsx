import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiPenTool,
  FiSearch,
  FiServer,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { CalendlyButton } from "@/components/CalendlyPopup";
import HeroCursorField from "@/components/home/HeroCursorField";
import ServiceFAQ from "@/components/service/ServiceFAQ";

const capabilities = [
  {
    icon: FiCode,
    title: "Software engineering",
    copy: "Web, mobile, platform, API, and product development built for maintainability.",
    href: "/engineering",
  },
  {
    icon: FiPenTool,
    title: "Product & UI/UX design",
    copy: "Research, product strategy, interfaces, design systems, and conversion-focused experiences.",
    href: "/design",
  },
  {
    icon: FiZap,
    title: "AI development",
    copy: "Useful AI features, workflow automation, agents, and integrations grounded in your operations.",
    href: "/engineering",
  },
  {
    icon: FiLayers,
    title: "Data engineering",
    copy: "Reliable pipelines, data platforms, integrations, and reporting foundations.",
    href: "/engineering",
  },
  {
    icon: FiShield,
    title: "Quality assurance",
    copy: "Manual and automated testing embedded into delivery—not left until launch.",
    href: "/engineering",
  },
  {
    icon: FiServer,
    title: "Cloud & DevOps",
    copy: "Infrastructure, deployment automation, observability, and cloud optimisation.",
    href: "/engineering",
  },
  {
    icon: FiTrendingUp,
    title: "Digital marketing",
    copy: "SEO, paid acquisition, content, and campaigns connected to commercial outcomes.",
    href: "/digital-marketing",
  },
];

export const homepageFAQs = [
  {
    question:
      "What is the difference between a dedicated project team and an offshore team?",
    answer:
      "A dedicated project team delivers a defined service or outcome with a clear scope. A dedicated offshore team is built for an ongoing need and works as a long-term extension of your company.",
  },
  {
    question: "Can Throughout support an existing internal or agency team?",
    answer:
      "Yes. Throughout can own a complete workstream or add engineering, design, data, QA, DevOps, AI, or marketing capability to an existing team.",
  },
  {
    question: "What types of companies does Throughout work with?",
    answer:
      "Throughout works with startup founders, digital agencies, product companies, and businesses that need a dependable delivery partner or a long-term offshore team.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "It begins with a free consultation to understand the goal, required capabilities, current constraints, and the most suitable engagement model. Throughout then recommends a practical team and next step.",
  },
];

function PrimaryCTA({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <CalendlyButton
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg shadow-sky-950/15 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 ${light ? "bg-white text-slate-950 hover:bg-sky-100" : "bg-sky-600 text-white hover:bg-sky-700"} ${className}`}
    >
      Book a Free Consultation <FiArrowRight aria-hidden="true" />
    </CalendlyButton>
  );
}

const ctaTeam = [
  {
    name: "Insaf",
    src: "/images/team/Insaf.png",
    position: "lg:left-8 lg:top-10",
    objectPosition: "50% 20%",
    delay: "0s",
  },

  {
    name: "Bavaram",
    src: "/images/team/bavaram.png",
    position: "lg:right-10 lg:top-12",
    objectPosition: "50% 22%",
    delay: "-1.4s",
  },
  {
    name: "Janith",
    src: "/images/team/janith.png",
    position: "lg:bottom-10 lg:left-16",
    objectPosition: "50% 24%",
    delay: "-2.8s",
  },
  {
    name: "Amrith",
    src: "/images/team/Amrith.png",
    position: "lg:bottom-9 lg:right-16",
    objectPosition: "50% 36%",
    delay: "-4.2s",
  },
];

export default function HomepageRedesign() {
  return (
    <>
      <section className="relative px-4 pt-24 pb-20 overflow-hidden border-b isolate border-slate-200 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pt-36">
        <HeroCursorField />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500" /> Dedicated
              digital teams
            </p>
            <h1 className="mt-7 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              The right team to build, launch and scale your digital product.
            </h1>
            <p className="max-w-3xl mx-auto text-base leading-7 mt-7 text-pretty text-slate-600 sm:text-xl sm:leading-8">
              Throughout assembles dedicated engineering, design, data, AI,
              DevOps, QA, and marketing expertise for startups, agencies, and
              product companies—without a drawn-out hiring cycle.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 mt-9 sm:flex-row">
              <PrimaryCTA className="w-full sm:w-auto" />
              <Link
                href="#engagement-models"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold transition bg-white border rounded-full min-h-12 border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 sm:w-auto"
              >
                Explore engagement models
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="engagement-models"
        className="px-4 py-20 scroll-mt-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Choose the right model
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
              One partner. Two clear ways to work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose based on whether you need a defined outcome now or an
              embedded team for the long term.
            </p>
          </div>
          <div className="grid gap-6 mt-12 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
                For a project or service
              </span>
              <h3 className="mt-5 text-3xl font-bold tracking-tight">
                Dedicated services
              </h3>
              <p className="max-w-xl mt-4 leading-7 text-slate-300">
                A focused team owns a defined product, platform, campaign, or
                specialist workstream from planning through delivery.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-200">
                {[
                  "A clear scope, outcome, and delivery rhythm",
                  "The capabilities your project actually needs",
                  "Direct communication with the people doing the work",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheck
                      className="mt-0.5 shrink-0 text-sky-300"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 font-bold text-white mt-9 hover:text-sky-200"
              >
                Explore capabilities <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
            <article className="relative overflow-hidden rounded-[2rem] border border-sky-200 bg-sky-50 p-7 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-800">
                For long-term capacity
              </span>
              <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
                Dedicated offshore teams
              </h3>
              <p className="max-w-xl mt-4 leading-7 text-slate-700">
                Build a stable, managed team that integrates with your company,
                tools, rituals, and roadmap—without building the hiring
                operation alone.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                {[
                  "Roles matched to your roadmap and ways of working",
                  "A team designed for continuity and knowledge retention",
                  "Ongoing support for team formation and delivery",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheck
                      className="mt-0.5 shrink-0 text-sky-700"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?model=offshore-team"
                className="inline-flex items-center gap-2 font-bold mt-9 text-sky-800 hover:text-sky-950"
              >
                Build your team <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="px-4 py-20 scroll-mt-24 bg-slate-50 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
                Specialists who work as one delivery team.
              </h2>
            </div>
            <p className="max-w-lg leading-7 text-slate-600">
              Bring in one capability or combine several around a product,
              platform, or growth objective.
            </p>
          </div>
          <div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, copy, href }) => (
              <Link
                key={title}
                href={href}
                className="p-6 transition bg-white border group rounded-3xl border-slate-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600"
              >
                <span className="flex items-center justify-center w-12 h-12 text-xl text-white transition rounded-2xl bg-slate-950 group-hover:bg-sky-600">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-sky-700">
                  Learn more <FiArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Why Throughout
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
              Built for teams that cannot compromise on delivery.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              The goal is not simply to fill seats. It is to form a capable team
              that can understand the problem, make sound decisions, and keep
              work moving.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {[
              {
                icon: FiCode,
                title: "Technical depth",
                copy: "Engineering is a core capability, with design, data, QA, DevOps, AI, and growth disciplines working alongside it.",
              },
              {
                icon: FiUsers,
                title: "Talent matched to the work",
                copy: "Team shape starts with your roadmap, technical environment, and collaboration needs—not a generic bench.",
              },
              {
                icon: FiZap,
                title: "Faster formation",
                copy: "A focused selection and onboarding process helps reduce the operational work between identifying a need and starting delivery.",
              },
              {
                icon: FiSearch,
                title: "Visible delivery",
                copy: "Clear ownership, direct communication, and regular review points keep decisions and progress easy to follow.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="bg-white p-7 sm:p-8">
                <Icon className="text-2xl text-sky-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 text-white bg-slate-950 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
              From need to working team.
            </h2>
          </div>
          <ol className="grid gap-8 mt-12 md:grid-cols-3">
            {[
              [
                "01",
                "Align",
                "We clarify the outcome, existing team, constraints, required roles, and the best engagement model.",
              ],
              [
                "02",
                "Assemble",
                "We shape the team, confirm responsibilities, and align the delivery approach with your workflow.",
              ],
              [
                "03",
                "Deliver & improve",
                "The team starts with clear priorities, visible progress, regular reviews, and room to adapt.",
              ],
            ].map(([number, title, copy]) => (
              <li key={number} className="pt-6 border-t border-white/20">
                <span className="font-mono text-sm text-sky-300">{number}</span>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceFAQ
        badgeText="Frequently asked questions"
        headline="Before we start."
        faqs={homepageFAQs}
        includeSchema={false}
      />

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082f49_0%,#0f172a_70%)] px-6 py-14 text-center text-white sm:px-12 sm:py-20 lg:px-40">
          <div
            aria-hidden="true"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2 h-80 w-80 bg-sky-400/10 blur-3xl"
          />

          {ctaTeam.map((member) => (
            <div
              key={member.name}
              className={`cta-avatar-float absolute hidden h-20 w-20 rounded-full border-4 border-white/15 bg-slate-800 p-1 shadow-2xl shadow-slate-950/40 lg:block ${member.position}`}
              style={{ animationDelay: member.delay }}
            >
              <Image
                src={member.src}
                alt={`${member.name}, Throughout team member`}
                fill
                sizes="80px"
                className="object-cover rounded-full"
                style={{ objectPosition: member.objectPosition }}
              />
            </div>
          ))}

          <div className="relative z-10">
            <div className="flex justify-center mb-6 -space-x-3 lg:hidden">
              {ctaTeam.map((member) => (
                <div
                  key={member.name}
                  className="cta-avatar-float relative overflow-hidden border-2 rounded-full shadow-lg h-14 w-14 border-slate-800 bg-slate-700"
                  style={{ animationDelay: member.delay }}
                >
                  <Image
                    src={member.src}
                    alt={`${member.name}, Throughout team member`}
                    fill
                    sizes="56px"
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Start with the right conversation
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">
              Tell us what you need to build or the team you need to build it.
            </h2>
            <p className="max-w-2xl mx-auto mt-5 leading-7 text-slate-300">
              We will help you define a practical next step, whether that is a
              focused project team or a long-term offshore team.
            </p>
            <div className="mt-8">
              <PrimaryCTA light />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
