"use client";

import { useMemo, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Item from "./Item";
import { pastEventsData } from "@/lib/data";

export default function PastEvents() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    }),
  );
  const plugins = useMemo(() => [autoplayRef.current], []);
  const opts = useMemo(() => ({ loop: true, align: "start" as const }), []);

  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h1 className="section-header">
        <span>Past</span>
        <span className="text-primary"> Events</span>
      </h1>
      <div>
        <Carousel opts={opts} plugins={plugins}>
          <CarouselContent>
            {pastEventsData.map((event) => (
              <CarouselItem key={event.title} className="flex md:basis-1/2 lg:basis-1/3">
                <Item {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:inline-flex" />
          <CarouselNext className="hidden lg:inline-flex" />
          <CarouselIndicators className="mt-6" />
        </Carousel>
      </div>
      <div className="flex justify-center">
        <Link
          href="/events/past-events"
          className="text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          View all past events →
        </Link>
      </div>
    </section>
  );
}
