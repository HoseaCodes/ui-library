import React from 'react';
import Logo1 from '../../assets/logo.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const LogoImage = styled.img`
    height: 2rem;
    width: auto;
    transition: all 0.3s ease;
`;

const Title = styled.h1`
    transition: all 0.5s ease;
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    width: max-content;
`;

const Logo = ({ theme }) => {
    return (
        <LogoContainer>
            <LogoImage src={Logo1} alt="UI Heat Logo" />
            <Title theme={{textColor: theme === 'light' ? '#000000' : '#ffffff'}}>UI Heat</Title>
        </LogoContainer>
    )
}

export default Logo;