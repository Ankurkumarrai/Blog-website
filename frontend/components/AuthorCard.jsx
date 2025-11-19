import Link from 'next/link'
export default function AuthorCard({ author }) {
  const a = author.attributes
  return (
    <div style={{display:'flex', gap:12, alignItems:'center'}}>
      {a.avatar?.data?.attributes?.url && <img src={a.avatar.data.attributes.url} alt={a.name} width={48} height={48} style={{borderRadius:999}}/>}
      <div>
        <Link href={`/authors/${a.id}`}><strong>{a.name}</strong></Link>
        <div style={{fontSize:13, color:'#666'}}>{a.bio}</div>
      </div>
    </div>
  )
}
