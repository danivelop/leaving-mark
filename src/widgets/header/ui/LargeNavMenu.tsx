import Link from 'next/link';

function LargeNavMenu() {
  return (
    <nav className="hidden md:flex gap-8">
      <Link
        href="/home"
        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <Link
        href="/project"
        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Project
      </Link>
      <Link
        href="/about"
        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        About
      </Link>
    </nav>
  );
}

export default LargeNavMenu;
