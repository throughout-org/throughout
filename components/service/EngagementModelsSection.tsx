interface EngagementModel {
  title: string;
  description: string;
}

interface EngagementModelsSectionProps {
  headline: string;
  models: EngagementModel[];
}

export default function EngagementModelsSection({ headline, models }: EngagementModelsSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl mb-6">
                <span className="text-3xl">
                  {index === 0 ? '👥' : index === 1 ? '📦' : '➕'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
              <p className="text-gray-600 leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
