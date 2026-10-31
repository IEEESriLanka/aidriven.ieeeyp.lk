"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeedbackVideoProps } from "@/lib/type";

interface VideoCardProps extends FeedbackVideoProps {
  label: string;
  isActive: boolean;
  loadAhead: boolean;
  paused: boolean;
  soundOn: boolean;
  loop: boolean;
  onSelect: () => void;
  onToggleSound: () => void;
  onSoundBlocked: () => void;
  onEnded: () => void;
}

export default function VideoCard({
  src,
  poster,
  label,
  isActive,
  loadAhead,
  paused,
  soundOn,
  loop,
  onSelect,
  onToggleSound,
  onSoundBlocked,
  onEnded,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.5 });
  // Start loading before the section scrolls into view so playback begins without a wait
  const nearView = useInView(videoRef, { once: true, margin: "800px 0px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const shouldPlay = isActive && inView && !paused;
  const withSound = isActive && soundOn;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React doesn't reliably keep the muted property in sync, so set it directly
    video.muted = !withSound;

    if (!shouldPlay) {
      video.pause();
      // Only the current video keeps its place; others restart when they next play
      if (!isActive && video.currentTime > 0) video.currentTime = 0;
      return;
    }

    video.play().catch((error: DOMException) => {
      // Browsers can refuse to autoplay with sound; carry on muted instead
      if (error.name === "NotAllowedError" && !video.muted) {
        video.muted = true;
        onSoundBlocked();
        video.play().catch(() => {});
      }
    });
    // onSoundBlocked is recreated on each parent render and only used when play() fails
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldPlay, withSound, isActive]);

  const OverlayIcon = isPlaying ? Pause : Play;

  return (
    <div
      className={cn(
        "group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border bg-[#111] transition-colors duration-300",
        isActive ? "border-primary" : "hover:border-primary/40 border-white/10",
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={label}
        className="h-full w-full object-cover"
        muted
        playsInline
        preload={nearView && loadAhead ? "auto" : "none"}
        loop={loop}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={onEnded}
      />

      <button
        type="button"
        onClick={onSelect}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${label.toLowerCase()}`}
        className="absolute inset-0 flex cursor-pointer items-center justify-center"
      >
        <span
          className={cn(
            "bg-primary/90 flex size-14 items-center justify-center rounded-full text-white transition-opacity duration-300",
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100",
          )}
        >
          <OverlayIcon className="size-6 fill-current" />
        </span>
      </button>

      {isActive && (
        <button
          type="button"
          onClick={onToggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
          className={cn(
            "absolute top-3 right-3 z-10 flex h-10 cursor-pointer items-center gap-2 rounded-full px-3 text-xs font-semibold text-white backdrop-blur-sm transition-colors",
            soundOn ? "bg-primary" : "hover:bg-primary bg-black/60",
          )}
        >
          {soundOn ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
          {!soundOn && <span>Turn on sound</span>}
        </button>
      )}
    </div>
  );
}
