import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
} from "@/components/ui/carousel";
import { blogsData } from "@/lib/data";
import Item from "./item";

export default function Blogs() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-2">
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
              <CarouselItem key={index} className="pl-0 lg:basis-[500px]">
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
