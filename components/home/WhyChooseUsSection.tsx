export default function WhyChooseUsSection() {
  const features = [
    { icon: '⚡', title: 'Fast Iterations', description: 'We ship in short development cycles so you see real progress every week.' },
    { icon: '🏗️', title: 'Scalable Architecture', description: 'We design systems that remain stable as your product and users grow.' },
    { icon: '💬', title: 'Transparent Collaboration', description: 'You get clear progress updates, sprint reviews, and direct access to the team.' },
    { icon: '🚀', title: 'Modern Tech Stack', description: 'We use proven frameworks and cloud infrastructure to build future-ready products.' }
  ];

  return (
    <section id="why-us" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
              Why Companies Work With Us
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Our engineering practices ensure every product we build is reliable, scalable, and built to last.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white border border-blue-100 shadow-sm rounded-2xl hover:shadow-md">
              <div className="flex items-center justify-center mb-3 text-3xl rounded-full w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200">
                {item.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold text-blue-900">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
