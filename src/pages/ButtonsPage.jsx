import React, { useState } from 'react';
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

const ButtonShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`;

const DemoButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: #E84545;
          color: white;
          &:hover { background-color: #dc3545; }
        `;
      case 'secondary':
        return `
          background-color: #6c757d;
          color: white;
          &:hover { background-color: #5a6268; }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #E84545;
          border: 2px solid #E84545;
          &:hover { background-color: #E84545; color: white; }
        `;
      default:
        return `
          background-color: #f8f9fa;
          color: #212529;
          &:hover { background-color: #e9ecef; }
        `;
    }
  }}
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
`;

const ComponentCard = styled.div`
  padding: 1.5rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#ffffff' : '#374151'};
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#4b5563'};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  
  ${props => {
    if (props.status === 'new') {
      return `
        background-color: rgba(34, 197, 94, 0.1);
        color: #15803d;
      `;
    } else if (props.status === 'updated') {
      return `
        background-color: rgba(59, 130, 246, 0.1);
        color: #1d4ed8;
      `;
    }
    return '';
  }}
`;

const Alert = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  
  ${props => {
    switch (props.variant) {
      case 'success':
        return `
          background-color: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #15803d;
        `;
      case 'warning':
        return `
          background-color: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: #92400e;
        `;
      case 'error':
        return `
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #dc2626;
        `;
      default:
        return `
          background-color: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #1d4ed8;
        `;
    }
  }}
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#4b5563'};
  border-radius: 0.25rem;
  overflow: hidden;
  margin: 1rem 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #E84545;
  width: ${props => props.value}%;
  transition: width 0.3s ease;
`;

export const ButtonsPage = () => {
  const { currentVersion, versionData } = useVersion();
  const [progress, setProgress] = useState(65);

  return (
    <PageContainer>
      <PageTitle>Button Components</PageTitle>
      
      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>Button Variants</h2>
        <p style={{ marginBottom: '1rem' }}>
          UI Heat {versionData.fullVersion} provides a comprehensive set of button styles for all your needs.
        </p>
        
        <ButtonShowcase>
          <DemoButton variant="primary">Primary Button</DemoButton>
          <DemoButton variant="secondary">Secondary Button</DemoButton>
          <DemoButton variant="outline">Outline Button</DemoButton>
          <DemoButton>Default Button</DemoButton>
        </ButtonShowcase>
      </Section>

      <ComponentGrid>
        <ComponentCard>
          <h3 style={{ color: '#E84545', marginBottom: '1rem' }}>Basic Components</h3>
          <p style={{ marginBottom: '1rem' }}>Core UI elements available in all versions:</p>
          <ul style={{ lineHeight: 1.6 }}>
            <li>Buttons (Primary, Secondary, Outline, Ghost)</li>
            <li>Cards with headers and actions</li>
            <li>Form inputs and controls</li>
            <li>Navigation components</li>
            <li>Modal dialogs</li>
            <li>Tooltips and dropdowns</li>
          </ul>
        </ComponentCard>

        {currentVersion !== '1.0' && (
          <ComponentCard>
            <h3 style={{ color: '#E84545', marginBottom: '1rem' }}>
              Enhanced Components
              <Badge status="new">v1.1+</Badge>
            </h3>
            <p style={{ marginBottom: '1rem' }}>Additional components introduced in version 1.1:</p>
            
            <Alert variant="success">
              <strong>Success:</strong> Operation completed successfully!
            </Alert>
            
            <Alert variant="warning">
              <strong>Warning:</strong> Please review your settings.
            </Alert>
            
            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Progress: {progress}%
              </label>
              <ProgressBar>
                <ProgressFill value={progress} />
              </ProgressBar>
              <button 
                onClick={() => setProgress(Math.min(100, progress + 10))}
                style={{ 
                  padding: '0.5rem 1rem', 
                  marginRight: '0.5rem',
                  backgroundColor: '#E84545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.25rem',
                  cursor: 'pointer'
                }}
              >
                Increase
              </button>
              <button 
                onClick={() => setProgress(Math.max(0, progress - 10))}
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.25rem',
                  cursor: 'pointer'
                }}
              >
                Decrease
              </button>
            </div>
          </ComponentCard>
        )}

        {currentVersion === '2.0' && (
          <ComponentCard>
            <h3 style={{ color: '#E84545', marginBottom: '1rem' }}>
              Advanced Components
              <Badge status="new">v2.0</Badge>
            </h3>
            <p style={{ marginBottom: '1rem' }}>Cutting-edge components in version 2.0:</p>
            <ul style={{ lineHeight: 1.6 }}>
              <li>Data Table with sorting and filtering</li>
              <li>Date Picker with calendar view</li>
              <li>Autocomplete with async search</li>
              <li>File Upload with drag & drop</li>
              <li>Rich Text Editor</li>
              <li>Chart components</li>
            </ul>
            
            <Alert variant="info">
              <strong>New in 2.0:</strong> All components now include built-in analytics tracking and performance monitoring.
            </Alert>
          </ComponentCard>
        )}
      </ComponentGrid>

      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>Usage Guidelines</h2>
        <p style={{ marginBottom: '1rem' }}>Best practices for using UI Heat components:</p>
        
        <ul style={{ lineHeight: 1.6, marginLeft: '1.5rem' }}>
          <li><strong>Consistency:</strong> Use the same button variants throughout your application</li>
          <li><strong>Hierarchy:</strong> Primary buttons for main actions, secondary for supporting actions</li>
          <li><strong>Accessibility:</strong> All components include proper ARIA labels and keyboard support</li>
          {currentVersion !== '1.0' && <li><strong>Focus Management:</strong> Enhanced keyboard navigation in v1.1+</li>}
          {currentVersion === '2.0' && <li><strong>Performance:</strong> Optimized rendering with virtual scrolling where applicable</li>}
        </ul>
      </Section>

      <Section>
        <h2 style={{ color: '#E84545', marginBottom: '1rem' }}>Version Information</h2>
        <p style={{ marginBottom: '1rem' }}>
          You are currently viewing the button documentation for UI Heat <strong>{versionData.fullVersion}</strong>.
        </p>
        <p style={{ fontStyle: 'italic', color: '#64748b' }}>
          {versionData.description}
        </p>
      </Section>
    </PageContainer>
  );
};
