import BannerBadge from "@/components/ui/BannerBadge";

const points = [
  "Monthly itemised report — every developer's salary, every expense, every tool cost, and the full profit split calculation",
  "Real-time access to our CRM and task board so you can see what every developer is working on, right now",
  "Developer timesheet logs included in every monthly report — hours billed per project, utilisation rate, and bench time",
  "Audit right — you can request a full audit of Throughout's books related to your partnership with 30 days notice",
  "Joint salary decisions — every new hire's salary range is agreed between both parties before an offer is made",
];

const reportRows = [
  { label: "Gross revenue received", value: "LKR 2,400,000" },
  { label: "Developer salaries (3 devs)", value: "LKR 750,000" },
  { label: "EPF + ETF (employer)", value: "LKR 82,500" },
  { label: "Health insurance", value: "LKR 30,000" },
  { label: "Software licences + tools", value: "LKR 45,000" },
  { label: "Cloud hosting", value: "LKR 28,000" },
  { label: "Office + overhead (pro-rated)", value: "LKR 90,000" },
];

export default function AgencyPartnersTransparency() {
  return (
    <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <BannerBadge text="Open book model" />
          <h2 className="mt-3 mb-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            You see everything. No exceptions.
          </h2>
          <p className="mx-auto mb-9 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Most outsourcing relationships hide the cost structure. Throughout
            is built on the opposite principle — complete financial
            transparency is not a feature, it&apos;s the foundation of how we
            work.
          </p>
          <ul className="mx-auto flex max-w-3xl flex-col gap-5 text-left">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  ✓
                </span>
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
