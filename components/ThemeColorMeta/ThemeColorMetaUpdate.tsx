'use client';

import { useEffect, useMemo } from 'react';
import useSafeColorScheme from './useSafeColorScheme';
import { el_className } from './script';

const useBrowserThemeColor = () => {
  const colorScheme = useSafeColorScheme();

  const themeColor = useMemo(
    () => (colorScheme === null ? null : colorScheme === 'dark' ? '#242424' : '#00ca8e'),
    [colorScheme]
  );

  return themeColor;
};

const ThemeColorMetaUpdate = () => {
  const themeColor = useBrowserThemeColor();

  useEffect(() => {
    if (!themeColor) return;

    document.querySelectorAll(`meta.${el_className}`).forEach((el) => {
      el.setAttribute('content', themeColor);
    });
  }, [themeColor]);

  return null;
};

// const ThemeColorMetaUpdate = () => {
//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//   }, []);
//   return isClient && <ThemeColorMetaUpdateClient />;
// };

export default ThemeColorMetaUpdate;
