interface ScalableBannerProps {
  headline: string;
  description: string;
}

export default function ScalableBanner({ headline, description }: ScalableBannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {headline}
        </h2>
        <p className="text-xl text-white/90 max-w-4xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
