import { blogsData } from "@/lib/data";
import type { BlogContentBlock } from "@/lib/type";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.link.replace("/blogs/", ""),
  }));
}

function getReadTime(content: BlogContentBlock[]) {
  const text = content
    .map((block) => {
      if (typeof block === "string") return block;
      if ("heading" in block) return block.heading;
      if ("list" in block) return block.list.join(" ");
      return block.quote;
    })
    .join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  if (typeof block === "string") {
    return <p className="leading-relaxed text-white/85">{block}</p>;
  }
  if ("heading" in block) {
    return (
      <h2 className="pt-4 text-xl font-semibold text-white sm:text-2xl">
        {block.heading}
      </h2>
    );
  }
  if ("list" in block) {
    return (
      <ul className="flex flex-col gap-3">
        {block.list.map((item, index) => (
          <li key={index} className="flex gap-3 leading-relaxed text-white/85">
            <span className="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <blockquote className="border-primary border-l-4 py-1 pl-5 text-lg leading-relaxed text-white italic sm:text-xl">
      {block.quote}
    </blockquote>
  );
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  // Find blog where link matches /blogs/{slug}
  const blog = blogsData.find((b) => b.link === `/blogs/${slug}`);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen px-4 pt-28 pb-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-primary bg-[#191919] px-2 py-1 text-xs"
                  style={{ borderRadius: "12px 4px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            {blog.title}
          </h1>
          <p className="text-primary text-lg font-medium">{blog.caption}</p>
          <p className="text-sm text-white/50">
            {blog.date && <>{blog.date} · </>}
            {getReadTime(blog.content)} min read
          </p>
        </div>

        <div className="relative mx-auto aspect-video max-h-[60vh] w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-base sm:text-lg">
          {blog.content.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </div>
      </article>
    </main>
  );
}
