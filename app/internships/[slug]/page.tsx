import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternshipBySlug, internships } from "@/data/internships";
import ApplicationForm from "@/components/internships/ApplicationForm";
import Head from "next/head";

type Params = { slug: string };

export async function generateStaticParams() {
  return internships.map((internship) => ({
    slug: internship.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const internship = getInternshipBySlug(slug);
  if (!internship) {
    return {
      title: "Internship Not Found | Throughout (PVT) LTD",
    };
  }
  return {
    title: `${internship.title} - Internship | Throughout (PVT) LTD`,
    description: internship.description.substring(0, 160),
    openGraph: {
      title: `${internship.title} - Internship | Throughout (PVT) LTD`,
      description: internship.description.substring(0, 160),
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
      description: internship.description.substring(0, 160),
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
  const internship = getInternshipBySlug(slug);
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
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-24 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-indigo-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div> */}

        <div className="relative z-10 pt-8 mt-28">
          {/* Back Button */}
          {/* <div className="px-4 mx-auto mt-10 max-w-7xl">
          <Link
            href="/internships"
            className="relative inline-flex items-center gap-2 py-3 overflow-hidden font-extrabold text-blue-700 transition-all duration-300 border rounded-full shadow-lg group px-7 bg-white/40 hover:shadow-xl hover:scale-105 border-white/30 backdrop-blur-2xl"
            style={{
              boxShadow:
                "0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)",
              transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Internships
          </Link>
        </div> */}

          {/* Hero Section */}
          <section className="px-4 pt-10">
            <div className="mx-auto max-w-7xl">
              <div className="relative p-8 overflow-hidden text-white border shadow-lg bg-linear-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-3xl md:p-12 border-white/20">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_50%)]"></div>
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-white border rounded-full bg-white/20 backdrop-blur-sm border-white/30">
                      {internship.status === "open"
                        ? "✓ Open for Applications"
                        : "Closed"}
                    </span>
                    <span className="font-medium text-blue-100">
                      {internship.duration}
                    </span>
                  </div>

                  <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                    {internship.title}
                  </h1>

                  <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div className="pl-3">
                        <p className="text-sm text-blue-100">Stipend</p>
                        <p className="text-lg font-semibold">Paid Internship</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-white/20 backdrop-blur-sm">
                        <svg
                          className="w-6 h-6"
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
                      </div>
                      <div className="pl-3">
                        <p className="text-sm text-blue-100">Location</p>
                        <p className="text-lg font-semibold">
                          {internship.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          {/* Main Content */}
          <section className="px-4 py-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left Column - Job Details */}
                <div className="space-y-8 lg:col-span-2">
                  {/* About the Role */}
                  <div className="p-8 border shadow-lg bg-white/70 rounded-3xl border-white/40 backdrop-blur-2xl">
                    <h2 className="mb-4 text-2xl font-bold">About the Role</h2>
                    <div className="prose prose-blue max-w-none">
                      {internship.description
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p
                            key={index}
                            className="mb-4 leading-relaxed text-gray-700"
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="p-8 border shadow-lg bg-white/70 rounded-3xl border-white/40 backdrop-blur-2xl">
                    <h2 className="mb-6 text-2xl font-bold">
                      Key Responsibilities
                    </h2>
                    <div className="space-y-6">
                      {internship.responsibilities.map((section, index) => (
                        <div key={index}>
                          <h3 className="mb-3 text-lg font-semibold text-blue-600">
                            {section.category}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <svg
                                  className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="p-8 border shadow-lg bg-white/70 rounded-3xl border-white/40 backdrop-blur-2xl">
                    <h2 className="mb-4 text-2xl font-bold">
                      {internship.requirements.title}
                    </h2>
                    <ul className="space-y-3">
                      {internship.requirements.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-8 mb-4 text-xl font-bold">
                      Required Skills
                    </h3>
                    <ul className="space-y-2">
                      {internship.requiredSkills.map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-blue-600">•</span>
                          <span className="text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-8 mb-4 text-xl font-bold">
                      Nice to Have
                    </h3>
                    <ul className="space-y-2">
                      {internship.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-purple-600">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You'll Gain */}
                  <div className="p-8 border shadow-lg bg-linear-to-br from-white/70 via-blue-50/70 to-indigo-50/70 rounded-3xl border-white/40 backdrop-blur-2xl">
                    <h2 className="mb-6 text-2xl font-bold">
                      What You&apos;ll Gain
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {internship.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="font-medium text-gray-800">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Note */}
                  <div className="p-6 border-l-4 shadow-lg rounded-2xl bg-amber-50/80 border-amber-500 backdrop-blur-2xl">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-3 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-amber-900">
                          Important Note
                        </h3>
                        <p className="text-amber-800">{internship.note}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Application Form */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <ApplicationForm
                      internshipTitle={internship.title}
                      internshipSlug={internship.slug}
                    />
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
