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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <LogoText theme={themeProps}>UI Heat</LogoText>
          </FooterLogo>
          <FooterDescription theme={themeProps}>
            Designed and built with passion for modern web development.
            A beginner-friendly React component library that makes beautiful
            UIs accessible to everyone.
          </FooterDescription>
          <FooterDescription theme={themeProps}>
            Code licensed MIT, documentation Creative Commons.
          </FooterDescription>
          <FooterDescription theme={themeProps}>
            Currently v2.0.0-beta.
          </FooterDescription>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Links</FooterTitle>
          <FooterLink href="#home" theme={themeProps}>Home</FooterLink>
          <FooterLink href="#docs" theme={themeProps}>Documentation</FooterLink>
          <FooterLink href="#components" theme={themeProps}>Components</FooterLink>
          <FooterLink href="#examples" theme={themeProps}>Examples</FooterLink>
          <FooterLink href="#storybook" theme={themeProps}>Storybook</FooterLink>
          <FooterLink href="#changelog" theme={themeProps}>Changelog</FooterLink>
          <FooterLink href="#github" theme={themeProps}>GitHub</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Resources</FooterTitle>
          <FooterLink href="#getting-started" theme={themeProps}>Getting Started</FooterLink>
          <FooterLink href="#installation" theme={themeProps}>Installation</FooterLink>
          <FooterLink href="#theming" theme={themeProps}>Theming Guide</FooterLink>
          <FooterLink href="#accessibility" theme={themeProps}>Accessibility</FooterLink>
          <FooterLink href="#api-reference" theme={themeProps}>API Reference</FooterLink>
          <FooterLink href="#migration" theme={themeProps}>Migration Guide</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Versions</FooterTitle>
          <FooterLink href="#v2" theme={themeProps}>v2.0 (Beta)</FooterLink>
          <FooterLink href="#v1-1" theme={themeProps}>v1.1 (Stable)</FooterLink>
          <FooterLink href="#v1-0" theme={themeProps}>v1.0 (Stable)</FooterLink>
          <FooterLink href="#version-history" theme={themeProps}>Version History</FooterLink>
          <FooterLink href="#roadmap" theme={themeProps}>Roadmap</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={themeProps}>Community</FooterTitle>
          <FooterLink href="#github-issues" theme={themeProps}>Issues & Bugs</FooterLink>
          <FooterLink href="#discussions" theme={themeProps}>GitHub Discussions</FooterLink>
          <FooterLink href="#contributing" theme={themeProps}>Contributing Guide</FooterLink>
          <FooterLink href="#discord" theme={themeProps}>Discord Community</FooterLink>
          <FooterLink href="#twitter" theme={themeProps}>Twitter Updates</FooterLink>
          <FooterLink href="#support" theme={themeProps}>Get Support</FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;