import React, { createContext, useContext, useState } from 'react';

const VersionContext = createContext();

// UI Heat Version Configuration
export const UI_HEAT_VERSIONS = {
  '1.0': {
    version: '1.0.1',
    majorMinor: '1.0',
    fullVersion: '1.0.1',
    cdnVersion: '1.0.1',
    integrity: 'sha384-uiheat-1.0.1-placeholder-hash',
    releaseDate: '2024-10-01',
    status: 'stable',
    deprecated: false,
    description: 'Initial stable release with core components'
  },
  '1.1': {
    version: '1.1.0',
    majorMinor: '1.1',
    fullVersion: '1.1.0',
    cdnVersion: '1.1.0',
    integrity: 'sha384-uiheat-1.1.0-placeholder-hash',
    releaseDate: '2024-12-01',
    status: 'stable',
    deprecated: false,
    description: 'Enhanced components with improved accessibility'
  },
  '2.0': {
    version: '2.0.0',
    majorMinor: '2.0',
    fullVersion: '2.0.0',
    cdnVersion: '2.0.0',
    integrity: 'sha384-uiheat-2.0.0-placeholder-hash',
    releaseDate: '2025-03-01',
    status: 'beta',
    deprecated: false,
    description: 'Major redesign with new component architecture'
  }
};

export const CURRENT_VERSION = '1.0';

export const VersionProvider = ({ children }) => {
  const [currentVersion, setCurrentVersion] = useState(CURRENT_VERSION);
  const [versionData, setVersionData] = useState(UI_HEAT_VERSIONS[CURRENT_VERSION]);

  const switchVersion = (version) => {
    if (UI_HEAT_VERSIONS[version]) {
      setCurrentVersion(version);
      setVersionData(UI_HEAT_VERSIONS[version]);
      
      // Update URL to include version
      const currentPath = window.location.pathname;
      const versionPattern = /^\/docs\/\d+\.\d+\//;
      
      let newPath;
      if (versionPattern.test(currentPath)) {
        // Replace existing version in URL
        newPath = currentPath.replace(versionPattern, `/docs/${version}/`);
      } else if (currentPath.startsWith('/docs/')) {
        // Add version to existing docs path
        newPath = `/docs/${version}${currentPath.substring(5)}`;
      } else {
        // Default docs path with version
        newPath = `/docs/${version}/getting-started/`;
      }
      
      window.history.pushState({}, '', newPath);
    }
  };

  const getVersionUrl = (path, version = currentVersion) => {
    return `/docs/${version}${path}`;
  };

  const getCdnUrl = (type = 'css', version = currentVersion) => {
    const versionInfo = UI_HEAT_VERSIONS[version] || versionData;
    const baseUrl = 'https://cdn.jsdelivr.net/npm/uiheat';
    
    switch (type) {
      case 'css':
        return `${baseUrl}@${versionInfo.cdnVersion}/dist/uiheat.min.css`;
      case 'js':
        return `${baseUrl}@${versionInfo.cdnVersion}/dist/uiheat.min.js`;
      default:
        return `${baseUrl}@${versionInfo.cdnVersion}/dist/`;
    }
  };

  const getIntegrity = (type = 'css', version = currentVersion) => {
    const versionInfo = UI_HEAT_VERSIONS[version] || versionData;
    return versionInfo.integrity;
  };

  const getAllVersions = () => {
    return Object.keys(UI_HEAT_VERSIONS).map(key => ({
      key,
      ...UI_HEAT_VERSIONS[key]
    })).sort((a, b) => b.version.localeCompare(a.version));
  };

  const value = {
    currentVersion,
    versionData,
    switchVersion,
    getVersionUrl,
    getCdnUrl,
    getIntegrity,
    getAllVersions,
    UI_HEAT_VERSIONS
  };

  return (
    <VersionContext.Provider value={value}>
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = () => {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error('useVersion must be used within a VersionProvider');
  }
  return context;
};
