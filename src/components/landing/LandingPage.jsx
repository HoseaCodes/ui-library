import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typewriter = keyframes`
  0% { width: 0 }
  45% { width: 100% }
  55% { width: 100% }
  100% { width: 0 }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #FF6B6B; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Styled Components
const LandingContainer = styled.div`
  background: #1a1a1a; /* Using your dark theme background */
  min-height: 100vh;
  color: white; /* Using your dark theme text color */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    min-height: 80vh;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  background: linear-gradient(135deg, #FFFFFF 0%, #FF6B6B 50%, #E84545 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: #d1d5db;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    margin: 0 0 2rem 0;
    max-width: 100%;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
  pointer-events: none;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled.button`
  background: #E84545;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(232, 69, 69, 0.3);
  
  &:hover {
    background: #C62828;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(232, 69, 69, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #FF6B6B;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FF6B6B;
    transform: translateY(-2px);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

const CodeBlock = styled.div`
  background: #262626;
  border: 1px solid #525252;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  max-width: 500px;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    border-radius: 8px;
  }
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #9ca3af; /* Using your text-muted */
  font-size: 0.875rem;
`;

const CodeContent = styled.pre`
  margin: 0;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: white;
  overflow-x: auto;
  
  .keyword { color: #FF6B6B; } /* Using your light-coral */
  .string { color: #10B981; }
  .comment { color: #6B7280; }
`;

const CopyButton = styled.button`
  background: #404040; /* Using your dark theme surface-raised */
  border: none;
  color: #d1d5db;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #FF6B6B; /* Using your light-coral */
    color: white;
  }
`;

const TrustSignals = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Metric = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #d1d5db;
  
  span {
    font-weight: 600;
    color: #FF6B6B; /* Using your light-coral */
  }
`;

const TerminalPrompt = styled.span`
  color: #10B981;
  margin-right: 0.5rem;
`;

const TypedText = styled.span`
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid #FF6B6B; /* Using your light-coral */
  white-space: nowrap;
  animation: ${typewriter} 4s steps(30, end) infinite, ${blink} 0.75s step-end infinite;
  width: 300px; /* Fixed width to maintain consistent terminal size */
  max-width: 300px;
  text-align: left;
  
  &::before {
    content: 'npm install ui-heat';
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation: ${float} 3s ease-in-out infinite;
  opacity: 0.1;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 60%;
    right: 15%;
    animation-delay: 1s;
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
    animation-delay: 2s;
  }
`;

const LandingPage = ({ setCurrentPage }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install ui-heat');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LandingContainer>
      <HeroSection>
        <BackgroundGradient />
        
        {/* Floating Background Elements */}
        <FloatingElement>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
          </svg>
        </FloatingElement>
        <FloatingElement>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
        </FloatingElement>
        <FloatingElement>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
          </svg>
        </FloatingElement>

        <HeroTitle>Build once. Ship everywhere.</HeroTitle>
        
        <HeroSubtitle>
          A modern, framework-agnostic component library that works with React, Vue, Angular, 
          and vanilla JavaScript. Stop rewriting components for every project.
        </HeroSubtitle>

        <CTAContainer>
          <PrimaryButton onClick={() => setCurrentPage('introduction')}>Get Started</PrimaryButton>
          <SecondaryButton onClick={() => setCurrentPage('installation')}>View Documentation</SecondaryButton>
        </CTAContainer>

        <CodeBlock>
          <CodeHeader>
            <span>Terminal</span>
            <CopyButton onClick={handleCopy}>
              {copied ? '✓ Copied' : '📋 Copy'}
            </CopyButton>
          </CodeHeader>
          <CodeContent>
            <TerminalPrompt>$</TerminalPrompt>
            <TypedText />
          </CodeContent>
        </CodeBlock>

        {/* <TrustSignals>
          <Metric>
            <span>⭐ 45.2K</span> GitHub stars
          </Metric>
          <Metric>
            <span>📦 2.1M</span> weekly downloads
          </Metric>
          <Metric>
            <span>👥 50K+</span> developers
          </Metric>
        </TrustSignals> */}
      </HeroSection>
    </LandingContainer>
  );
};

export default LandingPage;
