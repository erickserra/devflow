'use client';
import { HomePageFilters } from '@/constants/filters';
import React from 'react';
import { Button } from '../ui/button';

const SearchFilters = () => {
  const isActive = 'newest';

  return (
    <div className="mt-10 flex flex-wrap gap-3 max-md:hidden">
      {HomePageFilters.map((item) => (
        <Button
          key={item.name + item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
          ${isActive === item.value ? 'bg-primary-100 text-primary-500' : 'bg-light-800 text-light-500 ring-light-400 hover:bg-light-850 active:ring-2 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-500'}`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default SearchFilters;
