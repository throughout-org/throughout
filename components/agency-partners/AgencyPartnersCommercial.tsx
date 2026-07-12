import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const commercialStructure = [
  "60% net profit to your agency. After all team costs and allowable expenses are deducted, sixty percent of net revenue goes to you.",
  "40% net profit to Throughout. Our share covers management, recruitment, and company operations.",
  "All allowable costs shared transparently — salaries, EPF/ETF, tools, hosting, office overhead — deducted before the split, fully documented.",
  "Monthly settlement. You receive an invoice from Throughout for their 40% share within 7 days of the monthly report. Net 14 payment terms.",
];

const partnershipAgreement = [
  "One-year initial term with automatic renewal, unless either party provides 60 days notice of non-renewal.",
  "90-day early termination notice to protect team stability and allow proper project handover.",
  "Workload fluctuation protocol — a written three-stage plan for managing periods of reduced project volume fairly.",
  "Mutual non-solicitation — neither party can approach the other's staff or clients for one year after the agreement ends.",
  "Governed by Sri Lankan law. Disputes resolved by negotiation first, then Sri Lankan courts.",
];

function CommercialCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="overflow-hidden border rounded-3xl border-slate-200">
      <div className="px-7 py-6 border-b bg-slate-50 border-slate-200">
        <h3 className="text-base font-bold text-slate-950">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="px-7 py-6">
        <ul className="divide-y divide-slate-200">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
              <span className="text-sm leading-6 text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AgencyPartnersCommercial() {
  return (
    <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeader
          badgeText="Partnership terms"
          headline="Simple, transparent, and built to last."
          intro="The commercial structure is designed to align our incentives with yours — we grow when you grow."
          align="text-left"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <CommercialCard
            title="Commercial structure"
            subtitle="Revenue-share model, net profit basis"
            items={commercialStructure}
          />
          <CommercialCard
            title="Partnership agreement"
            subtitle="Long-term, clear, and fair to both sides"
            items={partnershipAgreement}
          />
        </div>
      </div>
    </section>
  );
}
