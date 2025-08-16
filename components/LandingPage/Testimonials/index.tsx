import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/lib/data";
import Item from "./Item";

export default function AboutUs() {
  return (
    <section
      className="section-gap-y container mx-auto px-4 py-8"
      id="about-section"
    >
      <h1 className="section-header">What people Say About us ?</h1>
      <div className="mt-16 flex lg:ml-4 lg:gap-x-8">
        <Carousel className="w-full overflow-x-clip overflow-y-visible">
          <CarouselContent className="flex w-full overflow-visible lg:gap-x-8 lg:px-16 pl-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="min-h-[280px] lg:basis-[40%]"
              >
                <Item {...testimonial} />
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
