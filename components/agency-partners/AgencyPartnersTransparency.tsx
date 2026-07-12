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
      <div className="grid items-center gap-16 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-20">
        <div>
          <BannerBadge text="Open book model" />
          <h2 className="mt-3 mb-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            You see everything. No exceptions.
          </h2>
          <p className="mb-9 text-base leading-7 text-slate-600 sm:text-lg">
            Most outsourcing relationships hide the cost structure. Throughout
            is built on the opposite principle — complete financial
            transparency is not a feature, it&apos;s the foundation of how we
            work.
          </p>
          <ul className="flex flex-col gap-5">
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

        <div className="p-7 border rounded-3xl border-slate-200 bg-slate-50 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-bold text-slate-950">
              Monthly Partner Report — June 2026
            </p>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              Delivered 7th July
            </span>
          </div>

          <div className="divide-y divide-slate-200">
            {reportRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="text-slate-500">{row.label}</span>
                <span className="font-semibold text-slate-950">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="my-2 h-px bg-slate-200" />

          <div className="flex items-center justify-between py-3 text-sm">
            <span className="font-semibold text-slate-500">Net revenue</span>
            <span className="font-bold text-slate-950">LKR 1,374,500</span>
          </div>
          <div className="flex items-center justify-between py-3 text-sm border-b border-slate-200">
            <span className="text-slate-500">Your share (60%)</span>
            <span className="font-bold text-emerald-600">LKR 824,700</span>
          </div>
          <div className="flex items-center justify-between py-3 text-sm">
            <span className="text-slate-500">Throughout share (40%)</span>
            <span className="font-bold text-sky-600">LKR 549,800</span>
          </div>

          <div className="my-2 h-px bg-slate-200" />

          <div className="flex items-center justify-between py-3 text-sm">
            <span className="text-slate-500">Team utilisation this month</span>
            <span className="font-bold text-emerald-600">79.3%</span>
          </div>
          <div className="flex items-center justify-between py-3 text-sm">
            <span className="text-slate-500">Bench days</span>
            <span className="font-semibold text-slate-950">0 days</span>
          </div>
          <div className="flex items-center justify-between py-3 text-sm">
            <span className="text-slate-500">Invoices outstanding</span>
            <span className="font-semibold text-slate-950">2 pending</span>
          </div>
        </div>
      </div>
    </section>
  );
}
