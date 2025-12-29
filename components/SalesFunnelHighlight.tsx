import Image from "next/image";
import { FaFilter, FaChartLine } from "react-icons/fa";

export default function SalesFunnelHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-2 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Engineered to Close <span className="text-theme">5X More Sales.</span>
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaFilter />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Smart Lead Sorting</h3>
              <p className="text-gray-600 text-base">
                The AI filters out the window shoppers and sends only high-value, ready-to-buy leads to your team.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaChartLine />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Fast-Track Your Conversions</h3>
              <p className="text-gray-600 text-base">
                Our bot identifies serious buyers and guides them straight to checkout or a booked appointment.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* Right: Illustration */}
      <div className="flex-1 flex justify-center items-center bg-transparent">
       <div className="relative w-[320px] h-[240px] sm:w-[380px] sm:h-[280px] md:w-[400px] md:h-[300px] lg:w-[520px] lg:h-[400px] bg-transparent">
                <Image
                    src="/images/whatsApp/engineering.png"
                    alt="Sales Funnel Illustration"
                    fill
                    className="object-contain bg-transparent"
                    priority
                />
                </div>
      </div>
    </section>
  );
}
