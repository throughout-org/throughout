import { Metadata } from "next";
import Link from "next/link";
import { getOpenInternships } from "@/data/internships";

export const metadata: Metadata = {
  title: "Internship Opportunities | Throoout",
  description:
    "Join our team and gain hands-on experience in a fast-paced startup environment. Explore internship opportunities at Throoout.",
  keywords: [
    "internship",
    "internships",
    "jobs",
    "careers",
    "startup",
    "Throoout",
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
    title: "Internship Opportunities | Throoout",
    description:
      "Join our team and gain hands-on experience in a fast-paced startup environment. Explore internship opportunities at Throoout.",
    url: "https://throoout.com/internships",
    type: "website",
    images: [
      {
        url: "https://throoout.com/og-internships.png",
        width: 1200,
        height: 630,
        alt: "Internship Opportunities at Throoout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internship Opportunities | Throoout",
    description:
      "Join our team and gain hands-on experience in a fast-paced startup environment. Explore internship opportunities at Throoout.",
    images: ["https://throoout.com/og-internships.png"],
    site: "@throoout",
  },
  alternates: {
    canonical: "https://throoout.com/internships",
  },
};

export default function InternshipsPage() {
  const internships = getOpenInternships();
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
      name: "Throoout",
      sameAs: "https://throoout.com",
      logo: "https://throoout.com/images/logo.png",
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
      name: "Throoout",
      value: internship.id,
    },
    url: `https://throoout.com/internships/${internship.slug}`,
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "LKR",
      value: {
        "@type": "QuantitativeValue",
        value: 15000,
        unitText: "MONTH",
      },
    },
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
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative mx-auto text-center max-w-7xl">
            <div className="inline-block mb-6">
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-linear-to-r from-blue-600 to-blue-400">
                Internships
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
              <span className="block text-gray-900">Join Our Team</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 sm:text-2xl">
              We&apos;re looking for self-driven individuals who want to make an
              impact. If you&apos;re ready to learn, grow, and take ownership,
              explore our opportunities below.
            </p>
          </div>
        </section>

        {/* Internships Grid */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            {/* <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              {internships.length}{" "}
              {internships.length === 1 ? "position" : "positions"} available
            </p>
          </div> */}

            {internships.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-xl text-gray-600">
                  No internship positions available at the moment.
                </p>
                <p className="mt-4 text-gray-500">
                  Check back soon for new opportunities!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {internships.map((internship) => (
                  <Link
                    key={internship.id}
                    href={`/internships/${internship.slug}`}
                    className="group"
                  >
                    <div className="h-full p-8 transition-all duration-300 bg-white border-2 border-transparent shadow-lg rounded-xl hover:shadow-2xl hover:border-blue-500">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                          Open
                        </span>
                        <span className="text-sm text-gray-500">
                          {internship.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-4 text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                        {internship.title}
                      </h3>

                      {/* Details */}
                      <div className="mb-6 space-y-3">
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-semibold">
                            {internship.stipend}
                          </span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{internship.location}</span>
                        </div>
                      </div>

                      {/* Description Preview */}
                      <p className="mb-6 text-gray-600 line-clamp-3">
                        {internship.description.split("\n\n")[0]}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center font-semibold text-blue-600 transition-transform group-hover:translate-x-2">
                        Learn More & Apply
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* SEO FAQ Section */}
        <section className="px-4 py-16" id="internship-faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Frequently Asked Questions (FAQ)
            </h2>
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
          {/* JSON-LD for FAQPage */}
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
        </section>
      </div>
    </>
  );
}
