interface TechnologiesSectionProps {
  headline: string;
  stack: string[];
}

export default function TechnologiesSection({ headline, stack }: TechnologiesSectionProps) {
  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {headline}
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
          We harness modern frameworks like React.js and Angular.js, alongside robust back-end technologies such as Node.js and Django, to craft powerful and user-friendly web applications.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {stack.map((tech, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
