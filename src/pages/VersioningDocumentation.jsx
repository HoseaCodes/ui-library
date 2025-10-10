import React from 'react';
import styled from 'styled-components';
import { useVersion } from '../contexts/VersionContext';

const DocumentationContainer = styled.div`
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
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.titleColor};
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: 600;
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.textColor};
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CodeBlock = styled.pre`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f8fafc' : '#1e293b'};
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const InlineCode = styled.code`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f1f5f9' : '#334155'};
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
`;

const VersionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  
  ${props => {
    if (props.status === 'stable') {
      return `
        background-color: rgba(34, 197, 94, 0.1);
        color: #15803d;
        border: 1px solid rgba(34, 197, 94, 0.2);
      `;
    } else if (props.status === 'beta') {
      return `
        background-color: rgba(249, 115, 22, 0.1);
        color: #ea580c;
        border: 1px solid rgba(249, 115, 22, 0.2);
      `;
    }
    return '';
  }}
`;

const UrlExample = styled.div`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f0f9ff' : '#0c4a6e'};
  border: 1px solid ${props => props.theme.titleColor};
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  
  &:before {
    content: '✅';
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

export const VersioningDocumentation = () => {
  const { currentVersion, versionData, getAllVersions, getCdnUrl, getIntegrity } = useVersion();
  const allVersions = getAllVersions();

  return (
    <DocumentationContainer>
      <PageTitle>UI Heat Versioning Strategy</PageTitle>
      
      <Section>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          UI Heat implements a comprehensive versioning strategy that embeds version information 
          throughout our documentation structure, CDN links, and navigation system. This approach 
          ensures users can reliably reference documentation for specific versions while maintaining 
          security and consistency.
        </p>
      </Section>

      <Section>
        <SectionTitle>Semantic Versioning</SectionTitle>
        <p>UI Heat follows semantic versioning (SemVer) with three version components:</p>
        
        <CodeBlock>
{`MAJOR.MINOR.PATCH
Example: ${versionData.fullVersion}`}
        </CodeBlock>

        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li><strong>MAJOR ({versionData.fullVersion.split('.')[0]})</strong>: Breaking changes and significant new features</li>
          <li><strong>MINOR ({versionData.fullVersion.split('.')[1]})</strong>: New features, backwards compatible</li>
          <li><strong>PATCH ({versionData.fullVersion.split('.')[2]})</strong>: Bug fixes and minor updates</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Available Versions</SectionTitle>
        {allVersions.map((version) => (
          <div key={version.key} style={{ marginBottom: '1rem', padding: '1rem', border: `1px solid ${version.key === currentVersion ? '#E84545' : '#e2e8f0'}`, borderRadius: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <SubTitle style={{ margin: 0 }}>v{version.fullVersion}</SubTitle>
              <VersionBadge status={version.status}>{version.status}</VersionBadge>
              {version.key === currentVersion && <VersionBadge status="stable">Current</VersionBadge>}
            </div>
            <p style={{ margin: '0.5rem 0', color: '#64748b' }}>{version.description}</p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
              Released: {version.releaseDate}
            </p>
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle>URL Structure</SectionTitle>
        
        <SubTitle>Documentation Paths</SubTitle>
        <p>UI Heat embeds the MAJOR.MINOR version directly in documentation URLs:</p>
        
        <UrlExample>
{`https://docs.uiheat.com/docs/{currentVersion}/{section}/{page}/

Examples:
- https://docs.uiheat.com/docs/${currentVersion}/getting-started/introduction/
- https://docs.uiheat.com/docs/${currentVersion}/components/buttons/
- https://docs.uiheat.com/docs/${currentVersion}/layout/grid/`}
        </UrlExample>

        <SubTitle>Key Characteristics</SubTitle>
        <BenefitsList>
          <BenefitItem><strong>Version-locked documentation</strong>: Each MAJOR.MINOR release has its own complete documentation site</BenefitItem>
          <BenefitItem><strong>Immutable URLs</strong>: Documentation URLs remain stable and won't change as new versions are released</BenefitItem>
          <BenefitItem><strong>No patch version in URL</strong>: Only MAJOR.MINOR appears in the path, as patch updates maintain API compatibility</BenefitItem>
        </BenefitsList>
      </Section>

      <Section>
        <SectionTitle>CDN Versioning</SectionTitle>
        
        <SubTitle>Full Version Specification</SubTitle>
        <p>UI Heat CDN links include the complete MAJOR.MINOR.PATCH version:</p>
        
        <CodeBlock>
{`<!-- CSS -->
<link href="${getCdnUrl('css')}" 
      rel="stylesheet" 
      integrity="${getIntegrity('css')}" 
      crossorigin="anonymous">

<!-- JavaScript Bundle -->
<script src="${getCdnUrl('js')}" 
        integrity="${getIntegrity('js')}" 
        crossorigin="anonymous"></script>`}
        </CodeBlock>

        <SubTitle>Subresource Integrity (SRI)</SubTitle>
        <p>Each CDN link includes security features:</p>
        
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li><InlineCode>integrity</InlineCode> attribute: SHA-384 hash of the file contents</li>
          <li><InlineCode>crossorigin</InlineCode> attribute: Enables CORS for integrity checking</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <BenefitsList>
          <BenefitItem>Prevents tampering if CDN is compromised</BenefitItem>
          <BenefitItem>Browser validates file hash before execution</BenefitItem>
          <BenefitItem>Ensures exact version consistency</BenefitItem>
        </BenefitsList>
      </Section>

      <Section>
        <SectionTitle>Navigation and Internal Linking</SectionTitle>
        
        <SubTitle>Version-Locked Navigation</SubTitle>
        <p>All internal documentation links maintain the version prefix:</p>
        
        <CodeBlock>
{`/docs/${currentVersion}/layout/grid/
/docs/${currentVersion}/components/buttons/
/docs/${currentVersion}/examples/
/docs/${currentVersion}/getting-started/installation/`}
        </CodeBlock>

        <SubTitle>Navigation Behavior</SubTitle>
        <p>When users click through the sidebar or follow links:</p>
        <ol style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>They remain within the same version's documentation tree</li>
          <li>Cannot accidentally jump between versions</li>
          <li>All examples and code snippets stay consistent with the selected version</li>
        </ol>

        <SubTitle>Version Switching</SubTitle>
        <p>Users can switch versions through:</p>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Version selector dropdown (in the sidebar)</li>
          <li>Changes the base path from <InlineCode>/docs/{currentVersion}/</InlineCode> to another version</li>
          <li>All subsequent navigation works within the new version</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Benefits of This Approach</SectionTitle>
        
        <SubTitle>For Developers</SubTitle>
        <BenefitsList>
          <BenefitItem><strong>Stable References</strong>: Links to documentation won't break when new versions release</BenefitItem>
          <BenefitItem><strong>Version Accuracy</strong>: Can reference exact version being used in production</BenefitItem>
          <BenefitItem><strong>Migration Support</strong>: Can compare features between versions side-by-side</BenefitItem>
          <BenefitItem><strong>Legacy Support</strong>: Older projects can continue using relevant documentation</BenefitItem>
        </BenefitsList>

        <SubTitle>For Organizations</SubTitle>
        <BenefitsList>
          <BenefitItem><strong>Multiple Versions in Production</strong>: Different teams can use different versions simultaneously</BenefitItem>
          <BenefitItem><strong>Gradual Migration</strong>: Enables phased rollouts across services</BenefitItem>
          <BenefitItem><strong>Audit Trail</strong>: Clear documentation of what was available in each version</BenefitItem>
          <BenefitItem><strong>Compliance</strong>: Can prove what features/behaviors existed at specific points in time</BenefitItem>
        </BenefitsList>

        <SubTitle>For Security</SubTitle>
        <BenefitsList>
          <BenefitItem><strong>Immutable Assets</strong>: Versioned CDN URLs can be cached indefinitely</BenefitItem>
          <BenefitItem><strong>SRI Protection</strong>: Prevents execution of tampered files</BenefitItem>
          <BenefitItem><strong>Explicit Dependencies</strong>: No "floating" versions that could introduce breaking changes</BenefitItem>
        </BenefitsList>
      </Section>

      <Section>
        <SectionTitle>Implementation Example</SectionTitle>
        
        <SubTitle>Complete HTML Template</SubTitle>
        <CodeBlock>
{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>UI Heat Example</title>
    
    <!-- UI Heat ${versionData.fullVersion} CSS -->
    <link href="${getCdnUrl('css')}" 
          rel="stylesheet" 
          integrity="${getIntegrity('css')}" 
          crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, UI Heat ${versionData.fullVersion}!</h1>
    
    <!-- UI Heat ${versionData.fullVersion} JS Bundle -->
    <script src="${getCdnUrl('js')}" 
            integrity="${getIntegrity('js')}" 
            crossorigin="anonymous"></script>
  </body>
</html>`}
        </CodeBlock>

        <SubTitle>Version Upgrade Process</SubTitle>
        <p>When upgrading from one version to another:</p>
        <ol style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Review the new version's documentation</li>
          <li>Check the migration guide and breaking changes</li>
          <li>Update CDN URLs to the new version</li>
          <li>Update integrity hashes for new version</li>
          <li>Test thoroughly before deploying</li>
        </ol>
      </Section>

      <Section>
        <SectionTitle>Best Practices</SectionTitle>
        <BenefitsList>
          <BenefitItem><strong>Always specify exact versions</strong> &nbsp; in production code</BenefitItem>
          <BenefitItem><strong>Use SRI hashes</strong> &nbsp; for all CDN resources</BenefitItem>
          <BenefitItem><strong>Document which version</strong> &nbsp; you're using in your project</BenefitItem>
          <BenefitItem><strong>Pin versions</strong> &nbsp; in package managers and CDN links</BenefitItem>
          <BenefitItem><strong>Test upgrades</strong> &nbsp; in isolated environments before deploying</BenefitItem>
          <BenefitItem><strong>Keep documentation links</strong> &nbsp; version-specific in code comments</BenefitItem>
        </BenefitsList>
      </Section>
    </DocumentationContainer>
  );
};
