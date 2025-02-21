'use client';

import { motion, useScroll } from 'motion/react';
import { useEffect, useState, useCallback, useRef } from 'react';

function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  const [top, setTop] = useState(0);
  const prevWindowWidth = useRef(0);

  const handleHeaderHeight = useCallback(() => {
    if (
      !!prevWindowWidth.current &&
      prevWindowWidth.current === window.innerWidth
    ) {
      return;
    }

    prevWindowWidth.current = window.innerWidth;

    const header = document.getElementsByTagName('header')[0];

    if (header) {
      setTop(header.offsetHeight);
    }
  }, []);

  useEffect(() => {
    handleHeaderHeight();

    window.addEventListener('resize', handleHeaderHeight);

    return () => {
      window.removeEventListener('resize', handleHeaderHeight);
    };
  }, [handleHeaderHeight]);

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: 'sticky',
        top,
        left: 0,
        right: 0,
        height: 3,
        originX: 0,
      }}
      className="bg-theme-700"
    />
  );
}

export default ScrollLinked;
