import { useEffect } from "react";
import { SWRConfig } from "swr";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { fetcher } from "../utils/fetcher";
import { theme } from "../styles/theme";

type Props = {
  Component: React.ElementType;
  pageProps: React.Props<unknown>;
  err: unknown;
};

function MyApp({ Component, pageProps }: Props) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MUIThemeProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
