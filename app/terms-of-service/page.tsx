export default function TermsOfService() {
  return (
    <main className="relative min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <div className="relative z-10 w-full max-w-3xl">
        <div className="text-center mt-20 mb-20">
          <h1 className="text-4xl pb-5 md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg mb-2">
            Terms of Service
          </h1>
          <p className="text-xs uppercase tracking-widest text-gray-500">Last Updated: 25/11/2025</p>
        </div>
        <div className="space-y-8">
          {/* 1. Agreement to Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <span className="font-semibold text-[#154B79]">Throoout</span>, concerning your access to and use of our website and our development services.</p>
          </section>
          {/* 2. Services Provided */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              2. Services Provided
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>We offer software development services including but not limited to: Fullstack Development (Laravel/Next.js), AI Integrations, E-commerce Solutions (Shopify/WooCommerce), and Cloud Infrastructure. Specific deliverables will be outlined in individual Project Proposals or Statements of Work (SOW).</div>
            </div>
          </section>
          {/* 3. Intellectual Property Rights */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              3. Intellectual Property Rights
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div><span className="font-semibold text-[#154B79]">Our IP:</span> Unless otherwise indicated, the Site and its source code, databases, functionality, software, website designs, audio, video, text, and graphics on the Site are owned or controlled by us.</div>
              <div><span className="font-semibold text-[#154B79]">Client IP (Your Code):</span> Upon full payment of all invoices, the intellectual property rights for the custom code developed specifically for your project shall be transferred to you.</div>
              <div><span className="font-semibold text-[#154B79]">Pre-Existing IP:</span> [Your Company Name] retains ownership of any pre-existing libraries, tools, or frameworks used to build your project. You are granted a non-exclusive, perpetual license to use these tools within your project.</div>
            </div>
          </section>
          {/* 4. User Representations */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              4. User Representations
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>By using the Site or our Services, you represent and warrant that:</div>
              <div>All registration information you submit will be true, accurate, current, and complete.</div>
              <div>You will not use the Site for any illegal or unauthorized purpose.</div>
              <div>Your use of the Site and Services will not violate any applicable law or regulation.</div>
            </div>
          </section>
          {/* 5. Payment and Fees */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              5. Payment and Fees
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div><span className="font-semibold text-[#154B79]">Invoicing:</span> Services are billed according to the Project Proposal (e.g., 50% upfront, 50% upon completion, or Milestones).</div>
              <div><span className="font-semibold text-[#154B79]">Late Payments:</span> Invoices not paid within [14/30] days may incur a late fee of [X]% per month.</div>
              <div><span className="font-semibold text-[#154B79]">Taxes:</span> All fees are exclusive of applicable taxes (e.g., VAT, SSCL), which will be added to the invoice where applicable.</div>
            </div>
          </section>
          {/* 6. Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              6. Limitation of Liability
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.</div>
              <div><span className="font-semibold text-[#154B79]">Specific to Software:</span> We do not warrant that the software provided will be error-free or uninterrupted. We are not liable for downtime caused by third-party providers (e.g., AWS, Shopify, OpenAI outages).</div>
            </div>
          </section>
          {/* 7. Confidentiality */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              7. Confidentiality
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>Both parties agree to keep all proprietary information exchanged during the course of the project confidential and to not disclose it to any third party without prior written consent.</div>
            </div>
          </section>
          {/* 8. Termination */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              8. Termination
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</div>
            </div>
          </section>
          {/* 9. Governing Law */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              9. Governing Law
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>These Terms shall be governed by and defined following the laws of Sri Lanka. <span className="font-semibold text-[#154B79]">Throoout</span> and yourself irrevocably consent that the courts of Sri Lanka shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</div>
            </div>
          </section>
          {/* 10. Contact Us */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
              10. Contact Us
            </h2>
            <div className="text-gray-700 space-y-1 pl-2">
              <div>To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <span className="text-[#154B79]">throughoutwithyou@gmail.com</span>  or <span className="text-[#154B79]">+94 076 7000 249.</span></div>
      
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
