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

const FeatureBox = styled.div`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f0f9ff' : '#0c4a6e'};
  border: 1px solid ${props => props.theme.titleColor};
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
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

const NavigationDemo = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const SidebarDemo = styled.div`
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f8fafc' : '#1e293b'};
  padding: 1rem;
  border-right: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
`;

const ContentDemo = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.pageBackground};
`;

const NavSection = styled.div`
  margin-bottom: 1rem;
`;

const NavSectionTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#64748b' : '#94a3b8'};
  margin-bottom: 0.5rem;
`;

const NavItem = styled.div`
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  
  ${props => props.active && `
    background-color: ${props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.1)' 
      : 'rgba(255, 107, 107, 0.1)'};
    color: ${props.theme.titleColor};
    font-weight: 600;
  `}
  
  &:hover {
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.05)' 
      : 'rgba(255, 107, 107, 0.05)'};
  }
`;

export const SidebarNavigationDocumentation = () => {
  const { currentVersion, versionData } = useVersion();

  return (
    <DocumentationContainer>
      <PageTitle>Sidebar Navigation System</PageTitle>
      
      <Section>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          UI Heat's sidebar navigation system provides a comprehensive, version-aware navigation 
          experience that scales with your documentation needs. Built with accessibility, 
          performance, and user experience in mind.
        </p>
      </Section>

      <Section>
        <SectionTitle>Core Features</SectionTitle>
        
        <FeatureBox>
          <SubTitle style={{ marginTop: 0 }}>🎯 Key Capabilities</SubTitle>
          <BenefitsList>
            <BenefitItem><strong>Version-Aware Navigation</strong>: Automatically adapts to show relevant sections for each version</BenefitItem>
            <BenefitItem><strong>Sticky Positioning</strong>: Remains visible during content scrolling for constant access</BenefitItem>
            <BenefitItem><strong>Collapsible Sections</strong>: Organized hierarchical structure with expand/collapse functionality</BenefitItem>
            <BenefitItem><strong>Active State Tracking</strong>: Visual indicators show current location in documentation</BenefitItem>
            <BenefitItem><strong>Responsive Design</strong>: Optimized for desktop, tablet, and mobile viewports</BenefitItem>
            <BenefitItem><strong>Theme Integration</strong>: Seamlessly adapts to light and dark themes</BenefitItem>
          </BenefitsList>
        </FeatureBox>
      </Section>

      <Section>
        <SectionTitle>Navigation Structure</SectionTitle>
        
        <p>The sidebar navigation is organized into logical sections that adapt based on the selected version:</p>
        
        <NavigationDemo>
          <SidebarDemo>
            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: 0, color: '#E84545', fontSize: '1.125rem' }}>UI Heat</h3>
              <p style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '0.75rem', color: '#64748b' }}>v{versionData.fullVersion}</p>
            </div>
            
            <NavSection>
              <NavSectionTitle>Getting Started</NavSectionTitle>
              <NavItem active>📚 Introduction</NavItem>
              <NavItem>⚡ Installation</NavItem>
              <NavItem>🚀 Quick Start</NavItem>
              <NavItem>🔗 CDN Links</NavItem>
            </NavSection>
            
            <NavSection>
              <NavSectionTitle>Components</NavSectionTitle>
              <NavItem>🔘 Button</NavItem>
              <NavItem>🎴 Card</NavItem>
              <NavItem>📝 Form Controls</NavItem>
              <NavItem>🧭 Navigation</NavItem>
            </NavSection>
            
            <NavSection>
              <NavSectionTitle>Examples</NavSectionTitle>
              <NavItem>📄 Templates</NavItem>
              <NavItem>📊 Dashboard</NavItem>
              <NavItem>🏠 Landing Page</NavItem>
            </NavSection>
          </SidebarDemo>
          
          <ContentDemo>
            <h4 style={{ margin: '0 0 1rem 0', color: '#E84545' }}>Content Area</h4>
            <p>The main content area displays documentation for the selected navigation item. 
            The sidebar remains sticky and accessible while users scroll through long content.</p>
          </ContentDemo>
        </NavigationDemo>
      </Section>

      <Section>
        <SectionTitle>Version-Specific Navigation</SectionTitle>
        
        <p>The navigation structure automatically adapts based on the selected version:</p>
        
        <SubTitle>Version 1.0 Features</SubTitle>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Core component library</li>
          <li>Basic layout utilities</li>
          <li>Essential getting started guides</li>
          <li>Fundamental examples</li>
        </ul>

        <SubTitle>Version 1.1 Additions</SubTitle>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Enhanced accessibility section</li>
          <li>Additional components (Alert, Badge, Progress)</li>
          <li>Responsive design guidelines</li>
          <li>Focus management utilities</li>
        </ul>

        <SubTitle>Version 2.0 Enhancements</SubTitle>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Complete architecture section</li>
          <li>Advanced components (Data Table, Date Picker, Autocomplete)</li>
          <li>Design system documentation</li>
          <li>Performance and testing tools</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Implementation Details</SectionTitle>
        
        <SubTitle>React Component Structure</SubTitle>
        <CodeBlock>
{`import { useVersion } from '../contexts/VersionContext';
import { getNavigationForVersion } from '../data/navigationStructure';

