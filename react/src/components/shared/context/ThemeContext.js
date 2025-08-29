'use client';
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Getting the theme on load
    return getLocalStorageItem('data-theme', 'dark');
  });


  useEffect(() => {
    // Update document 'data-theme' attribute, put it in localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);

    // Switch the theme of prismjs
    const existingLink = document.getElementById("prism-theme");
    if (existingLink) existingLink.remove();
    const link = document.createElement("link");
    link.id = "prism-theme";
    link.rel = "stylesheet";
    link.href = `/prism-themes/${theme === "dark" ? "tomorrow-night.css" : "solarized-light.css"}`;
    document.head.appendChild(link);
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}> {/* Set what the ThemeContext will return when called on by useContext */}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext); // return an object with {theme, setTheme} in it
}

// getLocalStorage and check if it's loaded yet
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
};