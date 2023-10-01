import React from 'react';
import './components.css'
import styled from 'styled-components';
import Logo from './logo';
import Social from './soical';


const Navigation = styled.nav`
    background-color: ${props => props.theme.pageBackground};
    transitionL all .5s ease;
`;
const Headergroup = styled.header`
    background-color: ${props => props.theme.pageBackground};
    transitionL all .5s ease;
`;

const Linkitems = styled.li`
    transitionL all .5s ease;
    color: ${props => props.theme.textColor}
`;


const Nav = (props) => {
    const theme = props.theme;
    const setTheme = props.setTheme;
    return (
        <Headergroup>
            <Logo theme={theme} setTheme={setTheme} />
            <Navigation>
                <ul>
                    <Linkitems className="line">
                        |
                </Linkitems>
                    <Linkitems>
                        <a href="https://github.com/HoseaCodes/ui-library"
                            target="_blank"
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
