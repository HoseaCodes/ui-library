import { useState } from 'react';
import './App.css';
import './styles/utilities.css';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';

const LightTheme = {
  pageBackground: "#FFFFFF", // Background White
  titleColor: "#E84545", // Primary Red
  tagLineColor: "#C62828", // Deep Red for contrast
  hoverColor: "#FF6B6B", // Light Coral for hover states
  textColor: "black",
  primaryRed: "#E84545",
  coralRed: "#EF5350", 
  lightCoral: "#FF6B6B",
  deepRed: "#C62828",
  backgroundWhite: "#FFFFFF"
};

const DarkTheme = {
  pageBackground: "#1a1a1a", // Dark background for contrast
  titleColor: "#FF6B6B", // Light Coral for better visibility in dark mode
  tagLineColor: "#EF5350", // Coral Red for taglines
  hoverColor: "#E84545", // Primary Red for hover
  textColor: "white",
  primaryRed: "#E84545",
  coralRed: "#EF5350", 
  lightCoral: "#FF6B6B",
  deepRed: "#C62828",
  backgroundWhite: "#FFFFFF"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

function App() {
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeProvider theme={themes[theme]} className="App">
      <Layout theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;

