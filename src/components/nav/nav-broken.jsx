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
                                    border: `1px solid ${theme === 'light' ? '#dc658b' : '#d1d5db'}`,
                                    color: theme === 'light' ? '#dc658b' : '#d1d5db',
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

const Headergroup = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.pageBackground === 'white' ? '#ffffff' : '#334155'};
    padding: 0 2rem;
    height: 4rem;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 100%;

    @media (max-width: 768px) {
        padding: 0 1rem;
        height: 3.5rem;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 768px) {
        gap: 0.25rem;
    }
`;

const NavItem = styled.li`
    color: ${props => props.theme.pageBackground === 'white' ? '#64748b' : '#cbd5e1'};
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.5;
    margin: 0;
    padding: 0;

    &.line {
        color: ${props => props.theme.pageBackground === 'white' ? '#cbd5e1' : '#64748b'};
        font-size: 1.5rem;
        opacity: 0.3;
        user-select: none;
    }

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const GitHubButton = styled.a`

const ViewToggleButton = styled.button`
    background: none;
    border: 1px solid ${props => props.theme.pageBackground === 'white' ? '#dc658b' : '#d1d5db'};
    color: ${props => props.theme.pageBackground === 'white' ? '#dc658b' : '#d1d5db'};
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:hover {
        background-color: ${props => props.theme.pageBackground === 'white' ? '#dc658b' : '#d1d5db'};
        color: ${props => props.theme.pageBackground === 'white' ? 'white' : '#1f2937'};
        transform: translateY(-1px);
        box-shadow: ${props => props.theme.pageBackground === 'white' 
            ? '0 2px 4px rgba(220, 101, 139, 0.2)' 
            : '0 2px 4px rgba(0, 0, 0, 0.3)'};
    }

    &:focus {
        outline: 2px solid ${props => props.theme.pageBackground === 'white' ? '#3b82f6' : '#60a5fa'};
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
    }
`;

const GitHubButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.theme.pageBackground === 'white' ? '#f8fafc' : '#1e293b'};
    color: ${props => props.theme.pageBackground === 'white' ? '#374151' : '#e5e7eb'};
    border: 1px solid ${props => props.theme.pageBackground === 'white' ? '#e2e8f0' : '#475569'};
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.pageBackground === 'white' ? '#f1f5f9' : '#0f172a'};
        border-color: ${props => props.theme.pageBackground === 'white' ? '#cbd5e1' : '#64748b'};
        transform: translateY(-1px);
        box-shadow: ${props => props.theme.pageBackground === 'white' 
            ? '0 2px 4px rgba(0, 0, 0, 0.1)' 
            : '0 2px 4px rgba(0, 0, 0, 0.3)'};
    }

    &:focus {
        outline: 2px solid ${props => props.theme.pageBackground === 'white' ? '#3b82f6' : '#60a5fa'};
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
        
        span {
            display: none;
        }
    }
`;

const DocsButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.pageBackground === 'white' ? '#64748b' : '#cbd5e1'};
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.pageBackground === 'white' 
            ? 'rgba(220, 101, 139, 0.08)' 
            : 'rgba(255, 255, 255, 0.08)'};
        color: ${props => props.theme.pageBackground === 'white' ? '#dc658b' : '#d1d5db'};
    }

    &:focus {
        outline: 2px solid ${props => props.theme.pageBackground === 'white' ? '#3b82f6' : '#60a5fa'};
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
    }
`;

const Nav = (props) => {
    const theme = props.theme;
    const setTheme = props.setTheme;
    const currentView = props.currentView || 'modern';
    const setCurrentView = props.setCurrentView;
    
    const themeProps = {
        pageBackground: theme === 'light' ? 'white' : '#282c36'
    };
    
    return (
        <Navigation theme={themeProps}>
            <Headergroup theme={themeProps}>
                <Logo theme={theme} setTheme={setTheme} />
                
                <NavList>
                    <NavItem theme={themeProps} className="line">|</NavItem>
                    
                    {/* View Toggle */}
                    {setCurrentView && (
                        <li>
                            <ViewToggleButton
                                theme={themeProps}
                                onClick={() => setCurrentView(currentView === 'modern' ? 'classic' : 'modern')}
                                title={`Switch to ${currentView === 'modern' ? 'classic' : 'modern'} view`}
                            >
                                {currentView === 'modern' ? (
                                    <>
                                        <span>📱</span>
                                        <span>Classic</span>
                                    </>
                                ) : (
                                    <>
                                        <span>✨</span>
                                        <span>Modern</span>
                                    </>
                                )}
                            </ViewToggleButton>
                        </li>
                    )}
                    
                    <NavItem theme={themeProps} className="line">|</NavItem>
                    
                    <li>
                        <GitHubButton
                            theme={themeProps}
                            href="https://github.com/HoseaCodes/ui-library"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </GitHubButton>
                    </li>
                    
                    <li>
                        <DocsButton theme={themeProps}>
                            Docs
                        </DocsButton>
                    </li>
                </NavList>
                
                <Social theme={theme} setTheme={setTheme} />
            </Headergroup>
        </Navigation>
    )
}

export default Nav;
