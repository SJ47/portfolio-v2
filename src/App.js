import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import AppContainer from "./containers/AppContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleThemeSwitch = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  // Check for existing theme saved in browser localstorage
  useEffect(() => {
    if (localStorage.themeScottJohnstonDev === "dark") {
      setTheme(darkTheme);
    } else if (localStorage.themeScottJohnstonDev === "light") {
      setTheme(lightTheme);
    } else {
      // No existing theme exists, so default to the users system preferred theme
      const darkModeQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setTheme(darkModeQuery.matches ? darkTheme : lightTheme);
    }
  }, []);

  // Any time theme changes, write the theme value to localstorage
  useEffect(() => {
    localStorage.setItem("themeScottJohnstonDev", theme.palette.mode);
  }, [theme]);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContainer
            handleThemeSwitch={handleThemeSwitch}
            theme={theme}
          />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
