import { DarkModeSwitch } from '@/widgets/dark-mode';

import LargeNavMenu from './LargeNavMenu';
import SmallNavMenu from './SmallNavMenu';

function Header() {
  return (
    <header className=" w-full py-10">
      <div className="responsive-layout-width flex justify-between items-center">
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
