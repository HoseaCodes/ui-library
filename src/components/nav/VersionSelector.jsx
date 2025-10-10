import React from 'react';
import { useVersion } from '../../contexts/VersionContext';
import styled from 'styled-components';

const VersionSelectWrapper = styled.div`
  position: relative;
  margin-left: 1rem;
`;

const VersionSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme.borderColor || (props.isLight ? '#d1d5db' : '#4b5563')};
  background-color: ${props => props.theme.selectBackground || (props.isLight ? '#f9fafb' : '#374151')};
  color: ${props => props.theme.textColor || (props.isLight ? '#000000' : '#ffffff')};
  font-size: 0.875rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
  min-width: 80px;
  
  &:focus {
    outline: 2px solid ${props => props.isLight ? '#3b82f6' : '#60a5fa'};
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${props => props.isLight ? '#f3f4f6' : '#4b5563'};
  }
`;

const VersionBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.statusColor};
  color: white;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 0.5rem;
  position: relative;
  cursor: help;
  
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1f2937;
    color: white;
    padding: 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    white-space: nowrap;
    z-index: 1000;
    margin-bottom: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  &:hover::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: #1f2937;
    z-index: 1000;
  }
`;

export const VersionSelector = ({ theme }) => {
  const { versionData, switchVersion, versions } = useVersion();
  const isLight = theme === 'light';

  const handleVersionChange = (e) => {
    const selectedVersion = e.target.value;
    switchVersion(selectedVersion);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'stable': return '#10b981';
      case 'enhanced': return '#3b82f6';
      case 'beta': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <VersionSelectWrapper>
      <VersionSelect
        value={versionData.majorMinor}
        onChange={handleVersionChange}
        isLight={isLight}
        theme={{
          borderColor: isLight ? '#d1d5db' : '#4b5563',
          selectBackground: isLight ? '#f9fafb' : '#374151',
          textColor: isLight ? '#000000' : '#ffffff'
        }}
        aria-label="Select UI Heat version"
      >
        {Object.entries(versions).map(([key, version]) => (
          <option key={key} value={key}>
            v{version.fullVersion}
          </option>
        ))}
      </VersionSelect>
      <VersionBadge 
        statusColor={getStatusColor(versionData.status)}
        data-tooltip={`Released: ${versionData.releaseDate}`}
      >
        {versionData.status}
      </VersionBadge>
    </VersionSelectWrapper>
  );
};
