'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LargeNavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-4 mr-4">
      <Link
        href="/posts"
        className={`${pathname === '/posts' && 'font-bold'} inline-block rounded-lg px-2 py-1 text-zinc-600 dark:text-zinc-300 hover:text-theme-700`}
      >
        Posts
      </Link>
      <Link
        href="/projects"
        className={`${pathname === '/projects' && 'font-bold'} inline-block rounded-lg px-2 py-1 text-zinc-600 dark:text-zinc-300 hover:text-theme-700`}
      >
        Projects
      </Link>
      {/* <Link
        href="/about"
        className={`${pathname === '/about' && 'font-bold'} inline-block rounded-lg px-2 py-1 text-zinc-600 dark:text-zinc-300 hover:text-theme-700`}
      >
        About
      </Link> */}
    </nav>
  );
}

export default LargeNavMenu;
