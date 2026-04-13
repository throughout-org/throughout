"use client";

const BlinkingCursor = () => {
  return (
    <span
      className="inline-block w-[3px] h-[1em] bg-[#3698fd] ml-1 align-middle animate-blink"
      aria-hidden="true"
    />
  );
};

export default BlinkingCursor;
