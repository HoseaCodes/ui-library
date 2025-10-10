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

// Styled Components
const FeaturesContainer = styled.section`
  background: #1a1a1a;
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
  
  @media (max-width: 768px) {
    margin: 0 0 0.75rem 0;
  }
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #d1d5db;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const FeatureGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  
  @media (max-width: 768px) {
    gap: 4rem;
  }
  
  @media (max-width: 480px) {
    gap: 3rem;
  }
`;

const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const FeatureContent = styled.div`
  animation: ${slideIn} 0.8s ease-out;
`;

const FeatureBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 107, 107, 0.1); /* Using your light-coral with transparency */
  color: #FF6B6B; /* Using your light-coral */
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureProblem = styled.h3`
  font-size: 1rem;
  color: #EF4444;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
`;

const FeatureTitle = styled.h4`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #FFFFFF;
`;

const FeatureDescription = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const FeatureDemo = styled.div`
  background: #262626;
  border: 1px solid #525252;
  border-radius: 12px;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const CodeTabs = styled.div`
  display: flex;
  background: #1a1a1a;
  border-bottom: 1px solid #525252;
  overflow-x: auto;
  
  @media (max-width: 640px) {
    padding: 0;
  }
`;

const CodeTab = styled.button`
  background: ${props => props.active ? '#262626' : 'transparent'};
  border: none;
  color: ${props => props.active ? '#FF6B6B' : '#9ca3af'};
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 2px solid ${props => props.active ? '#FF6B6B' : 'transparent'};
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    color: #FF6B6B;
  }
  
  @media (max-width: 640px) {
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
  }
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: 2rem;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: white;
  overflow-x: auto;
  line-height: 1.6;
  background: #1a1a1a;
  
  .keyword { color: #FF6B6B; }
  .string { color: #10B981; }
  .comment { color: #6B7280; }
  .function { color: #F59E0B; }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.75rem;
    line-height: 1.5;
  }
`;const InteractiveDemo = styled.div`
  background: #262626; /* Using your dark theme surface */
  border: 1px solid #525252; /* Using your dark theme border */
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;

const DemoButton = styled.button`
  background: ${props => props.variant === 'primary' ? '#E84545' : 'transparent'}; /* Using your primary red */
  border: ${props => props.variant === 'primary' ? 'none' : '2px solid #FF6B6B'}; /* Using your light-coral */
  color: white;
  padding: 1rem 2rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(232, 69, 69, 0.3); /* Using your primary red */
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  background: #262626; /* Using your dark theme surface */
  border: 1px solid #525252; /* Using your dark theme border */
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #FF6B6B; /* Using your light-coral */
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: #d1d5db; /* Using your dark theme text-secondary */
  font-size: 0.875rem;
`;

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('react');

  const codeExamples = {
    react: `import { Button } from 'ui-heat';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`,
    reactnative: `import React from 'react';
import { Button } from 'ui-heat/native';

export default function App() {
  return (
    <Button 
      variant="primary"
      title="Click me"
      onPress={() => alert('Hello!')}
    />
  );
}`,
    vanilla: `import { createButton } from 'ui-heat';

const button = createButton({
  variant: 'primary',
  text: 'Click me'
});

document.body.appendChild(button);`
  };

  return (
    <FeaturesContainer>
      <SectionHeader>
        <SectionTitle>Why developers choose UI Heat</SectionTitle>
        <SectionSubtitle>
          Solve real problems with components that actually work across your entire tech stack.
        </SectionSubtitle>
      </SectionHeader>

      <FeatureGrid>
        {/* Feature 1: Framework Agnostic */}
        <FeatureRow>
          <FeatureContent>
            <FeatureBadge>
              🔄 Framework Agnostic
            </FeatureBadge>
            <FeatureProblem>Tired of rewriting components for every framework?</FeatureProblem>
            <FeatureTitle>One library. Works everywhere.</FeatureTitle>
            <FeatureDescription>
              Stop maintaining separate component libraries for React, React Native, and vanilla JavaScript. 
              UI Heat components work seamlessly across all modern frameworks and native mobile development.
            </FeatureDescription>
          </FeatureContent>
          
          <FeatureDemo>
            <CodeTabs>
              <CodeTab 
                active={activeTab === 'react'} 
                onClick={() => setActiveTab('react')}
              >
                React
              </CodeTab>
              <CodeTab 
                active={activeTab === 'reactnative'} 
                onClick={() => setActiveTab('reactnative')}
              >
                React Native
              </CodeTab>
              <CodeTab 
                active={activeTab === 'vanilla'} 
                onClick={() => setActiveTab('vanilla')}
              >
                Vanilla JS
              </CodeTab>
            </CodeTabs>
            <CodeContent>
              <code dangerouslySetInnerHTML={{
                __html: codeExamples[activeTab]
                  .replace(/('ui-heat\/native'|"ui-heat\/native"|'ui-heat'|"ui-heat")/g, '<span class="string">$1</span>')
                  .replace(/('primary'|"primary"|'Click me'|"Click me")/g, '<span class="string">$1</span>')
                  .replace(/\b(import|from|function|return|export|default|const|let|var)\b/g, '<span class="keyword">$1</span>')
                  .replace(/\b(Button|App|React|createButton)\b/g, '<span class="function">$1</span>')
                  .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
              }} />
            </CodeContent>
          </FeatureDemo>
        </FeatureRow>

        {/* Feature 2: Customization */}
        <FeatureRow>
          <FeatureContent>
            <FeatureBadge>
              🎨 Infinite Customization
            </FeatureBadge>
            <FeatureProblem>Design systems shouldn't be rigid</FeatureProblem>
            <FeatureTitle>Design tokens + CSS variables = infinite flexibility</FeatureTitle>
            <FeatureDescription>
              Built with CSS custom properties and design tokens. Change colors, spacing, 
              typography, and animations without touching component code.
            </FeatureDescription>
          </FeatureContent>
          
          <InteractiveDemo>
            <h4 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Try different variants:</h4>
            <DemoButton variant="primary">Primary Button</DemoButton>
            <DemoButton variant="secondary">Secondary Button</DemoButton>
            <div style={{ marginTop: '1rem', color: '#A0A0A0', fontSize: '0.875rem' }}>
              Powered by CSS custom properties
            </div>
          </InteractiveDemo>
        </FeatureRow>

        {/* Feature 3: Performance */}
        <FeatureRow>
          <FeatureContent>
            <FeatureBadge>
              ⚡ Performance First
            </FeatureBadge>
            <FeatureProblem>Bundle size kills conversions</FeatureProblem>
            <FeatureTitle>Tree-shakeable, &lt; 5KB per component</FeatureTitle>
            <FeatureDescription>
              Every component is optimized for production. Import only what you need with 
              automatic tree-shaking and zero runtime dependencies.
            </FeatureDescription>
          </FeatureContent>
          
          <MetricsGrid>
            <MetricCard>
              <MetricValue>&lt; 5KB</MetricValue>
              <MetricLabel>Average component size</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue>0</MetricValue>
              <MetricLabel>Runtime dependencies</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue>100%</MetricValue>
              <MetricLabel>Tree-shakeable</MetricLabel>
            </MetricCard>
          </MetricsGrid>
        </FeatureRow>

        {/* Feature 4: Documentation */}
        <FeatureRow>
          <FeatureContent>
            <FeatureBadge>
              📚 Developer Experience
            </FeatureBadge>
            <FeatureProblem>Poor docs = abandoned tools</FeatureProblem>
            {/* <FeatureTitle>Interactive examples, API playground, 200+ recipes</FeatureTitle> */}
            <FeatureTitle>Interactive examples, API playground</FeatureTitle>
            <FeatureDescription>
              Every component comes with interactive examples, TypeScript definitions, 
              accessibility guidelines, and real-world usage patterns.
            </FeatureDescription>
          </FeatureContent>
          
          <FeatureDemo>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#3B82F6', borderRadius: '8px' }}></div>
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: '600' }}>Button Component</div>
                  <div style={{ color: '#A0A0A0', fontSize: '0.875rem' }}>Interactive documentation</div>
                </div>
              </div>
              <div style={{ background: '#0F0F0F', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', color: '#A0A0A0' }}>
                ✓ TypeScript definitions<br/>
                ✓ Accessibility guidelines<br/>
                ✓ Interactive playground<br/>
                ✓ Code examples
              </div>
            </div>
          </FeatureDemo>
        </FeatureRow>
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
