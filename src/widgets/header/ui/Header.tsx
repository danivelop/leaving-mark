import { DarkModeSwitch } from '@/widgets/dark-mode';

import LargeNavMenu from './LargeNavMenu';
import SmallNavMenu from './SmallNavMenu';

function Header() {
  return (
    <header className="layout-background-color w-full py-10 sticky top-0 left-0 right-0">
      <div className="layout-width flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl text-neutral-700">Danivelop</h1>
        </div>
        <div className="flex items-center">
          <LargeNavMenu />
          <DarkModeSwitch />
          <SmallNavMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
