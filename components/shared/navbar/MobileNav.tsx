'use client';
import React from 'react';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import SignInButton from '../buttons/SignInButton';
import SignUpButton from '../buttons/SignUpButton';
import MobileNavLink from './MobileNavLink';

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex h-auto flex-col gap-6 pb-14 pt-16">
      {sidebarLinks.map((link) => {
        const isActive = Boolean(pathName.includes(link.route) && (link.route.length > 1 || pathName === link.route));
        return (
          <SheetClose asChild key={link.route}>
            <MobileNavLink link={link} isActive={isActive} key={link.route} />
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 overflow-y-auto border-none">
        <Link href="" className="flex items-center gap-1">
          <Image src="/assets/images/site-logo.svg" width={25} height={25} alt="DevFlow" />
          <p className="h2-bold text-dark100_light900 ml-2">
            Dev<span className="text-primary-500">OverFlow</span>
          </p>
        </Link>
        <div>
          <NavContent />
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <SignInButton iconClasses="hidden" />
              </SheetClose>

              <SheetClose asChild>
                <SignUpButton iconClasses="hidden" />
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
