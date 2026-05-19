import Link from "next/link";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative flex min-h-[78vh] items-stretch isolate">
        <div className="absolute inset-0 h-full w-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="Let's Connect"
            title={
              <>
                Tell Us What You Want <br className="hidden md:block" />
                to Build Next
              </>
            }
            description="Share your idea, product challenge, or software need. We will help you shape the next practical step."
            cta={
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="https://calendly.com/throughoutwithyou/30min"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                >
                  Book a Free Call
                  <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="mailto:info@throughout.io"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg"
                >
                  Email Us
                </Link>
              </div>
            }
            isBackgroundColored={false}
          />
        </div>
      </div>
      <ContactInfoSection />

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
