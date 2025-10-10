import React, { useState } from 'react';
import Footer from './components/footer/footer';
import ModernNav from './components/nav/ModernNav';
import ModernSideBar from './components/sidebar/ModernSideBar';
import ModernUIDemo from './ModernUIDemo';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    z-index: 99;
    background-color: ${props => props.theme.pageBackground};
    transition: background-color 0.3s ease;
`;

const MainContent = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    min-height: 0;
`;

const ContentArea = styled.main`
    flex: 1;
    background-color: ${props => props.theme.pageBackground};
    transition: background-color 0.3s ease;
    min-height: 100vh;
`;

const Layout = ({ theme, setTheme }) => {
  const [demoView, setDemoView] = useState('showcase');

  return (
    <Container theme={{ pageBackground: theme === 'light' ? 'white' : '#282c36' }}>
      <ModernNav theme={theme} setTheme={setTheme} />
      <MainContent>
        <ModernSideBar theme={theme} currentView={demoView} setCurrentView={setDemoView} />
        <ContentArea theme={{ pageBackground: theme === 'light' ? 'white' : '#282c36' }}>
          <ModernUIDemo currentView={demoView} theme={theme} />
          <Footer theme={theme} />
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default Layout;