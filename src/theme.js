import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h5: {
      fontFamily: "Helvetica",
    },
  },
  palette: {
    primary: {
      main: "#c08267",
    },
    neutral: {
      main: "#ccb9b1",
    },
    dark: {
      main: "#a0583c",
    },
    lightBlack: {
      main: "#212123",
    },
    lightGray: {
      main: "#616063",
    },
  },
});

export default theme;
