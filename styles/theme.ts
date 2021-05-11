import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Goldplay-Bold", "sans-serif"].join(","),
    h1: {
      fontSize: 30,
      lineHeight: "38px",
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      lineHeight: "30px",
      fontWeight: 700,
    },
    h3: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontFamily: "sans-serif",
      lineHeight: "22px",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    background: {
      default: "#fff5ed",
    },
    primary: {
      main: "#f1d8c0",
    },
    secondary: {
      main: "#dc828e",
    },
    text: {
      primary: "#150e59",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          overflowX: "hidden",
        },
      },
    },
    MuiCardContent: {
      root: {
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
      },
    },
  },
});
