import '@mantine/core/styles.css';
import './globals.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { el_className } from '@/components/ThemeColorMeta/script';
import ThemeColorMetaUpdate from '@/components/ThemeColorMeta/ThemeColorMetaUpdate';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta name="theme-color" className={el_className} content="#00ca8e" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ThemeColorMetaUpdate />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
