'use client';

import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

import { getDarkMode, setDarkMode } from '@/widgets/dark-mode/lib';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = getDarkMode();

    setIsDarkMode(darkMode);
    setDarkMode(darkMode);
  }, []);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    setDarkMode(!isDarkMode);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="p-2 rounded-full text-theme-700 hover:bg-theme-700 hover:text-zinc-100 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}

export default DarkModeButton;
