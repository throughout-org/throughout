import Image from "next/image";
import { FaThLarge, FaBullhorn } from "react-icons/fa";

export default function DashboardControlHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-2 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
      {/* Text Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Total Control with a Built-in Dashboard.
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaThLarge />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">All Your Chats in One Place</h3>
              <p className="text-gray-600 text-base">
                Track every lead, order, and conversation from a single easy-to-use dashboard on any device.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaBullhorn />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Smart Automated Marketing</h3>
              <p className="text-gray-600 text-base">
                Use AI to send perfectly timed messages that bring past customers back to buy from you again.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* Image: Top on mobile, right on desktop */}
      <div className="flex-1 flex justify-center items-center bg-transparent mb-8 md:mb-0">
        <div className="relative w-[320px] h-[240px] sm:w-[380px] sm:h-[280px] md:w-[400px] md:h-[300px] lg:w-[520px] lg:h-[400px] bg-transparent">
          <Image
            src="/images/whatsApp/store-chat.png" // Update path as needed
            alt="Dashboard Control Illustration"
            fill
            className="object-contain bg-transparent"
            priority
          />
        </div>
      </div>
    </section>
  );
}
