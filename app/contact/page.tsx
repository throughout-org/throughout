import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import ContactFAQSection from '@/components/contact/ContactFAQSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import TrendyTuringLabel from '@/components/TrendyTuringLabel';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <ContactHeroSection /> */}
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative mx-auto text-center max-w-7xl">
          {/* Badge */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
              </span>
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
                Let's Connect
              </span>
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            <span className="block text-gray-900">Get In Touch</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 sm:text-2xl">
            We'd love to hear from you. Let's build something amazing together.
          </p>
        </div>
      </section>
      <ContactInfoSection />
      {/* <ContactMapSection /> */}
      {/* <ContactFAQSection /> */}
      {/* <ServicesCTASection /> */}
      {/* <TrendyTuringLabel /> */}

      <ServicesCTASection
        headline={"Ready to Build Something Amazing?"}
        subtext={
          "Building the future, one line of code at a time. We transform ideas into powerful digital solutions."
        }
        buttonText={"Book Free Strategy Call"}
      />
    </div>
  );
}
