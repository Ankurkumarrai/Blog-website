import './globals.css'

export const metadata = {
  title: 'Strapi Blog',
  description: 'Blog powered by Strapi and Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:20, borderBottom:'1px solid #eee'}}>
          <nav style={{maxWidth:960, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h1 style={{margin:0}}>Strapi Blog</h1>
            <div>
              <a href="/" style={{marginRight:12}}>Home</a>
              <a href="/categories">Categories</a>
            </div>
          </nav>
        </header>
        <main style={{maxWidth:960, margin:'24px auto', padding:'0 16px'}}>{children}</main>
        <footer style={{padding:20, borderTop:'1px solid #eee', marginTop:40, textAlign:'center'}}>
          © Ankur Kumar Rai
        </footer>
      </body>
    </html>
  )
}
