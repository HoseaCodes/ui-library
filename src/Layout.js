import React, { useState } from 'react';
import Footer from './components/footer/footer';
import ModernNav from './components/nav/ModernNav';
import VersionedSideBar from './components/nav/VersionedSideBar';
import ModernUIDemo from './ModernUIDemo';
import { VersioningDocumentation } from './pages/VersioningDocumentation';
import { SidebarNavigationDocumentation } from './pages/SidebarNavigationDocumentation';
import { IntroductionPage } from './pages/IntroductionPage';
import { InstallationPage } from './pages/InstallationPage';
import { ButtonsPage } from './pages/ButtonsPage';
import { GridSystemPage } from './pages/GridSystemPage';
import { VersionChangelog } from './pages/VersionChangelog';
import MainLandingPage from './components/landing/MainLandingPage';
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
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ContentArea = styled.main`
    flex: 1;
    background-color: ${props => props.theme.pageBackground};
    transition: background-color 0.3s ease;
    min-height: 100vh;
    
    @media (max-width: 768px) {
        padding-left: 0;
        width: 100%;
    }
`;

const Layout = ({ theme, setTheme }) => {
  const [demoView, setDemoView] = useState('showcase');
  const [currentPage, setCurrentPage] = useState('landing'); // landing, demo, versioning, sidebar-nav, introduction, installation, buttons, grid-system, changelog

  const renderContent = () => {
    switch (currentPage) {
      case 'landing':
        return <MainLandingPage setCurrentPage={setCurrentPage} />;
      case 'versioning':
        return <VersioningDocumentation />;
      case 'sidebar-nav':
        return <SidebarNavigationDocumentation />;
      case 'introduction':
        return <IntroductionPage />;
      case 'installation':
        return <InstallationPage />;
      case 'buttons':
        return <ButtonsPage />;
      case 'grid-system':
        return <GridSystemPage />;
      case 'changelog':
        return <VersionChangelog theme={theme} />;
      default:
        return <ModernUIDemo currentView={demoView} theme={theme} />;
    }
  };

  return (
    <Container theme={{ pageBackground: theme === 'light' ? 'white' : '#282c36' }}>
      {currentPage !== 'landing' && (
        <ModernNav 
          theme={theme} 
          setTheme={setTheme} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'landing' ? (
        <ContentArea theme={{ pageBackground: theme === 'light' ? 'white' : '#282c36' }}>
          {renderContent()}
        </ContentArea>
      ) : (
        <MainContent>
          <VersionedSideBar 
            theme={theme} 
            currentView={demoView} 
            setCurrentView={setDemoView}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ContentArea theme={{ pageBackground: theme === 'light' ? 'white' : '#282c36' }}>
            {renderContent()}
            <Footer theme={theme} />
          </ContentArea>
        </MainContent>
      )}
    </Container>
  );
};

export default Layout;