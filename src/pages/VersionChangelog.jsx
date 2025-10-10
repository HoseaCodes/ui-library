import React from 'react';
import styled from 'styled-components';
import { useVersion } from '../contexts/VersionContext';

const ChangelogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#ffffff' : '#1f2937'};
  color: ${props => props.theme.textColor};
`;

const VersionSection = styled.div`
  margin-bottom: 3rem;
  border-bottom: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#374151'};
  padding-bottom: 2rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const VersionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const VersionNumber = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.textColor};
  margin: 0;
`;

const VersionBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.statusColor};
  color: white;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 1rem;
`;

const ReleaseDate = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#6b7280' : '#9ca3af'};
  margin-left: auto;
`;

const ChangeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ChangeItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.375rem;
    height: 0.375rem;
    background-color: ${props => props.changeType === 'feature' ? '#10b981' : 
                              props.changeType === 'improvement' ? '#3b82f6' : 
                              props.changeType === 'fix' ? '#f59e0b' : '#6b7280'};
    border-radius: 50%;
  }
`;

const ChangeType = styled.span`
  display: inline-block;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 0.5rem;
  background-color: ${props => props.changeType === 'feature' ? '#dcfce7' : 
                              props.changeType === 'improvement' ? '#dbeafe' : 
                              props.changeType === 'fix' ? '#fef3c7' : '#f3f4f6'};
  color: ${props => props.changeType === 'feature' ? '#166534' : 
                   props.changeType === 'improvement' ? '#1e40af' : 
                   props.changeType === 'fix' ? '#92400e' : '#374151'};
`;

const ChangeDescription = styled.span`
  flex: 1;
  line-height: 1.5;
`;

export const VersionChangelog = ({ theme }) => {
  const { versions } = useVersion();
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'stable': return '#10b981';
      case 'enhanced': return '#3b82f6';
      case 'beta': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const changelog = {
    '2.0': {
      changes: [
        { type: 'feature', description: 'Added container queries support for responsive components' },
        { type: 'feature', description: 'New CSS Grid layout system with advanced positioning' },
        { type: 'feature', description: 'Enhanced accessibility with ARIA 1.2 compliance' },
        { type: 'improvement', description: 'Improved performance with lazy loading components' },
        { type: 'improvement', description: 'Better dark mode support with system preference detection' },
        { type: 'fix', description: 'Fixed responsive breakpoints on mobile devices' }
      ]
    },
    '1.1': {
      changes: [
        { type: 'feature', description: 'Added progress bar component with animations' },
        { type: 'feature', description: 'New alert system with multiple variants' },
        { type: 'improvement', description: 'Enhanced button styles with better hover states' },
        { type: 'improvement', description: 'Improved accessibility with better focus indicators' },
        { type: 'fix', description: 'Fixed navigation responsiveness on tablet devices' },
        { type: 'fix', description: 'Resolved color contrast issues in dark mode' }
      ]
    },
    '1.0': {
      changes: [
        { type: 'feature', description: 'Initial release with core component library' },
        { type: 'feature', description: 'Basic button component with multiple variants' },
        { type: 'feature', description: 'Grid system with responsive breakpoints' },
        { type: 'feature', description: 'Typography system with consistent spacing' },
        { type: 'feature', description: 'Color palette with light and dark themes' },
        { type: 'feature', description: 'Documentation site with Storybook integration' }
      ]
    }
  };

  const themeProps = {
    pageBackground: theme === 'light' ? '#FFFFFF' : '#1f2937',
    textColor: theme === 'light' ? '#000000' : '#ffffff'
  };

  return (
    <ChangelogContainer theme={themeProps}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: '700', 
        marginBottom: '2rem',
        color: themeProps.textColor 
      }}>
        UI Heat Changelog
      </h1>
      
      {Object.entries(versions).reverse().map(([key, version]) => (
        <VersionSection key={key} theme={themeProps}>
          <VersionHeader>
            <VersionNumber theme={themeProps}>
              v{version.fullVersion}
            </VersionNumber>
            <VersionBadge statusColor={getStatusColor(version.status)}>
              {version.status}
            </VersionBadge>
            <ReleaseDate theme={themeProps}>
              {version.releaseDate}
            </ReleaseDate>
          </VersionHeader>
          
          <p style={{ 
            color: themeProps.pageBackground === '#FFFFFF' ? '#6b7280' : '#9ca3af',
            marginBottom: '1.5rem',
            fontStyle: 'italic'
          }}>
            {version.description}
          </p>
          
          <ChangeList>
            {changelog[key]?.changes.map((change, index) => (
              <ChangeItem key={index} changeType={change.type}>
                <ChangeType changeType={change.type}>
                  {change.type}
                </ChangeType>
                <ChangeDescription>
                  {change.description}
                </ChangeDescription>
              </ChangeItem>
            ))}
          </ChangeList>
        </VersionSection>
      ))}
    </ChangelogContainer>
  );
};
