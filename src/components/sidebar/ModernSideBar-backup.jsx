import React, { useState } from 'react';
import styled frconst SubNavItem = styled.div`
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
`;ents';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SidebarContainer = styled.div`
  width: 280px;
  height: 100%;
  background-color: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f8fafc' : '#1e293b'};
  border-right: 1px solid ${props => props.theme.pageBackground === '#FFFFFF' ? '#e2e8f0' : '#475569'};
  padding: 1.5rem 0;
  overflow-y: auto;
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
  color: ${props => props.theme.pageBackground === 'white' ? '#64748b' : '#cbd5e1'};
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.theme.pageBackground === 'white' ? 'rgba(220, 101, 139, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
    color: ${props => props.theme.textColor};
  }

  ${props => props.active && `
    background-color: ${props.theme.pageBackground === 'white' ? 'rgba(220, 101, 139, 0.08)' : 'rgba(255, 255, 255, 0.08)'};
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

const ModernSideBar = ({ theme }) => {
  const [expandedSections, setExpandedSections] = useState({
    designSystem: true,
    components: false,
    examples: false,
    documentation: false
  });

  const [activeItem, setActiveItem] = useState('overview');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Badge theme={themeProps}>12</Badge>
            <ArrowIcon isOpen={expandedSections.components} />
          </div>
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
            active={activeItem === 'cards'}
            onClick={() => handleItemClick('cards')}
          >
            Cards
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'forms'}
            onClick={() => handleItemClick('forms')}
          >
            Form Elements
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
            Layout
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'feedback'}
            onClick={() => handleItemClick('feedback')}
          >
            Feedback
          </SubNavItem>
        </SubNavContainer>
      </SidebarSection>

      {/* Examples Section */}
      <SidebarSection>
        <SectionTitle theme={themeProps}>Examples</SectionTitle>
        
        <NavItem 
          theme={themeProps}
          onClick={() => toggleSection('examples')}
        >
          <span>Demo Pages</span>
          <ArrowIcon isOpen={expandedSections.examples} />
        </NavItem>

        <SubNavContainer isOpen={expandedSections.examples}>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'dashboard'}
            onClick={() => handleItemClick('dashboard')}
          >
            Dashboard
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'login'}
            onClick={() => handleItemClick('login')}
          >
            Login Form
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'showcase'}
            onClick={() => handleItemClick('showcase')}
          >
            Component Showcase
          </SubNavItem>
        </SubNavContainer>
      </SidebarSection>

      {/* Documentation Section */}
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
          active={activeItem === 'github'}
          onClick={() => handleItemClick('github')}
        >
          <span>GitHub</span>
        </NavItem>

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
            active={activeItem === 'installation'}
            onClick={() => handleItemClick('installation')}
          >
            Installation
          </SubNavItem>
          <SubNavItem 
            theme={themeProps}
            active={activeItem === 'usage'}
            onClick={() => handleItemClick('usage')}
          >
            Usage Guide
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
            active={activeItem === 'migration'}
            onClick={() => handleItemClick('migration')}
          >
            Migration Guide
          </SubNavItem>
        </SubNavContainer>
      </SidebarSection>

      {/* Theme Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1.5rem',
        right: '1.5rem',
        padding: '0.75rem',
        backgroundColor: theme === 'light' ? 'rgba(220, 101, 139, 0.1)' : 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        fontSize: '0.75rem',
        color: theme === 'light' ? '#64748b' : '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Current Theme</span>
          <span style={{ 
            color: themeProps.titleColor,
            fontWeight: '600',
            textTransform: 'capitalize'
          }}>
            {theme}
          </span>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default ModernSideBar;
