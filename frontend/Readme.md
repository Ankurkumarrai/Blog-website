Next.js Frontend – Documentation

This frontend consumes the Strapi CMS API and renders a dynamic blog-style website using server-side rendering. 

1. Project Overview
This Next.js project provides:
Fetching blog posts from Strapi
Rendering Post Cards
Viewing categories
Optimized SSR and caching
Environment-based API configuration 

2. Tech Stack
Next.js 14 (App Router)
React
Tailwind CSS
REST API (Strapi backend) 

4. Environment Variables

Create:
.env.local 

Add:
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=a38fc7c5cbfe7fa061ade57f54bff818c9e45c7a3251dcce25dd15b320295151b52337de2239519d8e4a43b2917286f3e655ee993b647c3d38cf96362ee53bc8dd0341c7172534dadcd8b2f8b5db3cbf3b7e8f0b53e226d24e33a79598adb45c0e058a2ab56ab0822b61acd56075cd90c4a3d8d0582b501254c7d06a92aead6c


5. API Utility (lib/api.js) 
export async function getPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );

  return await res.json();
}
 
6. PostCard Component 
components/PostCard.jsx
export default function PostCard({ post }) {
  const data = post.attributes;

  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.content.slice(0, 120)}...</p>
    </div>
  );
}


7. Home Page (app/page.js) 
import { getPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      {posts.data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

8. How Data Flows

User visits /
Next.js calls getPosts() on server
API fetches data from Strapi
Posts are passed to PostCard
UI renders blog grid 



