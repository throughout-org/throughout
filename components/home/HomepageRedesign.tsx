import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCode,
  FiExternalLink,
  FiMessageCircle,
  FiPenTool,
  FiShoppingBag,
  FiTrendingUp,
} from "react-icons/fi";
import { CalendlyButton } from "@/components/CalendlyPopup";
import GallerySlider from "@/components/home/GallerySlider";
import HeroCursorField from "@/components/home/HeroCursorField";
import HeroTeamGrowth from "@/components/home/HeroTeamGrowth";
import ProductDashboardPreview from "@/components/home/ProductDashboardPreview";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import TeamSection from "@/components/about/TeamSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import { portfolioProjects } from "@/data/portfolio";

const services = [
  {
    icon: FiCode,
    title: "Engineering",
    copy: "We design, build, and run web, mobile, and SaaS products, from the first release to scale.",
    items: [
      "Web & mobile apps",
      "SaaS platforms & APIs",
      "AI features & workflow automation",
      "Shopify & e-commerce",
      "Data engineering",
      "Cloud, DevOps & QA",
    ],
  },
  {
    icon: FiPenTool,
    title: "Design",
    copy: "Interfaces and brands people understand at a glance, designed around real tasks.",
    items: [
      "Product strategy & UX research",
      "UI/UX for web, mobile & dashboards",
      "Interactive prototypes",
      "Design systems",
      "Websites & landing pages",
      "Brand identity",
    ],
  },
  {
    icon: FiTrendingUp,
    title: "Digital marketing",
    copy: "Getting the right people to find you, and turning visits into customers.",
    items: [
      "SEO & content strategy",
      "Google & Meta ads",
      "Conversion optimisation",
      "Email & lifecycle marketing",
      "Social media management",
      "Analytics & reporting",
    ],
  },
];

const products = [
  {
    name: "Checkout",
    label: "Point of sale",
    description:
      "An offline-first POS that brings sales, inventory, customers, purchasing, and reporting into one beautifully simple system.",
    href: "https://checkout.throughout.io/",
    icon: FiShoppingBag,
    accent: "checkout",
  },
  {
    name: "Rankout",
    label: "Search visibility",
    description:
      "One platform to research, automate, implement, and measure SEO, AEO, and GEO, with every AI-drafted change under your control.",
    href: "https://rankout.app/",
    icon: FiBarChart2,
    accent: "rankout",
  },
  {
    name: "Comflo",
    label: "Commerce operations",
    description:
      "A connected workspace for customer conversations, orders, channels, and retention, built for growing ecommerce businesses.",
    href: "https://comflo.app/",
    icon: FiMessageCircle,
    accent: "comflo",
  },
] as const;

