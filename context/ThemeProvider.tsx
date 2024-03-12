'use client';

import { THEMES, Themes, ThemeLocalStorageKey } from '@/constants/theme';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextData = {
  mode: Themes | undefined;
  switchTheme: () => void;
  selectTheme: (theme: Themes) => void;
};

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = useState<Themes | undefined>();

  const switchTheme = () => {
    selectTheme(THEMES.dark ? THEMES.light : THEMES.dark);
  };

  const selectTheme = (mode: Themes) => {
    setMode(mode);
  };

  const handleThemeChange = (mode: Themes | undefined) => {
    if (mode) {
      setLocalStorageTheme(mode);
      handleDarkModeDocumentClassName(mode);
    }
  };

  const getSystemTheme = (): Themes => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.dark : THEMES.light;
  };

  const handleDarkModeDocumentClassName = (mode: Themes) => {
    let themeMode = mode;

    if (themeMode === THEMES.system) {
      themeMode = getSystemTheme();
    }

    if (themeMode === THEMES.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const setLocalStorageTheme = (mode: Themes) => {
    if (mode !== THEMES.system) {
      localStorage.setItem(ThemeLocalStorageKey, mode);
    } else {
      localStorage.removeItem(ThemeLocalStorageKey);
    }
  };

  const handleInitialLoad = () => {
    const localStorageTheme = localStorage.getItem(ThemeLocalStorageKey);

    if (localStorageTheme) {
      selectTheme(localStorageTheme as Themes);
    } else {
      selectTheme(THEMES.system);
    }
  };

  useEffect(() => {
    handleInitialLoad();
  }, []);

  useEffect(() => {
    handleThemeChange(mode);
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, switchTheme, selectTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
