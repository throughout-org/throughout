import Image from "next/image";
import { FaShoppingCart, FaRobot } from "react-icons/fa";

export default function StoreInChatHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-2 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Image: Top on mobile, left on desktop */}
      <div className="flex-1 flex justify-center items-center bg-transparent mb-8 md:mb-0">
        <div className="relative w-[320px] h-[240px] sm:w-[380px] sm:h-[280px] md:w-[400px] md:h-[300px] lg:w-[520px] lg:h-[400px] bg-transparent">
          <Image
            src="/images/whatsApp/store-chat.png" // Update path as needed
            alt="Store in Chat Illustration"
            fill
            className="object-contain bg-transparent"
            priority
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Your Entire Store, Inside One Chat.
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaShoppingCart />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Sell More via Chat</h3>
              <p className="text-gray-600 text-base">
                WhatsApp chats convert 5X better than websites because people love to buy where they talk.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaRobot />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Fully Automated Ordering</h3>
              <p className="text-gray-600 text-base">
                From picking products to calculating shipping and payment, the entire sale happens right inside the chat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
