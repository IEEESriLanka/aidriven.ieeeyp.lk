import Image from "next/image";
import { type TestimonialProps } from "@/lib/type";

export default function Item(props: TestimonialProps) {
  return (
    <div className="border-primary testimonial-card relative flex min-h-[280px] min-w-[280px] items-center justify-center border px-8 py-4 text-white">
      <div className="absolute -top-[15%] -left-[5%] flex w-full gap-x-4">
        <div className="">
          <Image
            src={props.profile.imgSrc}
            alt={props.profile.imgAlt}
            width={72}
            height={72}
          />
        </div>
        <div className="flex flex-col gap-y-0.5">
          <h3 className="text-primary text-xl font-semibold lg:text-3xl">
            {props.profile.name}
          </h3>
          <span className="text-sm lg:text-base">{props.profile.title}</span>
        </div>
      </div>
      <div className="relative flex gap-x-2 pt-8">
        <div className="text-primary text-3xl">
          <span className="font-fzytjw text-8xl">&quot;</span>
        </div>
        <div>{props.message}</div>
      </div>
    </div>
  );
}
