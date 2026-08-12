import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getInternshipsFromCrm } from "@/lib/careersApi";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Careers at Throughout",
  description: "Explore current career and internship opportunities at Throughout and learn how our hiring process works.",
  alternates: { canonical: "https://www.throughout.io/careers" },
  openGraph: { type: "website", url: "https://www.throughout.io/careers", title: "Careers at Throughout", description: "Open roles for people who want to learn, contribute, and take ownership." },
};

function stripHtml(html: string) {
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

const hiringSteps = [
  { title: "Review", copy: "We review your application against the role and the work it involves." },
  { title: "Conversation & task", copy: "Selected candidates discuss the role and may complete a relevant practical exercise." },
  { title: "Decision", copy: "We confirm fit, answer final questions, and share the next step directly." },
];

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
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostings.length === 1 ? jobPostings[0] : { "@context": "https://schema.org", "@graph": jobPostings }) }} />

      <section className="border-b border-slate-200 px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Careers</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Do useful work. Learn by doing it.</h1>
            <div><p className="max-w-xl text-lg leading-8 text-slate-600">We look for people who are curious, dependable, and ready to take ownership of real work.</p><Link href="#open-roles" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700">View open roles <FiArrowRight aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Open roles</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">Find your next opportunity.</h2></div>
          {roles.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center"><h3 className="text-2xl font-bold">No roles open right now</h3><p className="mt-3 text-slate-600">Check back later for new opportunities.</p></div>
          ) : (
            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {roles.map((role) => (
                <Link key={role.id} href={`/careers/${role.slug}`} className="group flex flex-col gap-6 py-7 transition sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-3xl"><div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700">OPEN</span><span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">{role.location}</span><span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">{role.duration}</span>{role.stipend !== "Not specified" && <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">{role.stipend}</span>}</div><h3 className="mt-4 text-2xl font-bold transition group-hover:text-sky-700">{role.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{stripHtml(role.description)}</p></div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sky-700">View role <FiArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Hiring process</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">Simple and relevant to the role.</h2><ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-3">{hiringSteps.map((step, index) => <li key={step.title} className="bg-white p-7"><span className="font-mono text-sm font-bold text-sky-700">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{step.copy}</p></li>)}</ol></div>
      </section>
    </main>
  );
}
