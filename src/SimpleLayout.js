import React, { useState } from 'react';
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

const SimpleLayout = ({ theme, setTheme }) => {
  const [currentPage, setCurrentPage] = useState('demo');

  return (
    <Container theme={{ pageBackground: theme === 'light' ? 'white' : '#282c36' }}>
      <div style={{ padding: '20px', color: theme === 'light' ? 'black' : 'white' }}>
        <h2>Simple Layout Test</h2>
        <p>Current theme: {theme}</p>
        <p>Current page: {currentPage}</p>
        <button 
          onClick={() => setCurrentPage(currentPage === 'demo' ? 'test' : 'demo')}
          style={{ padding: '10px', margin: '10px' }}
        >
          Switch Page
        </button>
        <div style={{ border: '1px solid gray', padding: '20px', margin: '10px' }}>
          <h3>Layout Content Area</h3>
          <p>This is where the main content would go.</p>
          {currentPage === 'demo' && <p>Demo page content</p>}
          {currentPage === 'test' && <p>Test page content</p>}
        </div>
      </div>
    </Container>
  );
};

export default SimpleLayout;