const productStyles = {
  checkout: {
    card: "bg-transparent border-[#dedee2]",
    icon: "bg-[#2b2b68] text-white",
    glow: "hidden",
    visual: "bg-[#2b2b68] text-white",
    badge: "bg-[#dff7f7] text-[#176f70]",
    accent: "text-[#1eb4b4]",
    status: "bg-[#1eb4b4]",
  },
  rankout: {
    card: "bg-transparent border-[#dedbd3]",
    icon: "bg-[#ea2804] text-white",
    glow: "hidden",
    visual: "bg-transparent text-ink shadow-none",
    badge: "bg-[#ffe4dc] text-[#9f1c04]",
    accent: "text-[#ea2804]",
    status: "bg-[#ea2804]",
  },
  comflo: {
    card: "bg-transparent border-[#d7e6df]",
    icon: "bg-[#0e2e24] text-[#19c37d]",
    glow: "hidden",
    visual: "bg-white text-ink",
    badge: "bg-[#dff8ec] text-[#0e2e24]",
    accent: "text-[#19c37d]",
    status: "bg-[#19c37d]",
  },
} as const;

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function PrimaryCTA({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <CalendlyButton
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-whisper transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${light ? "bg-dark-ink text-dark-canvas hover:bg-primary-soft" : "bg-primary text-on-primary hover:bg-primary-hover"} ${className}`}
    >
      Book a Free Consultation <FiArrowRight aria-hidden="true" />
    </CalendlyButton>
  );
}

export default function HomepageRedesign() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden border-b border-hairline px-4 pb-20 pt-44 isolate sm:px-6 sm:pb-28 sm:pt-56 md:-mt-24 lg:-mt-[88px] lg:px-8 lg:pt-56 xl:-mt-[104px] xl:pt-64">
        <HeroCursorField />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <p className="mx-auto hidden items-center gap-2 rounded-full border border-hairline bg-canvas-elevated px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-ink-2 shadow-whisper">
              <span className="w-2 h-2 rounded-full bg-primary" /> Dedicated
              digital teams
            </p>
            <HeroTeamGrowth />
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
              We build, design, and grow digital products.
            </h1>
            <p className="max-w-3xl mx-auto text-base leading-7 mt-7 text-pretty text-ink-2 sm:text-xl sm:leading-8">
              Websites, apps, and SaaS platforms engineered properly, designed
              to be easy to use, and marketed so they find customers. Hire us
              for a project, or as your own dedicated team.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 mt-9 sm:flex-row">
              <PrimaryCTA className="w-full sm:w-auto" />
              <Link
                href="#work"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold transition bg-canvas-elevated border rounded-full min-h-12 border-hairline-strong text-ink hover:border-ink-4 hover:bg-canvas-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="px-4 py-20 scroll-mt-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
              Everything your product needs, from one team.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-2">
              Take one service or combine all three. Either way, the people you
              talk to are the people doing the work.
            </p>
          </div>
          <div className="grid gap-5 mt-12 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, copy, items }) => (
              <article
                key={title}
                className="p-7 bg-canvas-elevated border rounded-[1.5rem] border-hairline sm:p-8"
              >
                <span className="flex items-center justify-center w-12 h-12 text-xl text-on-primary rounded-2xl bg-primary">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-2">{copy}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <FiCheck
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="px-4 py-20 scroll-mt-24 bg-canvas-soft sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Our work</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
              Live projects we&apos;ve built for clients.
            </h2>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.clientName} (opens in a new tab)`}
                className="flex flex-col overflow-hidden transition bg-canvas-elevated border group rounded-[1.5rem] border-hairline hover:-translate-y-1 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-canvas-soft">
                  <Image
                    src={project.image}
                    alt={`${project.clientName} website`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-primary-soft px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                    {project.clientName}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink-2">
                    {project.title.split(" – ")[1]}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-ink-2 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 pt-6 mt-auto text-sm font-semibold text-primary">
                    Visit site
                    <FiExternalLink aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-primary-soft blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <Eyebrow>Products by Throughout</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                We don&apos;t just build for clients. We build our own.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-2 lg:justify-self-end">
              The same product thinking, engineering discipline, and attention
              to detail we bring to every partnership. Tested in software we
              own, operate, and keep improving.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              const styles = productStyles[product.accent];

              return (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${product.name} (opens in a new tab)`}
                  className={`group relative flex min-h-[31rem] flex-col overflow-hidden rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-floating focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-7 ${styles.card}`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl ${styles.glow}`}
                  />
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-whisper ${styles.icon}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] ${styles.badge}`}
                    >
                      {product.label}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-ink">
                      {product.name}
                      <span className={styles.accent}>.</span>
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-ink-2">
                      {product.description}
                    </p>
                  </div>

                  <div
                    className={`relative mt-8 flex-1 overflow-hidden rounded-2xl border border-black/10 p-4 shadow-card transition duration-500 group-hover:-translate-y-1 ${styles.visual}`}
                    aria-hidden="true"
                  >
                    <div className="flex items-center justify-between text-[0.65rem] font-semibold opacity-70">
                      <span>{product.name} / Overview</span>
                      <span className={`h-2 w-2 rounded-full ${styles.status}`} />
                    </div>

                    <ProductDashboardPreview product={product.name} />
                  </div>

                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Explore {product.name}
                    <FiExternalLink className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="engagement-models"
        className="px-4 py-20 scroll-mt-24 bg-canvas-soft sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Choose the right model</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
              One partner. Two clear ways to work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-2">
              Choose based on whether you need a defined outcome now or an
              embedded team for the long term.
            </p>
          </div>
          <div className="grid gap-6 mt-12 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[1.5rem] bg-[radial-gradient(130%_110%_at_100%_0%,#0f2a4d_0%,#0a0a0d_55%)] p-7 text-dark-ink sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary-bright/20 blur-[80px]"
              />
              <div className="relative">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary-hover">
                  For a project or service
                </span>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.02em]">
                  Dedicated services
                </h3>
                <p className="max-w-xl mt-4 leading-7 text-dark-ink-muted">
                  A focused team owns a defined product, platform, campaign, or
                  specialist workstream from planning through delivery.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-dark-ink-muted">
                  {[
                    "A clear scope, outcome, and delivery rhythm",
                    "The capabilities your project actually needs",
                    "Direct communication with the people doing the work",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <FiCheck
                        className="mt-0.5 shrink-0 text-primary-hover"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 font-semibold text-dark-ink mt-9 hover:text-primary-hover"
                >
                  See what we do <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-[1.5rem] border border-primary/20 bg-primary-soft p-7 sm:p-10">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
                For long-term capacity
              </span>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink">
                Dedicated offshore teams
              </h3>
              <p className="max-w-xl mt-4 leading-7 text-ink-2">
                Build a stable, managed team that integrates with your company,
                tools, rituals, and roadmap without building the hiring
                operation alone.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-2">
                {[
                  "Roles matched to your roadmap and ways of working",
                  "A team designed for continuity and knowledge retention",
                  "Ongoing support for team formation and delivery",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheck
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold mt-9 text-primary hover:text-primary-press"
              >
                Build your team <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 text-dark-ink bg-dark-canvas sm:px-6 sm:py-28 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,51,102,0.55)_0%,rgba(0,51,102,0)_70%)] blur-[100px]"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary-hover">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
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
              <li key={number} className="pt-6 border-t border-dark-hairline">
                <span className="font-mono text-sm text-primary-hover">{number}</span>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-dark-ink-muted">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="team"
        className="px-4 py-20 scroll-mt-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <TeamSection />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Life at Throughout</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                Where the work happens, and gets recognised.
              </h2>
            </div>
            <p className="max-w-lg leading-7 text-ink-2">
              From late nights shipping client work to BestWeb.LK 2026 wins for
              projects like bavaram.lk, a look behind the delivery.
            </p>
          </div>
          <div className="mt-12">
            <GallerySlider />
          </div>
        </div>
      </section>

      <ServiceFAQ
        badgeText="Frequently asked questions"
        headline="Before we start."
        faqs={homepageFAQs}
        includeSchema={false}
      />

      <ContactInfoSection />
    </>
  );
}
