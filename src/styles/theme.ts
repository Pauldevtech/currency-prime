import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  colors: {
    background: string;
    surface: string;
    surfaceLight: string;
    accent: string;
    text: string;
    error: string;
  };
  fonts: {
    body: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  layout: {
    headerHeightMobile: string;
    headerHeightDesktop: string;
  };
}

export const theme: Theme = {
  colors: {
    background: "#ffffff",
    surface: "#eff2f6",
    surfaceLight: "#f7f9fc",
    accent: "#3c42e5",
    text: "#000000",
    error: "#dc3545", 
  },
  fonts: {
    body: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  layout: {
    headerHeightMobile: "80px",
    headerHeightDesktop: "70px",
  },
} as const;