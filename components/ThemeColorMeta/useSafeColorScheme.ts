import { useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMemo } from 'react';

const useSafeColorScheme = () => {
  const { colorScheme } = useMantineColorScheme();
  const isBrowserDarkMode = useMediaQuery('(prefers-color-scheme: dark)', undefined, {
    getInitialValueInEffect: false,
  });

  return useMemo(() => {
    if (colorScheme === 'auto') {
      if (isBrowserDarkMode === undefined) {
        return null;
      }
      return isBrowserDarkMode ? 'dark' : 'light';
    }

    return colorScheme;
  }, [colorScheme, isBrowserDarkMode]);
};

export default useSafeColorScheme;
