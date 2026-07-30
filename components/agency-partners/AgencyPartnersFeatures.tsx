import {
  FiSettings,
  FiUsers,
  FiClipboard,
  FiBriefcase,
  FiLock,
  FiTrendingUp,
} from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const features = [
  {
    icon: <FiSettings />,
    title: "Full software development lifecycle",
    description:
      "From discovery and requirements through to deployment and post-launch support. We own the entire technical delivery so you don't have to manage the pieces.",
    highlight: false,
  },
  {
    icon: <FiUsers />,
    title: "Dedicated team — exclusively yours",
    description:
      "Your developers work only on your agency's projects. They attend your standups, understand your clients' codebases, and build long-term domain expertise on your stack.",
    highlight: false,
  },
  {
    icon: <FiClipboard />,
    title: "Project management and reporting",
    description:
      "Task tracking, sprint planning, weekly delivery updates, and a monthly financial report. You always know the status of every project and every rupee spent.",
    highlight: false,
  },
  {
    icon: <FiBriefcase />,
    title: "Recruitment and HR managed by us",
    description:
      "Throughout handles hiring, employment contracts, payroll, EPF/ETF, and all HR compliance. You carry zero employer liability for the technical team.",
    highlight: false,
  },
  {
    icon: <FiLock />,
    title: "Full IP ownership for your clients",
    description:
      "All code, designs, and systems built for your clients belong entirely to those clients. Throughout retains no intellectual property from client work.",
    highlight: true,
  },
  {
    icon: <FiTrendingUp />,
    title: "Scale up as workload grows",
    description:
      "When your project pipeline grows, we identify the need before capacity runs out and hire with your acknowledgment. The team expands with your business, not after it.",
    highlight: false,
  },
];

export default function AgencyPartnersFeatures() {
  return (
    <section className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="What's included"
          headline="Everything technical. Handled."
          intro="A full-stack delivery capability embedded into your agency — without the overhead of running an engineering team."
          align="text-center"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`rounded-3xl border p-7 transition hover:-translate-y-1 ${
                feature.highlight
                  ? "border-slate-950 bg-slate-950 text-white shadow-xl"
                  : "border-slate-200 bg-white hover:border-sky-200 hover:shadow-lg"
              }`}
            >
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-lg ${
                  feature.highlight
                    ? "bg-sky-600/20 text-sky-400"
                    : "bg-sky-50 text-sky-600"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-base font-bold ${
                  feature.highlight ? "text-white" : "text-slate-950"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`mt-2.5 text-sm leading-6 ${
                  feature.highlight ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
