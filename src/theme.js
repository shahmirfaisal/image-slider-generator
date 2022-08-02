import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#FA6166",
    },
    background: {
      default: "#f8f8f8",
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
      },
    },
  },
});

export default theme;
