import WhatsappPhoneDemo from "@/components/whatsAppApi/WhatsappPhoneDemo";

export default function WhatsappAutomationHero() {
  return (
    <section className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 px-2 sm:px-6 lg:px-10 py-8 md:py-16 ">
      {/* Left: Text Content */}
      <div className="flex-2 max-w-3xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
          Turn <span className="text-theme">WhatsApp</span> into<br className="hidden sm:block" />
          Your Top-Performing <br className="hidden sm:block" />
           <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">Sales Agent.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          We build intelligent, human-like AI agents that automate customer support, qualify leads, and close sales on WhatsApp — 24/7, without a single human touch.
        </p>
        <div className="relative z-20 mt-6 sm:mt-8 md:mt-10 flex justify-center md:justify-center  lg:justify-start">
          <a
            href="/contact"
            className="inline-flex items-center  gap-2 px-5 py-2 text-xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Try Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
      {/* Right: Phone Image */}
      <div className="flex-1 flex justify-center mt-8 lg:mt-0 w-full">
        <div className="w-[90vw] max-w-[340px]">
          <WhatsappPhoneDemo />
        </div>
      </div>
    </section>
  );
}
