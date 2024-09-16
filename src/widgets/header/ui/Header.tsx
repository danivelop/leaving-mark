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
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-zinc-900 dark:text-zinc-100"
        >
          <span className="sr-only">Logo</span>
          <Logo />
          <span className="ml-2 text-lg font-semibold">danivelop</span>
        </Link>
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
