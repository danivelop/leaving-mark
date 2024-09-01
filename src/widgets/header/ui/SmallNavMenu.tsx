'use client';

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SmallNavMenu() {
  const pathname = usePathname();

  return (
    <Popover className="md:hidden ml-4">
      {({ open, close }) => (
        <>
          <PopoverButton className="p-1 rounded-lg focus:outline-none relative z-50 text-zinc-700 dark:text-zinc-200">
            {open ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars3Icon className="size-6" />
            )}
          </PopoverButton>
          <PopoverBackdrop
            transition
            className="fixed inset-0 z-30 bg-zinc-300/80 dark:bg-zinc-700/80 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in backdrop-blur-sm"
          />
          <PopoverPanel
            transition
            anchor="bottom start"
            style={{
              maxWidth: 'calc(100% - 2rem)',
              marginLeft: '-1rem',
            }}
            className="absolute inset-x-0 z-30 mt-4 origin-top bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-xl ring-1 ring-slate-800/5 dark:ring-slate-100/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <nav className="flex flex-col">
              <Link
                href="/posts"
                className={`${pathname.startsWith('/posts') && 'font-bold text-zinc-800'} inline-block rounded-lg px-2 py-1 text-lg text-zinc-700 dark:text-zinc-200 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800`}
                onClick={close}
              >
                Posts
              </Link>
              <Link
                href="/project"
                className={`${pathname.startsWith('/project') && 'font-bold text-zinc-800'} inline-block rounded-lg px-2 py-1 text-lg text-zinc-700 dark:text-zinc-200 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800`}
                onClick={close}
              >
                Project
              </Link>
              <Link
                href="/about"
                className={`${pathname.startsWith('/about') && 'font-bold text-zinc-800'} inline-block rounded-lg px-2 py-1 text-lg text-zinc-700 dark:text-zinc-200 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800`}
                onClick={close}
              >
                About
              </Link>
            </nav>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

export default SmallNavMenu;
