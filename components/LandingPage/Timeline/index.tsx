"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarTimelineData } from "@/lib/data";

function getCardTone(isHighlight: boolean) {
  if (isHighlight) {
    return {
      card: "border border-primary/50 bg-[linear-gradient(150deg,rgba(105,34,25,0.92),rgba(30,14,10,0.97))] shadow-[0_0_40px_rgba(255,91,60,0.2)]",
      pill: "bg-primary text-white shadow-[0_4px_16px_rgba(255,91,60,0.4)]",
      text: "text-primary",
      glow: true,
    };
  }
  return {
    card: "border border-white/10 bg-[linear-gradient(150deg,rgba(50,48,46,0.8),rgba(17,16,15,0.96))]",
    pill: "bg-white/10 text-white/80 border border-white/15",
    text: "text-white",
    glow: false,
  };
}

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-primary/60 hover:bg-primary/15 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
    >
      {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

function MonthDots() {
  const { currentIndex, slideCount, scrollTo } = useCarousel();

  return (
    <div className="relative mb-8 flex items-start justify-between px-1">
      {/* connecting line */}
      <div className="absolute top-1.75 right-4 left-4 h-px bg-white/10" />

      {calendarTimelineData.map((item, i) => {
        const active = i === currentIndex;
        return (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="group relative flex flex-col items-center gap-2"
            aria-label={`Go to ${item.month}`}
          >
            <div
              className={`relative z-10 h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                active
                  ? "bg-primary scale-110 shadow-[0_0_12px_rgba(255,91,60,0.8)]"
                  : item.highlight
                    ? "bg-primary/40 border border-primary/60 group-hover:bg-primary/70"
                    : "bg-white/20 border border-white/20 group-hover:bg-white/50"
              }`}
            />
            <span
              className={`text-[11px] font-medium tracking-wide uppercase transition-colors ${
                active ? "text-primary" : "text-white/40 group-hover:text-white/70"
              }`}
            >
              {item.month?.slice(0, 3)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function TimelineCarouselContent() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="flex flex-col gap-6">
      <MonthDots />

      <div className="flex items-center gap-4">
        <NavButton direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />

        <div className="min-w-0 flex-1">
          <CarouselContent className="ml-0">
            {calendarTimelineData.map((item, index) => {
              const tone = getCardTone(Boolean(item.highlight));
              return (
                <CarouselItem
                  key={`${item.month}-${index}`}
                  index={index}
                  className="flex pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <article
                    className={`relative isolate flex min-h-56 w-full flex-col overflow-hidden rounded-3xl px-6 py-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${tone.card}`}
                  >
                    {tone.glow && (
                      <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
                    )}
                    <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-white/4 blur-2xl" />

                    <span
                      className={`w-fit rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase ${tone.pill}`}
                    >
                      {item.month}
                    </span>

                    <div className="mt-auto pt-8">
                      {item.events.map((event) => (
                        <p
                          key={event}
                          className={`text-xl font-semibold leading-snug lg:text-2xl ${tone.text}`}
                        >
                          {event}
                        </p>
                      ))}
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        <NavButton direction="next" onClick={scrollNext} disabled={!canScrollNext} />
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h2 className="section-header">
        Event Calendar —{" "}
        <span className="text-primary">AIDSL &apos;26</span>
      </h2>

      <div className="rounded-4xl border border-white/8 bg-[radial-gradient(ellipse_at_top_left,rgba(255,91,60,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,91,60,0.07),transparent_50%),linear-gradient(180deg,#151518_0%,#0e0e11_100%)] px-6 py-8 lg:px-10 lg:py-10">
        <Carousel opts={{ align: "start" }}>
          <TimelineCarouselContent />
        </Carousel>
      </div>
    </section>
  );
}
