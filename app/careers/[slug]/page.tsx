import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternshipBySlugFromCrm } from "@/lib/careersApi";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)
export const dynamicParams = true; // Allow new slugs not known at build time

/** Strip HTML tags and decode basic HTML entities for plain-text use */
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

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const internship = await getInternshipBySlugFromCrm(slug);
  if (!internship) {
    return {
      title: "Role Not Found | Careers | Throughout (PVT) LTD",
    };
  }
  return {
    title: `${internship.title} | Careers | Throughout (PVT) LTD`,
    description: stripHtml(internship.description).substring(0, 160),
    openGraph: {
      title: `${internship.title} | Careers | Throughout (PVT) LTD`,
      description: stripHtml(internship.description).substring(0, 160),
      url: `https://www.throughout.io/careers/${internship.slug}`,
      type: "article",
      images: [
        {
          url: "https://www.throughout.io/og-careers.png",
          width: 1200,
          height: 630,
          alt: internship.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${internship.title} | Careers | Throughout (PVT) LTD`,
      description: stripHtml(internship.description).substring(0, 160),
      images: ["https://www.throughout.io/og-careers.png"],
      site: "@throughout",
    },
    alternates: {
      canonical: `https://www.throughout.io/careers/${internship.slug}`,
    },
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const internship = await getInternshipBySlugFromCrm(slug);
  if (!internship) {
    notFound();
  }

  // Structured data for SEO (JobPosting)
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: internship.title,
    description: internship.description,
    datePosted: new Date().toISOString().split("T")[0],
    employmentType: "Internship",
    hiringOrganization: {
      "@type": "Organization",
      name: "Throughout (PVT) LTD",
      sameAs: "https://www.throughout.io",
    },
    jobLocationType: "TELECOMMUTE",
    identifier: {
      "@type": "PropertyValue",
      name: "Throughout (PVT) LTD",
      value: internship.id,
    },
    url: `https://www.throughout.io/careers/${internship.slug}`,
    validThrough: `${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split("T")[0]}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />
      <div className="relative min-h-screen overflow-hidden font-sans">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute rounded-full top-[10%] left-[5%] w-[40rem] h-[40rem] bg-brand/20 mix-blend-multiply filter blur-[100px] animate-blob"></div>
          <div className="absolute rounded-full top-[20%] right-[5%] w-[35rem] h-[35rem] bg-indigo-400/20 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-[-10%] left-[30%] w-[40rem] h-[40rem] bg-sky-300/20 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
        </div> */}

        <div className="relative z-10 pt-8 pb-20 mt-24">
          {/* Back Button */}
          {/* <div className="px-4 mx-auto mb-8 max-w-7xl animate-fade-in">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-3 px-6 py-2.5 text-sm font-semibold text-brand transition-all duration-300 bg-white/60 border border-white/50 rounded-full shadow-[0_2px_10px_-4px_rgba(51,153,254,0.08)] hover:shadow-[0_4px_16px_-4px_rgba(51,153,254,0.15)] hover:bg-white/80 hover:-translate-y-0.5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center w-6 h-6 transition-transform duration-300 rounded-full bg-brand-light group-hover:-translate-x-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              All Careers
            </Link>
          </div> */}

          {/* Hero Section */}
          <section className="px-4 mb-12 animate-fade-in-delay">
            <div className="mx-auto max-w-7xl">
              <div className="relative p-8 overflow-hidden border bg-white/70 rounded-3xl md:p-12 border-white/60 backdrop-blur-2xl ring-1 ring-black/5">
                <div className="relative z-10">
                  <h1 className="mb-8 text-4xl font-extrabold tracking-tight md:text-6xl bg-clip-text bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-dark">
                    {internship.title}
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="px-4">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left Column - Job Details */}
                <div className="space-y-8 lg:col-span-2">
                  {/* About the Role */}
                  <div className="p-8 transition-all duration-500 border bg-white/70 group rounded-3xl border-white/60 backdrop-blur-xl hover:bg-white/80 animate-fade-in-delay-2">
                    {/* <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-brand-light rounded-2xl">
                        <svg
                          className="w-6 h-6 text-brand"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-brand-dark">
                        About the Role
                      </h2>
                    </div> */}
                    <div className="prose max-w-none prose-blue">
                      <style>{`
                        .description-content h2 {
                          font-size: 1.5rem;
                          font-weight: 700;
                          margin: 1.5rem 0 1rem 0;
                          color: #1f2937;
                        }
                        .description-content h3 {
                          font-size: 1.25rem;
                          font-weight: 600;
                          margin: 1.25rem 0 0.75rem 0;
                          color: #374151;
                        }
                        .description-content p {
                          font-size: 1rem;
                          line-height: 1.6;
                          margin: 0.75rem 0;
                          color: #4b5563;
                        }
                        .description-content ol,
                        .description-content ul {
                          margin: 1rem 0;
                          padding-left: 2rem;
                          list-style: disc;
                        }
                        .description-content li {
                          margin: 0.5rem 0;
                          line-height: 1.6;
                          color: #4b5563;
                        }
                        .description-content strong {
                          font-weight: 700;
                          color: #111827;
                        }
                        .description-content em {
                          font-style: italic;
                          color: #6b7280;
                        }
                        .description-content {
                          overflow-x: auto;
                        }
                        .description-content table {
                          width: 100%;
                          min-width: 520px;
                          margin: 1.5rem 0;
                          border-collapse: separate;
                          border-spacing: 0;
                          overflow: hidden;
                          border: 1px solid #dbeafe;
                          border-radius: 0.75rem;
                          background: #ffffff;
                        }
                        .description-content th,
                        .description-content td {
                          padding: 0.875rem 1rem;
                          border-right: 1px solid #e5e7eb;
                          border-bottom: 1px solid #e5e7eb;
                          text-align: left;
                          vertical-align: top;
                          font-size: 0.95rem;
                          line-height: 1.55;
                          color: #4b5563;
                        }
                        .description-content th:last-child,
                        .description-content td:last-child {
                          border-right: 0;
                        }
                        .description-content tr:last-child td {
                          border-bottom: 0;
                        }
                        .description-content th,
                        .description-content tr:first-child td {
                          background: #eff6ff;
                          font-weight: 700;
                          color: #1f2937;
                        }
                        .description-content tr:nth-child(even):not(:first-child) td {
                          background: #f8fafc;
                        }
                      `}</style>
                      <div
                        className="description-content"
                        dangerouslySetInnerHTML={{
                          __html: internship.description,
                        }}
                      />
                    </div>  
                  </div>
                </div>

                {/* Right Column - Application Form */}
                <div className="lg:col-span-1 animate-fade-in-delay-2">
                  <div className="sticky top-28">
                    <div className="relative overflow-hidden rounded-[2rem] border border-gray-200">
                      <div className="relative h-full bg-white/95 backdrop-blur-3xl rounded-[2rem]">
                        <ApplicationForm
                          internshipTitle={internship.title}
                          internshipSlug={internship.slug}
                          status={internship.status}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
