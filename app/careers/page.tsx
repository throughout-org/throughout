import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { getInternshipsFromCrm } from "@/lib/careersApi";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Careers & Internships in Sri Lanka",
  description: "Open roles and internships at Throughout, a software development company in Colombo, Sri Lanka. See current openings and apply online.",
  alternates: { canonical: "https://www.throughout.io/careers" },
  openGraph: { type: "website", url: "https://www.throughout.io/careers", title: "Careers & Internships in Sri Lanka | Throughout", description: "Open roles and internships at a software development company in Colombo, Sri Lanka.", images: ["/opengraph-image"] },
};


export default async function CareersPage() {
  const roles = await getInternshipsFromCrm();
  const datePosted = new Date().toISOString().split("T")[0];
  const validThrough = new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().slice(0, 16);
  const jobPostings = roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    datePosted,
    validThrough,
    employmentType: "INTERN",
    hiringOrganization: { "@type": "Organization", name: "Throughout (PVT) LTD", sameAs: "https://www.throughout.io", logo: "https://www.throughout.io/images/logo.png" },
    applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
    jobLocationType: role.location.toLowerCase().includes("remote") ? "TELECOMMUTE" : undefined,
    identifier: { "@type": "PropertyValue", name: "Throughout (PVT) LTD", value: role.id },
    url: `https://www.throughout.io/careers/${role.slug}`,
    directApply: true,
  }));

  return (
    <main className="bg-canvas text-ink">
      {jobPostings.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostings.length === 1 ? jobPostings[0] : { "@context": "https://schema.org", "@graph": jobPostings }) }} />
      )}

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
        <p className="font-mono text-xs text-ink-2">Careers · {roles.length} open</p>
        <h1 className="font-display mt-5 text-[clamp(2.5rem,6vw,4.75rem)] font-[750]">Open roles.</h1>

        {roles.length === 0 ? (
          <p className="mt-14 border-t border-ink py-12 text-lg text-ink-2">No roles are open right now. Check back soon.</p>
        ) : (
          <ul className="mt-14 border-t border-ink">
            {roles.map((role) => (
              <li key={role.id} className="border-b border-hairline">
                <Link href={`/careers/${role.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-10">
                  <h2 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-[720] transition-colors group-hover:text-sapphire md:col-span-7">
                    {role.title}
                  </h2>
                  <p className="font-mono text-xs leading-6 text-ink-2 md:col-span-4">
                    {[role.location, role.duration, role.stipend !== "Not specified" ? role.stipend : null].filter(Boolean).join(" · ")}
                  </p>
                  <FiArrowUpRight className="hidden justify-self-end text-2xl text-sapphire transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:col-span-1 md:block" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
