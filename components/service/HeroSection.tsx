interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function HeroSection({ headline, subheadline, primaryCTA, secondaryCTA }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            {headline}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {primaryCTA}
            </a>
            <a
              href="#technologies"
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {secondaryCTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
