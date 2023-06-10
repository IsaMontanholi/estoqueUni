import React from "react";

import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core";
import theme from "./style/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
