"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventPhoto, EventPhotoSection } from "@/lib/type";
import PhotoViewer from "./PhotoViewer";

// Photos in the first rows load straight away; the rest load shortly before they scroll into view
const EAGER_PHOTOS = 6;

// Fetching the full-size file on hover means it is already there when the viewer opens
const preload = (photo: EventPhoto) => {
  new window.Image().src = photo.src;
};

interface EventGalleryProps {
  sections: EventPhotoSection[];
  eventTitle: string;
}

export default function EventGallery({ sections, eventTitle }: EventGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const allPhotos = sections.flatMap((section) => section.photos);
  let position = 0;

  return (
    <div className="flex flex-col gap-y-12">
      {sections.map((section) => (
        <div key={section.title ?? "photos"} className="flex flex-col gap-y-5">
          {section.title && (
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white lg:text-2xl">
                <span className="bg-primary h-6 w-1 shrink-0 rounded-full" />
                {section.title}
                {!section.allPhotos && (
                  <span className="text-primary rounded-full bg-[#191919] px-2.5 py-0.5 text-xs font-medium">
                    {section.photos.length}
                  </span>
                )}
              </h3>
              {section.allPhotos && (
                <Link
                  href={section.allPhotos.href}
                  className="text-primary group/all flex items-center gap-1.5 text-sm font-semibold"
                >
                  View all {section.allPhotos.total} photos
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/all:translate-x-1" />
                </Link>
              )}
            </div>
          )}
          {/* Previews use an even row; full galleries use columns so nobody is cropped out of a group shot.
              The viewer always shows the whole photo */}
          <div className={section.allPhotos ? "grid gap-4 sm:grid-cols-3" : "columns-1 gap-4 sm:columns-2 lg:columns-3"}>
            {section.photos.map((photo) => {
              const index = position++;
              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  onPointerEnter={() => preload(photo)}
                  aria-label={`Open photo ${index + 1} of ${allPhotos.length}`}
                  className={cn(
                    "group event-card-clickable relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-transparent bg-[#1c1c1c]",
                    section.allPhotos ? "aspect-[3/2]" : "mb-4 break-inside-avoid",
                  )}
                >
                  <Image
                    src={photo.thumb}
                    alt={`${eventTitle}, photo ${index + 1}`}
                    width={photo.width}
                    height={photo.height}
                    // Already compressed by `pnpm photos:optimize`, so skip on-demand processing
                    unoptimized
                    loading={index < EAGER_PHOTOS ? "eager" : "lazy"}
                    className={cn(
                      "w-full transition-transform duration-500 group-hover:scale-105",
                      section.allPhotos ? "h-full object-cover" : "h-auto",
                    )}
                  />
                  <span className="absolute top-3 right-3 flex size-9 translate-y-1 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="size-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {openIndex !== null && (
        <PhotoViewer
          photos={allPhotos}
          index={openIndex}
          eventTitle={eventTitle}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
