import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

const faqs = [
  {
    question: "Who owns the code built for our clients?",
    answer:
      "The client owns all intellectual property — all code, designs, systems, and documentation created during the engagement. Neither Throughout nor your agency retains any ownership over client-commissioned work. IP assignment is handled at the point of project delivery.",
  },
  {
    question: "What happens if a developer on our team leaves?",
    answer:
      "Throughout manages all employment matters. If a developer resigns, we initiate replacement hiring immediately. During the transition, bench costs are managed according to the agreed workload protocol. You are not left without coverage and you are not responsible for recruitment — that's our job.",
  },
  {
    question: "What if our project volume decreases after a few months?",
    answer:
      "This is one of the most common real-world scenarios and it's addressed in writing before the partnership starts. We have a three-stage protocol: during the first 30 days of reduced volume, the team continues and bench time is productively used for training. Between 30 and 60 days, both parties negotiate a cost-sharing arrangement. Beyond 60 days, a formal review takes place and the team structure can be adjusted. No surprises — everything is agreed in advance.",
  },
  {
    question: "Can our team communicate directly with the developers?",
    answer:
      "For all project work — standups, task tracking, technical discussions, delivery updates — yes, your team communicates directly with the development team. For employment matters, compensation, performance, and HR issues, all communication goes through Throughout's account manager. This protects both the developers and the integrity of the partnership structure.",
  },
  {
    question: "How are salaries decided for the dedicated team?",
    answer:
      "Salary ranges for every role are agreed jointly between your agency and Throughout before any offer is made. This ensures the cost structure is transparent and that you are not surprised by expenses. Throughout handles the actual employment, payroll, and statutory contributions — but the agreed bands are visible to you.",
  },
];

export default function AgencyPartnersFAQ() {
  return (
    <section className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <ServiceSectionHeader
          badgeText="Common questions"
          headline="Things agencies usually ask us."
          intro="A partnership only works when both sides go in with clear expectations."
          headlineSize="text-3xl sm:text-4xl"
        />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="p-6 bg-white border shadow-sm group rounded-2xl border-slate-200 open:border-sky-200 open:ring-1 open:ring-sky-100"
            >
              <summary className="flex items-center justify-between gap-4 text-slate-950 cursor-pointer list-none">
                <h3 className="text-base font-bold sm:text-lg">
                  {faq.question}
                </h3>
                <span className="flex items-center justify-center w-8 h-8 text-lg font-bold transition-transform duration-300 rounded-full shrink-0 bg-slate-100 text-slate-500 group-open:rotate-45 group-open:bg-sky-100 group-open:text-sky-700">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
