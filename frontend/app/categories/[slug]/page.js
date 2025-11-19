import { getPostsByCategory } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const posts = await getPostsByCategory(slug);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Posts in "{slug}"
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.data.map((p) => (
          <PostCard key={p.id} post={p.attributes} />
        ))}
      </div>
    </main>
  );
}
