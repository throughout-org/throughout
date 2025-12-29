import Image from "next/image";
import { FaRegComments, FaUserCheck } from "react-icons/fa";

export default function InstantAnswersConnectivity() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-2 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left: Illustration */}
      <div className="flex-1 flex justify-center items-center bg-transparent">
        <div className="relative w-[340px] h-[260px] md:w-[400px] md:h-[320px] bg-transparent">
          <Image
            src="/images/whatsApp/connectivity.png"
            alt="24/7 Connectivity Illustration"
            fill
            className="object-contain bg-transparent"
            priority
          />
        </div>
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Instant Answers, <span className="text-theme">24/7 Connectivity.</span>
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="mt-1 text-2xl text-sky-500">
              <FaRegComments />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Human-Like Chat in Seconds</h3>
              <p className="text-gray-600 text-base">
                Give customers natural, friendly replies instantly so your business stays open even while you sleep.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-1 text-2xl text-sky-500">
              <FaUserCheck />
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Never Lose a Lead Again</h3>
              <p className="text-gray-600 text-base">
                Our AI catches every 1 AM inquiry and follows up automatically so no customer is ever left behind.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
