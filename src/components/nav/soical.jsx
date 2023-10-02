import React from 'react';
import './nav.css';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiSun, FiMoon, FiSearch } from "react-icons/fi";

const Container = styled.ul`
    background-color: ${props => props.theme.pageBackground};
    transitionL all .5s ease;
`;
const Toggle = styled.i`
    color: ${props => props.theme.textColor}
    transitionL all .5s ease;
    &:focus {
        outline: none; 
    }
`;

const Linkitems = styled.li`
    transitionL all .5s ease;
    color: ${props => props.theme.textColor}
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

    return (
        <Container className="social">
            <Linkitems>
                <FiSearch />
            </Linkitems>
            <Linkitems>
                <FiGithub />
            </Linkitems>
            <Linkitems>
                <FiLinkedin />
            </Linkitems>
            <Linkitems>
                <FiTwitter />
            </Linkitems>
            <Linkitems className="toggle">
                <Toggle
                    className="btn"
                    onClick={changeTheme}>
                    {icon}
                </Toggle>
            </Linkitems>

        </Container>
    )
}

export default Social;