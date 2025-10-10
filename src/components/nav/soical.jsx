import React from 'react';
import './nav.css';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiSun, FiMoon } from "react-icons/fi";

const Container = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${props => props.theme.pageBackground};
    transition: all 0.5s ease;
`;

const Toggle = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f3f4f6' : '#374151'};
    }
    
    &:focus {
        outline: none; 
    }
`;

const IconButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f3f4f6' : '#374151'};
        color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
    }
`;

const Linkitems = styled.li`
    transition: all 0.5s ease;
    color: ${props => props.theme.textColor};
`;


const Social = (props) => {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = props.theme === "light" ? <FiMoon /> : <FiSun />;

    const themeProps = {
        pageBackground: props.theme === 'light' ? '#FFFFFF' : '#1f2937',
        textColor: props.theme === 'light' ? '#000000' : '#ffffff'
    };

    return (
        <Container theme={themeProps}>
            <Linkitems theme={themeProps}>
                <IconButton theme={themeProps}>
                    <FiGithub />
                </IconButton>
            </Linkitems>
            <Linkitems theme={themeProps}>
                <IconButton theme={themeProps}>
                    <FiLinkedin />
                </IconButton>
            </Linkitems>
            <Linkitems theme={themeProps}>
                <IconButton theme={themeProps}>
                    <FiTwitter />
                </IconButton>
            </Linkitems>
            <Linkitems theme={themeProps}>
                <Toggle
                    theme={themeProps}
                    onClick={changeTheme}>
                    {icon}
                </Toggle>
            </Linkitems>
        </Container>
    )
}

export default Social;