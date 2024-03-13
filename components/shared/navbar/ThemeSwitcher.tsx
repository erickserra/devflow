'use client';
import React, { useEffect, useState } from 'react';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Image from 'next/image';
import { THEMES, Themes, displayThemes } from '@/constants/theme';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/ui/skeleton';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  const selectTheme = (mode: Themes) => {
    setTheme(mode);
  };

  const renderThemeIcon = () => {
    return resolvedTheme === THEMES.light ? (
      <Image src="/assets/icons/sun.svg" alt="sun" width={20} height={20} className="active-theme" />
    ) : (
      <Image src="/assets/icons/moon.svg" alt="moon" width={20} height={20} className="active-theme" />
    );
  };

  const renderSkeleton = () => {
    return (
      <div>
        <Skeleton className="size-[40px] rounded-full bg-gray-100 dark:bg-dark-300" />
      </div>
    );
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return renderSkeleton();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200
         dark:data-[state=open]:bg-dark-200"
        >
          {renderThemeIcon()}
        </MenubarTrigger>
        <MenubarContent
          className="absolute right-[-3rem] z-50 mt-3 min-w-[120px] rounded border
         bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300"
        >
          {displayThemes.map((displayTheme) => (
            <MenubarItem
              key={displayTheme.value}
              onClick={() => selectTheme(displayTheme.value)}
              className="flex items-center gap-4 px-2.5 py-2 hover:bg-light-800 dark:focus:bg-dark-500"
            >
              <Image
                src={displayTheme.icon}
                height={displayTheme.value === THEMES.system ? 20 : 16}
                width={displayTheme.value === THEMES.system ? 20 : 16}
                alt={displayTheme.value}
                className={theme === displayTheme.value ? 'active-theme' : ''}
              />
              <p
                className={`body-semibold text-light-500
                ${theme === displayTheme.value ? 'text-primary-500' : 'text-dark100_light900'}`}
              >
                {displayTheme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeSwitcher;
