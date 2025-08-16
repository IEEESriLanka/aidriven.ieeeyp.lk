import { BlogItemProps } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

export default function Item(props: BlogItemProps) {
  return (
    <Link
      href={props.link}
      className="group relative block h-full min-h-[380px] max-w-[480px] overflow-clip"
      style={{
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <article className="flex h-full flex-col gap-y-4 bg-[rgba(69,65,61,0.8)] px-4 py-8">
        <div className="border-primary relative h-full min-h-[280px] overflow-clip rounded-xl border">
          <Image src={props.image} alt={props.title} fill />
        </div>
        <div className="flex flex-col gap-y-2">
          <span
            className="text-primary w-fit bg-[#191919] p-1 text-sm"
            style={{
              borderRadius: "12px 4px",
            }}
          >
            article
          </span>
          <h3 className="text-xl font-medium text-white">{props.title}</h3>
          <p className="text-white/70">{props.caption}</p>
        </div>
      </article>
    </Link>
  );
}
