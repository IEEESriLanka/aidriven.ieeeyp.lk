"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselLineIndicators,
} from "@/components/ui/carousel";
import { timelineData, landingTimelineData as TimelineData } from "@/lib/data";
import { useCarousel } from "@/components/ui/carousel";
import { useEffect } from "react";
import Item from "./Item_old";

export default function Timeline() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h1 className="section-header">
        <span>Events</span>
        <span className="text-primary"> Timeline</span>
      </h1>
      <div className="px-2 lg:px-0">
        <Carousel>
          <CarouselLineIndicators
            className="mb-8"
            labels={TimelineData.map((t) => t.month ?? "")}
          />
          <CarouselContent className="gap-x-16">
            <Slides />
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

function Slides() {
  const { currentIndex } = useCarousel();

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <>
      {timelineData.map((blog, index) => (
        <CarouselItem key={index} index={index} className="lg:basis-[750px]">
          <Item {...blog} isActive={index === currentIndex} />
        </CarouselItem>
      ))}
    </>
  );
}
