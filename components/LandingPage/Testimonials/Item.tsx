import Image from "next/image";
import { type TestimonialProps } from "@/lib/type";

export default function Item(props: TestimonialProps) {
  return (
    <div className="border-primary testimonial-card relative flex min-w-70 flex-col gap-y-4 border px-6 py-6 text-white lg:px-8">
      <div className="flex items-center gap-x-4">
        <Image
          src={props.profile.imgSrc}
          alt={props.profile.imgAlt}
          width={64}
          height={64}
          className="shrink-0 rounded-full"
        />
        <div className="flex flex-col gap-y-0.5">
          <h3 className="text-primary text-xl font-semibold lg:text-2xl">
            {props.profile.name}
          </h3>
          <span className="text-sm lg:text-base">{props.profile.title}</span>
        </div>
      </div>
      <div className="relative flex gap-x-2">
        <div className="text-primary text-3xl">
          <span className="font-fzytjw text-6xl leading-none">&quot;</span>
        </div>
        <div>{props.message}</div>
      </div>
    </div>
  );
}
