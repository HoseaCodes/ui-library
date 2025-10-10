import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useVersion } from '../../contexts/VersionContext';
import { getNavigationForVersion } from '../../data/navigationStructure';

const SidebarContainer = styled.div`
  width: 280px;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f8fafc' : '#1e293b'};
  border-right: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  padding: 1.5rem 0;
  overflow-y: auto;
  flex-shrink: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 260px;
  }
`;

const SidebarSection = styled.div`
  margin-bottom: 1rem;
  `;
  
  const SectionTitle = styled.h3`
  padding-top: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#64748b' : '#94a3b8'};
  margin: 0 0 0.75rem 1.5rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.theme.textColor};
  font-weight: 500;
  
  &:hover {
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.08)' 
      : 'rgba(255, 107, 107, 0.08)'};
    color: ${props => props.theme.titleColor};
  }

  ${props => props.active && `
    background-color: ${props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.1)' 
      : 'rgba(255, 107, 107, 0.1)'};
    color: ${props.theme.titleColor};
    border-right: 3px solid ${props.theme.titleColor};
  `}
`;

const SubNavContainer = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#fafbfc' : '#0f172a'};
`;

const SubNavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.theme.textColor};
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.05)' 
      : 'rgba(255, 107, 107, 0.05)'};
    color: ${props => props.theme.titleColor};
  }

  ${props => props.active && `
    background-color: ${props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.08)' 
      : 'rgba(255, 107, 107, 0.08)'};
    color: ${props.theme.titleColor};
    font-weight: 600;
  `}
`;

const ArrowIcon = styled(MdKeyboardArrowRight)`
  transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease;
  font-size: 1.125rem;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#64748b' : '#94a3b8'};
`;

const ModernSideBar = ({ theme, currentView, setCurrentView, currentPage, setCurrentPage }) => {
  const { currentVersion, getVersionUrl } = useVersion();
  const navigation = getNavigationForVersion(currentVersion);
  const [expandedSections, setExpandedSections] = useState({
    'Getting Started': true,
    'Components': false,
    'Layout': false,
    'Utilities': false,
    'Accessibility': false,
    'Customization': false,
    'Examples': true,
    'Architecture': false,
    'demos': true,
    'documentation': true
  });

  const [activeItem, setActiveItem] = useState(currentView || 'showcase');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    
    // Handle special documentation pages
    if (item === 'versioning-docs') {
      setCurrentPage('versioning');
      return;
    }
    
    if (item === 'sidebar-navigation-docs') {
      setCurrentPage('sidebar-nav');
      return;
    }
    
    // Handle version-specific content pages
    if (item === 'introduction') {
      setCurrentPage('introduction');
      return;
    }
    
    if (item === 'installation') {
      setCurrentPage('installation');
      return;
    }
    
    if (item === 'version-history') {
      setCurrentPage('changelog');
      return;
    }
    
    if (item === 'button') {
      setCurrentPage('buttons');
      return;
    }
    
    if (item === 'grid-system') {
      setCurrentPage('grid-system');
      return;
    }
    
    // If it's a demo view, update the current view
    if (['showcase', 'dashboard', 'login'].includes(item) && setCurrentView) {
      setCurrentView(item);
      setCurrentPage('demo');
    }
    
    // For actual documentation navigation, we'd navigate to the versioned URL
    if (path && !['showcase', 'dashboard', 'login'].includes(item)) {
      const versionedUrl = getVersionUrl(path);
      console.log('Navigating to:', versionedUrl);
      // In a real app, you'd use React Router here: navigate(versionedUrl);
    }
  };

  const themeProps = {
    pageBackground: theme === 'light' ? '#FFFFFF' : '#282c36',
    textColor: theme === 'light' ? 'black' : 'white',
    titleColor: theme === 'light' ? '#E84545' : '#FF6B6B'
  };

  return (
    <SidebarContainer theme={themeProps}>
      {/* Header with Version Switcher */}
      <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderBottom: `1px solid ${theme === 'light' ? '#e2e8f0' : '#475569'}` }}>
        <h2 style={{ 
          margin: '0 0 0.5rem 0', 
          color: themeProps.titleColor,
          fontSize: '1.25rem',
          fontWeight: '700'
        }}>
          UI Heat
        </h2>
        <p style={{ 
          margin: '0 0 1rem 0', 
          color: theme === 'light' ? '#64748b' : '#94a3b8',
          fontSize: '0.875rem'
        }}>
          Modern Design System
        </p>
      </div>
      
      {/* Version-Specific Navigation */}
      {navigation.sections.map((section) => (
        <SidebarSection key={section.title}>
          <SectionTitle theme={themeProps}>{section.title}</SectionTitle>
          
          <NavItem 
            theme={themeProps}
            onClick={() => toggleSection(section.title)}
          >
            <span>{section.title}</span>
            <ArrowIcon isOpen={expandedSections[section.title]} />
          </NavItem>

          <SubNavContainer isOpen={expandedSections[section.title]}>
            {section.items.map((item) => (
              <SubNavItem 
                key={item.title}
                theme={themeProps}
                active={activeItem === item.title.toLowerCase().replace(/\s+/g, '-')}
                onClick={() => handleItemClick(item.title.toLowerCase().replace(/\s+/g, '-'), item.path)}
              >
                <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
                {item.title}
              </SubNavItem>
            ))}
          </SubNavContainer>
        </SidebarSection>
      ))}

      {/* Demo Examples Section (for current UI showcase) */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>Live Demos</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('demos')}
        >
          <span>Interactive Demos</span>
          <ArrowIcon isOpen={expandedSections.demos} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.demos}>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'showcase'}
            onClick={() => handleItemClick('showcase')}
          >
            <span style={{ marginRight: '0.5rem' }}>🎨</span>
            Component Showcase
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'dashboard'}
            onClick={() => handleItemClick('dashboard')}
          >
            <span style={{ marginRight: '0.5rem' }}>📊</span>
            Dashboard Demo
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'login'}
            onClick={() => handleItemClick('login')}
          >
            <span style={{ marginRight: '0.5rem' }}>🔐</span>
            Login Form Demo
          </SubNavItem>
        </SubNavContainer>
      </SidebarSection>

      {/* UI Heat Documentation Section */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>UI Heat Docs</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('documentation')}
        >
          <span>Documentation</span>
          <ArrowIcon isOpen={expandedSections.documentation} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.documentation}>
          <SubNavItem 
            theme={themeProps}
            active={currentPage === 'versioning'}
            onClick={() => handleItemClick('versioning-docs')}
          >
            <span style={{ marginRight: '0.5rem' }}>📋</span>
            Versioning Strategy
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={currentPage === 'sidebar-nav'}
            onClick={() => handleItemClick('sidebar-navigation-docs')}
          >
            <span style={{ marginRight: '0.5rem' }}>🧭</span>
            Sidebar Navigation
          </SubNavItem>
        </SubNavContainer>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default ModernSideBar;
