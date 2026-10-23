import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiSearch } from "react-icons/fi";
import { BookCallLink } from "@/components/BookCallLink";
import ContactForm from "@/components/home/ContactForm";
import TypingCode from "@/components/home/TypingCode";
import VideoCard from "@/components/home/VideoCard";
import TechMarquee from "@/components/home/TechMarquee";
import Thread, { ThreadNode } from "@/components/home/Thread";
import { work, type WorkItem } from "@/data/portfolio";
import { voices } from "@/data/voices";

export const homepageFAQs = [
  {
    question: "What does Throughout do?",
    answer:
      "Throughout is an offshore software development studio in Colombo, Sri Lanka. We design, build and grow websites, web and mobile apps, MVPs and SaaS platforms for founders, agencies and growing businesses in Australia, Europe and beyond.",
  },
  {
    question: "How does working with an offshore team in Sri Lanka work?",
    answer:
      "We work on GMT+5:30, which overlaps with the working day in Australia, Europe and the Gulf. You get one point of contact, regular progress updates in English, and calls scheduled at times that suit you.",
  },
  {
    question: "Can I hire dedicated developers through Throughout?",
    answer:
      "Yes. We build dedicated development teams of developers, designers, QA, DevOps and marketers who work inside your tools and roadmap, as a long-term extension of your company.",
  },
  {
    question:
      "What is the difference between a project team and a dedicated team?",
    answer:
      "A project team delivers a defined outcome, such as a new website, app or MVP, with a clear scope and timeline. A dedicated team is built for ongoing work and becomes part of how your company ships.",
  },
  {
    question: "Do you sign NDAs, and who owns the work?",
    answer:
      "Yes, we can sign your NDA before you share details. Ownership of the code, designs and content we create for you is agreed in the contract before any work starts.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "It starts with a free 30-minute call to understand your goal, constraints and the skills you need. We then send a proposal with the team, scope, price and payment terms.",
  },
];

const services = [
  {
    title: "Engineering",
    href: "/services/engineering",
    copy: "Custom software development for web, mobile and SaaS, from the first release to scale.",
    items: [
      "Website & web app development",
      "Mobile app development",
      "SaaS & MVP development",
      "AI & workflow automation",
      "Shopify & e-commerce",
      "Cloud, DevOps & QA",
    ],
    artefact: "code",
  },
  {
    title: "Design",
    href: "/services/design",
    copy: "UI/UX and website design people understand at a glance, built around real tasks.",
    items: [
      "Product strategy & UX research",
      "UI/UX design for web & mobile",
      "Website & landing page design",
      "Interactive prototypes",
      "Design systems",
      "Brand identity",
    ],
    artefact: "frame",
  },
  {
    title: "Marketing",
    href: "/services/marketing",
    copy: "SEO and digital marketing that get the right people to find you, and turn visits into customers.",
    items: [
      "SEO services",
      "Content strategy",
      "Google & Meta ads",
      "Conversion optimisation",
      "Email & messaging campaigns",
      "Analytics & reporting",
    ],
    artefact: "search",
  },
] as const;

const team = [
  {
    name: "Bavaram Karunaaharan",
    role: "CEO & Co-Founder",
    photo: "/images/team/bavaram.png",
  },
  {
    name: "Insaf Inhaam",
    role: "CTO & Co-Founder",
    photo: "/images/team/Insaf.png",
  },
  {
    name: "Janith Viranga",
    role: "Software Engineer",
    photo: "/images/team/janith.png",
  },
  {
    name: "Aysha Shahani",
    role: "Software Engineer",
    photo: "/images/team/aysha-bg.png",
  },
  {
    name: "Amrith Shylendra",
    role: "Sales Executive",
    photo: "/images/team/amrith.png",
  },
  { name: "Khansa", role: "Video Editor", photo: "/images/team/khansa.png" },
];

const products = work.filter((item) => item.kind === "Our product");
const clients = work.filter((item) => item.kind === "Client project");

