import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
} from "@/components/ui/carousel";
import { timelineData } from "@/lib/data";
import Item from "./Item";

export default function Timeline() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8">
      <h1 className="section-header">
        <span>Events</span>
        <span className="text-primary"> Timeline</span>
      </h1>
      <div className="px-2 lg:px-0">
        <Carousel>
          <CarouselContent className="gap-x-16">
            {timelineData.map((blog, index) => (
              <CarouselItem key={index} className="basis-[500px]">
                <Item {...blog} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicators />
        </Carousel>
      </div>
    </section>
  );
}
