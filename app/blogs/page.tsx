import { blogsData } from "@/lib/data";
import Item from "@/components/LandingPage/Blog/item";

export default function BlogsPage() {
  return (
    <main className="section-gap-y container mx-auto flex flex-col gap-y-12 px-4 md:px-10">
      <div className="flex flex-col gap-y-3">
        <h1 className="section-header">
          <span>Blogs</span>
          <span className="text-primary"> &amp; Articles</span>
        </h1>
        <p className="text-white/60 max-w-2xl">
          Insights, research, and perspectives on artificial intelligence from the AIDSL community.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((blog, index) => (
          <Item key={index} {...blog} />
        ))}
      </div>
    </main>
  );
}
