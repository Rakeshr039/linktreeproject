import Link from "next/link"
export default function Header(){
  return(
    <main>
      <header className="bg-white border-b  py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6 ">

      <div className="flex gap-4 ">
          <Link href={'/'}>LinkList</Link>
          <nav className="flex items-center flex gap-4 text-slate-500 text-sm">
            <Link href={'/about'}>About</Link>
            <Link href={'/pricing'}>Pricing</Link>
            <Link href={'/contact'}>Contact</Link>
          </nav>
      </div>
          
          <nav className="flex gap-4 text-sm text-slate-500 ">
            <Link href={'/login'}>Sign IN</Link>
            <Link href={'/register'}>Create Account</Link>
          </nav>
          
      </div>
      </header>
      <section>

      </section>
    </main>

  )
}