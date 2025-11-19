import Link from 'next/link'
export default function CategoryBadge({ category }) {
  return <Link href={`/categories/${category.attributes.slug}`} style={{padding:'6px 8px', border:'1px solid #ddd', borderRadius:6, fontSize:12}}>{category.attributes.name}</Link>
}
