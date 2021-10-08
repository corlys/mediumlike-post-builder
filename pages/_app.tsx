import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import Layout from "../components/Layout";
import customTheme from "../styles/themes";
import { ReactNode } from "react";

const GlobalStyles = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ,
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          ,
          html {
            min-width: 365px;
            scroll-behaviour: smooth;
          }
          ,
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{ initialColorMode: "light", useSystemColorMode: false }}
      >
        <GlobalStyles>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalStyles>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
export default MyApp;
