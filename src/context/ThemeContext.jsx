/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  const theme = 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('astrion_theme', 'light');
    }

    // Update meta theme-color for mobile address bars
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#FFFFFF');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'light', setTheme: () => {}, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: 'light', setTheme: () => {}, toggleTheme: () => {} };
  }
  return context;
}
