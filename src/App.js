import { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import './components/components.scss';
import { ThemeProvider } from 'styled-components';

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
  hoverColor: "yellow",
  textColor: "black",

};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightgray",
  tagLineColor: "red",
  hoverColor: "white",
  textColor: "white",

}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]} className="App">
      <Nav theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;

