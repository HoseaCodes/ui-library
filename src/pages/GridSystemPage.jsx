import React from 'react';
import styled from 'styled-components';
import { useVersion } from '../contexts/VersionContext';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: ${props => props.theme.textColor};
`;

const PageTitle = styled.h1`
  color: ${props => props.theme.titleColor};
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f8fafc' : '#1e293b'};
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  border-radius: 0.5rem;
`;

const GridDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

const GridItem = styled.div`
  grid-column: span ${props => props.span || 1};
  padding: 1rem;
  background-color: ${props => props.theme.titleColor};
  color: white;
  text-align: center;
  border-radius: 0.25rem;
  font-weight: 500;
`;

const FlexDemo = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f3f4f6' : '#374151'};
  border-radius: 0.5rem;
`;

const FlexItem = styled.div`
  flex: ${props => props.flex || '1'};
  padding: 1rem;
  background-color: ${props => props.theme.titleColor};
  color: white;
  text-align: center;
  border-radius: 0.25rem;
  font-weight: 500;
`;

const ResponsiveDemo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1rem 0;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ResponsiveItem = styled.div`
  padding: 1.5rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#4b5563'};
  border-radius: 0.5rem;
  text-align: center;
`;

const ContainerDemo = styled.div`
  max-width: ${props => props.size === 'sm' ? '640px' : props.size === 'md' ? '768px' : props.size === 'lg' ? '1024px' : '1200px'};
  margin: 1rem auto;
  padding: 1rem;
  background-color: ${props => props.theme.titleColor}20;
  border: 2px dashed ${props => props.theme.titleColor};
  border-radius: 0.5rem;
  text-align: center;
`;

const CodeBlock = styled.pre`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f1f5f9' : '#0f172a'};
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  border-radius: 0.375rem;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  margin: 1rem 0;
`;

