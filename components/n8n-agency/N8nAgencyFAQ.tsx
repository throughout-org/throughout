// Section 6: FAQ
export default function N8nAgencyFAQ() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our n8n automation services.
          </p>
        </div>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">What is n8n, and how does it help my business?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              n8n is a powerful automation tool that connects all your business apps (like Gmail, Slack, and your CRM). It acts as the "brain" of your company, moving data between apps automatically so you can stop doing manual, repetitive tasks.
            </div>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">Why should I choose "Self-Hosted" over tools like Zapier?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Most tools charge you every time a task runs, which gets very expensive as you grow. With our self-hosted n8n service, you own the server. This means you get unlimited automation tasks for one flat price, plus 100% data privacy since the data stays on your own server.
            </div>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">Is my data secure with a self-hosted setup?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Yes. Because we host n8n on your private cloud (AWS, DigitalOcean, or your own VPS), your sensitive business credentials and customer data never leave your control. This is the most secure way to automate for businesses with strict privacy needs.
            </div>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">Can you connect to my custom or legacy software?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Absolutely. One of our specialties is building "Custom Nodes." If your software has an API, we can connect it to n8n, even if it’s a private internal system that standard automation tools can’t see.
            </div>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">Do I need to manage the technical server stuff myself?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              No, we handle everything. We set up the server, manage security updates, perform daily backups, and monitor uptime. You get all the power of a private automation engine without any of the technical headache.
            </div>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">Can n8n handle AI tasks?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Yes! We can integrate AI models like OpenAI (ChatGPT) or Anthropic directly into your workflows. This allows the system to do "smart" work, like summarizing emails, analyzing customer sentiment, or researching leads automatically.
            </div>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:border-primary/40 open:ring-1 open:ring-primary/20 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
              <h3 className="text-lg font-bold">How much can I save by switching to n8n?</h3>
              <div className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              High-volume businesses often save 60% to 90% on monthly automation costs. By moving away from "per-task" pricing models, you can scale your operations without your software bill scaling with it.
            </div>
          </details>
        </div>
        <div className="mt-12 text-center bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Still have questions about your specific workflow?</h3>
          <button className="flex h-12 mx-auto items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-primary/90 transition-all">
            Talk to an Automation Expert
          </button>
        </div>
      </div>
    </section>
  );
}
