import { blogsData } from "@/lib/data";
import Item from "@/components/LandingPage/Blog/item";

export default function BlogsPage() {
  return (
    <main className="container mx-auto flex flex-col gap-y-6 px-4 pt-32 pb-24 md:px-10 lg:pt-40">
      <div className="flex flex-col gap-y-6">
        <h1 className="section-header">
          <span>Blogs</span>
          <span className="text-primary"> &amp; Articles</span>
        </h1>
        <p className="text-base text-white/60 max-w-2xl">
          Insights, research, and perspectives on artificial intelligence from the AIDSL community.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((blog, index) => (
          <Item key={index} {...blog} priority={index < 3} />
        ))}
      </div>
    </main>
  );
}
