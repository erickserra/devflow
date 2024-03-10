'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextData = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const handleThemeChange = () => {
      const newMode = mode === 'dark' ? 'light' : 'dark';
      setMode(newMode);
      document.documentElement.classList.add(newMode);
    };

    handleThemeChange();
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
