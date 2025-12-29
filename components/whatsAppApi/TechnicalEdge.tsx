import { FaRobot } from "react-icons/fa";
import { MdImageSearch, MdSyncAlt } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

const features = [
  {
    icon: <FaRobot className="text-sky-500 text-4xl" />,
    title: "Natural Language Processing (LLM)",
    description:
      "Understands natural language, slang, and mixed languages with high accuracy. No rigid keyword matching.",
  },
  {
    icon: <MdImageSearch className="text-sky-500 text-4xl" />,
    title: "Media & Image Recognition",
    description:
      "Recognizes product photos, checks stock availability, and can send rich media replies like catalogs or PDFs.",
  },
  {
    icon: <GiBrain className="text-sky-500 text-4xl" />,
    title: "Intelligent Lead Qualification",
    description:
      "Asks pre-set qualifying questions and instantly alerts your human sales team for 'Hot' leads.",
  },
  {
    icon: <CgWebsite className="text-sky-500 text-4xl" />,
    title: "Seamless CRM Integration",
    description:
      "Automatically syncs conversation data to HubSpot, Salesforce, or your custom CRM pipeline.",
  },
];

export default function TechnicalEdge() {
  // For icon animation, reuse the icon array if needed
  const icons = features.map(f => f.icon);
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-2">
      <h2 className="text-6xl md:text-6xl font-bold text-center mb-10 pb-8 pt-4">
        <span className="block bg-gradient-to-r from-slate-900 via-blue-600 to-sky-600 bg-clip-text text-transparent pb-4 font-bold">
          Technical Edge
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative bg-white/70 backdrop-blur-sm rounded-t-3xl p-8 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up border border-gray-100/50 hover:border-blue-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 via-sky-200/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-sky-200/20 group-hover:to-pink-500/20 rounded-t-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
            {/* Icon */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-sky-200/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500/10 to-sky-200/10 group-hover:from-blue-500/20 group-hover:to-sky-200/20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {icons[index % icons.length]}
                </span>
              </div>
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-600 group-hover:bg-clip-text transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
              {feature.description}
            </p>
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
