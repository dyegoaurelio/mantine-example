'use client';

import { useEffect, useMemo, useState } from 'react';
import useSafeColorScheme from './useSafeColorScheme';
import { el_className } from './script';

const useBrowserThemeColor = () => {
  const colorScheme = useSafeColorScheme();

  const themeColor = useMemo(
    () =>
      (colorScheme === null
        ? null
        : colorScheme === 'dark'
          ? (window as any).__themeColor?.dark
          : (window as any).__themeColor?.light) as string | null,
    [colorScheme]
  );

  return themeColor;
};

const ThemeColorMetaUpdateClient = () => {
  const themeColor = useBrowserThemeColor();

  useEffect(() => {
    if (!themeColor) return;

    (window as any).__themeColor.color = themeColor;

    document.querySelectorAll(`meta.${el_className}`).forEach((el) => {
      el.setAttribute('content', themeColor);
    });
  }, [themeColor]);

  return null;
};

const ThemeColorMetaUpdate = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient && <ThemeColorMetaUpdateClient />;
};

export default ThemeColorMetaUpdate;
