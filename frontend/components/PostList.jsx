import PostCard from './PostCard'
export default function PostList({ posts }) {
  return (
    <div style={{display:'grid', gap:12}}>
      {posts.map(p => <PostCard key={p.id} post={p} />)}
    </div>
  )
}
