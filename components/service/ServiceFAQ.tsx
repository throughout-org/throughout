import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  id?: string;
  badgeText: string;
  headline: string;
  intro?: string;
  faqs: ServiceFAQItem[];
}

export default function ServiceFAQ({
  id,
  badgeText,
  headline,
  intro,
  faqs,
}: ServiceFAQProps) {
  return (
    <section id={id} className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={intro}
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
