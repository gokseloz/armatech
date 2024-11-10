// src/theme.tsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },

    text: {
      primary: "#c8c8c8",
      secondary: "#777777",
    },
    // action: {
    //   hover: "#a814e7",
    // },
    divider: "#3c3c3c",
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontFamily: '"Michroma", sans-serif',
    },
    h2: {
      fontFamily: '"Michroma", sans-serif',
    },
    h3: {
      fontFamily: '"Michroma", sans-serif',
    },
    h4: {
      fontFamily: '"Michroma", sans-serif',
    },
    h5: {
      fontFamily: '"Michroma", sans-serif',
    },
    h6: {
      fontFamily: '"Michroma", sans-serif',
    },
    body1: {
      color: "#000000",
      fontFamily: '"Montserrat", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          color: "#fff",
          "&:hover": {
            backgroundColor: "#a814e7",
          },
          // ...(ownerState.variant === "text" && {
          //   color: "#000",
          //   "&:hover": {
          //     color: "#a814e7",
          //   },
          //   padding: "0",
          //   backgroundColor: "transparent",
          // }),
        }),
      },
    },
  },
});

export default theme;
