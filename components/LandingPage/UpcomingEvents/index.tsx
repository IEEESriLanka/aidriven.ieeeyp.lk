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

export default function UpcomingEvent() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-2">
      <h1 className="section-header">
        <span>Upcoming</span>
        <span className="text-primary"> Events</span>
      </h1>
      <div>
        <Carousel>
          <CarouselContent>
            {upcomingEventsData.map((event, index) => (
              <CarouselItem key={index}>
                <Item {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:inline-flex" />
          <CarouselNext className="hidden lg:inline-flex" />
          <CarouselIndicators />
        </Carousel>
      </div>
    </section>
  );
}
