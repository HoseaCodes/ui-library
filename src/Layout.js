import React from 'react';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import SideBar from './components/sidebar/sideBar';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    z-index: 99;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

const Layout = ({ theme, setTheme, children }) => {

  return (
    <Container>
      <Nav theme={theme} setTheme={setTheme}  />
      <main>
        <SideBar />
        main
        {children}
      </main>
      <Footer/>
    </Container>
  );
};

export default Layout;