import type { Metadata } from "next";

// Static content; tells the Cloudflare build to cache it at the edge.
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms & Privacy Policy",
  description: "How Throughout (PVT) LTD collects, uses and protects your information, and the terms that apply to our website and software development services.",
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
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-[720]">{title}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-2">{intro}</p>
      <ol className="mt-10 border-t border-ink">
        {sections.map((section, index) => (
          <li key={section.title} className="grid gap-2 border-b border-hairline py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
            <span className="font-mono text-xs text-ink-2 sm:pt-1.5">{String(index + 1).padStart(2, "0")}</span>
            <div className="legal-copy">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <div className="mt-3 max-w-2xl space-y-3 leading-7 text-ink-2">{section.content}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function TermsAndPrivacyPolicy() {
  return (
    <main className="bg-canvas text-ink">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
        <header>
          <p className="font-mono text-xs text-ink-2">Legal · Last updated 25 November 2025</p>
          <h1 className="font-display mt-5 text-[clamp(2.5rem,6vw,4.75rem)] font-[750]">Terms &amp; privacy.</h1>
        </header>

        <div className="mt-14 grid gap-12 border-t border-ink pt-12 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="On this page" className="lg:col-span-3">
            <div className="flex flex-wrap gap-x-6 gap-y-1 lg:sticky lg:top-24 lg:flex-col">
              <p className="hidden font-mono text-xs text-ink-2 lg:mb-3 lg:block">On this page</p>
              <a href="#privacy-policy" className="link-draw inline-flex min-h-11 items-center self-start font-semibold text-sapphire lg:min-h-9">Privacy policy</a>
              <a href="#terms-of-service" className="link-draw inline-flex min-h-11 items-center self-start font-semibold text-sapphire lg:min-h-9">Terms of service</a>
              <a href="#legal-contact" className="link-draw inline-flex min-h-11 items-center self-start font-semibold text-sapphire lg:min-h-9">Contact</a>
            </div>
          </nav>

          <div className="grid gap-20 lg:col-span-9">
            <LegalSection id="privacy-policy" title="Privacy policy" intro="We respect your privacy. This policy explains what information we collect, how we use and protect it, and the choices available to you when you use our website or services." sections={privacySections} />
            <LegalSection id="terms-of-service" title="Terms of service" intro="These terms govern access to our website and provide general conditions for our services. A signed proposal, contract, or statement of work takes precedence for a specific client engagement." sections={termsSections} />
            <section id="legal-contact" className="scroll-mt-24 border-t border-ink pt-10">
              <h2 className="font-display text-2xl font-[720]">Contact</h2>
              <p className="mt-4 max-w-2xl leading-7 text-ink-2">
                Questions about these terms or our privacy practices can be sent to{" "}
                <a className="font-semibold text-sapphire underline decoration-pale decoration-2 underline-offset-4 hover:decoration-signal" href="mailto:info@throughout.io">info@throughout.io</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
