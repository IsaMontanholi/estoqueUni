import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3", // Cor primária
    },
    secondary: {
      main: "#f50057", // Cor secundária
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Fonte do texto
    fontSize: 12, // Tamanho da fonte
  },
});

export default theme;
