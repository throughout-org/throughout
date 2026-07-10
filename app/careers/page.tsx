import { Metadata } from "next";
import Link from "next/link";
import { getInternshipsFromCrm } from "@/lib/careersApi";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

/** Strip HTML tags and decode basic HTML entities for plain-text previews */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s{2,}/g, " ")
    .trim();
}

const processSteps = [
  {
    number: "01",
    title: "Screening",
    description:
      "HR reviews your CV and shortlists candidates who match the role requirements.",
  },
  {
    number: "02",
    title: "Assignment",
    description:
      "Shortlisted candidates receive a practical task so we can understand how you think and execute.",
  },
  {
    number: "03",
    title: "Interview",
    description:
      "We assess communication, problem-solving, role fit, and your ability to work with ownership.",
  },
  {
    number: "04",
    title: "Offer",
    description:
      "Successful candidates hear back from HR within 3 to 4 days after the final conversation.",
  },
];

export const metadata: Metadata = {
  title: "Careers | Throughout (PVT) LTD",
  description:
    "Join our team and gain hands-on experience in a fast-paced startup environment. Explore career opportunities at Throughout (PVT) LTD.",
  keywords: [
    "careers",
    "internship",
    "internships",
    "jobs",
    "startup",
    "Throughout (PVT) LTD",
    "Sri Lanka",
    "remote",
    "work from home",
    "AI",
    "automation",
    "software engineering",
    "digital marketing",
    "business development",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers | Throughout (PVT) LTD",
    description:
      "Join our team and gain hands-on experience in a fast-paced startup environment. Explore career opportunities at Throughout (PVT) LTD.",
    url: "https://www.throughout.io/careers",
    type: "website",
    images: [
      {
        url: "https://www.throughout.io/og-careers.png",
        width: 1200,
        height: 630,
        alt: "Careers at Throughout (PVT) LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Throughout (PVT) LTD",
    description:
      "Join our team and gain hands-on experience in a fast-paced startup environment. Explore career opportunities at Throughout (PVT) LTD.",
    images: ["https://www.throughout.io/og-careers.png"],
    site: "@throughout",
  },
  alternates: {
    canonical: "https://www.throughout.io/careers",
  },
};

export default async function CareersPage() {
  const internships = await getInternshipsFromCrm();
  const datePosted = new Date().toISOString().split("T")[0];
  const validThrough = new Date(new Date().setMonth(new Date().getMonth() + 3))
    .toISOString()
    .slice(0, 16);

  // Structured data for SEO (Google Job Search / JobPosting)
  const jobPostings = internships.map((internship) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: internship.title,
    description: internship.description,
    datePosted,
    validThrough,
    employmentType: "INTERN",
    hiringOrganization: {
      "@type": "Organization",
      name: "Throughout (PVT) LTD",
      sameAs: "https://www.throughout.io",
      logo: "https://www.throughout.io/images/logo.png",
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    jobLocationType: internship.location.toLowerCase().includes("remote")
      ? "TELECOMMUTE"
      : undefined,
    identifier: {
      "@type": "PropertyValue",
      name: "Throughout (PVT) LTD",
      value: internship.id,
    },
    url: `https://www.throughout.io/careers/${internship.slug}`,
    directApply: true,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jobPostings.length === 1
              ? jobPostings[0]
              : { "@context": "https://schema.org", "@graph": jobPostings },
          ),
        }}
      />
      <div className="min-h-screen bg-white">
        <div className="relative flex min-h-[78vh] items-stretch isolate">
          <div className="absolute inset-0 h-full w-full">
            <AntigravityParticles />
          </div>
          <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
            <InnerBanner
              badgeText="Careers"
              title={
                <>
                  Learn by Working on <br className="hidden md:block" />
                  Real Projects
                </>
              }
              description="We are looking for self-driven people who want to learn, grow, take ownership, and contribute to practical startup work."
              cta={
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="#open-roles"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white transition hover:bg-sky-700"
                  >
                    View Open Roles
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                  <Link
                    href="#process"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Hiring Process
                  </Link>
                </div>
              }
              isBackgroundColored={false}
            />
          </div>
        </div>

        {/* Interview Process Section */}
        <section id="process" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ServiceSectionHeader
              badgeText="Interview Process"
              headline="A Clear Hiring Flow"
              intro="A simple, consistent process helps both sides understand fit before making a commitment."
              headlineSize="text-3xl sm:text-4xl"
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="p-6 transition border rounded-3xl border-slate-200 bg-slate-50 hover:-translate-y-1 hover:bg-white hover:border-slate-300"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="open-roles"
          className="px-4 py-20 bg-slate-50 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <ServiceSectionHeader
              badgeText="Open Roles"
              headline="Careers at Throughout"
              intro="Choose the role that matches your strengths and growth goals."
              headlineSize="text-3xl sm:text-4xl"
            />

            {internships.length === 0 ? (
              <div className="p-10 text-center bg-white border rounded-3xl border-slate-200">
                <h3 className="text-2xl font-bold text-slate-950">
                  No roles open right now
                </h3>
                <p className="mt-3 text-slate-600">
                  Check back soon for new career opportunities.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                {internships.map((internship) => (
                  <Link
                    key={internship.id}
                    href={`/careers/${internship.slug}`}
                    className="block p-6 transition bg-white border group rounded-3xl border-slate-200 hover:-translate-y-1 hover:border-sky-200 sm:p-8"
                  >
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                      <div className="max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${
                              internship.status === "open"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-rose-50 text-rose-700"
                            }`}
                          >
                            {internship.status === "open" ? "Open" : "Closed"}
                          </span>
                          <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
                            Paid Internship
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-bold tracking-tight transition text-slate-950 group-hover:text-sky-700">
                          {internship.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 line-clamp-2 text-slate-600">
                          {stripHtml(internship.description)}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5 text-sm font-semibold text-slate-600">
                          <span className="rounded-full bg-slate-100 px-3 py-1.5">
                            {internship.duration}
                          </span>
                          <span className="rounded-full bg-slate-100 px-3 py-1.5">
                            {internship.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white transition rounded-full shrink-0 bg-slate-950 group-hover:bg-sky-600">
                        Learn more & apply
                        <span className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* SEO FAQ Section */}
        {/* <section className="px-4 py-16" id="internship-faq">
          <div className="max-w-3xl mx-auto">
            <ServiceSectionHeader
              badgeText="FAQ"
              headline="Frequently Asked Questions (FAQ)"
              align="text-center"
              headlineSize="text-3xl"
            />
            <div itemScope itemType="https://schema.org/FAQPage">
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="mb-8"
              >
                <h3 itemProp="name" className="mb-2 text-xl font-semibold">
                  What roles are currently open?
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    We offer internships and entry-level roles in software
                    development, AI/automation, marketing, sales, content
                    creation, and operations. Check the Careers page for
                    details.
                  </div>
                </div>
              </div>
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="mb-8"
              >
                <h3 itemProp="name" className="mb-2 text-xl font-semibold">
                  Are these paid positions?
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    Compensation varies by role — some have a fixed stipend,
                    others are performance or commission-based. Exact details
                    are shared during the interview.
                  </div>
                </div>
              </div>
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="mb-8"
              >
                <h3 itemProp="name" className="mb-2 text-xl font-semibold">
                  Can I work remotely?
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    Yes. Most roles are remote-friendly, but regular
                    communication and updates are required.
                  </div>
                </div>
              </div>
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="mb-8"
              >
                <h3 itemProp="name" className="mb-2 text-xl font-semibold">
                  What is the duration of an internship?
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    Internships usually last 3–6 months, with high performers
                    considered for extended roles or full-time offers.
                  </div>
                </div>
              </div>
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="mb-8"
              >
                <h3 itemProp="name" className="mb-2 text-xl font-semibold">
                  Will I work on real projects?
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    Absolutely. Interns work on live projects and tools that
                    directly impact business growth, not just theoretical tasks.
                  </div>
                </div>
              </div>
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="mb-8"
              >
                <h3 itemProp="name" className="mb-2 text-xl font-semibold">
                  How is performance evaluated?
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="text-gray-700">
                    Evaluation is based on task completion, quality, deadlines,
                    communication, and contribution to measurable business
                    results.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What roles are currently open?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We offer internships and entry-level roles in software development, AI/automation, marketing, sales, content creation, and operations. Check the Careers page for details.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are these paid positions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Compensation varies by role — some have a fixed stipend, others are performance or commission-based. Exact details are shared during the interview.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I work remotely?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Most roles are remote-friendly, but regular communication and updates are required.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the duration of an internship?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Internships usually last 3–6 months, with high performers considered for extended roles or full-time offers.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will I work on real projects?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. Interns work on live projects and tools that directly impact business growth, not just theoretical tasks.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is performance evaluated?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Evaluation is based on task completion, quality, deadlines, communication, and contribution to measurable business results.",
                    },
                  },
                ],
              }),
            }}
          />
        </section> */}
      </div>
    </>
  );
}
