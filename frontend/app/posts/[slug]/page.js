import { getPostBySlug } from "@/lib/api";

export default async function PostPage({ params }) {
  const { slug } = params;
  const postRes = await getPostBySlug(slug);
  const post = postRes.data[0].attributes;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
      
      {post.cover?.data && (
        <img
          src={post.cover.data.attributes.url}
          alt="cover"
          className="rounded-md my-4"
        />
      )}
      
      <article className="prose max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
