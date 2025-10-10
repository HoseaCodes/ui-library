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

const SectionTitle = styled.h2`
  color: ${props => props.theme.titleColor};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
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

const VersionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  background-color: ${props => props.theme.titleColor};
  color: white;
  margin-left: 0.5rem;
`;

export const IntroductionPage = () => {
  const { currentVersion, versionData } = useVersion();

  return (
    <PageContainer>
      <PageTitle>
        Introduction to UI Heat
        <VersionBadge>{versionData.fullVersion}</VersionBadge>
      </PageTitle>
      
      <Section>
        <SectionTitle>Welcome to UI Heat</SectionTitle>
        <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
          UI Heat is a modern, accessible React component library designed for rapid development 
          and beautiful user interfaces. Version {versionData.fullVersion} brings you a comprehensive 
          set of components with built-in theming and accessibility features.
        </p>
        
        {currentVersion === '1.0' && (
          <div>
            <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Version 1.0 Features</h3>
            <ul style={{ lineHeight: 1.6 }}>
              <li>Core component library with essential UI elements</li>
              <li>Light and dark theme support</li>
              <li>Responsive design utilities</li>
              <li>Basic accessibility features</li>
            </ul>
          </div>
        )}

        {currentVersion === '1.1' && (
          <div>
            <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Version 1.1 Enhancements</h3>
            <ul style={{ lineHeight: 1.6 }}>
              <li>Enhanced accessibility with ARIA support</li>
              <li>Additional components: Alert, Badge, Progress</li>
              <li>Improved responsive design guidelines</li>
              <li>Focus management utilities</li>
              <li>Better keyboard navigation</li>
            </ul>
          </div>
        )}

        {currentVersion === '2.0' && (
          <div>
            <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>Version 2.0 Major Update</h3>
            <ul style={{ lineHeight: 1.6 }}>
              <li>Complete design system architecture</li>
              <li>Advanced components: Data Table, Date Picker, Autocomplete</li>
              <li>CSS Grid and Container Queries support</li>
              <li>Performance monitoring and optimization tools</li>
              <li>WCAG 2.1 AA compliance throughout</li>
              <li>Design tokens and theme builder</li>
            </ul>
          </div>
        )}
      </Section>

      <Section>
        <SectionTitle>Quick Start</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>Get started with UI Heat in seconds:</p>
        
        <CodeBlock>
{`// Install via npm
npm install uiheat@${versionData.fullVersion}

// Or use CDN
<link href="https://cdn.jsdelivr.net/npm/uiheat@${versionData.fullVersion}/dist/uiheat.min.css" 
      rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/uiheat@${versionData.fullVersion}/dist/uiheat.min.js"></script>`}
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle>What's New in This Version</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>
          Released on {versionData.releaseDate}, this version includes:
        </p>
        <p style={{ fontStyle: 'italic', color: '#64748b' }}>
          {versionData.description}
        </p>
      </Section>
    </PageContainer>
  );
};
