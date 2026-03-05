
export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-white py-20 px-4 flex flex-col items-center">
      <div className="relative z-10 w-full max-w-3xl">
        <div className=" text-center mt-20 mb-20">
          <h1
            className="text-4xl md:text-5xl pb-5 font-extrabold bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg mb-2"
          >
            Privacy Policy
          </h1>
          <p className="text-xs uppercase tracking-widest text-gray-500">Last Updated: 25/11/2025</p>
        </div>
        <div className="space-y-8">
          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               1. Introduction
            </h2>
            <p className="text-gray-700">Welcome to <span className="font-semibold text-[#154B79]">Throoout </span>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.<br />
              By accessing our website and using our services (Software Development, AI Solutions, Cloud Engineering), you consent to the data practices described in this policy.
            </p>
          </section>
          {/* 2. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><span className="font-semibold text-[#154B79]">Personal Data:</span> Name, email address, phone number, job title, and company name.</li>
              <li><span className="font-semibold text-[#154B79]">Project Data:</span> Information regarding your project requirements, technical specifications, and business logic provided during consultations.</li>
              <li><span className="font-semibold text-[#154B79]">Payment Data:</span> We do not store sensitive card details. All payment processing is handled by third-party gateways (PayHere, Stripe, PayPal, etc.).</li>
              <li><span className="font-semibold text-[#154B79]">Automatically Collected Data:</span> IP address, browser characteristics, operating system, language preferences, referring URLs, and device name.</li>
            </ul>
          </section>
          {/* 3. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you: Sending you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
              <li>To fulfill and manage your orders: Managing payments, invoices, and project milestones.</li>
              <li>To post testimonials: We post testimonials on our website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial.</li>
              <li>To protect our Services: For fraud monitoring and prevention.</li>
            </ul>
          </section>
          {/* 4. Sharing Your Information */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               4. Sharing Your Information
            </h2>
            <p className="text-gray-700 mb-2">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><span className="font-semibold text-[#154B79]">Vendors and Third Parties:</span> We may share data with third-party vendors (e.g., AWS, Google Cloud, OpenAI) who perform services for us or on our behalf and require access to such information to do that work.</li>
            </ul>
          </section>
          {/* 5. Data Security */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               5. Data Security
            </h2>
            <p className="text-gray-700">We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
          </section>
          {/* 6. Cookies and Tracking Technologies */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               6. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700">We use cookies to access or store information. You can refuse to accept browser cookies by activating the appropriate setting on your browser.</p>
          </section>
          {/* 7. Your Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               7. Your Privacy Rights
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Access & Correction: You have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances.</li>
              <li>Withdraw Consent: If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.</li>
            </ul>
          </section>
          {/* 8. Contact Us */}
          <section className="mb-8 ">
            <h2 className="text-xl font-bold text-[#154B79] mb-2 flex items-center gap-2">
               8. Contact Us
            </h2>

            <p className="text-gray-700">If you have questions or comments about this policy, you may email us at <span className="text-[#154B79]">info@throughout.io</span>, like this 8 point in the <span className="text-[#154B79]"><a href="https://www.throoout.com/privacy-policy">Privacy Policy</a></span></p>
          </section>
        </div>
      </div>
    </main>
  );
}
