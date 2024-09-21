'use client';

import { useState, useEffect, useRef } from 'react';

import {
  getIndentationStyle,
  getHeadingIdentity,
} from '@/features/table-of-contents/lib';

import type { TableOfContent } from '@/features/table-of-contents/lib';

interface ContentsProps {
  tableOfContents: TableOfContent[];
}

function Contents({ tableOfContents }: ContentsProps) {
  const [activeToc, setActiveToc] = useState<string | null>(null);
  const prevScrollY = useRef(0);
  const isScrollingUp = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isScrollingUp.current) {
              const targetTocIndex = tableOfContents.findIndex(
                (toc) => getHeadingIdentity(toc.value) === entry.target.id,
              );

              if (targetTocIndex > 0) {
                setActiveToc(
                  getHeadingIdentity(tableOfContents[targetTocIndex - 1].value),
                );
              } else {
                setActiveToc(null);
              }
            } else {
              setActiveToc(entry.target.id);
            }
          }
        });
      },
      { root: null, rootMargin: '-15% 0px -85% 0px', threshold: 0 },
    );

    tableOfContents.forEach((toc) => {
      const element = document.getElementById(getHeadingIdentity(toc.value));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [tableOfContents]);

  useEffect(() => {
    function handleScroll() {
      if (prevScrollY.current < window.scrollY) {
        isScrollingUp.current = false;
      } else {
        isScrollingUp.current = true;
      }
      prevScrollY.current = window.scrollY;
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className="ml-2 space-y-2">
      {tableOfContents.map((toc, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${index}-${toc.tag}-${toc.value}`}
          className={`
              ${getIndentationStyle(toc.tag)}
              leading-tight transition-transform truncate
              ${activeToc === getHeadingIdentity(toc.value) ? 'text-theme-700 font-bold scale-105' : 'text-zinc-600 dark:text-zinc-400 hover:text-theme-700 dark:hover:text-theme-400"'}
            `}
        >
          <a
            href={`#${getHeadingIdentity(toc.value)}`}
            className="whitespace-nowrap"
          >
            {toc.value}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Contents;
