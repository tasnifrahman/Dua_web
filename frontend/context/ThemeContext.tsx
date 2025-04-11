'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext({
  theme: 'light' as Theme,
  toggleTheme: (theme: Theme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply class to <html> element (or <body>)
    const root = document.documentElement; // We are targeting <html>
    root.classList.remove('light', 'dark'); // Remove any existing theme classes
    root.classList.add(theme); // Add current theme class

    // Optionally, you can save the theme to localStorage to persist it
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
