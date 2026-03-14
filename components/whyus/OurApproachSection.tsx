import { FiTarget, FiRefreshCw, FiCheckCircle, FiLifeBuoy } from 'react-icons/fi';

export default function OurApproachSection() {
  const approaches = [
    {
      step: '01',
      title: 'Client-Centric Focus',
      description: 'We take time to understand your unique needs and goals before writing a single line of code.',
      icon: <FiTarget className='text-white' />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Agile Methodology',
      description: 'Flexible and iterative development that adapts smoothly to evolving requirements.',
      icon: <FiRefreshCw className='text-white' />,
      color: 'from-sky-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Quality Assurance',
      description: 'Rigorous testing and code reviews ensure bug-free, reliable software delivery.',
      icon: <FiCheckCircle className='text-white' />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Continuous Support',
      description: '24/7 maintenance and support to keep your applications running at peak performance.',
      icon: <FiLifeBuoy className='text-white' />,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Our <span className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-transparent">Approach</span>
        </h2>
        <p className="text-gray-600">How we ensure your project's success</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {approach.icon}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-bold bg-gradient-to-r from-blue-500  bg-clip-text text-transparent mb-2`}>
                  STEP {approach.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
