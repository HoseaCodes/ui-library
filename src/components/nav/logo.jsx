import React from 'react';
import Logo1 from '../../assets/logo.png'
import styled from 'styled-components';

const Title = styled.h1`
    transitionL all .5s ease;
    color: ${props => props.theme.textColor};,
    padding-left: 20px;
`;

const Logo = () => {
    return (
        <div className="logo-section">
            <img className="logo" src={Logo1} alt="Logo" />
            <Title className="logo-title">UI Heat</Title>
        </div>
    )
}

export default Logo;