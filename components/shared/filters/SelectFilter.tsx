'use client';
import React from 'react';
import type { Filter } from '@/types';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  filters: Filter;
  classes?: string;
  containerClasses?: string;
  placeholder?: string;
};

const SelectFilter = ({ filters, classes = '', containerClasses = '', placeholder = 'Select a filter' }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 text-dark500_light700
          h-[100%] min-h-[66px] border px-5 py-2.5 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-light-400 max-sm:min-h-[56px] ${classes}`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem key={item.value + item.name} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectFilter;
