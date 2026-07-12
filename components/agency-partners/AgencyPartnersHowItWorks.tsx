import BannerBadge from "@/components/ui/BannerBadge";

const steps = [
  {
    number: "01",
    title: "You bring the projects and client relationships",
    description:
      "Throughout wins client engagements — websites, apps, platforms, automations. You manage the commercial relationship, the brief, and the client expectations.",
  },
  {
    number: "02",
    title: "We build and manage your dedicated technical team",
    description:
      "Throughout hires, employs, and manages a development team exclusively for your agency. Developers, QA engineers, and designers who work only on your projects. No shared pools. No split attention.",
  },
  {
    number: "03",
    title: "The team delivers the full software lifecycle",
    description:
      "Requirements gathering, system architecture, development, testing, deployment, and ongoing maintenance. Your clients get a complete technical delivery. You stay focused on growth.",
  },
  {
    number: "04",
    title: "Transparent financials every month",
    description:
      "You receive a full monthly report: every developer's hours, every cost, every invoice, and the profit split calculation. You also have read access to our project management tools in real time.",
  },
  {
    number: "05",
    title: "The team grows as your volume grows",
    description:
      "As workload increases, we proactively identify when additional resources are needed and hire with your acknowledgment. New team members are aligned to your contract period. The team is yours to scale.",
  },
];

export default function AgencyPartnersHowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start gap-12 mb-16 lg:gap-20">
          <div className="flex-1 min-w-[280px]">
            <BannerBadge text="How the partnership works" />
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A dedicated team built around your agency.
            </h2>
          </div>
          <div className="flex-1 min-w-[280px] pt-2">
            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              This is not a project-by-project vendor relationship. Throughout
              becomes the technical arm of your agency — a team that grows
              with you, understands your clients, and is accountable to your
              standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div key={step.number} className="relative grid grid-cols-[48px_1fr] gap-6 sm:grid-cols-[64px_1fr] sm:gap-8">
              {index !== steps.length - 1 && (
                <span className="absolute top-[52px] bottom-0 left-[23px] w-px bg-slate-200 sm:left-[31px]" />
              )}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 mt-1 text-sm font-bold text-white rounded-full shrink-0 bg-slate-950 sm:w-16 sm:h-16">
                {step.number}
              </div>
              <div className="pb-14">
                <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                  {step.title}
                </h3>
                <p className="max-w-xl mt-2.5 text-sm leading-6 text-slate-600 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
