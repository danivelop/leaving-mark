'use client';

import { useEffect, useRef } from 'react';

import { useStore } from '@/store';

function Utterances() {
  const isDarkMode = useStore((state) => state.themeSlice.isDarkMode);

  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReinitialize = useRef(false);
  const isScriptLoading = useRef(false);
  const isDarkModeRef = useRef(isDarkMode);
  isDarkModeRef.current = isDarkMode;

  const createScriptRef = useRef(function createScript() {
    if (!containerRef.current) {
      return;
    }
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild as Node);
    }

    const script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('repo', 'danivelop/leaving-mark');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment');
    script.setAttribute(
      'theme',
      isDarkModeRef.current ? 'github-dark' : 'github-light',
    );
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);
    isScriptLoading.current = true;

    script.onload = () => {
      isScriptLoading.current = false;

      if (shouldReinitialize.current) {
        shouldReinitialize.current = false;
        createScript();
      }
    };
  });

  useEffect(() => {
    if (isScriptLoading.current) {
      shouldReinitialize.current = true;
    } else {
      createScriptRef.current();
    }
  }, [isDarkMode]);

  return <div ref={containerRef} />;
}

export default Utterances;
