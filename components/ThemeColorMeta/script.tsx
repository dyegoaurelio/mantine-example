'use client';

import { FC } from 'react';

export const el_className = 'THEME-COLOR-META';

const MetaTag = () =>
  typeof window === 'undefined' ? null : (
    <meta
      className={el_className}
      name="theme-color"
      content={(window as any).__themeColor?.color}
    />
  );

const ThemeColorMetaScript: FC<{
  darkColor: string;
  lightColor: string;
}> = (props) => (
  <>
    <MetaTag />
    <script
      data-mantine-script
      dangerouslySetInnerHTML={{
        __html:
          `const __color_scheme = document?.documentElement?.getAttribute("data-mantine-color-scheme");
          
            let themeColorMeta = document.querySelector("meta.${el_className}");
  
            if (!themeColorMeta) {
              themeColorMeta = document.createElement("meta");
              themeColorMeta.setAttribute("name", "theme-color");
              themeColorMeta.classList.add("${el_className}");
              document.head.appendChild(themeColorMeta);
            }
  
            const color = __color_scheme === "dark" ? "${props.darkColor}" : "${props.lightColor}";
            window.__themeColor = {
              color,
              light: "${props.lightColor}",
              dark: "${props.darkColor}",
            };
  
           themeColorMeta.setAttribute("content", color);
          `
            .replaceAll('\n', '')
            .replaceAll('  ', ''),
      }}
    />
  </>
);

export default ThemeColorMetaScript;
