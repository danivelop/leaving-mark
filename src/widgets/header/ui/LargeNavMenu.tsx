'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LargeNavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-8 mr-12">
      <Link
        href="/posts"
        className={`${pathname.startsWith('/posts') && 'font-bold text-slate-900'} inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900`}
      >
        Posts
      </Link>
      <Link
        href="/project"
        className={`${pathname.startsWith('/project') && 'font-bold text-slate-900'} inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900`}
      >
        Project
      </Link>
      <Link
        href="/about"
        className={`${pathname.startsWith('/about') && 'font-bold text-slate-900'} inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900`}
      >
        About
      </Link>
    </nav>
  );
}

export default LargeNavMenu;
