import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SidebarLink } from '@/types';

type Props = {
  link: SidebarLink;
  isActive: boolean;
};

const SidebarNavigationLink = ({ link, isActive }: Props) => {
  return (
    <Link
      key={link.route}
      href={link.route}
      className={`${isActive ? 'primary-gradient rounded-md text-light-900' : 'text-dark300_light900'}
              flex items-center justify-start gap-4 bg-transparent p-4 max-lg:mx-auto lg:p-4`}
    >
      <Image
        src={link.imgURL}
        alt={link.label}
        width={20}
        height={20}
        className={`${isActive ? '' : 'invert-colors'}`}
      />
      <p className={`${isActive ? 'base-bold' : 'base-regular'} max-lg:hidden`}>{link.label}</p>
    </Link>
  );
};

export default SidebarNavigationLink;
