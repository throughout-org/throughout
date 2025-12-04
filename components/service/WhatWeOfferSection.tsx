import { ServiceCard } from '@/data/services';

interface WhatWeOfferSectionProps {
  headline: string;
  intro: string;
  cards: ServiceCard[];
}

export default function WhatWeOfferSection({ headline, intro, cards }: WhatWeOfferSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">WHAT WE OFFER</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="space-y-12">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">
                      {index === 0 ? '🚀' : index === 1 ? '⚙️' : '🔌'}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{card.content}</p>
                  {card.idealFor && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        {card.idealFor.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
