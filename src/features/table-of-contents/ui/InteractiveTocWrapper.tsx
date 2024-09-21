'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

interface InteractiveTocWrapperProps {
  children: React.ReactNode;
}

function InteractiveTocWrapper({ children }: InteractiveTocWrapperProps) {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleActive = (event: React.MouseEvent) => {
    setActive(!active);
    event.stopPropagation();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    }

    if (active) {
      window.addEventListener('click', handleClickOutside);

      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }

    return () => {};
  }, [active]);

  return (
    <div
      ref={wrapperRef}
      className={`
        relative w-40 h-dvh px-4 pt-20 pb-12 bg-zinc-50 dark:bg-zinc-800 transition-transform duration-200
        ${active && '-translate-x-full shadow-md'}
      `}
    >
      <button
        type="button"
        className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 w-6 h-12 flex justify-center items-center bg-zinc-50 shadow-md border-zinc-100 border border-r-0 rounded-l-lg text-zinc-400 dark:bg-zinc-800 dark:border-zinc-800"
        onClick={handleActive}
      >
        {active ? (
          <ChevronRight className="size-4" />
        ) : (
          <ChevronLeft className="size-4" />
        )}
      </button>
      <div className="size-full overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

export default InteractiveTocWrapper;
