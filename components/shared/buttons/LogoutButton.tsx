import { Button } from '@/components/ui/button';
import { SignOutButton } from '@clerk/nextjs';
import React from 'react';
import Image from 'next/image';

type Props = {
  rootClasses?: string;
  iconClasses?: string;
  textClasses?: string;
};

const LogoutButton = ({ rootClasses = '', iconClasses = '', textClasses = '' }: Props) => {
  return (
    <SignOutButton>
      <Button className={`flex justify-start gap-4 rounded-lg text-lg shadow-none ${rootClasses}`}>
        <Image
          src="/assets/icons/home.svg"
          alt="Logout"
          width={25}
          height={25}
          className={`invert-colors ${iconClasses}`}
        />
        <span className={`base-regular text-dark300_light900 ${textClasses}`}>Logout</span>
      </Button>
    </SignOutButton>
  );
};

export default LogoutButton;
