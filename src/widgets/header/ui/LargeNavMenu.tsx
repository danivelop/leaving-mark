'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LargeNavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-8 mr-12">
      <Link
        href="/posts"
        className={`${pathname.startsWith('/posts') && 'font-bold text-zinc-800 dark:text-zinc-100'} inline-block rounded-lg px-2 py-1 text-lg text-zinc-700 dark:text-zinc-200 hover:text-zinc-800 dark:hover:text-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-100`}
      >
        Posts
      </Link>
      <Link
        href="/project"
        className={`${pathname.startsWith('/project') && 'font-bold text-zinc-800 dark:text-zinc-100'} inline-block rounded-lg px-2 py-1 text-lg text-zinc-700 dark:text-zinc-200 hover:text-zinc-800 dark:hover:text-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-100`}
      >
        Project
      </Link>
      <Link
        href="/about"
        className={`${pathname.startsWith('/about') && 'font-bold text-zinc-800 dark:text-zinc-100'} inline-block rounded-lg px-2 py-1 text-lg text-zinc-700 dark:text-zinc-200 hover:text-zinc-800 dark:hover:text-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-100`}
      >
        About
      </Link>
    </nav>
  );
}

export default LargeNavMenu;
