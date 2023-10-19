import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';

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
      <Layout theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;

