import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternshipBySlugFromCrm } from "@/lib/careersApi";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { metaDescription } from "@/lib/seo";

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
      title: "Role not found | Careers",
    };
  }
  return {
    title: `${internship.title} | Careers`,
    description: metaDescription(stripHtml(internship.description)),
    openGraph: {
      title: `${internship.title} | Careers`,
      description: metaDescription(stripHtml(internship.description)),
      url: `https://www.throughout.io/careers/${internship.slug}`,
      type: "article",
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${internship.title} | Careers`,
      description: metaDescription(stripHtml(internship.description)),
      site: "@throughout",
      images: ["/twitter-image.png"],
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

  const meta = [internship.location, internship.duration, internship.stipend !== "Not specified" ? internship.stipend : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />
      <main className="bg-canvas text-ink">
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
          <Link href="/careers" className="link-draw inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink">
            <FiArrowLeft aria-hidden="true" /> All open roles
          </Link>
          <p className="mt-8 font-mono text-xs text-ink-2">{meta}</p>
          <h1 className="font-display mt-4 max-w-4xl text-[clamp(2.1rem,5vw,3.75rem)] font-[750]">{internship.title}</h1>

          <div className="mt-14 grid gap-12 border-t border-ink pt-12 lg:grid-cols-12 lg:gap-16">
            <div
              className="role-copy min-w-0 lg:col-span-7"
              dangerouslySetInnerHTML={{ __html: internship.description }}
            />
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <ApplicationForm
                  internshipTitle={internship.title}
                  internshipSlug={internship.slug}
                  status={internship.status}
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
