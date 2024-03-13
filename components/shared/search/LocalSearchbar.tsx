'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

type Props = {
  route: string;
  iconPosition: 'right' | 'left';
  imgSrc?: string;
  placeholder?: string;
  otherClasses?: string;
};

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc = '/assets/icons/search.svg',
  placeholder = 'Search...',
  otherClasses = '',
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[66px] grow items-center gap-4 rounded-[10px] px-4 max-sm:min-h-[56px] ${otherClasses}`}
    >
      {iconPosition === 'left' ? (
        <Image src={imgSrc} alt="Search Icon" width={24} height={24} className="cursor-pointer" />
      ) : null}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        autoFocus
        className="paragraph-regular text-light400_light500 placeholder ml-3 border-none bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-light-400"
      />

      {iconPosition === 'right' ? (
        <Image src={imgSrc} alt="Search Icon" width={24} height={24} className="cursor-pointer" />
      ) : null}
    </div>
  );
};

export default LocalSearchbar;
