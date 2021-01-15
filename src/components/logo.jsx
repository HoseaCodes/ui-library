import React from 'react';
import Logo1 from '../images/logo.png'
import styled from 'styled-components';

const Title = styled.h1`
    transitionL all .5s ease;
    color: ${props => props.theme.textColor}
`;

const Logo = () => {
    return (
        <div className="logo-section">
            <img src={Logo1} alt="Logo" />
            <Title className="logo">UI Heat</Title>
        </div>
    )
}

export default Logo;