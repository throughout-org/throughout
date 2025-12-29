import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";


const cards = [
  {
    icon: <FaTimesCircle className="text-red-400" />, 
    title: "The Old Way",
    content:
      "Customers expect instant answers. If you take hours to reply to a WhatsApp inquiry, that lead is gone to a competitor.",
    concept: "Manual Replies",
    idealFor: ["Small Teams", "Busy Owners"],
  },
  {
    icon: <FaCheckCircle className="text-sky-500" />,
    title: "The Automate.ai Way",
    content:
      "Our AI Agent replies in seconds, day or night. It engages, nurtures, and converts leads while your team sleeps.",
    concept: "AI Automation",
    idealFor: ["Growth Focused", "24/7 Service"],
  },
];

const gradientColors = [
  "from-red-60 via-red-50 to-white",
  "from-sky-100 via-blue-50 to-white",
];

export default function LeadComparisonCards() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-1">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 ">
        <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-sky-600 bg-clip-text text-transparent pb-4 font-bold">
          Stop Losing Leads to Slow Replies
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => {
          // Red theme for the first card, blue for the second
          const isRed = index === 0;
          return (
            <div 
              key={index}
              className={`group relative ${isRed ? 'bg-white/80 hover:border-red-200' : 'bg-white/80 hover:border-sky-200'} backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                {/* Icon and Concept Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${isRed ? 'from-red-400 to-red-300' : 'from-blue-400 to-sky-400'} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${isRed ? 'from-red-500/10 to-red-300/10 group-hover:from-red-500/20 group-hover:to-red-300/20' : 'from-blue-500/10 to-sky-500/10 group-hover:from-blue-500/20 group-hover:to-sky-500/20'} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </span>
                    </div>
                  </div>
                  {card.concept && (
                    <span className={`px-4 py-1.5 bg-gradient-to-r ${isRed ? 'from-red-50 to-red-100 group-hover:from-red-100 group-hover:to-red-200 text-red-700 border-red-100' : 'from-blue-50 to-sky-50 group-hover:from-blue-100 group-hover:to-sky-100 text-blue-700 border-blue-100'} text-xs font-bold rounded-full border transition-all duration-300`}>
                      {card.concept}
                    </span>
                  )}
                </div>
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 ${isRed ? 'text-gray-900 group-hover:from-red-600 group-hover:to-red-400' : 'text-gray-900 group-hover:from-blue-600 group-hover:to-sky-600'}`}>
                  {card.title}
                </h3>
                {/* Content */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {card.content}
                </p>
                {/* Ideal For Tags */}
                {card.idealFor && card.idealFor.length > 0 && (
                  <div className={`pt-6 border-t transition-colors duration-300 ${isRed ? 'border-red-100 group-hover:border-red-200' : 'border-gray-100 group-hover:border-sky-100'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className={`w-4 h-4 ${isRed ? 'text-red-400' : 'text-sky-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-bold text-gray-700">Perfect for:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {card.idealFor.map((item, idx) => (
                        <span 
                          key={idx} 
                          className={`px-3 py-1.5 bg-gradient-to-r ${isRed ? ' group-hover:from-red-100 group-hover:to-red-50 text-gray-700 border-gray-100 group-hover:border-red-200 group-hover:text-red-700' : 'from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-sky-50 text-gray-700 group-hover:text-blue-700 border-gray-200 group-hover:border-blue-200'} text-sm font-medium rounded-lg border transition-all duration-300 hover:scale-105`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${isRed ? 'from-red-400/0 to-red-400/10' : 'from-sky-400/0 to-sky-400/10'} rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
