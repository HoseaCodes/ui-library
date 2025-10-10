import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#1a1a1a' : '#0f172a'};
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#d1d5db' : '#e2e8f0'};
  padding: 3rem 2rem 2rem 2rem;
  margin-top: auto;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
  }
`;

const LogoText = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#ffffff' : '#f1f5f9'};
`;

const FooterDescription = styled.p`
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#9ca3af' : '#cbd5e1'};
  line-height: 1.6;
  margin: 0 0 1rem 0;
  font-size: 0.875rem;
`;

const FooterTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#ffffff' : '#f1f5f9'};
`;

const FooterLink = styled.a`
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#d1d5db' : '#e2e8f0'};
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
  }
`;

const Footer = ({ theme }) => {
  const themeProps = {
    pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937'
  };

  return (
    <FooterContainer theme={themeProps}>
      <FooterContent>
        <FooterSection>
          <FooterLogo theme={themeProps}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
            <LogoText theme={themeProps}>Bootstrap</LogoText>
          </FooterLogo>
          <FooterDescription theme={themeProps}>
            Designed and built with all the love in the world
            by the Bootstrap team with the help of our
            contributors.
          </FooterDescription>
          <FooterDescription theme={themeProps}>
            Code licensed MIT, docs CC BY 3.0.
          </FooterDescription>
          <FooterDescription theme={themeProps}>
            Currently v5.3.3.
          </FooterDescription>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Links</FooterTitle>
          <FooterLink href="#home" theme={themeProps}>Home</FooterLink>
          <FooterLink href="#docs" theme={themeProps}>Docs</FooterLink>
          <FooterLink href="#examples" theme={themeProps}>Examples</FooterLink>
          <FooterLink href="#icons" theme={themeProps}>Icons</FooterLink>
          <FooterLink href="#themes" theme={themeProps}>Themes</FooterLink>
          <FooterLink href="#blog" theme={themeProps}>Blog</FooterLink>
          <FooterLink href="#swag-store" theme={themeProps}>Swag Store</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Guides</FooterTitle>
          <FooterLink href="#getting-started" theme={themeProps}>Getting started</FooterLink>
          <FooterLink href="#starter-template" theme={themeProps}>Starter template</FooterLink>
          <FooterLink href="#webpack" theme={themeProps}>Webpack</FooterLink>
          <FooterLink href="#parcel" theme={themeProps}>Parcel</FooterLink>
          <FooterLink href="#vite" theme={themeProps}>Vite</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Projects</FooterTitle>
          <FooterLink href="#bootstrap-5" theme={themeProps}>Bootstrap 5</FooterLink>
          <FooterLink href="#bootstrap-4" theme={themeProps}>Bootstrap 4</FooterLink>
          <FooterLink href="#icons" theme={themeProps}>Icons</FooterLink>
          <FooterLink href="#rfs" theme={themeProps}>RFS</FooterLink>
          <FooterLink href="#examples-repo" theme={themeProps}>Examples repo</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Community</FooterTitle>
          <FooterLink href="#issues" theme={themeProps}>Issues</FooterLink>
          <FooterLink href="#discussions" theme={themeProps}>Discussions</FooterLink>
          <FooterLink href="#corporate-sponsors" theme={themeProps}>Corporate sponsors</FooterLink>
          <FooterLink href="#open-collective" theme={themeProps}>Open Collective</FooterLink>
          <FooterLink href="#stack-overflow" theme={themeProps}>Stack Overflow</FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;