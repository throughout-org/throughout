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
  includeSchema?: boolean;
}

export default function ServiceFAQ({
  id,
  badgeText,
  headline,
  intro,
  faqs,
  includeSchema = true,
}: ServiceFAQProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-canvas-elevated px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {badgeText}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl">
            {headline}
          </h2>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-ink-2">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink marker:content-none">
                <span>{faq.question}</span>
                <span className="text-2xl font-normal text-primary transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-ink-2">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {includeSchema && (
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
      )}
    </section>
  );
}
