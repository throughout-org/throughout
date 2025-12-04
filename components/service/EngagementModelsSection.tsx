'use client';

interface EngagementModel {
  title: string;
  description: string;
}

interface EngagementModelsSectionProps {
  headline: string;
  models: EngagementModel[];
}

export default function EngagementModelsSection({ headline, models }: EngagementModelsSectionProps) {
  const gradients = [
    'from-blue-500 via-cyan-500 to-teal-500',
    'from-purple-500 via-pink-500 to-rose-500',
    'from-orange-500 via-amber-500 to-yellow-500'
  ];

  const iconBackgrounds = [
    'from-blue-400 to-cyan-400',
    'from-purple-400 to-pink-400',
    'from-orange-400 to-amber-400'
  ];

  const icons = ['👥', '📦', '➕'];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
              Flexible Solutions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              {headline}
            </span>
          </h2>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 150}ms`,
                opacity: 0
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
                {/* Gradient Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index]} rounded-t-3xl`}></div>
                
                <div className="relative">
                  {/* Icon Container */}
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${iconBackgrounds[index]} rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${iconBackgrounds[index]} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-3xl">{icons[index]}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {model.description}
                  </p>
                  
                  {/* Bottom Decorative Element */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className={`h-1 w-12 bg-gradient-to-r ${gradients[index]} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    <div className={`w-2 h-2 bg-gradient-to-r ${gradients[index]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Number Badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-125 transition-transform duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
