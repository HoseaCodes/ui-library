import React from 'react';
import './nav.css'
import styled from 'styled-components';
import Logo from './logo';
import Social from './soical';

const Navigation = styled.nav`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Headergroup = styled.header`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Linkitems = styled.li`
    transition: all .5s ease;
    color: ${props => props.theme.textColor}
`;

const Nav = (props) => {
    const theme = props.theme;
    const setTheme = props.setTheme;
    const currentView = props.currentView || 'classic';
    const setCurrentView = props.setCurrentView;
    
    return (
        <Headergroup>
            <Logo theme={theme} setTheme={setTheme} />
            <Navigation>
                <ul>
                    <Linkitems className="line">
                        |
                    </Linkitems>
                    
                    {/* View Toggle */}
                    {setCurrentView && (
                        <Linkitems>
                            <button
                                onClick={() => setCurrentView(currentView === 'modern' ? 'classic' : 'modern')}
                                style={{
                                    background: 'none',
                                    border: `1px solid ${theme === 'light' ? '#E84545' : '#FF6B6B'}`,
                                    color: theme === 'light' ? '#E84545' : '#FF6B6B',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.25rem',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {currentView === 'modern' ? 'Classic View' : 'Modern View'}
                            </button>
                        </Linkitems>
                    )}
                    
                    <Linkitems>
                        <a href="https://github.com/HoseaCodes/ui-library"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </Linkitems>
                    <Linkitems>
                        Docs
                    </Linkitems>
                </ul>
            </Navigation>
            <Social theme={theme} setTheme={setTheme} />
        </Headergroup>
    )
}

export default Nav;
