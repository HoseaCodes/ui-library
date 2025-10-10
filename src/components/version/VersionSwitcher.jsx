import React from 'react';
import styled from 'styled-components';
import { useVersion } from '../../contexts/VersionContext';

const VersionSelector = styled.div`
  position: relative;
  display: inline-block;
`;

const VersionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f8fafc' : '#1e293b'};
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  border-radius: 0.375rem;
  color: ${props => props.theme.textColor};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.08)' 
      : 'rgba(255, 107, 107, 0.08)'};
    border-color: ${props => props.theme.titleColor};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.titleColor};
    outline-offset: 2px;
  }
`;

const VersionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  
  ${props => {
    if (props.status === 'stable') {
      return `
        background-color: rgba(34, 197, 94, 0.1);
        color: #15803d;
      `;
    } else if (props.status === 'beta') {
      return `
        background-color: rgba(249, 115, 22, 0.1);
        color: #ea580c;
      `;
    } else if (props.status === 'deprecated') {
      return `
        background-color: rgba(239, 68, 68, 0.1);
        color: #dc2626;
      `;
    }
    return '';
  }}
`;

const VersionDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  background-color: ${props => props.theme.pageBackground};
  border: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  min-width: 280px;
  max-height: 400px;
  overflow-y: auto;
`;

const VersionOption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#f1f5f9' : '#334155'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.05)' 
      : 'rgba(255, 107, 107, 0.05)'};
  }

  ${props => props.isSelected && `
    background-color: ${props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.1)' 
      : 'rgba(255, 107, 107, 0.1)'};
  `}
`;

const VersionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const VersionTitle = styled.span`
  font-weight: 600;
  color: ${props => props.theme.textColor};
`;

const VersionDescription = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#64748b' : '#94a3b8'};
`;

const VersionReleaseDate = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#64748b' : '#94a3b8'};
  margin-top: 0.25rem;
`;

export const VersionSwitcher = ({ showInSidebar = false }) => {
  const { currentVersion, versionData, switchVersion, getAllVersions } = useVersion();
  const [isOpen, setIsOpen] = React.useState(false);
  const versions = getAllVersions();

  const handleVersionChange = (version) => {
    switchVersion(version);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('[data-version-selector]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <VersionSelector data-version-selector>
      <VersionButton onClick={toggleDropdown}>
        <span>v{versionData.fullVersion}</span>
        <VersionBadge status={versionData.status}>
          {versionData.status}
        </VersionBadge>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </VersionButton>

      {isOpen && (
        <VersionDropdown>
          {versions.map((version) => (
            <VersionOption
              key={version.key}
              isSelected={currentVersion === version.key}
              onClick={() => handleVersionChange(version.key)}
            >
              <VersionHeader>
                <VersionTitle>v{version.fullVersion}</VersionTitle>
                <VersionBadge status={version.status}>
                  {version.status}
                </VersionBadge>
              </VersionHeader>
              <VersionDescription>{version.description}</VersionDescription>
              <VersionReleaseDate>Released: {version.releaseDate}</VersionReleaseDate>
            </VersionOption>
          ))}
        </VersionDropdown>
      )}
    </VersionSelector>
  );
};
