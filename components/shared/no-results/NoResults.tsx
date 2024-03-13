import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

type Props = {
  title?: string;
  description?: string;
  linkText: string;
  link: string;
};

export const NoResults = ({
  title = 'There is no result to show',
  description = '',
  linkText = '',
  link = '',
}: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />

      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>

      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">{description}</p>

      <Link href={link}>
        <PrimaryButton>{linkText}</PrimaryButton>
      </Link>
    </div>
  );
};
