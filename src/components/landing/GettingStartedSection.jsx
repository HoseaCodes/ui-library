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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled Components
const GettingStartedContainer = styled.section`
  background: #262626;
  padding: 6rem 2rem;
  color: white;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #FFFFFF 0%, #FF6B6B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #d1d5db;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const TimeCommitment = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 107, 107, 0.1);
  color: #FF6B6B;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  
  @media (max-width: 640px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const StepsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const StepCard = styled.div`
  background: #404040;
  border: 1px solid #525252;
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease-out ${props => props.delay}s both;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #FF6B6B;
    box-shadow: 0 12px 30px rgba(255, 107, 107, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -15px;
  left: 2rem;
  width: 30px;
  height: 30px;
  background: #E84545; /* Using your primary red */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: white;
`;

const StepTime = styled.div`
  color: #FF6B6B; /* Using your light-coral */
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #FFFFFF;
`;

const StepDescription = styled.p`
  color: #d1d5db; /* Using your dark theme text-secondary */
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CodeBlock = styled.div`
  background: #1a1a1a; /* Using your dark theme background */
  border: 1px solid #525252; /* Using your dark theme border */
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const CodeHeader = styled.div`
  background: #262626; /* Using your dark theme surface */
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #525252;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #9ca3af; /* Using your text-muted */
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: 1rem;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: white;
  overflow-x: auto;
  line-height: 1.5;
  
  .keyword { color: #FF6B6B; } /* Using your light-coral */
  .string { color: #10B981; }
  .comment { color: #6B7280; }
  .function { color: #F59E0B; }
`;

const CopyButton = styled.button`
  background: #525252; /* Using your dark theme border-strong */
  border: none;
  color: #d1d5db;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: #FF6B6B; /* Using your light-coral */
    color: white;
  }
`;

const QuickWinBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(245, 158, 11, 0.1);
  color: #F59E0B;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PlaygroundSection = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

const PlaygroundTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #FFFFFF;
`;

const PlaygroundDescription = styled.p`
  color: #d1d5db; /* Using your dark theme text-secondary */
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const PlaygroundButton = styled.button`
  background: #E84545; /* Using your primary red */
  border: none;
  color: white;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(232, 69, 69, 0.3);
  animation: ${pulse} 2s infinite;
  
  &:hover {
    background: #C62828; /* Using your deep red */
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(232, 69, 69, 0.4);
    animation: none;
  }
`;

const GettingStartedSection = ({ setCurrentPage }) => {
  const [copiedStep, setCopiedStep] = useState(null);

  const handleCopy = (text, step) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      time: "5 seconds",
      title: "Install UI Heat",
      description: "Get started with a single command. UI Heat works with any package manager and integrates seamlessly into existing projects.",
      code: "npm install ui-heat",
      badge: "Quick Setup"
    },
    {
      time: "30 seconds",
      title: "Import & Use",
      description: "Import components and start building immediately. No configuration needed, sensible defaults included.",
      code: `import { Button, Card } from 'ui-heat';

function App() {
  return (
    <Card>
      <Button variant="primary">
        Hello World
      </Button>
    </Card>
  );
}`,
      badge: "First Value"
    },
    {
      time: "2-5 minutes",
      title: "Customize Everything",
      description: "Override design tokens, create custom themes, and make components match your brand perfectly.",
      code: `:root {
  --ui-primary: #your-brand;
  --ui-radius: 12px;
  --ui-spacing: 1rem;
}

/* Components auto-update */`,
      badge: "Full Power"
    }
  ];

  return (
    <GettingStartedContainer>
      <SectionHeader>
        <SectionTitle>Get started in 60 seconds</SectionTitle>
        <SectionSubtitle>
          Three simple steps to transform your development workflow. 
          No complex setup, no learning curve, just results.
        </SectionSubtitle>
        <TimeCommitment>
          ⏱️ Total time commitment: Under 1 minute
        </TimeCommitment>
      </SectionHeader>

      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index} delay={index * 0.2}>
            <StepNumber>{index + 1}</StepNumber>
            <QuickWinBadge>
              ✨ {step.badge}
            </QuickWinBadge>
            <StepTime>{step.time}</StepTime>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
            
            <CodeBlock>
              <CodeHeader>
                <span>{index === 0 ? 'Terminal' : index === 1 ? 'App.jsx' : 'styles.css'}</span>
                <CopyButton 
                  onClick={() => handleCopy(step.code, index)}
                >
                  {copiedStep === index ? '✓ Copied' : '📋 Copy'}
                </CopyButton>
              </CodeHeader>
              <CodeContent>
                <code dangerouslySetInnerHTML={{
                  __html: step.code
                    .replace(/('ui-heat'|"ui-heat")/g, '<span class="string">$1</span>')
                    .replace(/('primary'|"primary"|'Hello World'|"Hello World")/g, '<span class="string">$1</span>')
                    .replace(/\b(import|from|function|return|export|const|let|var)\b/g, '<span class="keyword">$1</span>')
                    .replace(/\b(Button|Card|App)\b/g, '<span class="function">$1</span>')
                    .replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '<span class="comment">$&</span>')
                }} />
              </CodeContent>
            </CodeBlock>
          </StepCard>
        ))}
      </StepsContainer>

      <PlaygroundSection>
        <PlaygroundTitle>Try it live, no signup required</PlaygroundTitle>
        <PlaygroundDescription>
          Jump into our interactive playground and start experimenting with components immediately.
        </PlaygroundDescription>
        <PlaygroundButton onClick={() => setCurrentPage('introduction')}>
          🚀 Open Playground
        </PlaygroundButton>
      </PlaygroundSection>
    </GettingStartedContainer>
  );
};

export default GettingStartedSection;
