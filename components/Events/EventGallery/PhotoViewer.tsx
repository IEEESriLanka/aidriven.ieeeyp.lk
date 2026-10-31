"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { EventPhoto } from "@/lib/type";

const SWIPE_DISTANCE = 50;

interface PhotoViewerProps {
  photos: EventPhoto[];
  index: number;
  eventTitle: string;
  onChange: (index: number) => void;
  onClose: () => void;
}

export default function PhotoViewer({ photos, index, eventTitle, onChange, onClose }: PhotoViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const photo = photos[index];
  const previous = (index - 1 + photos.length) % photos.length;
  const next = (index + 1) % photos.length;

  // A native dialog gives us focus trapping and Esc to close
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  // Load the neighbours now so moving between photos is instant
  useEffect(() => {
    [previous, next].forEach((i) => {
      new window.Image().src = photos[i].src;
    });
  }, [previous, next, photos]);

  return (
    <dialog
      ref={dialogRef}
      data-lenis-prevent
      aria-label={`${eventTitle} photos`}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") onChange(previous);
        if (e.key === "ArrowRight") onChange(next);
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const distance = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (distance > SWIPE_DISTANCE) onChange(previous);
        if (distance < -SWIPE_DISTANCE) onChange(next);
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center bg-black/95 p-0 text-white open:flex"
    >
      {/* The grid-size photo is already loaded, so it shows instantly until the full-size one replaces it */}
      <Image
        key={photo.src}
        src={photo.src}
        alt={`${eventTitle}, photo ${index + 1}`}
        width={photo.width}
        height={photo.height}
        unoptimized
        priority
        style={{ background: `url("${photo.thumb}") center / contain no-repeat` }}
        className="h-auto max-h-[100dvh] w-auto max-w-full object-contain select-none"
      />

      <span className="absolute top-5 left-5 rounded-full bg-black/60 px-3 py-1 text-sm">
        {index + 1} / {photos.length}
      </span>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="hover:bg-primary absolute top-3 right-3 flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/60 transition-colors"
      >
        <X className="size-6" />
      </button>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => onChange(previous)}
            aria-label="Previous photo"
            className="hover:bg-primary absolute top-1/2 left-3 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 transition-colors"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => onChange(next)}
            aria-label="Next photo"
            className="hover:bg-primary absolute top-1/2 right-3 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 transition-colors"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}
    </dialog>
  );
}
