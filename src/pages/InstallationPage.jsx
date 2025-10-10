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

const InstallOption = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 2px solid ${props => props.theme.titleColor};
  border-radius: 0.5rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#fef2f2' : '#1f1f1f'};
`;

export const InstallationPage = () => {
  const { currentVersion, versionData, getCdnUrl, getIntegrity } = useVersion();

  return (
    <PageContainer>
      <PageTitle>Installation Guide</PageTitle>
      
      <Section>
        <SectionTitle>Package Manager Installation</SectionTitle>
        
        <InstallOption>
          <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>npm</h3>
          <CodeBlock>npm install uiheat@{versionData.fullVersion}</CodeBlock>
        </InstallOption>

        <InstallOption>
          <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>yarn</h3>
          <CodeBlock>yarn add uiheat@{versionData.fullVersion}</CodeBlock>
        </InstallOption>

        <InstallOption>
          <h3 style={{ color: '#E84545', marginBottom: '0.5rem' }}>pnpm</h3>
          <CodeBlock>pnpm add uiheat@{versionData.fullVersion}</CodeBlock>
        </InstallOption>
      </Section>

      <Section>
        <SectionTitle>CDN Installation</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>
          For quick prototyping or if you prefer not to use a build process, you can use our CDN links:
        </p>
        
        <h4 style={{ color: '#E84545', marginBottom: '0.5rem' }}>CSS</h4>
        <CodeBlock>
{`<link href="${getCdnUrl('css')}" 
      rel="stylesheet" 
      integrity="${getIntegrity('css')}" 
      crossorigin="anonymous">`}
        </CodeBlock>

        <h4 style={{ color: '#E84545', marginBottom: '0.5rem' }}>JavaScript</h4>
        <CodeBlock>
{`<script src="${getCdnUrl('js')}" 
        integrity="${getIntegrity('js')}" 
        crossorigin="anonymous"></script>`}
        </CodeBlock>

        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: '#fef3c7', 
          border: '1px solid #f59e0b', 
          borderRadius: '0.375rem' 
        }}>
          <strong>Security Note:</strong> Always include integrity hashes when using CDN links to prevent tampering.
        </div>
      </Section>

      <Section>
        <SectionTitle>React Setup</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>After installation, import and use UI Heat components in your React app:</p>
        
        <CodeBlock>
{`import React from 'react';
import { Button, Card, ThemeProvider } from 'uiheat';
import 'uiheat/dist/uiheat.css';

function App() {
  return (
    <ThemeProvider theme="light">
      <Card>
        <h1>Hello UI Heat ${versionData.fullVersion}!</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}

export default App;`}
        </CodeBlock>
      </Section>

      {currentVersion !== '1.0' && (
        <Section>
          <SectionTitle>Version-Specific Features</SectionTitle>
          
          {currentVersion === '1.1' && (
            <div>
              <p style={{ marginBottom: '1rem' }}>Version 1.1 includes enhanced accessibility features:</p>
              <CodeBlock>
{`import { Alert, Badge, Progress, FocusManager } from 'uiheat';

// New components in v1.1
<Alert variant="success">Operation completed!</Alert>
<Badge status="active">New</Badge>
<Progress value={75} max={100} />

// Enhanced accessibility
<FocusManager>
  <Button>Focus managed button</Button>
</FocusManager>`}
              </CodeBlock>
            </div>
          )}

          {currentVersion === '2.0' && (
            <div>
              <p style={{ marginBottom: '1rem' }}>Version 2.0 introduces advanced components and design system:</p>
              <CodeBlock>
{`import { 
  DataTable, 
  DatePicker, 
  Autocomplete,
  DesignTokens,
  ThemeBuilder 
} from 'uiheat';

// Advanced components in v2.0
<DataTable data={users} columns={columns} />
<DatePicker value={date} onChange={setDate} />
<Autocomplete options={options} onSelect={handleSelect} />

// Design system tools
const customTheme = ThemeBuilder.create({
  primary: '#your-color',
  tokens: DesignTokens.extend(baseTokens)
});`}
              </CodeBlock>
            </div>
          )}
        </Section>
      )}

      <Section>
        <SectionTitle>Browser Support</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>UI Heat {versionData.fullVersion} supports:</p>
        
        <ul style={{ lineHeight: 1.6 }}>
          <li>Chrome 70+</li>
          <li>Firefox 63+</li>
          <li>Safari 12+</li>
          <li>Edge 79+</li>
          {currentVersion !== '1.0' && <li>Internet Explorer 11 (with polyfills)</li>}
          {currentVersion === '2.0' && <li>Modern mobile browsers (iOS Safari, Chrome Mobile)</li>}
        </ul>
      </Section>
    </PageContainer>
  );
};
