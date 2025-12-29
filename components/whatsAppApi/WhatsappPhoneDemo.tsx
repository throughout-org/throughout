"use client";
import { useEffect, useRef } from "react";

export default function WhatsappPhoneDemo() {
  const chatRef = useRef<HTMLDivElement>(null);
  const islandRef = useRef<HTMLDivElement>(null);
  const inputTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chat = chatRef.current;
    const island = islandRef.current;
    const inputText = inputTextRef.current;

    function scroll() {
      if (chat) {
        chat.scrollTop = chat.scrollHeight;
      }
    }
    function islandExpand(text: string) {
      if (!island) return;
      island.classList.add("island-expand");
      island.innerHTML = `<span class='material-symbols-outlined text-sm'>shopping_bag</span>${text}`;
    }
    function islandReset() {
      if (!island) return;
      island.classList.remove("island-expand");
      island.innerHTML = `<span class='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span> Store Bot`;
    }
    function typingBubble() {
      if (!chat) return;
      const t = document.createElement("div");
      t.id = "typing";
      t.className = "self-start bg-white p-3 rounded-lg shadow-sm";
      t.innerHTML = `<div class='typing flex gap-1'><span>•</span><span>•</span><span>•</span></div>`;
      chat.appendChild(t); scroll();
    }
    function stopTyping() {
      const t = document.getElementById("typing"); if (t) t.remove();
    }
    function msg(text: string, side: "start" | "end" = "start") {
      if (!chat) return;
      const m = document.createElement("div");
      // Add ml-auto for right alignment if side is end
      m.className = `self-${side} ${side === "end" ? "ml-auto bg-[#dcf8c6] rounded-tr-none" : "bg-white rounded-tl-none"} p-3 rounded-lg shadow-sm max-w-[85%]`;
      m.innerText = text;
      chat.appendChild(m); scroll();
    }
    function typeUserMessage(text: string, cb: () => void) {
      if (!inputText) return;
      inputText.textContent = "";
      let i = 0;
      const interval = setInterval(() => {
        inputText.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            // Always align user (green) messages to the right
            msg(text, "end");
            inputText.textContent = "";
            cb && cb();
          }, 500);
        }
      }, 60);
    }
    function variantButtons() {
      if (!chat) return;
      const box = document.createElement("div");
      box.className = "self-start bg-white p-3 rounded-lg shadow-sm max-w-[85%]";
      box.innerHTML = `
        <p class='mb-2'>Select size:</p>
        <div class='flex gap-2'>
          <button class='px-3 py-1 bg-gray-200 rounded'>S</button>
          <button class='px-3 py-1 bg-gray-200 rounded'>M</button>
          <button class='px-3 py-1 bg-gray-200 rounded'>L</button>
        </div>`;
      chat.appendChild(box); scroll();
    }
    function productCarousel() {
      if (!chat) return;
      const c = document.createElement("div");
      c.className = "self-start bg-white p-2 rounded-lg shadow-sm max-w-[85%]";
      c.innerHTML = `
        <div class='flex gap-2 overflow-x-auto'>
          <img class='h-32 rounded' src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b'>
          <img class='h-32 rounded' src='https://images.unsplash.com/photo-1541099649105-f69ad21f3246'>
          <img class='h-32 rounded' src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'>
        </div>
        <p class='mt-2'>More styles you may like</p>`;
      chat.appendChild(c); scroll();
    }
    function startDemo() {
      if (!chat) return;
      chat.innerHTML = ""; islandReset();
      setTimeout(() => typeUserMessage("Hi, do you have hoodies?", () => { typingBubble(); }), 800);
      setTimeout(() => { stopTyping(); islandExpand("Browsing catalog"); msg("Yes! Here are some popular hoodies 👇"); productCarousel(); islandReset(); }, 2600);
      setTimeout(() => typeUserMessage("I like the first one", () => { typingBubble(); }), 4200);
      setTimeout(() => { stopTyping(); msg("Great choice! Please select your size:"); variantButtons(); }, 6200);
      setTimeout(() => typeUserMessage("Size M", () => { typingBubble(); }), 8200);
      setTimeout(() => { stopTyping(); msg("Perfect 👍 Price is LKR 6,500. Cash on Delivery available. Please share delivery address."); }, 10200);
      setTimeout(() => typeUserMessage("No 12, Galle Road, Colombo", () => { typingBubble(); }), 12200);
      setTimeout(() => { stopTyping(); islandExpand("Order confirmed"); msg("✅ Order Confirmed!\nHoodie (Size M)\nDelivery: Colombo\nPayment: COD\n\nThank you for shopping with us!"); islandReset(); }, 14600);
      setTimeout(() => { typingBubble(); }, 17500);
      setTimeout(() => { stopTyping(); islandExpand("Follow-up"); msg("Hi 👋 Just checking — your hoodie is still available. Would you like to place another order?"); islandReset(); }, 19500);
      setTimeout(startDemo, 23000);
    }
    startDemo();
    // Clean up on unmount
    return () => { if (chat) chat.innerHTML = ""; };
  }, []);

  return (
    <div className="flex items-center justify-center  py-8">
      <div className="relative bg-black rounded-[3.5rem] p-[10px] shadow-2xl border-4 border-gray-200 mx-auto overflow-hidden"
        style={{ width: 340, height: 700, maxWidth: '100vw', maxHeight: '90vh', aspectRatio: '340/700' }}>
        {/* Dynamic Island */}
        <div
          ref={islandRef}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black text-white h-7 w-32 rounded-full flex items-center justify-center gap-2 text-xs transition-all duration-300 island"
          dangerouslySetInnerHTML={{ __html: `<span class='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span> Store Bot` }}
        />
        <div className="relative w-full h-full bg-[#e5ddd5] rounded-[3rem] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-[#075e54] pt-10 p-4 flex items-center gap-3 text-white">
            <span className="material-symbols-outlined">arrow_back</span>
            <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
            </div>
            <div>
              <p className="text-sm font-bold">UrbanStyle Store</p>
              <p className="text-xs opacity-80">Online</p>
            </div>
          </div>
          {/* Chat */}
          <div
            ref={chatRef}
            id="chat"
            className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#d8d8d8ff #fff' }}
          />
          {/* Input */}
          <div className="p-2 bg-[#f0f0f0] flex items-center gap-2">
            <div ref={inputTextRef} id="inputText" className="flex-1 bg-white h-10 rounded-full px-4 flex items-center text-gray-600 cursor" />
            <div className="size-10 bg-[#075e54] rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">send</span>
            </div>
          </div>
        </div>
        <style jsx>{`
          /* Stylish thin scrollbar for chat */
          #chat::-webkit-scrollbar {
            width: 4px;
            background: #e5e7eb;
            border-radius: 8px;
          }
          #chat::-webkit-scrollbar-thumb {
            background: #a3a3a3;
            border-radius: 8px;
          }
          #chat::-webkit-scrollbar-thumb:hover {
            background: #737373;
          }
          .typing span { animation: blink 1.4s infinite both; }
          .typing span:nth-child(2){animation-delay:.2s}
          .typing span:nth-child(3){animation-delay:.4s}
          @keyframes blink {0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}
          .island-expand { width:260px !important; }
          .cursor::after { content: "|"; animation: blink 1s infinite; }
        `}</style>
        {/* Google Fonts for Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" rel="stylesheet" />
      </div>
    </div>
  );
}
