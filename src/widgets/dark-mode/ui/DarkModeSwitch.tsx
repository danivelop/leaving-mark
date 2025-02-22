'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

import { useStore } from '@/store';
import { getDarkMode, setDarkMode } from '@/widgets/dark-mode/lib';

function DarkModeButton() {
  const isDarkMode = useStore((state) => state.themeSlice.isDarkMode);
  const setIsDarkMode = useStore((state) => state.themeSlice.setIsDarkMode);

  useEffect(() => {
    const darkMode = getDarkMode();

    setIsDarkMode(darkMode);
    setDarkMode(darkMode);
  }, [setIsDarkMode]);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    setDarkMode(!isDarkMode);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="p-2 rounded-full text-theme-700 hover:bg-theme-700 hover:text-zinc-100 transition-colors"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </motion.button>
  );
}

export default DarkModeButton;
