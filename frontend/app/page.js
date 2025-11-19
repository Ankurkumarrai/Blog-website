import { getPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.data.map((post) => (
          <PostCard key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
}
