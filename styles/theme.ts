import { DefaultTheme, theme } from "@chakra-ui/core";

export const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    heading: "'Roboto', system-ui, sans-serif",
    body: "'Roboto', system-ui, sans-serif",
    mono: "'Roboto', system-ui, sans-serif",
  },
};
