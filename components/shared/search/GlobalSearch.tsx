'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

const GlobalSearch = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image src="/assets/icons/search.svg" alt="Search" width={24} height={24} className="cursor-pointer" />
        <Input
          type="text"
          placeholder="Search anything globally..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="paragraph-regular text-light400_light500 placeholder focus-visible:background-image-none ml-3 border-none bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-light-400"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
