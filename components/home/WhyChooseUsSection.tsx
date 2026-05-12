import {
  FiArrowRight,
  FiCode,
  FiLayers,
  FiMessageSquare,
  FiZap,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const strengths = [
  {
    id: "01",
    title: "Fast Iterations",
    description:
      "We ship in short development cycles. See real progress every single week, not months.",
    icon: <FiZap />,
    accent: "bg-sky-500",
  },
  {
    id: "02",
    title: "Scalable Architecture",
    description:
      "Systems designed to remain stable and performant as your user base grows.",
    icon: <FiLayers />,
    accent: "bg-sky-600",
  },
  {
    id: "03",
    title: "Transparent Workflow",
    description:
      "Clear progress updates, sprint reviews, and direct access to the engineering team.",
    icon: <FiMessageSquare />,
    accent: "bg-sky-700",
  },
  {
    id: "04",
    title: "Modern Tech Stack",
    description:
      "We use proven frameworks and cloud infrastructure to build future-ready products.",
    icon: <FiCode />,
    accent: "bg-slate-950",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="WHY US"
          headline="Built for Teams That Need Momentum Without Fragile Shortcuts"
          intro="We combine disciplined engineering with fast feedback loops, so your product can move quickly and still stay dependable."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/20">
            <div className="absolute inset-x-0 top-0 h-1 bg-sky-500" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">
              Delivery rhythm
            </p>
            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Weekly proof that the product is moving.
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-300">
              We keep the work visible: planned scope, shipped increments, review
              points, and architecture choices that can survive the next stage
              of growth.
            </p>

            <div className="mt-10 space-y-4">
              {["Plan", "Build", "Review", "Improve"].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/15" />
                  <span className="min-w-20 text-right text-sm font-semibold text-slate-200">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-100"
            >
              Start a project
              <FiArrowRight />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <article
                key={strength.id}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl text-slate-950 shadow-sm transition group-hover:bg-slate-950 group-hover:text-white">
                    {strength.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-400">
                    {strength.id}
                  </span>
                </div>

                <div
                  className={`mt-7 h-1 w-12 rounded-full ${strength.accent}`}
                />

                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
