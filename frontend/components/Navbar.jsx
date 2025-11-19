import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:960, margin:'0 auto'}}>
      <h2 style={{margin:0}}><Link href="/">StrapiBlog</Link></h2>
      <div>
        <Link href="/" style={{marginRight:12}}>Home</Link>
        <Link href="/categories">Categories</Link>
      </div>
    </nav>
  )
}
