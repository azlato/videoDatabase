import { useEffect, useState } from 'react';

const useThemeSettings: () => [string, string, (theme: string) => void, boolean] = () => {
  const [themeSetings, setThemeSetting] = useState('');
  const [theme, setTheme] = useState('');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setThemeSetting(mode);

    if (!mode) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } else {
      setTheme(mode);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
      setThemeSetting(localTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    setComponentMounted(true);
  }, []);

  return [theme, themeSetings, setMode, componentMounted];
};

export default useThemeSettings;
