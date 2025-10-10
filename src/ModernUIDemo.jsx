import React from 'react';
import './styles/utilities.css';
import DashboardDemo from './pages/DashboardDemo';
import LoginDemo from './pages/LoginDemo';
import ComponentShowcase from './pages/ComponentShowcase';
import { ThemeProvider } from 'styled-components';

const LightTheme = {
  pageBackground: "white",
  titleColor: "#E84545",
  tagLineColor: "black",
  hoverColor: "#fbbf24", // refined yellow
  textColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "#d1d5db", // lightgray refined
  tagLineColor: "#ef4444", // red
  hoverColor: "white",
  textColor: "white",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

function ModernUIDemo({ currentView: propCurrentView, theme: propTheme }) {
  const currentView = propCurrentView || "showcase";
  const theme = propTheme || "light";

  // Apply theme to document for CSS variables
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardDemo theme={themes[theme]} />;
      case 'login':
        return <LoginDemo theme={themes[theme]} />;
      case 'showcase':
      default:
        return <ComponentShowcase theme={themes[theme]} />;
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <div style={{ 
        backgroundColor: themes[theme].pageBackground,
        flex: 1,
        paddingBottom: '2rem',
        width: '100%',
        overflow: 'hidden'
      }}>
        {renderCurrentView()}
      </div>
    </ThemeProvider>
  );
}

export default ModernUIDemo;
