import { BlogItemProps } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

export default function Item(props: BlogItemProps & { priority?: boolean }) {
  return (
    <Link
      href={props.link}
      prefetch={true}
      className="group relative block h-full w-full min-h-[380px] max-w-[480px] overflow-hidden bg-[rgba(45,42,39,0.95)]"
      style={{
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <article className="flex h-full w-full min-w-0 flex-col gap-y-4 px-4 py-6 sm:px-5 sm:py-8">
        <div className="border-primary relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border">
          <Image
            src={props.image}
            alt={props.title}
            fill
            priority={props.priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
            className="object-cover brightness-60"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-y-2">
          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-primary w-fit max-w-full truncate bg-[#191919] px-2 py-1 text-xs"
                  style={{
                    borderRadius: "12px 4px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-lg font-medium break-words text-white sm:text-xl">{props.title}</h3>
          <p className="text-sm break-words text-white/70 sm:text-base">{props.caption}</p>
        </div>
      </article>
    </Link>
  );
}
