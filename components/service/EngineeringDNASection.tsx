import { EngineeringFeature } from '@/data/services';

interface EngineeringDNASectionProps {
  headline: string;
  intro?: string;
  features: EngineeringFeature[];
}

export default function EngineeringDNASection({ headline, intro, features }: EngineeringDNASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">A PARTNER YOU CAN TRUST</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {headline}
          </h2>
          {intro && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-4">
                <span className="text-2xl">
                  {index === 0 ? '📋' : index === 1 ? '💻' : index === 2 ? '🔒' : index === 3 ? '📊' : '🛡️'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
