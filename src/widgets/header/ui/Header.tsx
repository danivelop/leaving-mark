'use client';

import { useState, useEffect } from 'react';

import { DarkModeSwitch } from '@/widgets/dark-mode';

import LargeNavMenu from './LargeNavMenu';
import SmallNavMenu from './SmallNavMenu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const threshold = isScrolled ? 20 : 100;
      if (window.scrollY > threshold) {
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
      className={`layout-background-color w-full sticky top-0 left-0 right-0 z-10 ${isScrolled ? 'py-2' : 'py-6 md:py-10'} transition-padding`}
    >
      <div className="layout-width flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl text-zinc-800 dark:text-zinc-200">
            Danivelop
          </h1>
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
