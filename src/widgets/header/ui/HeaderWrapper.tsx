'use client';

import { useState, useEffect } from 'react';

interface HeaderWrapperProps {
  children: React.ReactNode;
}

function HeaderWrapper({ children }: HeaderWrapperProps) {
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
      {children}
    </header>
  );
}

export default HeaderWrapper;