export const GridSystemPage = () => {
  const { currentVersion, versionData } = useVersion();

  return (
    <PageContainer>
      <PageTitle>Grid System & Layout</PageTitle>
      
      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>CSS Grid System</h2>
        <p style={{ marginBottom: '1rem' }}>
          UI Heat {versionData.fullVersion} provides a flexible grid system for creating responsive layouts.
        </p>
        
        <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>12-Column Grid</h3>
        <GridDemo>
          <GridItem span={12}>12 columns</GridItem>
          <GridItem span={6}>6 columns</GridItem>
          <GridItem span={6}>6 columns</GridItem>
          <GridItem span={4}>4 columns</GridItem>
          <GridItem span={4}>4 columns</GridItem>
          <GridItem span={4}>4 columns</GridItem>
          <GridItem span={3}>3</GridItem>
          <GridItem span={3}>3</GridItem>
          <GridItem span={3}>3</GridItem>
          <GridItem span={3}>3</GridItem>
        </GridDemo>

        <CodeBlock>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.col-6 {
  grid-column: span 6;
}

.col-4 {
  grid-column: span 4;
}`}
        </CodeBlock>
      </Section>

      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>Flexbox Utilities</h2>
        <p style={{ marginBottom: '1rem' }}>Flexible box layout for component alignment and distribution.</p>
        
        <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Flex Distribution</h3>
        <FlexDemo>
          <FlexItem flex="1">Flex 1</FlexItem>
          <FlexItem flex="2">Flex 2</FlexItem>
          <FlexItem flex="1">Flex 1</FlexItem>
        </FlexDemo>

        <FlexDemo style={{ justifyContent: 'space-between' }}>
          <FlexItem flex="none">Start</FlexItem>
          <FlexItem flex="none">Center</FlexItem>
          <FlexItem flex="none">End</FlexItem>
        </FlexDemo>

        <CodeBlock>
{`.flex-container {
  display: flex;
  gap: 1rem;
}

.flex-1 { flex: 1; }
.flex-2 { flex: 2; }
.flex-none { flex: none; }

.justify-between { justify-content: space-between; }`}
        </CodeBlock>
      </Section>

      {currentVersion !== '1.0' && (
        <Section>
          <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>
            Responsive Design 
            <span style={{ 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.5rem', 
              backgroundColor: '#22c55e', 
              color: 'white', 
              borderRadius: '0.25rem',
              marginLeft: '0.5rem'
            }}>
              Enhanced in v1.1+
            </span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>Advanced responsive utilities with breakpoint management.</p>
          
          <ResponsiveDemo>
            <ResponsiveItem>Mobile: 1 column</ResponsiveItem>
            <ResponsiveItem>Tablet: 2 columns</ResponsiveItem>
            <ResponsiveItem>Desktop: 3 columns</ResponsiveItem>
          </ResponsiveDemo>

          <CodeBlock>
{`/* Mobile First Approach */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet: 768px and up */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`}
          </CodeBlock>
        </Section>
      )}

      {currentVersion === '2.0' && (
        <Section>
          <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>
            Container Queries
            <span style={{ 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.5rem', 
              backgroundColor: '#3b82f6', 
              color: 'white', 
              borderRadius: '0.25rem',
              marginLeft: '0.5rem'
            }}>
              New in v2.0
            </span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Modern container-based responsive design for component-level layouts.
          </p>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            <ContainerDemo size="sm">Small Container (640px max)</ContainerDemo>
            <ContainerDemo size="md">Medium Container (768px max)</ContainerDemo>
            <ContainerDemo size="lg">Large Container (1024px max)</ContainerDemo>
            <ContainerDemo size="xl">Extra Large Container (1200px max)</ContainerDemo>
          </div>

          <CodeBlock>
{`/* Container Query Support */
.container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

@container (min-width: 500px) {
  .card {
    grid-template-columns: repeat(2, 1fr);
  }
}`}
          </CodeBlock>
        </Section>
      )}

      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>Spacing System</h2>
        <p style={{ marginBottom: '1rem' }}>Consistent spacing scale for margins, padding, and gaps.</p>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[1, 2, 4, 6, 8, 12, 16, 20].map(size => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                width: `${size * 0.25}rem`, 
                height: '1rem', 
                backgroundColor: '#E84545',
                borderRadius: '0.125rem'
              }} />
              <span style={{ fontFamily: 'monospace' }}>
                spacing-{size} = {size * 0.25}rem ({size * 4}px)
              </span>
            </div>
          ))}
        </div>

        <CodeBlock>
{`/* Spacing Scale */
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }

.m-4 { margin: 1rem; }
.mt-4 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }

.gap-4 { gap: 1rem; }`}
        </CodeBlock>
      </Section>

      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>Version Features</h2>
        
        {currentVersion === '1.0' && (
          <div>
            <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Version 1.0 Layout Features</h3>
            <ul style={{ lineHeight: 1.6, marginLeft: '1.5rem' }}>
              <li>12-column CSS Grid system</li>
              <li>Flexbox utilities for alignment</li>
              <li>Basic container sizes</li>
              <li>Standard spacing scale</li>
              <li>Mobile-first responsive design</li>
            </ul>
          </div>
        )}

        {currentVersion === '1.1' && (
          <div>
            <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Version 1.1 Enhancements</h3>
            <ul style={{ lineHeight: 1.6, marginLeft: '1.5rem' }}>
              <li>Enhanced responsive breakpoint system</li>
              <li>Advanced grid utilities</li>
              <li>Improved spacing consistency</li>
              <li>Better mobile optimization</li>
              <li>Accessibility-focused layout patterns</li>
            </ul>
          </div>
        )}

        {currentVersion === '2.0' && (
          <div>
            <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Version 2.0 Advanced Features</h3>
            <ul style={{ lineHeight: 1.6, marginLeft: '1.5rem' }}>
              <li>Container Queries for component-level responsiveness</li>
              <li>CSS Subgrid support</li>
              <li>Advanced layout algorithms</li>
              <li>Performance-optimized rendering</li>
              <li>Dynamic viewport units</li>
              <li>Layout shift prevention</li>
            </ul>
          </div>
        )}
      </Section>
    </PageContainer>
  );
};
