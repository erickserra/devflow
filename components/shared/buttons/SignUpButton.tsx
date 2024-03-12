import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {
  rootClasses?: string;
  iconClasses?: string;
  textClasses?: string;
};

const SignUpButton = ({ rootClasses = '', iconClasses = '', textClasses = '' }: Props) => {
  return (
    <Button
      asChild
      className={`small-medium text-dark400_light900 btn-tertiary light-border-2 min-h-[41px] w-full rounded-lg border-2 px-4 py-3 shadow-none ${rootClasses}`}
    >
      <Link href="/sign-up" className="textClasses">
        <Image
          src="/assets/icons/sign-up.svg"
          alt="Logout"
          width={20}
          height={20}
          className={`invert-colors ${iconClasses}`}
        />
        <span className={textClasses}>Sign Up</span>
      </Link>
    </Button>
  );
};

export default SignUpButton;
