import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternshipBySlugFromCrm } from "@/lib/internshipsApi";
import ApplicationForm from "@/components/internships/ApplicationForm";
import Head from "next/head";

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
      title: "Internship Not Found | Throughout (PVT) LTD",
    };
  }
  return {
    title: `${internship.title} - Internship | Throughout (PVT) LTD`,
    description: stripHtml(internship.description).substring(0, 160),
    openGraph: {
      title: `${internship.title} - Internship | Throughout (PVT) LTD`,
      description: stripHtml(internship.description).substring(0, 160),
      url: `https://www.throughout.io/internships/${internship.slug}`,
      type: "article",
      images: [
        {
          url: "https://www.throughout.io/og-internships.png",
          width: 1200,
          height: 630,
          alt: internship.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${internship.title} - Internship | Throughout (PVT) LTD`,
      description: stripHtml(internship.description).substring(0, 160),
      images: ["https://www.throughout.io/og-internships.png"],
      site: "@throughout",
    },
    alternates: {
      canonical: `https://www.throughout.io/internships/${internship.slug}`,
    },
  };
}

export default async function InternshipDetailPage({
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
    url: `https://www.throughout.io/internships/${internship.slug}`,
    validThrough: `${new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split("T")[0]}`,
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`internship, ${internship.title}, ${internship.slug.replace(/-/g, " ")}, jobs, careers, startup, Throughout (PVT) LTD, Sri Lanka, remote, product development, AI, automation, software engineering, digital marketing, business development`}
        />
        <link
          rel="canonical"
          href={`https://www.throughout.io/internships/${internship.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
        />
      </Head>
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
              href="/internships"
              className="group inline-flex items-center gap-3 px-6 py-2.5 text-sm font-semibold text-brand transition-all duration-300 bg-white/60 border border-white/50 rounded-full shadow-[0_4px_20px_-4px_rgba(51,153,254,0.15)] hover:shadow-[0_8px_30px_-4px_rgba(51,153,254,0.3)] hover:bg-white/80 hover:-translate-y-0.5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center w-6 h-6 transition-transform duration-300 rounded-full bg-brand-light group-hover:-translate-x-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              All Internships
            </Link>
          </div> */}

          {/* Hero Section */}
          <section className="px-4 mb-12 animate-fade-in-delay">
            <div className="mx-auto max-w-7xl">
              <div className="relative p-8 overflow-hidden border shadow-2xl bg-white/70 rounded-3xl md:p-12 border-white/60 backdrop-blur-2xl ring-1 ring-black/5">
                {/* Decorative accent line */}
                {/* <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand via-indigo-500 to-sky-400"></div> */}

                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-bold tracking-wider  uppercase bg-black/80 border border-gray-700 rounded-full backdrop-blur-md">
                    <span className="w-2 h-2 mr-2 bg-black rounded-full animate-pulse"></span>
                    Internship Opportunity
                  </div>

                  <h1 className="mb-8 text-4xl font-extrabold tracking-tight md:text-6xl bg-clip-text bg-gradient-to-r from-brand-dark via-brand-secondary to-brand-dark">
                    {internship.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                    {/* Status Badge */}
                    <div
                      className={`flex items-center px-4 py-2 rounded-xl border backdrop-blur-md transition-all duration-300 hover:shadow-md ${internship.status === "open" ? "bg-emerald-50/80 text-emerald-700 border-emerald-200/60" : "bg-red-50/80 text-red-700 border-red-200/60"}`}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {internship.status === "open"
                        ? "Accepting Applications"
                        : "Closed"}
                    </div>

                    {/* Duration Badge */}
                    <div className="flex items-center px-4 py-2 text-indigo-700 transition-all duration-300 border bg-indigo-50/80 rounded-xl border-indigo-200/60 backdrop-blur-md hover:shadow-md">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {internship.duration}
                    </div>

                    {/* Stipend Badge */}
                    <div className="flex items-center px-4 py-2 transition-all duration-300 border text-amber-700 bg-amber-50/80 rounded-xl border-amber-200/60 backdrop-blur-md hover:shadow-md">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Paid Internship
                    </div>

                    {/* Location Badge */}
                    <div className="flex items-center px-4 py-2 transition-all duration-300 border text-sky-700 bg-sky-50/80 rounded-xl border-sky-200/60 backdrop-blur-md hover:shadow-md">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {internship.location}
                    </div>
                  </div>
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
                  <div className="p-8 transition-all duration-500 border shadow-xl bg-white/70 group rounded-3xl border-white/60 backdrop-blur-xl hover:shadow-2xl hover:bg-white/80 animate-fade-in-delay-2">
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
                    <div className="relative overflow-hidden rounded-[2rem] shadow-lg border border-gray-200">
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
