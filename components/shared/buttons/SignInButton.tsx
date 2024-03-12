import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {
  rootClasses?: string;
  iconClasses?: string;
  textClasses?: string;
};

const SignInButton = ({ rootClasses = '', iconClasses = '', textClasses = '' }: Props) => {
  return (
    <Button
      asChild
      className={`small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ${rootClasses}`}
    >
      <Link href="/sign-in">
        <Image
          src="/assets/icons/account.svg"
          alt="Logout"
          width={20}
          height={20}
          className={`invert-colors ${iconClasses}`}
        />
        <span className={`primary-text-gradient ${textClasses}`}>Log In</span>
      </Link>
    </Button>
  );
};

export default SignInButton;