const Sidebar = () => {
  const { currentVersion, getVersionUrl } = useVersion();
  const navigation = getNavigationForVersion(currentVersion);
  
  return (
    <SidebarContainer>
      <VersionSwitcher />
      {navigation.sections.map((section) => (
        <NavigationSection 
          key={section.title}
          section={section}
          currentVersion={currentVersion}
        />
      ))}
    </SidebarContainer>
  );
};`}
        </CodeBlock>

        <SubTitle>CSS Architecture</SubTitle>
        <CodeBlock>
{`const SidebarContainer = styled.div\`
  width: 280px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: \${props => props.theme.pageBackground === '#FFFFFF' 
    ? '#f8fafc' 
    : '#1e293b'};
  border-right: 1px solid \${props => props.theme.borderColor};
  transition: all 0.3s ease;
\`;`}
        </CodeBlock>

        <SubTitle>Navigation Data Structure</SubTitle>
        <CodeBlock>
{`export const NAVIGATION_STRUCTURE = {
  '${currentVersion}': {
    sections: [
      {
        title: 'Getting Started',
        items: [
          { 
            title: 'Introduction', 
            path: '/getting-started/introduction/', 
            icon: '📚' 
          },
          { 
            title: 'Installation', 
            path: '/getting-started/installation/', 
            icon: '⚡' 
          }
          // ... more items
        ]
      }
      // ... more sections
    ]
  }
};`}
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle>Accessibility Features</SectionTitle>
        
        <BenefitsList>
          <BenefitItem><strong>Keyboard Navigation</strong>: Full keyboard support with proper focus management</BenefitItem>
          <BenefitItem><strong>ARIA Labels</strong>: Comprehensive ARIA attributes for screen readers</BenefitItem>
          <BenefitItem><strong>Semantic HTML</strong>: Proper HTML structure with nav, section, and list elements</BenefitItem>
          <BenefitItem><strong>High Contrast</strong>: Color schemes meet WCAG 2.1 AA contrast requirements</BenefitItem>
          <BenefitItem><strong>Focus Indicators</strong>: Clear visual focus indicators for all interactive elements</BenefitItem>
          <BenefitItem><strong>Screen Reader Support</strong>: Optimized for VoiceOver, NVDA, and JAWS</BenefitItem>
        </BenefitsList>

        <SubTitle>ARIA Implementation</SubTitle>
        <CodeBlock>
{`<nav role="navigation" aria-label="Documentation Navigation">
  <div role="group" aria-labelledby="getting-started-heading">
    <h3 id="getting-started-heading">Getting Started</h3>
    <ul role="list">
      <li>
        <a href="/docs/${currentVersion}/getting-started/introduction/" 
           aria-current="page"
           tabIndex="0">
          Introduction
        </a>
      </li>
    </ul>
  </div>
</nav>`}
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle>Performance Optimizations</SectionTitle>
        
        <BenefitsList>
          <BenefitItem><strong>Virtual Scrolling</strong>: Efficient rendering for large navigation trees</BenefitItem>
          <BenefitItem><strong>Lazy Loading</strong>: Section content loaded on demand</BenefitItem>
          <BenefitItem><strong>Memoization</strong>: React.memo and useMemo for optimal re-renders</BenefitItem>
          <BenefitItem><strong>CSS Transitions</strong>: Hardware-accelerated animations</BenefitItem>
          <BenefitItem><strong>Debounced Updates</strong>: Smooth state transitions without performance impact</BenefitItem>
        </BenefitsList>

        <SubTitle>Performance Monitoring</SubTitle>
        <CodeBlock>
{`// Performance metrics tracking
const Sidebar = () => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.log(\`Sidebar render time: \${endTime - startTime}ms\`);
    };
  }, []);
  
  // Component implementation...
};`}
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle>Responsive Behavior</SectionTitle>
        
        <SubTitle>Desktop (≥1024px)</SubTitle>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Fixed 280px width sidebar</li>
          <li>Sticky positioning with full content visibility</li>
          <li>Hover states and detailed tooltips</li>
        </ul>

        <SubTitle>Tablet (768px - 1023px)</SubTitle>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Collapsible sidebar with toggle button</li>
          <li>Overlay mode when expanded</li>
          <li>Touch-optimized interaction targets</li>
        </ul>

        <SubTitle>Mobile (≤767px)</SubTitle>
        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Hidden by default with hamburger menu</li>
          <li>Full-screen overlay when open</li>
          <li>Swipe gestures for navigation</li>
        </ul>

        <CodeBlock>
{`@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}`}
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle>Customization Options</SectionTitle>
        
        <SubTitle>Theme Customization</SubTitle>
        <CodeBlock>
{`const customTheme = {
  sidebar: {
    background: '#f8fafc',
    border: '#e2e8f0',
    text: '#1f2937',
    active: '#E84545',
    hover: 'rgba(232, 69, 69, 0.08)'
  }
};`}
        </CodeBlock>

        <SubTitle>Navigation Structure Override</SubTitle>
        <CodeBlock>
{`const customNavigation = {
  sections: [
    {
      title: 'Custom Section',
      items: [
        { title: 'Custom Page', path: '/custom/', icon: '🎨' }
      ]
    }
  ]
};`}
        </CodeBlock>
      </Section>

      <Section>
        <SectionTitle>Best Practices</SectionTitle>
        
        <BenefitsList>
          <BenefitItem><strong>Consistent Hierarchy</strong>: Maintain logical grouping and nesting levels</BenefitItem>
          <BenefitItem><strong>Clear Labels</strong>: Use descriptive, scannable navigation labels</BenefitItem>
          <BenefitItem><strong>Visual Hierarchy</strong>: Distinguish between sections and items clearly</BenefitItem>
          <BenefitItem><strong>State Management</strong>: Preserve user's navigation state across sessions</BenefitItem>
          <BenefitItem><strong>Search Integration</strong>: Provide search functionality for large navigation trees</BenefitItem>
          <BenefitItem><strong>Analytics Tracking</strong>: Monitor navigation patterns for UX improvements</BenefitItem>
        </BenefitsList>
      </Section>
    </DocumentationContainer>
  );
};
