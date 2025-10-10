import React from 'react';
import { useVersion } from '../../contexts/VersionContext';

export const SimpleVersionSelector = ({ theme }) => {
  const { versionData, switchVersion, versions } = useVersion();

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

  const isLight = theme === 'light';

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
      <select
        value={versionData.majorMinor}
        onChange={handleVersionChange}
        style={{
          padding: '0.5rem',
          borderRadius: '0.375rem',
          border: `1px solid ${isLight ? '#d1d5db' : '#4b5563'}`,
          backgroundColor: isLight ? '#f9fafb' : '#374151',
          color: isLight ? '#000000' : '#ffffff',
          fontSize: '0.875rem',
          cursor: 'pointer',
          marginRight: '0.5rem'
        }}
        aria-label="Select UI Heat version"
      >
        {Object.entries(versions).map(([key, version]) => (
          <option key={key} value={key}>
            v{version.fullVersion}
          </option>
        ))}
      </select>
      
      <span
        style={{
          display: 'inline-block',
          padding: '0.25rem 0.5rem',
          backgroundColor: getStatusColor(versionData.status),
          color: 'white',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          fontWeight: '500'
        }}
        title={`Released: ${versionData.releaseDate}`}
      >
        {versionData.status}
      </span>
    </div>
  );
};
