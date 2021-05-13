import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom/extend-expect";
import { SWRConfig } from "swr";

import { theme } from "styles/theme";
import { fetcher } from "utils/fetcher";

const AllTheProviders = ({ children }) => {
  return (
    <SWRConfig
      value={{
        // https://github.com/vercel/swr/pull/231#issuecomment-591614747
        dedupingInterval: 0,
        fetcher,
      }}
    >
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MUIThemeProvider>
    </SWRConfig>
  );
};

const customRender = (ui, options = {} as any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
