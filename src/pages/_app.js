import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import ColorModeProvider, {
  ColorModeContext,
} from "../context/ThemeColorContext";
import { theme } from "../styles/Theme";

function ProviderWrapper(props) {
  return (
    <ColorModeProvider>{props.children}</ColorModeProvider>
  );
}

function Root({ Component, pageProps }) {
  const contexto = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <Root {...props} />
    </ProviderWrapper>
  );
}
