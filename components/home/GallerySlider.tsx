"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const photos = [
  {
    src: "/images/gallery/web/IMG_3892.jpg",
    alt: "Throughout engineers pairing on a build from the studio couch",
  },
  {
    src: "/images/gallery/web/IMG_4710.jpg",
    alt: "A multi-monitor workspace mid-project at Throughout",
  },
  {
    src: "/images/gallery/980C3820-2280-4368-A9ED-3C44776CFB76_1_105_c.jpeg",
    alt: "Building Rankout from a coffee shop, one of the products Throughout builds and operates",
  },
  {
    src: "/images/gallery/web/IMG_4937.jpg",
    alt: "A Throughout team member holding two BestWeb.LK 2026 awards",
  },
  {
    src: "/images/gallery/web/IMG_4957.jpg",
    alt: "Two Throughout team members together with their BestWeb.LK 2026 awards",
  },
  {
    src: "/images/gallery/web/IMG_4868.jpg",
    alt: "BestWeb.LK 2026 Winner award for Best Mobile User Experience, awarded to Throughout",
  },
  {
    src: "/images/gallery/web/IMG_4871.jpg",
    alt: "BestWeb.LK 2026 Bronze Winner award for Best Personal Website, awarded to Throughout",
  },
  {
    src: "/images/gallery/web/IMG_4870.jpg",
    alt: "Close-up of the BestWeb.LK 2026 Winner award held by a Throughout team member",
  },
];

export default function GallerySlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-gallery-card]");
    const step = (card?.offsetWidth ?? 280) + 20;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            data-gallery-card
            className="relative aspect-[4/5] w-[68vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-hairline bg-canvas-soft shadow-whisper sm:w-[320px]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 320px, 68vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline-strong bg-canvas-elevated text-ink transition hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Scroll gallery left"
        >
          <FiArrowLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline-strong bg-canvas-elevated text-ink transition hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Scroll gallery right"
        >
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
