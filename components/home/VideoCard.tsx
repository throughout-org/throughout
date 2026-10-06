"use client";

import { useRef } from "react";
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
}

const shapes = {
  portrait: { card: "aspect-[9/16]", dialog: "w-[min(92vw,calc(92vh*9/16))]", video: "aspect-[9/16]" },
  landscape: { card: "aspect-video", dialog: "w-[min(92vw,calc(88vh*16/9))]", video: "aspect-video" },
};

export default function VideoCard({ src, poster, title, meta, previewSrc, ariaLabel, aspect = "portrait" }: VideoCardProps) {
  const shape = shapes[aspect];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);

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
        {previewSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            src={previewSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
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
