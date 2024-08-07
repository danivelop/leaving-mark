import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className=" w-full py-10">
      <div className="lg:mx-auto lg:w-[1024px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-8">
          <Link href="/home" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Home</Link>
          <Link href="/home" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Project</Link>
          <Link href="/home" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">About</Link>
        </nav>
        <div>
          <button className="p-1 rounded-lg hover:bg-slate-100">
            <Bars3Icon className="size-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;