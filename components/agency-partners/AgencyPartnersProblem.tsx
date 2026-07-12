import { FiRefreshCw, FiTrendingDown, FiBarChart2, FiSlash } from "react-icons/fi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const problems = [
  {
    icon: <FiRefreshCw />,
    title: "Freelancers disappear mid-project",
    description:
      "No accountability, no continuity. Every project starts from zero and relies on someone new.",
  },
  {
    icon: <FiTrendingDown />,
    title: "Margins shrink on every project",
    description:
      "Delays, rework, and hidden vendor costs eat into what should have been a healthy profit.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Quality is impossible to control",
    description:
      "When five different vendors build five different projects, there is no standard and no consistency.",
  },
  {
    icon: <FiSlash />,
    title: "Turning down projects you could win",
    description:
      "Without reliable technical delivery, the best clients — the ones who need software — pass you by.",
  },
];

export default function AgencyPartnersProblem() {
  return (
    <section className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="The problem we solve"
          headline="Great agencies lose on delivery."
          intro="You win the client. Then the real challenge starts — finding reliable technical people to actually build what was promised."
          align="text-left"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="p-7 transition bg-white border rounded-3xl border-slate-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-11 h-11 mb-5 text-lg rounded-xl bg-rose-50 text-rose-600">
                {problem.icon}
              </div>
              <h3 className="text-base font-bold text-slate-950">
                {problem.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
