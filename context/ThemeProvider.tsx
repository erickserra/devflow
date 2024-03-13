'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
