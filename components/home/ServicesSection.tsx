import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiCpu,
  FiLayers,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const coreServices = [
  {
    id: "01",
    title: "MVP Studio",
    kicker: "Validate, launch, learn",
    description:
      "Shape the first version of your product with focused discovery, sharp UX flows, and a build plan that gets you to market faster.",
    href: "/mvp-studio",
    icon: <FiTrendingUp />,
    image:
      "/images/our-services/Corporate Strategy Workshop with Colorful Ideas Wall.jpeg",
    features: [
      "Product strategy",
      "Prototype to launch",
      "Founder-friendly scope",
    ],
  },
  {
    id: "02",
    title: "Product Engineering",
    kicker: "Web, mobile, cloud",
    description:
      "Build reliable applications with modern architecture, clean implementation, and the engineering discipline needed for long-term scale.",
    href: "/services/software-development",
    icon: <FiSettings />,
    image: "/images/our-services/Pair programming.jpeg",
    features: [
      "Next.js applications",
      "APIs and integrations",
      "Cloud-ready systems",
    ],
  },
  {
    id: "03",
    title: "AI & Automation",
    kicker: "Intelligent workflows",
    description:
      "Connect LLMs, data, and business workflows so your team can reduce manual work and make better operational decisions.",
    href: "/services/ai-automation",
    icon: <FiCpu />,
    image:
      "/images/our-services/Monitoring and analyzing website traffic and user.jpeg",
    features: ["AI assistants", "Workflow automation", "Analytics dashboards"],
  },
];

const deliveryHighlights = [
  {
    icon: <FiLayers />,
    title: "Structured delivery",
    description:
      "Clear milestones, lean scope, and progress you can inspect every week.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Built for outcomes",
    description:
      "Every build decision connects back to speed, reliability, or growth.",
  },
  {
    icon: <FiCpu />,
    title: "Automation-ready",
    description:
      "We design systems that can grow into AI and workflow automation later.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="OUR SERVICES"
          headline="Core Capabilities for Building Modern Digital Products"
          intro="From early product strategy to production engineering and AI automation, we help teams move from idea to operating software."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <article
              key={service.id}
              className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 ${
                index === 0 ? "lg:mt-6" : index === 2 ? "lg:mt-10" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
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
                  className="inline-flex items-center gap-2 mt-6 text-sm font-bold transition text-slate-950 hover:text-sky-700"
                >
                  Learn more
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[3.75rem] overflow-hidden bg-white border shadow-lg rounded-3xl border-slate-200 shadow-slate-900/5">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[25px]">
              <Image
                src="/images/our-services/colleagues-working-project-discussing-details.jpg"
                alt="Team collaborating on a digital product"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="rounded-[25px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                How we work
              </p>
              <h3 className="max-w-2xl mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Senior product thinking, practical engineering, and measurable
                progress.
              </h3>

              <div className="grid gap-4 mt-8 sm:grid-cols-3">
                {deliveryHighlights.map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-slate-50">
                    <div className="flex items-center justify-center w-10 h-10 text-lg text-white rounded-xl bg-slate-950">
                      {item.icon}
                    </div>
                    <h4 className="mt-4 text-sm font-bold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
