interface FinalCTASectionProps {
  headline: string;
  subtext: string;
  buttonText: string;
}

export default function FinalCTASection({ headline, subtext, buttonText }: FinalCTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-red-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {headline}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {subtext}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-pink-600 text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {buttonText}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
