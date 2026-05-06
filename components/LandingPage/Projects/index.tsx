import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectsData } from "@/lib/data";
import Item from "./item";

export default function Projects() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h1 className="section-header">
        <span>Our</span>
        <span className="text-primary"> Previous Projects</span>
      </h1>
      <div>
        <Carousel>
          <CarouselContent className="ml-0 lg:gap-x-8">
            {projectsData.map((project, index) => (
              <CarouselItem key={index} className="px-2 lg:basis-[45%]">
                <Item {...project} />
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
