'use client';

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function SmallNavMenu() {
  return (
    <Popover className="md:hidden ml-4">
      {({ open, close }) => (
        <>
          <PopoverButton className="p-1 rounded-lg hover:bg-slate-100 focus:outline-none relative z-50">
            {open ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars3Icon className="size-6" />
            )}
          </PopoverButton>
          <PopoverBackdrop className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in" />
          <PopoverPanel
            transition
            anchor="bottom start"
            style={{
              maxWidth: 'calc(100% - 2rem)',
              marginLeft: '-1rem',
            }}
            className="absolute inset-x-0 mt-4 origin-top rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <nav className="flex flex-col">
              <Link
                href="/posts"
                className="inline-block rounded-lg px-2 py-1 text-lg tracking-tight text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                onClick={close}
              >
                Posts
              </Link>
              <Link
                href="/project"
                className="inline-block rounded-lg px-2 py-1 text-lg tracking-tight text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                onClick={close}
              >
                Project
              </Link>
              <Link
                href="/about"
                className="inline-block rounded-lg px-2 py-1 text-lg tracking-tight text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
