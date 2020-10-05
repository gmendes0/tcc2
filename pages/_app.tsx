import ChakraThemeProvider from "../contexts/theme/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraThemeProvider>
      <Component {...pageProps} />
    </ChakraThemeProvider>
  );
}

export default MyApp;
