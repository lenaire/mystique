import "styled-components";

export type ThemeColor = {
  main: string;
  contrastText: string;
  dark: string;
  light: string;
};

export type ThemeFont = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight?: number;
  letterSpacing?: string;
};

export type ThemeButton = {
  height: number;
  fontSize: number;
  padding: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: ThemeColor;
      secondary: ThemeColor;
      error: ThemeColor;
      warning: ThemeColor;
      info: ThemeColor;
      success: ThemeColor;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      button: {
        sm: ThemeButton;
        md: ThemeButton;
        lg: ThemeButton;
      };
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
    };
    // typography: {
    //   h1: ThemeFont;
    //   h2: ThemeFont;
    //   h3: ThemeFont;
    //   h4: ThemeFont;
    //   h5: ThemeFont;
    //   body: ThemeFont;
    // };
  }
}
