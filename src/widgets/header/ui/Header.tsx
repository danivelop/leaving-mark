import LargeNavMenu from './LargeNavMenu';
import SmallNavMenu from './SmallNavMenu';

function Header() {
  return (
    <header className=" w-full py-10">
      <div className="lg:mx-auto lg:w-[1024px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <LargeNavMenu />
        </div>
        <div className="flex items-center">
          <SmallNavMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
