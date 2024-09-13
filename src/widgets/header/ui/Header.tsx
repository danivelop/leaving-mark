import Link from 'next/link';

import { DarkModeSwitch } from '@/widgets/dark-mode';

import HeaderWrapper from './HeaderWrapper';
import LargeNavMenu from './LargeNavMenu';
import Logo from './Logo';
import SmallNavMenu from './SmallNavMenu';

function Header() {
  return (
    <HeaderWrapper>
      <div className="layout-width flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            <span className="sr-only">Logo</span>
            <Logo />
          </Link>
          <span className="ml-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            danivelop
          </span>
        </div>
        <div className="flex items-center">
          <LargeNavMenu />
          <DarkModeSwitch />
          <SmallNavMenu />
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
