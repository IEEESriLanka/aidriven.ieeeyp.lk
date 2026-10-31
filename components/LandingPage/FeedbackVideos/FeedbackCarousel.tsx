"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import type { FeedbackVideoProps } from "@/lib/type";
import VideoCard from "./VideoCard";

const CAROUSEL_OPTS = { align: "start" as const };

// Arrows and dots only appear once the videos no longer fit in one row
function CarouselControls() {
  const { canScrollPrev, canScrollNext } = useCarousel();
  if (!canScrollPrev && !canScrollNext) return null;

  return (
    <>
      <CarouselPrevious className="hidden lg:inline-flex" />
      <CarouselNext className="hidden lg:inline-flex" />
      <CarouselIndicators className="mt-6" />
    </>
  );
}

export default function FeedbackCarousel({ videos }: { videos: FeedbackVideoProps[] }) {
  const reduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  // null means nobody has chosen yet: autoplay, unless the visitor prefers reduced motion
  const [pausedChoice, setPausedChoice] = useState<boolean | null>(null);
  const paused = pausedChoice ?? Boolean(reduceMotion);

  // If the visitor swipes the playing video out of view, hand over to one they can see
  useEffect(() => {
    if (!api) return;
    const onSettle = () => {
      const visible = api.slidesInView();
      if (visible.length > 0) {
        setActiveIndex((current) => (visible.includes(current) ? current : visible[0]));
      }
    };
    api.on("settle", onSettle);
    return () => {
      api.off("settle", onSettle);
    };
  }, [api]);

  const playNext = () => {
    const next = (activeIndex + 1) % videos.length;
    if (reduceMotion) setPausedChoice(true);
    setActiveIndex(next);
    // Scroll positions can cover several slides, so find the one that shows this video
    const snap = api?.internalEngine().slideRegistry.findIndex((slides) => slides.includes(next));
    if (snap !== undefined && snap >= 0) api?.scrollTo(snap);
  };

  return (
    <Carousel opts={CAROUSEL_OPTS} setApi={setApi}>
      {/* justify-center-safe centres a short row but falls back to the start once it overflows */}
      <CarouselContent className="justify-center-safe">
        {videos.map((video, index) => (
          <CarouselItem key={video.src} className="basis-[72%] sm:basis-[260px] lg:basis-[280px]">
            <VideoCard
              {...video}
              label={`Community feedback video ${index + 1}`}
              isActive={index === activeIndex}
              loadAhead={index === activeIndex || index === (activeIndex + 1) % videos.length}
              paused={paused}
              soundOn={soundOn}
              loop={videos.length === 1}
              onSelect={() => {
                if (index === activeIndex) {
                  setPausedChoice(!paused);
                } else {
                  setActiveIndex(index);
                  setPausedChoice(false);
                }
              }}
              onToggleSound={() => setSoundOn((on) => !on)}
              onSoundBlocked={() => setSoundOn(false)}
              onEnded={playNext}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselControls />
    </Carousel>
  );
}
