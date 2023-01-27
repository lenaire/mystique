import { FC } from "react";
import {
  DefaultTheme, // This is overridden in types/theme.d.ts
  ThemeProvider as StyledComponentsThemeProvider,
  ThemeProviderProps as StyledComponentsThemeProviderProps,
} from "styled-components";

import { defaultTheme } from "$cmp/theme-provider/theme";
import { ResetGlobalCSS } from "$cmp/theme-provider/ResetGlobalCSS";

export type ThemeProviderProps = Partial<StyledComponentsThemeProviderProps<DefaultTheme>>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <ResetGlobalCSS />
      {children}
    </StyledComponentsThemeProvider>
  );
};
