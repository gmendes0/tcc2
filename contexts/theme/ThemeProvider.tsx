import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { customTheme } from "../../styles/theme";

const ChakraThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />

        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default ChakraThemeProvider;
