import Image from "next/image";
import { FaRegImages, FaRegCommentDots } from "react-icons/fa";

export default function AiMediaImageHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-2 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Image: Top on mobile, right on desktop */}
      <div className="flex-1 flex justify-center items-center bg-transparent mb-8 md:mb-0">
        <div className="relative w-[320px] h-[240px] sm:w-[380px] sm:h-[280px] md:w-[400px] md:h-[300px] lg:w-[520px] lg:h-[400px] bg-transparent">
          <Image
            src="/images/whatsApp/ai-media-image.png" // Update path as needed
            alt="AI Media and Image Illustration"
            fill
            className="object-contain bg-transparent"
            priority
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          AI That Sees and Understands Images.
        </h2>
        <ul className="space-y-8">
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaRegImages />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Instant Media Sharing</h3>
              <p className="text-gray-600 text-base">
                Automatically send product photos, brochures, and price lists to your customers the moment they ask.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-4xl text-sky-600">
              <FaRegCommentDots />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Smart Product Identification</h3>
              <p className="text-gray-600 text-base">
                Your customers can simply send a photo, and the AI will recognize the item and find it in your shop.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
