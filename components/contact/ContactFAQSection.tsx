export default function ContactFAQSection() {
  const faqs = [
    {
      q: "What's your typical response time?",
      a: "We typically respond to all inquiries within 24 hours on business days. For urgent matters, please reach out via WhatsApp."
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely! We work with clients worldwide and are experienced in remote collaboration across different time zones."
    },
    {
      q: "What information should I include in my message?",
      a: "Please provide details about your project goals, timeline, budget range, and any specific requirements. The more information you share, the better we can assist you."
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We offer a free initial consultation to discuss your project and explore how we can help bring your vision to life."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
