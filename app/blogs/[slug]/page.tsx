import { blogsData } from "@/lib/data";
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

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  // Find blog where link matches /blogs/{slug}
  const blog = blogsData.find((b) => b.link === `/blogs/${slug}`);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen px-4 pt-[20vh] pb-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            {blog.title}
          </h1>
          <p className="text-primary text-lg font-medium">{blog.caption}</p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl max-h-[50vh]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-white">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
