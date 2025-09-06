import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7ABBD7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#DF3841",
      contrastText: "#fff",
    },
    success: {
      main: "#61BC55",
    },
    error: {
      main: "#E471A9",
    },
    warning: {
      main: "#FDC647",
    },
    grey: {
      500: "#A6A6A6",
    },
    background: {
      default: "#F8F8F8",
      paper: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: '"Alexandria", sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 800 },
  },
});