// Content starts 6rem in on desktop so the thread can run down the left gutter.
const container = "relative mx-auto max-w-7xl px-4 sm:px-6 lg:pl-24 lg:pr-8";
const heroContainer = "relative mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12";
const h2 = "font-display max-w-4xl text-[clamp(2rem,4vw,3.4rem)] font-[720]";
const caseTitle =
  "font-display mt-4 max-w-4xl text-[clamp(1.6rem,3vw,2.5rem)] font-[720]";
const primaryButton =
  "inline-flex min-h-12 items-center gap-2 rounded-md bg-sapphire px-6 text-sm font-semibold text-on-sapphire transition-colors hover:bg-sapphire/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

function Artefact({ kind }: { kind: (typeof services)[number]["artefact"] }) {
  if (kind === "code") {
    return <TypingCode />;
  }
  if (kind === "frame") {
    return (
      <div className="p-3 transition-colors border rounded-md border-hairline bg-mist group-hover:border-signal">
        <p className="font-mono text-[11px] text-ink-3">
          Checkout / Desktop 1440
        </p>
        <div className="grid gap-2 p-3 mt-2 rounded bg-canvas">
          <div className="flex items-center justify-between">
            <span className="w-12 h-2 rounded-full bg-ink" />
            <span className="h-5 rounded w-14 bg-sapphire" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <span className="h-10 border-2 border-transparent rounded pick bg-mist" />
            <span className="h-10 border-2 border-transparent rounded pick pick-2 bg-mist" />
            <span className="h-10 border-2 rounded pick pick-3 border-signal bg-canvas" />
          </div>
          <span className="w-3/4 h-2 rounded-full bg-hairline" />
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 transition-colors border rounded-md border-hairline bg-canvas group-hover:border-signal">
      <p className="flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 font-mono text-[11px] text-ink-2">
        <FiSearch className="shrink-0 text-ink-3" aria-hidden="true" />
        <span className="inline-block overflow-hidden query whitespace-nowrap">
          web design agency
        </span>
      </p>
      <div className="mt-3 hit">
        <p className="font-mono text-[11px] text-ink-3">
          yourbusiness.lk › services
        </p>
        <p className="mt-1 text-[15px] font-semibold leading-5 text-sapphire">
          Your services page, found by the people searching for it
        </p>
        <p className="mt-1 text-xs leading-5 text-ink-2">
          Ranking on Google, cited by AI assistants, and built to turn the visit
          into an enquiry.
        </p>
      </div>
    </div>
  );
}

/** A site screenshot in a minimal browser window on the project's brand colour. Scrolls on hover of a parent `.group`. */
function BrowserFrame({
  src,
  host,
  color,
  alt,
  sizes,
  fullBleed = false,
}: {
  src: string;
  host: string;
  color: string;
  alt: string;
  sizes: string;
  fullBleed?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] ${fullBleed ? "" : "px-[7%] pt-[7%]"}`}
      style={fullBleed ? undefined : { backgroundColor: color }}
    >
      <div className="overflow-hidden rounded-t-md bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
        <div
          className="flex h-6 items-center gap-1.5 border-b border-black/5 bg-[#f3f4f7] px-3"
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate font-mono text-[10px] text-black/60">
            {host}
          </span>
        </div>
        <div className="frame-scroll relative aspect-[16/10] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={2667}
            sizes={sizes}
            className="absolute left-0 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

function WorkTile({
  item,
  large = false,
}: {
  item: WorkItem;
  large?: boolean;
}) {
  const host = new URL(item.href).host.replace(/^www\./, "");
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${item.name}: ${item.tagline} Opens ${host} in a new tab.`}
      className="group block rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
    >
      <BrowserFrame
        src={item.image}
        host={host}
        color={item.color}
        fullBleed
        alt={
          item.kind === "Our product"
            ? `${item.name}, a product built by Throughout`
            : `${item.name} website, built by Throughout`
        }
        sizes={
          large
            ? "(min-width: 1280px) 570px, (min-width: 768px) 46vw, 100vw"
            : "(min-width: 1280px) 390px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
        }
      />
      <div className="flex items-start justify-between gap-4 mt-5">
        <div className="min-w-0">
          <h4
            className={`font-display font-[700] ${large ? "text-3xl" : "text-2xl md:text-xl lg:text-2xl"}`}
          >
            {item.name}
          </h4>
          <p className="mt-2 leading-7 text-on-sapphire-muted">
            {item.tagline}
          </p>
          <p className="mt-2 font-mono text-xs text-on-sapphire-muted/80">
            {item.category}
          </p>
        </div>
        <FiArrowUpRight
          className="mt-1 shrink-0 text-2xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}

export default function HomepageRedesign() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-10 pb-20 overflow-hidden sm:pt-14 lg:pb-28 lg:pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-0 rounded-full animate-blob -left-24 h-80 w-80 bg-signal/20 blur-3xl" />
          <div className="absolute right-0 rounded-full animation-delay-2000 animate-blob top-20 h-96 w-96 bg-mist blur-3xl" />
          <div className="absolute bottom-0 rounded-full animation-delay-4000 animate-blob left-1/4 h-72 w-72 bg-sapphire/10 blur-3xl" />
        </div>
        <div className={`${heroContainer} relative`}>
          {/* Sized to the text + video row; the stats and logos below take exactly that width. */}
          <div className="lg:mx-auto lg:w-fit lg:max-w-[1340px]">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-20">
            <div>
              <p className="font-mono text-xs rise text-ink-2">
                Offshore software development · Colombo, Sri Lanka
              </p>
              <h1 className="font-display mt-6 text-[clamp(2.6rem,6.2vw,4.9rem)] font-[750] text-ink">
                <span className="block rise">We build,</span>
                <span className="block rise rise-2">design and grow</span>
                <span className="block rise rise-3 text-sapphire">
                  digital products.
                </span>
              </h1>
              <p className="max-w-xl mt-8 text-lg leading-8 rise rise-4 text-ink-2">
                We&apos;re an offshore software development studio in Sri Lanka.
                We build websites, apps and SaaS platforms for founders and
                agencies in Australia, Europe and beyond, at offshore rates.
                Hire us for a project, or build your own dedicated team.
              </p>
              <div className="flex flex-wrap items-center rise rise-4 mt-9 gap-x-8 gap-y-4">
                <BookCallLink className={primaryButton}>
                  Book a free call <FiArrowRight aria-hidden="true" />
                </BookCallLink>
                <Link
                  href="#work"
                  className="inline-flex items-center text-sm font-semibold link-draw min-h-11 text-ink"
                >
                  See our work
                </Link>
              </div>
            </div>
            <div className="w-full shrink-0 lg:w-[380px]">
              <div className="relative mx-auto max-w-[320px] lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 h-full w-full rounded-[10px] bg-sapphire"
                />
                <div className="relative">
                  <VideoCard
                    src="/videos/story.mp4"
                    previewSrc="/videos/story-preview.mp4"
                    priority
                    poster="/videos/story-poster.jpg"
                    title="Watch our story"
                    meta="2:50 · sound on"
                    ariaLabel="Watch our story, 2 minutes 50 seconds, with sound"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-0 lg:min-w-full">
            <dl className="grid gap-6 pt-6 mt-16 border-t border-hairline sm:grid-cols-2 lg:mt-20">
              <div>
                <dt className="font-mono text-xs text-ink-2">
                  BestWeb.LK 2026
                </dt>
                <dd className="mt-1 font-semibold">
                  Winner, Best Mobile User Experience
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-ink-2">Clients</dt>
                <dd className="mt-1 font-semibold">
                  Australia, Switzerland and Sri Lanka
                </dd>
              </div>
            </dl>

            <div className="pt-6 mt-8 border-t border-hairline">
              <TechMarquee />
            </div>
          </div>
          </div>
        </div>
      </section>

      <Thread>
        {/* Work */}
        <section
          id="work"
          className="py-24 scroll-mt-16 bg-sapphire text-on-sapphire lg:py-36"
        >
          <div className={container}>
            <ThreadNode onDark className="top-3" />
            <h2 className={h2}>
              Live products, built properly.{" "}
              <span className="text-on-sapphire-muted">
                Our own, and for clients.
              </span>
            </h2>

            <h3 className="pt-4 mt-16 font-mono text-xs border-t border-pale/25 text-on-sapphire-muted">
              Our products
              <span className="hidden lg:inline">
                {" "}
                · hover to scroll through a site
              </span>
            </h3>
            <div className="grid mt-8 gap-x-8 gap-y-14 md:grid-cols-2">
              {products.map((item) => (
                <WorkTile key={item.name} item={item} large />
              ))}
            </div>

            <h3 className="pt-4 mt-24 font-mono text-xs border-t border-pale/25 text-on-sapphire-muted">
              Selected client projects
            </h3>
            <div className="grid mt-8 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-5 lg:gap-x-6">
              {clients.map((item) => (
                <WorkTile key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section
          id="case-study"
          className="py-24 scroll-mt-16 bg-mist lg:py-32"
        >
          <div className={container}>
            <ThreadNode className="top-3" />
            <h2 className={h2}>
              Case studies.{" "}
              <span className="text-ink-2">
                What the work actually changed.
              </span>
            </h2>

            <div className="grid gap-6 pt-8 mt-14 border-t border-ink/15 sm:grid-cols-2 sm:items-start sm:gap-12">
              <div>
                <p className="font-mono text-xs text-ink-2">From Throughout</p>
                <h3 className="mt-4 text-2xl font-semibold">Insaf Inhaam</h3>
                <p className="mt-2 text-ink-2">CTO &amp; Co-Founder, Throughout</p>
              </div>
              <VideoCard
                aspect="landscape"
                src="/videos/insaf-throughout.mp4"
                previewSrc="/videos/insaf-throughout-preview.mp4"
                poster="/videos/insaf-throughout-poster.jpg"
                title="Watch the video"
                meta="0:52 · sound on"
                ariaLabel="Watch Insaf Inhaam from Throughout, 52 seconds, with sound"
              />
            </div>

            <article className="pt-12 border-t mt-14 border-ink/15">
              <p className="font-mono text-xs text-ink-2">
                Comflo · Customer retention campaign
              </p>
              <h3 className={caseTitle}>
                They already had the customers.{" "}
                <span className="text-ink-2">
                  Comflo helped bring them back.
                </span>
              </h3>

              <div className="grid gap-12 mt-12 lg:grid-cols-12 lg:items-center lg:gap-14">
                <div className="lg:col-span-7">
                  <VideoCard
                    aspect="landscape"
                    src="/videos/comflo-retention.mp4"
                    previewSrc="/videos/comflo-retention-preview.mp4"
                    poster="/videos/comflo-retention-poster.jpg"
                    title="How the campaign worked"
                    meta="0:47 · sound on"
                    ariaLabel="Comflo customer retention campaign video, 47 seconds, with sound"
                  />
                </div>

                <div className="lg:col-span-5">
                  <p className="font-display text-[clamp(3.5rem,8vw,6rem)] font-[750] leading-none text-sapphire">
                    28.6×
                  </p>
                  <p className="mt-2 font-mono text-xs text-ink-2">
                    Return on ad spend, in just 24 hours
                  </p>

                  <dl className="grid grid-cols-3 gap-4 py-6 mt-10 border-y border-ink/15">
                    {[
                      ["200", "Existing customers reached"],
                      ["LKR 1,400", "Campaign spend"],
                      ["LKR 40,000+", "Revenue generated"],
                    ].map(([value, label]) => (
                      <div key={label} className="min-w-0">
                        <dt className="sr-only">{label}</dt>
                        <dd className="font-display text-[clamp(1.05rem,2vw,1.5rem)] font-[720] leading-tight">
                          {value}
                        </dd>
                        <dd className="mt-1.5 text-xs leading-5 text-ink-2 sm:text-sm">
                          {label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-8 leading-7 text-ink-2">
                    By reaching just 200 existing customers through WhatsApp,
                    the campaign turned LKR 1,400 in messaging spend into over
                    LKR 40,000 in revenue within 24 hours.
                  </p>

                  <a
                    href="https://comflo.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${primaryButton} mt-8`}
                  >
                    See what Comflo can do <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="grid gap-8 pt-10 mt-14 border-t border-ink/10 sm:grid-cols-12 sm:items-center sm:gap-10">
                <div className="sm:col-span-4">
                  <p className="font-mono text-xs text-ink-2">Behind the product</p>
                  <p className="font-display mt-3 text-[clamp(1.4rem,2.4vw,1.9rem)] font-[720] leading-tight">
                    Why we built Comflo.
                  </p>
                  <p className="mt-3 leading-7 text-ink-2">
                    The story behind it, in under a minute.
                  </p>
                </div>
                <div className="sm:col-span-8">
                  <VideoCard
                    aspect="landscape"
                    src="/videos/reason-behind-developing-comflo.mp4"
                    poster="/videos/reason-behind-developing-comflo-poster.jpg"
                    title="Watch the story"
                    meta="0:48 · sound on"
                    ariaLabel="Why we built Comflo, 48 seconds, with sound"
                  />
                </div>
              </div>
            </article>

            <article
              id="seo-case-study"
              className="pt-12 mt-14 border-t scroll-mt-24 border-ink/15 lg:mt-16"
            >
              <p className="font-mono text-xs text-ink-2">
                Müllwood · SEO, AI search and content · July to September 2026
              </p>
              <h3 className={caseTitle}>
                A store Google couldn&apos;t read.{" "}
                <span className="text-ink-2">
                  Rebuilt for search and AI assistants in three months.
                </span>
              </h3>

              <div className="grid gap-12 mt-12 lg:grid-cols-12 lg:items-center lg:gap-14">
                <div className="lg:order-2 lg:col-span-7">
                  <a
                    href="https://mullwood.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Müllwood website (opens mullwood.lk in a new tab)"
                    className="group block rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-signal"
                  >
                    <BrowserFrame
                      src="/images/work/mullwood.jpg"
                      host="mullwood.lk"
                      color="#127a78"
                      alt="Müllwood curly hair care website, optimised for search by Throughout"
                      sizes="(min-width: 1024px) 55vw, 92vw"
                    />
                  </a>
                </div>

                <div className="lg:order-1 lg:col-span-5">
                  <p className="leading-7 text-ink-2">
                    Müllwood, Sri Lanka&apos;s first curly hair brand, had a
                    store Google couldn&apos;t understand: no keywords, no
                    structured data, hundreds of images without descriptions, a
                    leftover demo page in Google and a malicious script hidden
                    in its blog. We fixed the foundations, built content around
                    what curly-haired customers actually search, and made the
                    store readable by ChatGPT, Gemini and Perplexity.
                  </p>

                  <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/15">
                    {[
                      ["Structured data coverage", "0%", "100%"],
                      [
                        "Pages & products with SEO titles and keywords",
                        "0",
                        "20",
                      ],
                      ["Images missing alt text", "671", "Fixed"],
                      ["Blog articles", "1", "13"],
                    ].map(([label, before, after]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-4 py-3.5"
                      >
                        <dt className="text-sm text-ink-2">{label}</dt>
                        <dd className="shrink-0 font-display text-lg font-[720] tabular-nums">
                          <span className="text-ink-3">{before}</span>
                          <span className="mx-2 text-signal" aria-label="to">
                            →
                          </span>
                          <span className="text-sapphire">{after}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 text-sm leading-6 text-ink-2">
                    Also: technical clean-up, 3 new category pages, Google
                    Analytics and Search Console, Bing and IndexNow, an llms.txt
                    file for AI assistants, and a Google Business Profile.
                  </p>

                  <BookCallLink className={`${primaryButton} mt-8`}>
                    Talk to us about SEO <FiArrowRight aria-hidden="true" />
                  </BookCallLink>
                </div>
              </div>
            </article>

            <article
              id="seo-case-study-coreconnect"
              className="pt-12 mt-14 border-t scroll-mt-24 border-ink/15 lg:mt-16"
            >
              <p className="font-mono text-xs text-ink-2">
                CoreConnect group · Aerix, Airmate and CoreConnect · SEO, AEO
                and GEO · Month 1, September 2026
              </p>
              <h3 className={caseTitle}>
                Three brands, invisible to search.{" "}
                <span className="text-ink-2">
                  The foundations rebuilt on all three in one month.
                </span>
              </h3>

              <div className="grid gap-12 mt-12 lg:grid-cols-12 lg:items-center lg:gap-14">
                <div className="lg:col-span-7">
                  <a
                    href="https://airmatelk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Airmate website (opens airmatelk.com in a new tab)"
                    className="group block rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-signal"
                  >
                    <BrowserFrame
                      src="/images/work/airmate.jpg"
                      host="airmatelk.com"
                      color="#1d6fa5"
                      alt="Airmate scent diffuser store, optimised for search and AI assistants by Throughout"
                      sizes="(min-width: 1024px) 55vw, 92vw"
                    />
                  </a>
                </div>

                <div className="lg:col-span-5">
                  <p className="leading-7 text-ink-2">
                    CoreConnect Distributions runs three sites: Aerix for
                    business scenting, Airmate for home diffusers, and the
                    CoreConnect parent brand. Search engines and AI assistants
                    had almost nothing to read: no SEO titles, no structured
                    data, leftover template pages and duplicate URLs. Airmate
                    had no AI Overview citations at all. In the first month we
                    rebuilt the foundations on all three sites and linked the
                    brands, so AI assistants can tell who owns what.
                  </p>

                  <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/15">
                    {[
                      ["Aerix URLs with SEO titles and metas", "0%", "90%"],
                      [
                        "Airmate pages and products with SEO titles",
                        "0",
                        "61",
                      ],
                      ["CoreConnect pages with structured data", "0%", "100%"],
                      ["Answer-ready guides across the three sites", "0", "8"],
                    ].map(([label, before, after]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-4 py-3.5"
                      >
                        <dt className="text-sm text-ink-2">{label}</dt>
                        <dd className="shrink-0 font-display text-lg font-[720] tabular-nums">
                          <span className="text-ink-3">{before}</span>
                          <span className="mx-2 text-signal" aria-label="to">
                            →
                          </span>
                          <span className="text-sapphire">{after}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 text-sm leading-6 text-ink-2">
                    Also: product and business schema on all 59 Aerix products,
                    FAQ schema across the group, 246 images given descriptive
                    alt text, duplicate pages redirected, and sitemaps submitted
                    to Google. Rankings follow as Google recrawls; months 2 and
                    3 build content and authority.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 scroll-mt-16 lg:py-36">
          <div className={container}>
            <ThreadNode className="top-3" />
            <h2 className={h2}>
              One team for the whole product.{" "}
              <span className="text-ink-2">
                Software development, design and marketing under one roof.
              </span>
            </h2>
            <div className="mt-16 border-t border-ink">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-6 py-10 border-b group border-hairline lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12"
                >
                  <h3 className="font-display text-[clamp(2.2rem,3.6vw,3.9rem)] font-[750] transition-colors group-hover:text-sapphire lg:col-span-4 xl:col-span-5">
                    <Link href={service.href}>{service.title}</Link>
                  </h3>
                  <div className="lg:col-span-4">
                    <p className="leading-7 text-ink-2">{service.copy}</p>
                    <p className="mt-4 text-sm leading-7 text-ink">
                      {service.items.join(" · ")}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold link-draw min-h-11 text-sapphire"
                    >
                      Explore {service.title.toLowerCase()} <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div
                    className="lg:col-span-4 xl:col-span-3"
                    aria-hidden="true"
                  >
                    <Artefact kind={service.artefact} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to work */}
        <section id="engagement-models" className="pb-24 scroll-mt-16 lg:pb-36">
          <div className={container}>
            <ThreadNode className="top-3" />
            <h2 className={h2}>
              Hire a project team or dedicated developers.{" "}
              <span className="text-ink-2">
                A defined outcome now, or a team that stays.
              </span>
            </h2>
            <div className="grid mt-16 border-t border-ink lg:grid-cols-2">
              <article className="py-10 border-b border-hairline lg:border-b-0 lg:border-r lg:pr-12">
                <p className="font-mono text-xs text-ink-2">
                  Start · scope · launch
                </p>
                <h3 className="font-display mt-2 text-3xl font-[720]">
                  Project team
                </h3>
                <p className="max-w-md mt-4 leading-7 text-ink-2">
                  A focused team builds a defined website, app, MVP or campaign,
                  from planning through launch.
                </p>
                <ul className="max-w-md mt-6 text-sm divide-y divide-hairline border-y border-hairline">
                  <li className="py-3">
                    A clear scope, outcome and delivery rhythm
                  </li>
                  <li className="py-3">Only the skills your project needs</li>
                  <li className="py-3">
                    Direct contact with the people doing the work
                  </li>
                </ul>
                <BookCallLink className="inline-flex items-center gap-2 mt-6 text-sm font-semibold link-draw min-h-11 text-sapphire">
                  Plan a project <FiArrowRight aria-hidden="true" />
                </BookCallLink>
              </article>
              <article className="py-10 lg:pl-12">
                <p className="font-mono text-xs text-ink-2">
                  Start · and keep going
                </p>
                <h3 className="font-display mt-2 text-3xl font-[720]">
                  Dedicated development team
                </h3>
                <p className="max-w-md mt-4 leading-7 text-ink-2">
                  Hire dedicated developers, designers and marketers who work
                  inside your company, tools and roadmap. An English-speaking
                  team on GMT+5:30, with a working overlap with Australia,
                  Europe and the Gulf.
                </p>
                <ul className="max-w-md mt-6 text-sm divide-y divide-hairline border-y border-hairline">
                  <li className="py-3">Roles matched to your roadmap</li>
                  <li className="py-3">
                    Built for continuity and knowledge retention
                  </li>
                  <li className="py-3">Ongoing support as the team grows</li>
                </ul>
                <BookCallLink className="inline-flex items-center gap-2 mt-6 text-sm font-semibold link-draw min-h-11 text-sapphire">
                  Build your team <FiArrowRight aria-hidden="true" />
                </BookCallLink>
              </article>
            </div>
          </div>
        </section>

        {/* People */}
        <section
          id="team"
          className="py-24 border-t scroll-mt-16 border-hairline lg:py-36"
        >
          <div className={container}>
            <ThreadNode className="top-3" />
            <h2 className={h2}>
              The people you&apos;ll work with.{" "}
              <span className="text-ink-2">
                A small team in Colombo, Sri Lanka.
              </span>
            </h2>

            <figure className="mt-14">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                <div className="relative col-span-2 aspect-[3/4] overflow-hidden rounded-[10px] bg-mist md:row-span-2 md:aspect-auto">
                  <Image
                    src="/images/gallery/web/IMG_4957.jpg"
                    alt="Insaf and Bavaram with Throughout's BestWeb.LK 2026 awards"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                {[
                  {
                    src: "IMG_4937.jpg",
                    alt: "Bavaram holding both BestWeb.LK 2026 awards",
                  },
                  {
                    src: "IMG_4868.jpg",
                    alt: "Throughout's two BestWeb.LK 2026 awards on stage",
                  },
                  {
                    src: "IMG_4870.jpg",
                    alt: "BestWeb.LK 2026 Winner award for Best Mobile User Experience",
                  },
                  {
                    src: "IMG_4871.jpg",
                    alt: "BestWeb.LK 2026 Bronze award for Best Personal Website",
                  },
                ].map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-mist"
                  >
                    <Image
                      src={`/images/gallery/web/${photo.src}`}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* 16fr / 9fr keeps a 4:3 and a 3:4 photo at exactly the same height */}
              <div className="mt-3 grid grid-cols-[16fr_9fr] gap-3 sm:mt-4 sm:gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-mist">
                  <Image
                    src="/images/gallery/web/IMG_3892.jpg"
                    alt="Throughout engineers pairing on a build from the studio couch"
                    fill
                    sizes="(min-width: 1024px) 64vw, 64vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-mist">
                  <Image
                    src="/images/gallery/web/IMG_4710.jpg"
                    alt="A multi-monitor workspace mid-project at Throughout"
                    fill
                    sizes="(min-width: 1024px) 36vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </figure>

            <ul className="grid grid-cols-2 mt-16 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {team.map((member) => (
                <li key={member.name} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-mist">
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Throughout`}
                      fill
                      sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 45vw"
                      className="object-cover object-top transition duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <p className="mt-3 font-semibold leading-6">{member.name}</p>
                  <p className="text-sm text-ink-2">{member.role}</p>
                </li>
              ))}
            </ul>

          </div>
        </section>

        {/* Voices */}
        <section id="voices" className="py-24 scroll-mt-16 bg-mist lg:py-32">
          <div className={container}>
            <ThreadNode className="top-3" />
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6 xl:col-span-7">
                <h2 className={h2}>
                  In their own words.{" "}
                  <span className="text-ink-2">
                    Life at Throughout, from the team.
                  </span>
                </h2>
                <p className="max-w-md mt-6 text-lg leading-8 text-ink-2">
                  Short videos from the people doing the work, on what
                  they&apos;ve learned building products here.
                </p>
                <ul className="max-w-md mt-10 divide-y divide-ink/10 border-y border-ink/10">
                  {voices.map((voice) => (
                    <li
                      key={voice.src}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span>
                        <span className="block font-semibold">
                          {voice.name}
                        </span>
                        <span className="block text-sm text-ink-2">
                          {voice.title}
                        </span>
                      </span>
                      <span className="font-mono text-xs shrink-0 text-ink-2">
                        {voice.role} · {voice.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <ul
                className={`lg:col-span-6 xl:col-span-5 ${
                  voices.length === 1
                    ? "mx-auto w-full max-w-[340px]"
                    : "grid grid-cols-2 gap-4 lg:gap-6"
                }`}
              >
                {voices.map((voice) => (
                  <li key={voice.src}>
                    <VideoCard
                      src={voice.src}
                      poster={voice.poster}
                      title={voice.name}
                      meta={voice.duration}
                      ariaLabel={`${voice.name}, ${voice.role}: ${voice.title}. Video, ${voice.duration}, with sound.`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-hairline lg:py-32">
          <div className={container}>
            <ThreadNode className="top-3" />
            <div className="grid gap-10 lg:grid-cols-12">
              <h2
                className={`${h2} lg:sticky lg:top-28 lg:col-span-4 lg:self-start`}
              >
                Questions, answered.
              </h2>
              <div className="divide-y divide-hairline border-y border-hairline lg:col-span-8">
                {homepageFAQs.map((faq) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>
                      <span
                        className="mt-0.5 text-2xl font-normal leading-none text-signal transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-6 leading-7 text-ink-2">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Close */}
        <section
          id="contact"
          className="py-24 scroll-mt-16 bg-sapphire text-on-sapphire lg:py-36"
        >
          <div className={container}>
            <ThreadNode onDark className="top-6" />
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-[750]">
                  Let&apos;s build it.
                </h2>
                <p className="max-w-md mt-8 text-lg leading-8 text-on-sapphire-muted">
                  Tell us what you need to build, or the team you need to build
                  it. A 30-minute call is enough to work out the next step,
                  scheduled in your time zone.
                </p>
                <BookCallLink className="inline-flex items-center gap-2 px-6 text-sm font-semibold transition-colors bg-white rounded-md mt-9 min-h-12 text-sapphire hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Book a free 30-minute call <FiArrowRight aria-hidden="true" />
                </BookCallLink>
                <dl className="grid gap-5 pt-6 mt-12 border-t border-pale/25 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs text-on-sapphire-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:info@throughout.io"
                        className="font-semibold link-draw"
                      >
                        info@throughout.io
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-on-sapphire-muted">
                      WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="https://wa.me/94767727992"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold link-draw"
                      >
                        +94 76 772 7992
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div
                id="contact-form"
                className="scroll-mt-24 lg:col-span-5 lg:col-start-8"
              >
                <h3 className="font-display text-2xl font-[720]">
                  Prefer to write?
                </h3>
                <p className="mt-2 text-on-sapphire-muted">
                  A short outline is enough to start.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Thread>
    </>
  );
}
