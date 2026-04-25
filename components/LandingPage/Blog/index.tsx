import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogsData } from "@/lib/data";
import Item from "./item";

export default function Blogs() {
  return (
    <section id="blogs" className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h1 className="section-header">
        <span>Latest</span>
        <span className="text-primary"> Blog</span>
        <span> &</span>
        <span className="text-primary"> Articles</span>
      </h1>
      <div>
        <Carousel>
          <CarouselContent className="ml-0 gap-x-4 lg:gap-x-16">
            {blogsData.map((blog, index) => (
              <CarouselItem key={index} className="lg:basis-[500px]">
                <Item {...blog} />
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
