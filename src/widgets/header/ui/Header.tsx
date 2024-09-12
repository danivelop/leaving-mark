'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { DarkModeSwitch } from '@/widgets/dark-mode';

import LargeNavMenu from './LargeNavMenu';
import SmallNavMenu from './SmallNavMenu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`layout-background-color w-full sticky top-0 left-0 right-0 z-10 py-3 md:py-4 ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="layout-width flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            <span className="sr-only">Logo</span>
            <svg
              className="h-8 w-auto"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"
                fill="currentColor"
              />
              <path
                d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12c3.314 0 6.314-1.343 8.485-3.515L20 20V8z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <span className="ml-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            danivelop
          </span>
        </div>
        <div className="flex items-center">
          <LargeNavMenu />
          <DarkModeSwitch />
          <SmallNavMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
