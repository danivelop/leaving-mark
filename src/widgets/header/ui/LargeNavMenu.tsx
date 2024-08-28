import Link from 'next/link';

function LargeNavMenu() {
  return (
    <nav className="hidden md:flex gap-8 mr-12">
      <Link
        href="/posts"
        className="inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Posts
      </Link>
      <Link
        href="/project"
        className="inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Project
      </Link>
      <Link
        href="/about"
        className="inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        About
      </Link>
    </nav>
  );
}

export default LargeNavMenu;
