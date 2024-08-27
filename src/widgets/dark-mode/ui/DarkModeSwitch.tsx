'use client';

import { Switch } from '@headlessui/react';
import { SunIcon, SparklesIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

import { getDarkMode, setDarkMode } from '@/widgets/dark-mode/lib';

function DarkModeSwitch() {
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
    <Switch
      checked={isDarkMode}
      onChange={handleClick}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-zinc-600 dark:bg-zinc-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {({ checked }) => (
        <div
          aria-hidden="true"
          className="flex justify-center items-center pointer-events-none size-5 translate-x-0 rounded-full bg-zinc-200 dark:bg-zinc-600 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        >
          <div className="text-zinc-600 dark:text-zinc-200">
            {checked ? (
              <SparklesIcon className="size-4" />
            ) : (
              <SunIcon className="size-4" />
            )}
          </div>
        </div>
      )}
    </Switch>
  );
}

export default DarkModeSwitch;
