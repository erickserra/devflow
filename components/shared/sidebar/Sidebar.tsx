'use client';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import SidebarNavigationLink from './SidebarLink';
import SignInButton from '../buttons/SignInButton';
import SignUpButton from '../buttons/SignUpButton';
import LogoutButton from '../buttons/LogoutButton';

const Sidebar = () => {
  const pathName = usePathname();

  const renderSidebarLinks = () => {
    return sidebarLinks
      .filter((link) => !link?.hideOnDesktop)
      .map((link) => {
        const isActive = Boolean(pathName.includes(link.route) && (link.route.length > 1 || pathName === link.route));
        return <SidebarNavigationLink key={link.route} link={link} isActive={isActive} />;
      });
  };

  return (
    <aside
      className="background-light900_dark200 custom-scrollbar light-border fixed inset-y-0
      left-0 flex w-[90px] flex-col justify-between overflow-y-auto border-r px-4 pt-[130px]
      shadow-light-300 dark:shadow-none max-md:hidden lg:w-[266px] lg:px-6"
    >
      <div className="flex flex-col gap-6">{renderSidebarLinks()}</div>

      <div className="pb-10">
        <SignedIn>
          <LogoutButton textClasses="max-lg:hidden" rootClasses="max-lg:mx-auto" />
        </SignedIn>

        <SignedOut>
          <div className="flex flex-col gap-3">
            <SignInButton iconClasses="lg:hidden" textClasses="max-lg:hidden" />
            <SignUpButton iconClasses="lg:hidden" textClasses="max-lg:hidden" />
          </div>
        </SignedOut>
      </div>
    </aside>
  );
};

export default Sidebar;
