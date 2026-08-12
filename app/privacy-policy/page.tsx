import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Privacy Policy",
  description: "Throughout (PVT) LTD terms of service and privacy policy.",
  alternates: { canonical: "https://www.throughout.io/privacy-policy" },
};

const privacySections = [
  {
    title: "Information we collect",
    content: (
      <ul>
        <li><strong>Personal data:</strong> Name, email address, phone number, job title, and company name.</li>
        <li><strong>Project data:</strong> Project requirements, technical specifications, and business information provided during consultations.</li>
        <li><strong>Payment data:</strong> We do not store sensitive card details. Payment processing is handled by third-party payment providers.</li>
        <li><strong>Automatically collected data:</strong> IP address, browser characteristics, operating system, language preferences, referring URLs, and device information.</li>
      </ul>
    ),
  },
  {
    title: "How we use your information",
    content: (
      <ul>
        <li>To provide, manage, and improve our services.</li>
        <li>To respond to enquiries and send administrative or service information.</li>
        <li>To manage payments, invoices, project milestones, and business records.</li>
        <li>To publish testimonials only after obtaining the appropriate consent.</li>
        <li>To protect our services and prevent fraud or misuse.</li>
      </ul>
    ),
  },
  {
    title: "Sharing your information",
    content: <p>We share information only when needed to provide our services, comply with legal obligations, protect legitimate rights, or fulfil business obligations. This may include service providers such as hosting, cloud, analytics, communications, and payment platforms that require access to perform work on our behalf.</p>,
  },
  {
    title: "Data security",
    content: <p>We use reasonable technical and organisational safeguards designed to protect the personal information we process. No internet transmission or storage system can be guaranteed to be completely secure.</p>,
  },
  {
    title: "Cookies and tracking",
    content: <p>We use cookies and similar technologies to operate and understand the use of our website. You can control or refuse cookies through your browser settings, although some features may then work differently.</p>,
  },
  {
    title: "Your privacy rights",
    content: <p>You may request access to, correction of, or deletion of personal information where applicable. You may also withdraw consent where consent is the basis for processing.</p>,
  },
];

const termsSections = [
  { title: "Agreement to terms", content: <p>These terms form an agreement between you, whether personally or on behalf of an organisation, and Throughout (PVT) LTD concerning your access to our website and services.</p> },
  { title: "Services", content: <p>We provide software engineering, AI, cloud, design, data, quality assurance, DevOps, and digital marketing services. The scope, deliverables, fees, and timelines for client work are defined in the applicable proposal, contract, or statement of work.</p> },
  { title: "Intellectual property", content: <><p><strong>Website materials:</strong> Unless otherwise stated, our website, software, designs, text, graphics, and related materials are owned or licensed by Throughout.</p><p><strong>Client work:</strong> Ownership and licence rights for custom client deliverables are governed by the applicable project agreement. Pre-existing tools, libraries, frameworks, and third-party materials remain subject to their existing ownership and licences.</p></> },
  { title: "Acceptable use", content: <p>You agree to provide accurate information, not use the website or services for an unlawful or unauthorised purpose, and comply with applicable laws and regulations.</p> },
  { title: "Payments and taxes", content: <p>Fees, invoice schedules, payment periods, taxes, and any consequences of late payment are defined in the applicable proposal, invoice, or client agreement.</p> },
  { title: "Service availability and liability", content: <p>We do not guarantee that the website or third-party services will always be uninterrupted or error-free. To the extent permitted by law, Throughout is not liable for indirect, consequential, special, or punitive loss arising from use of the website or services. Project-specific warranties and liability terms are governed by the applicable client agreement.</p> },
  { title: "Confidentiality", content: <p>Each party must protect confidential or proprietary information received during an engagement and may not disclose it without authorisation, except where disclosure is required by law or permitted by the applicable agreement.</p> },
  { title: "Termination", content: <p>Access to the website or services may be suspended or terminated following a material breach, unlawful use, or as otherwise provided in an applicable client agreement.</p> },
  { title: "Governing law", content: <p>These website terms are governed by the laws of Sri Lanka, and disputes relating to them are subject to the jurisdiction of the courts of Sri Lanka, unless an applicable written agreement states otherwise.</p> },
];

function LegalSection({ id, title, intro, sections }: { id: string; title: string; intro: string; sections: typeof privacySections }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-black pt-12 first:border-0 first:pt-0">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-black">Throughout (PVT) LTD</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">{title}</h2>
      <p className="mt-5 leading-7 text-black">{intro}</p>
      <div className="mt-10 space-y-9">
        {sections.map((section, index) => (
          <article key={section.title} className="grid gap-3 sm:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm font-bold text-black">{String(index + 1).padStart(2, "0")}</span>
            <div className="legal-copy text-black">
              <h3 className="text-xl font-bold text-black">{section.title}</h3>
              <div className="mt-3 space-y-3 leading-7 text-black">{section.content}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function TermsAndPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-4 pb-24 pt-36 text-black sm:px-6 sm:pt-44 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-black pb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">Legal</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-black sm:text-6xl">Terms &amp; Privacy Policy</h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-black">Last updated: 25 November 2025</p>
          <nav aria-label="Legal document sections" className="mt-8 flex flex-wrap gap-3">
            <a href="#privacy-policy" className="rounded-full border border-black px-5 py-2.5 text-sm font-bold text-black transition hover:bg-black hover:text-white">Privacy Policy</a>
            <a href="#terms-of-service" className="rounded-full border border-black px-5 py-2.5 text-sm font-bold text-black transition hover:bg-black hover:text-white">Terms of Service</a>
          </nav>
        </header>

        <div className="mt-14 space-y-20">
          <LegalSection id="privacy-policy" title="Privacy Policy" intro="We respect your privacy. This policy explains what information we collect, how we use and protect it, and the choices available to you when you use our website or services." sections={privacySections} />
          <LegalSection id="terms-of-service" title="Terms of Service" intro="These terms govern access to our website and provide general conditions for our services. A signed proposal, contract, or statement of work takes precedence for a specific client engagement." sections={termsSections} />
          <section className="border-t border-black pt-12 text-black">
            <h2 className="text-2xl font-extrabold text-black">Contact</h2>
            <p className="mt-4 leading-7 text-black">Questions about these terms or our privacy practices can be sent to <a className="font-bold text-black underline underline-offset-4" href="mailto:info@throughout.io">info@throughout.io</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
