import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Social from './soical';

const Navigation = styled.nav`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#374151'};
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
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Linkitems = styled.li`
    transition: all .3s ease;
    color: ${props => props.theme.textColor};
    
    a {
        color: ${props => props.theme.textColor};
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        padding: 0.5rem 0;
        transition: all 0.2s ease;
        
        &:hover {
            color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
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

const VersionBadge = styled.span`
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f3f4f6' : '#374151'};
    color: ${props => props.theme.textColor};
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#d1d5db' : '#4b5563'};
`;

const ModernNav = (props) => {
    const theme = props.theme;
    const setTheme = props.setTheme;
    
    return (
        <Headergroup theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937'}}>
            <Navigation theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                <NavContainer>
                    <NavLeft>
                        <Logo theme={theme} setTheme={setTheme} />
                        <NavList>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <a href="#docs">Docs</a>
                            </Linkitems>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <a href="#examples">Examples</a>
                            </Linkitems>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <a href="#icons">Icons</a>
                            </Linkitems>
                            <Linkitems theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                                <a href="#blog">Blog</a>
                            </Linkitems>
                        </NavList>
                    </NavLeft>
                    
                    <NavRight>
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
                        
                        <VersionBadge theme={{pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937', textColor: theme === 'light' ? '#000000' : '#ffffff'}}>
                            v5.3
                        </VersionBadge>
                        
                        <Social theme={theme} setTheme={setTheme} />
                    </NavRight>
                </NavContainer>
            </Navigation>
        </Headergroup>
    );
};

export default ModernNav;
