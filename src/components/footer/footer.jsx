import React from 'react';
import styled from 'styled-components';
import Logo from '../nav/logo';

const FooterContainer = styled.footer`
  background-color: #0A0A0A;
  color: #F5F5F5;
  padding: 4rem 2rem 2rem 2rem;
  margin-top: auto;
  width: 100%;
  border-top: 1px solid #1E1E1E;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

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
  margin-bottom: 1.5rem;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.75rem;
    color: #3B82F6;
  }
`;

const LogoText = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #FFFFFF;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const FooterDescription = styled.p`
  color: #A0A0A0;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-size: 0.875rem;
  max-width: 280px;
`;

const FooterTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FooterLink = styled.a`
  color: #A0A0A0;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  display: block;

  &:hover {
    color: #3B82F6;
    transform: translateX(2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #1E1E1E;
    border-radius: 8px;
    color: #A0A0A0;
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: #3B82F6;
      color: #FFFFFF;
      transform: translateY(-2px);
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #1E1E1E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #888888;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = ({ theme }) => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          <FooterDescription>
            A modern, framework-agnostic component library built for developers who value simplicity, performance, and flexibility.
          </FooterDescription>
          <FooterDescription>
            Build once. Ship everywhere.
          </FooterDescription>
          <SocialLinks>
            <a href="https://github.com/HoseaCodes/UI-Heat" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.npmjs.com/package/ui-heat" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.331h-2.669zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zm-6.671-2.665v1.332h1.334v-1.332h-1.334z"/>
              </svg>
            </a>
            <a href="https://discord.gg/ui-heat" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterLink href="#installation">Installation</FooterLink>
          <FooterLink href="#documentation">Documentation</FooterLink>
          <FooterLink href="#components">Components</FooterLink>
          <FooterLink href="#playground">Playground</FooterLink>
          <FooterLink href="#storybook">Storybook</FooterLink>
          <FooterLink href="#examples">Examples</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="#getting-started">Getting Started</FooterLink>
          <FooterLink href="#theming">Theming Guide</FooterLink>
          <FooterLink href="#accessibility">Accessibility</FooterLink>
          <FooterLink href="#performance">Performance</FooterLink>
          <FooterLink href="#migration">Migration Guide</FooterLink>
          <FooterLink href="#api-reference">API Reference</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Community</FooterTitle>
          <FooterLink href="https://github.com/HoseaCodes/UI-Heat/issues">GitHub Issues</FooterLink>
          <FooterLink href="https://github.com/HoseaCodes/UI-Heat/discussions">Discussions</FooterLink>
          <FooterLink href="#contributing">Contributing</FooterLink>
          <FooterLink href="#changelog">Changelog</FooterLink>
          <FooterLink href="https://discord.gg/ui-heat">Discord</FooterLink>
          <FooterLink href="https://twitter.com/ui_heat">Twitter</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Versions</FooterTitle>
          <FooterLink href="#v2">v2.0.0-beta</FooterLink>
          <FooterLink href="#v1-1">v1.1.0 (stable)</FooterLink>
          <FooterLink href="#v1-0">v1.0.1 (stable)</FooterLink>
          <FooterLink href="#roadmap">Roadmap</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <BottomBar>
        <div>
          © 2020 UI Heat. Released under the MIT License.
        </div>
        {/* <div>
          <span style={{ marginRight: '1rem' }}>📦 2.1M weekly downloads</span>
          <span style={{ marginRight: '1rem' }}>⭐ 45.2K GitHub stars</span>
          <span>🔥 Used by 50K+ developers</span>
        </div> */}
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;