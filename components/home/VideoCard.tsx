"use client";

import { useEffect, useRef, useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";

interface VideoCardProps {
  src: string;
  poster: string;
  title: string;
  meta: string;
  /** Short muted clip that loops on the card; without it the poster shows. */
  previewSrc?: string;
  ariaLabel: string;
  aspect?: "portrait" | "landscape";
  /** Above the fold: fetch the poster at high priority (it is the page's LCP image). */
  priority?: boolean;
}

const shapes = {
  portrait: { card: "aspect-[9/16]", dialog: "w-[min(92vw,calc(92vh*9/16))]", video: "aspect-[9/16]" },
  landscape: { card: "aspect-video", dialog: "w-[min(92vw,calc(88vh*16/9))]", video: "aspect-video" },
};

export default function VideoCard({ src, poster, title, meta, previewSrc, ariaLabel, aspect = "portrait", priority = false }: VideoCardProps) {
  const shape = shapes[aspect];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  // The preview clip is ~1.8 MB. It starts on the visitor's first scroll, tap, key or mouse
  // move (so the poster stays the page's LCP), only while the card is on screen, and never
  // for reduced motion or data saver.
  useEffect(() => {
    const video = previewRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return;

    let observer: IntersectionObserver | undefined;
    const watch = () => {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src && previewSrc) video.src = previewSrc;
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
      observer.observe(video);
    };
    const events = ["scroll", "pointerdown", "pointermove", "keydown", "touchstart"];
    const start = () => {
      events.forEach((name) => window.removeEventListener(name, start));
      watch();
    };
    events.forEach((name) => window.addEventListener(name, start, { once: true, passive: true }));
    return () => {
      events.forEach((name) => window.removeEventListener(name, start));
      observer?.disconnect();
    };
  }, [previewSrc]);

  const open = () => {
    dialogRef.current?.showModal();
    void fullRef.current?.play().catch(() => {});
  };

  const close = () => {
    fullRef.current?.pause();
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`group relative block ${shape.card} w-full overflow-hidden rounded-[10px] bg-sapphire text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal`}
        aria-label={ariaLabel}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- poster doubles as the LCP image */}
        <img
          src={poster}
          alt=""
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />
        {previewSrc && (
          <video
            ref={previewRef}
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02] ${
              previewPlaying ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onPlaying={() => setPreviewPlaying(true)}
          />
        )}
        <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/75 to-transparent p-4 pt-20 text-white">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sapphire transition group-hover:scale-105">
            <FiPlay className="translate-x-px" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-5">{title}</span>
            <span className="block font-mono text-xs text-white/75">{meta}</span>
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => fullRef.current?.pause()}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className={`m-auto max-h-[92vh] ${shape.dialog} overflow-visible bg-transparent p-0 backdrop:bg-ink/85`}
      >
        <video
          ref={fullRef}
          className={`${shape.video} w-full rounded-[10px] bg-black`}
          src={src}
          poster={poster}
          controls
          playsInline
          preload="none"
        />
        <button
          type="button"
          onClick={close}
          className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg"
          aria-label="Close video"
        >
          <FiX aria-hidden="true" />
        </button>
      </dialog>
    </>
  );
}
