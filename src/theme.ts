import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Solway', serif", // Set Solway as the default font
  },
  palette: {
    primary: {
      main: "#4A90E2", // Customize primary color (optional)
    },
    secondary: {
      main: "#9B51E0", // Customize secondary color (optional)
    },
  },
});

export default theme;
