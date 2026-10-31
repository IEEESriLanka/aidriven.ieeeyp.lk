"use client";

import { useMemo, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Item from "./Item";
import { upcomingEventsData } from "@/lib/data";

const landingEvents = upcomingEventsData.filter((event) => !event.hidden);

export default function UpcomingEvent() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      playOnInit: true,
    }),
  );
  const plugins = useMemo(() => [autoplayRef.current], []);
  const opts = useMemo(() => ({ loop: true }), []);

  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h2 className="section-header">
        <span>Upcoming</span>
        <span className="text-primary"> Events</span>
      </h2>
      <div>
        <Carousel opts={opts} plugins={plugins}>
          <CarouselContent>
            {landingEvents.map((event, index) => (
              <CarouselItem key={index} className="flex">
                <Item {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {landingEvents.length > 1 && (
            <>
              <CarouselPrevious className="hidden lg:inline-flex" />
              <CarouselNext className="hidden lg:inline-flex" />
              <CarouselIndicators className="mt-3" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}
