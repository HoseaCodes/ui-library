import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Social from './soical';
import { useVersion } from '../../contexts/VersionContext';

const Navigation = styled.nav`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#374151'};
    
    @media (max-width: 768px) {
        padding: 0.75rem 1rem;
    }
`; 

const Headergroup = styled.header`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
    
    @media (max-width: 768px) {
        display: ${props => props.isOpen ? 'flex' : 'none'};
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: ${props => props.theme.pageBackground};
        border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#374151'};
        border-top: none;
        padding: 1rem 0;
        gap: 0;
        z-index: 1000;
    }
`;

const NavButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    padding: 0;
    
    &:hover {
        color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
    }
    
    &:focus {
        outline: 2px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
        outline-offset: 2px;
    }
`;

const Linkitems = styled.li`
    transition: all .3s ease;
    color: ${props => props.theme.textColor};
    cursor: pointer;
    
    @media (max-width: 768px) {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#374151'};
        
        &:last-child {
            border-bottom: none;
        }
    }
    
    a, button {
        color: ${props => props.theme.textColor};
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        transition: all 0.2s ease;
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        
        @media (max-width: 768px) {
            display: block;
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 0;
            text-align: left;
        }
        
        ${props => props.active && `
            color: ${props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
            background-color: ${props.theme.pageBackground === '#FFFFFF' 
                ? 'rgba(232, 69, 69, 0.1)' 
                : 'rgba(255, 107, 107, 0.1)'};
        `}
        
        &:hover {
            color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
            background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
                ? 'rgba(232, 69, 69, 0.08)' 
                : 'rgba(255, 107, 107, 0.08)'};
        }
    }
`;

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f9fafb' : '#374151'};
    border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#d1d5db' : '#4b5563'};
    border-radius: 0.5rem;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    font-size: 0.875rem;
    color: ${props => props.theme.textColor};
    width: 200px;
    transition: all 0.2s ease;
    
    &::placeholder {
        color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#6b7280' : '#9ca3af'};
    }
    
    &:focus {
        outline: none;
        border-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
        box-shadow: 0 0 0 3px ${props => props.theme.pageBackground === '#FFFFFF' ? 'rgba(232, 69, 69, 0.1)' : 'rgba(255, 107, 107, 0.1)'};
    }
`;

const SearchShortcut = styled.span`
    position: absolute;
    right: 0.75rem;
    font-size: 0.75rem;
    color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#9ca3af' : '#6b7280'};
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f3f4f6' : '#4b5563'};
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#d1d5db' : '#6b7280'};
`;

const ModernNav = ({ onToggle, theme, setTheme, currentPage, setCurrentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { versionData, switchVersion, UI_HEAT_VERSIONS } = useVersion();

    const handleVersionChange = (e) => {
        if (switchVersion) {
            switchVersion(e.target.value);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'stable': return '#10b981';
            case 'enhanced': return '#3b82f6';
            case 'beta': return '#f59e0b';
            default: return '#6b7280';
        }
    };
    
    const handleNavClick = (page) => {
        if (setCurrentPage) {
            setCurrentPage(page);
        }
        setMobileMenuOpen(false); // Close mobile menu after navigation
    };
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    return (
        <Headergroup theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937'}}>
            <Navigation theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                <NavContainer>
                    <NavLeft>
                        <Logo theme={theme} setTheme={setTheme} />
                        <NavList 
                            isOpen={mobileMenuOpen}
                            theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}
                        >
                             <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <NavButton theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937'}} onClick={() => handleNavClick('landing')}>Home</NavButton>
                            </Linkitems>
                             <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <NavButton theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937'}} onClick={() => handleNavClick('demo')}>Demo</NavButton>
                            </Linkitems>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <NavButton theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937'}} onClick={() => handleNavClick('introduction')}>Docs</NavButton>
                            </Linkitems>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <a href="#examples">Examples</a>
                            </Linkitems>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <a href="https://github.com/HoseaCodes/UI-Heat" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Linkitems>
                        </NavList>
                    </NavLeft>
                    
                    <NavRight>
                        <MobileMenuButton 
                            theme={{textColor: theme === 'light' ? '#000000' : '#ffffff'}}
                            onClick={toggleMobileMenu}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </MobileMenuButton>
                        <SearchContainer theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                            <SearchInput 
                                theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}
                                type="text" 
                                placeholder="Search"
                            />
                            <SearchShortcut theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                ⌘K
                            </SearchShortcut>
                        </SearchContainer>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <select
                                value={versionData?.majorMinor || '1.0'}
                                onChange={handleVersionChange}
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '0.375rem',
                                    border: `1px solid ${theme === 'light' ? '#d1d5db' : '#4b5563'}`,
                                    backgroundColor: theme === 'light' ? '#f9fafb' : '#374151',
                                    color: theme === 'light' ? '#000000' : '#ffffff',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    outline: 'none'
                                }}
                                aria-label="Select UI Heat version"
                            >
                                {UI_HEAT_VERSIONS && Object.entries(UI_HEAT_VERSIONS).map(([key, version]) => (
                                    <option key={key} value={key}>
                                        v{version.fullVersion}
                                    </option>
                                ))}
                            </select>
                            
                            <span
                                style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.5rem',
                                    backgroundColor: getStatusColor(versionData?.status || 'stable'),
                                    color: 'white',
                                    borderRadius: '0.25rem',
                                    fontSize: '0.75rem',
                                    fontWeight: '500'
                                }}
                                title={`Status: ${versionData?.status || 'stable'} | Released: ${versionData?.releaseDate || 'N/A'}`}
                            >
                                {versionData?.status || 'stable'}
                            </span>
                        </div>
                        
                        <Social theme={theme} setTheme={setTheme} />
                    </NavRight>
                </NavContainer>
            </Navigation>
        </Headergroup>
    );
};

export default ModernNav;
