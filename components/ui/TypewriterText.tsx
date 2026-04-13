"use client";

import { useEffect, useState } from "react";

interface TypewriterLine {
  text: string;
  breakAfter?: boolean; // adds a <br /> after this line (hidden on mobile by default)
}

interface TypewriterTextProps {
  lines: TypewriterLine[];
  typingSpeed?: number;
  delayBetweenLines?: number;
  startDelay?: number;
}

const TypewriterText = ({
  lines,
  typingSpeed = 200,
  delayBetweenLines = 200,
  startDelay = 400,
}: TypewriterTextProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Start delay
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  // Typing effect
  useEffect(() => {
    if (!started) return;
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex].text;

    if (currentCharIndex <= currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.slice(0, currentCharIndex);
          return updated;
        });

        if (currentCharIndex < currentLine.length) {
          setCurrentCharIndex((c) => c + 1);
        } else {
          // Line finished, move to next after delay
          setTimeout(() => {
            setCurrentLineIndex((l) => l + 1);
            setCurrentCharIndex(0);
          }, delayBetweenLines);
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [started, currentCharIndex, currentLineIndex, lines, typingSpeed, delayBetweenLines]);

  const isFinished = currentLineIndex >= lines.length;

  return (
    <>
      {lines.map((line, i) => {
        const text = displayedLines[i] || "";
        const isCurrentLine = i === currentLineIndex;
        const isVisible = i <= currentLineIndex;

        if (!isVisible) return null;

        return (
          <span key={i}>
            {text}
            {/* Show cursor on current line or at the very end */}
            {(isCurrentLine || (isFinished && i === lines.length - 1)) && (
              <span
                className="inline-block w-[3px] h-[1em] bg-[#3698fd] ml-1 align-middle animate-blink"
                aria-hidden="true"
              />
            )}
            {line.breakAfter && i < lines.length - 1 && (
              <br className="hidden md:block" />
            )}
          </span>
        );
      })}
    </>
  );
};

export default TypewriterText;
