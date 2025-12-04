import { ServiceCard } from '@/data/services';

interface InnovativeSolutionsSectionProps {
  cards: ServiceCard[];
}

export default function InnovativeSolutionsSection({ cards }: InnovativeSolutionsSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Innovative web solutions <span className="text-blue-600">tailored to your needs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {cards.slice(0, 3).map((card, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💼</div>
                <p className="text-gray-600 font-semibold">Professional Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
