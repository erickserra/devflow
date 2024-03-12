import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import MobileNav from './MobileNav';
import GlobalSearch from '../search/GlobalSearch';
import SessionButton from '../buttons/SessionButton';

const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 fixed z-50 h-[100px] w-full gap-5
      px-8 shadow-light-300 dark:shadow-none sm:px-12"
    >
      <Link href="" className="flex items-center gap-1">
        <Image src="/assets/images/site-logo.svg" width={25} height={25} alt="DevFlow" />
        <p className="h2-bold ml-2 font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">OverFlow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <ThemeSwitcher />
        <SessionButton />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
