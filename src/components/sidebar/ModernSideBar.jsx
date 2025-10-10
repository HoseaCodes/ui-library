import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
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
      ? 'rgba(232, 69, 69, 0.12)' 
      : 'rgba(255, 107, 107, 0.12)'};
    color: ${props.theme.titleColor};
    border-right: 3px solid ${props.theme.titleColor};
  `}
`;

const SubNavItem = styled.div`
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#64748b' : '#cbd5e1'};
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.05)' 
      : 'rgba(255, 107, 107, 0.05)'};
    color: ${props => props.theme.textColor};
  }

  ${props => props.active && `
    background-color: ${props.theme.pageBackground === '#FFFFFF' 
      ? 'rgba(232, 69, 69, 0.08)' 
      : 'rgba(255, 107, 107, 0.08)'};
    color: ${props.theme.titleColor};
  `}
`;

const SubNavContainer = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const ArrowIcon = styled(MdKeyboardArrowRight)`
  font-size: 1.25rem;
  transition: transform 0.2s ease;
  ${props => props.isOpen && 'transform: rotate(90deg);'}
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  background-color: ${props => props.theme.titleColor};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0 0.375rem;
`;

const ModernSideBar = ({ theme, currentView, setCurrentView }) => {
  const [expandedSections, setExpandedSections] = useState({
    designSystem: true,
    components: false,
    examples: true, // Open examples by default to show the demo options
    documentation: false
  });

  const [activeItem, setActiveItem] = useState(currentView || 'showcase');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    // If it's a demo view, update the current view
    if (['showcase', 'dashboard', 'login'].includes(item) && setCurrentView) {
      setCurrentView(item);
    }
  };

  const themeProps = {
    pageBackground: theme === 'light' ? '#FFFFFF' : '#282c36',
    textColor: theme === 'light' ? 'black' : 'white',
    titleColor: theme === 'light' ? '#E84545' : '#FF6B6B'
  };

  return (
    <SidebarContainer theme={themeProps}>
      {/* Header */}
      <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderBottom: `1px solid ${theme === 'light' ? '#e2e8f0' : '#475569'}` }}>
        <h2 style={{ 
          margin: 0, 
          color: themeProps.titleColor,
          fontSize: '1.25rem',
          fontWeight: '700'
        }}>
          UI Heat
        </h2>
        <p style={{ 
          margin: '0.25rem 0 0 0', 
          color: theme === 'light' ? '#64748b' : '#94a3b8',
          fontSize: '0.875rem'
        }}>
          Modern Design System
        </p>
      </div>
      
      
      {/* Documentation Section */}
      <SidebarSection>
        <SectionTitle style={{ paddingTop: '1rem' }} theme={themeProps}>Documentation</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('documentation')}
        >
          <span>Getting Started</span>
          <ArrowIcon isOpen={expandedSections.documentation} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.documentation}>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'installation'}
            onClick={() => handleItemClick('installation')}
          >
            Installation
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'quickstart'}
            onClick={() => handleItemClick('quickstart')}
          >
            Quick Start Guide
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'customization'}
            onClick={() => handleItemClick('customization')}
          >
            Customization
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'theming'}
            onClick={() => handleItemClick('theming')}
          >
            Theming Guide
          </SubNavItem>
        </SubNavContainer>

        <NavItem 
          theme={themeProps}
          active={activeItem === 'api'}
          onClick={() => handleItemClick('api')}
        >
          <span>API Reference</span>
        </NavItem>

        <NavItem 
          theme={themeProps}
          active={activeItem === 'changelog'}
          onClick={() => handleItemClick('changelog')}
        >
          <span>Changelog</span>
        </NavItem>
      </SidebarSection>

      {/* Design System Section */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>Design System</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          active={activeItem === 'overview'}
          onClick={() => handleItemClick('overview')}
        >
          <span>Overview</span>
        </NavItem>

        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('designSystem')}
        >
          <span>Foundation</span>
          <ArrowIcon isOpen={expandedSections.designSystem} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.designSystem}>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'colors'}
            onClick={() => handleItemClick('colors')}
          >
            Colors & Themes
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'typography'}
            onClick={() => handleItemClick('typography')}
          >
            Typography
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'spacing'}
            onClick={() => handleItemClick('spacing')}
          >
            Spacing & Layout
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'utilities'}
            onClick={() => handleItemClick('utilities')}
          >
            Utility Classes
          </SubNavItem>
        </SubNavContainer>
      </SidebarSection>

      {/* Components Section */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>Components</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('components')}
        >
          <span>UI Components</span>
          <ArrowIcon isOpen={expandedSections.components} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.components}>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'buttons'}
            onClick={() => handleItemClick('buttons')}
          >
            Buttons
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'forms'}
            onClick={() => handleItemClick('forms')}
          >
            Forms & Inputs
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'navigation'}
            onClick={() => handleItemClick('navigation')}
          >
            Navigation
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'layout'}
            onClick={() => handleItemClick('layout')}
          >
            Layout Components
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'feedback'}
            onClick={() => handleItemClick('feedback')}
          >
            Feedback & Status
          </SubNavItem>
        </SubNavContainer>

        <NavItem 
          theme={themeProps}
          active={activeItem === 'patterns'}
          onClick={() => handleItemClick('patterns')}
        >
          <span>Design Patterns</span>
        </NavItem>
      </SidebarSection>

      {/* Examples Section */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>Examples</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('examples')}
        >
          <span>Live Examples</span>
          <ArrowIcon isOpen={expandedSections.examples} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.examples}>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'showcase'}
            onClick={() => handleItemClick('showcase')}
          >
            Component Showcase
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'dashboard'}
            onClick={() => handleItemClick('dashboard')}
          >
            Dashboard Demo
            <Badge theme={themeProps}>New</Badge>
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'login'}
            onClick={() => handleItemClick('login')}
          >
            Login Demo
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'ecommerce'}
            onClick={() => handleItemClick('ecommerce')}
          >
            E-commerce UI
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'blog'}
            onClick={() => handleItemClick('blog')}
          >
            Blog Layout
          </SubNavItem>
        </SubNavContainer>

        <NavItem 
          theme={themeProps}
          active={activeItem === 'templates'}
          onClick={() => handleItemClick('templates')}
        >
          <span>Page Templates</span>
          <Badge theme={themeProps}>12</Badge>
        </NavItem>
      </SidebarSection>

      {/* Resources Section */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>Resources</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          active={activeItem === 'storybook'}
          onClick={() => handleItemClick('storybook')}
        >
          <span>Storybook</span>
        </NavItem>

        <NavItem 
          theme={themeProps}
          active={activeItem === 'figma'}
          onClick={() => handleItemClick('figma')}
        >
          <span>Figma Kit</span>
        </NavItem>

        <NavItem 
          theme={themeProps}
          active={activeItem === 'github'}
          onClick={() => handleItemClick('github')}
        >
          <span>GitHub</span>
        </NavItem>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default ModernSideBar;
