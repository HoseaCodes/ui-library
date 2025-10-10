import styled from 'styled-components';

// Design System Base Styles
const DesignSystemBase = styled.div`
  /* CSS Variables for Light Theme */
  --primary: #E84545; /* Primary Red */
  --primary-50: #fff5f5;
  --primary-100: #fee2e2;
  --primary-200: #fecaca;
  --primary-300: #fca5a5;
  --primary-400: #f87171;
  --primary-500: #E84545;
  --primary-600: #C62828; /* Deep Red */
  --primary-700: #b91c1c;
  --primary-800: #991b1b;
  --primary-900: #7f1d1d;

  /* Red Palette Variations */
  --coral-red: #EF5350;
  --light-coral: #FF6B6B;
  --deep-red: #C62828;

  --background: ${props => props.theme.pageBackground};
  --surface: ${props => props.theme.pageBackground === '#FFFFFF' ? '#f9fafb' : '#262626'};
  --surface-raised: ${props => props.theme.pageBackground === '#FFFFFF' ? '#FFFFFF' : '#404040'};
  --text-primary: ${props => props.theme.textColor};
  --text-secondary: ${props => props.theme.pageBackground === '#FFFFFF' ? '#6b7280' : '#d1d5db'};
  --text-muted: ${props => props.theme.pageBackground === '#FFFFFF' ? '#9ca3af' : '#9ca3af'};
  --border: ${props => props.theme.pageBackground === '#FFFFFF' ? '#e5e7eb' : '#525252'};
  --border-strong: ${props => props.theme.pageBackground === '#FFFFFF' ? '#d1d5db' : '#737373'};

  --accent: ${props => props.theme.hoverColor};
  --accent-light: ${props => props.theme.pageBackground === '#FFFFFF' ? '#fee2e2' : '#2c1a1a'};
  --tagline: ${props => props.theme.tagLineColor};
  --success: ${props => props.theme.pageBackground === '#FFFFFF' ? '#10b981' : '#34d399'};
  --warning: #f59e0b;
  --error: ${props => props.theme.pageBackground === '#FFFFFF' ? '#E84545' : '#FF6B6B'};
  --info: ${props => props.theme.pageBackground === '#FFFFFF' ? '#3b82f6' : '#60a5fa'};

  --focus: ${props => props.theme.pageBackground === '#FFFFFF' ? '#3b82f6' : '#60a5fa'};
  --hover-overlay: ${props => props.theme.pageBackground === '#FFFFFF' ? 'rgba(232, 69, 69, 0.08)' : 'rgba(255, 107, 107, 0.08)'};
  --active-overlay: ${props => props.theme.pageBackground === '#FFFFFF' ? 'rgba(232, 69, 69, 0.12)' : 'rgba(255, 107, 107, 0.12)'};

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

// Button Component
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  
  /* Minimum touch target size for mobile */
  min-height: 44px;
  
  /* Sizes */
  ${props => {
    switch (props.size) {
      case 'sm': return 'padding: 0.5rem 0.75rem; font-size: 0.875rem;';
      case 'lg': return 'padding: 0.75rem 1.5rem; font-size: 1rem;';
      default: return 'padding: 0.625rem 1rem; font-size: 0.875rem;';
    }
  }}

  /* Mobile touch optimization */
  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.size) {
        case 'sm': return '0.625rem 0.875rem';
        case 'lg': return '0.875rem 1.75rem';
        default: return '0.75rem 1.25rem';
      }
    }};
  }

  /* Variants */
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
          &:hover { background-color: var(--primary-600); }
        `;
      case 'secondary':
        return `
          background-color: transparent;
          color: var(--text-primary);
          border-color: var(--border-strong);
          &:hover { background-color: var(--hover-overlay); }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: var(--text-secondary);
          border-color: transparent;
          &:hover { 
            background-color: var(--hover-overlay);
            color: var(--text-primary);
          }
        `;
      default:
        return `
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
          &:hover { background-color: var(--primary-600); }
        `;
    }
  }}

  &:focus {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Card Component
const Card = styled.div`
  background-color: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-top: 1px solid var(--border);
  margin-top: 1rem;
  padding-top: 1rem;
`;

// Input Component
const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background-color: var(--surface-raised);
  color: var(--text-primary);
  transition: all 0.2s ease;
  font-size: 0.875rem;
  
  /* Mobile optimization for better touch targets */
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.875rem;
    font-size: 1rem; /* Prevents zoom on iOS */
  }

  &:focus {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
    border-color: var(--focus);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

// Container Component
const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 480px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

// Grid Component
const Grid = styled.div`
  display: grid;
  gap: 1rem;
  
  ${props => {
    const cols = props.cols || 1;
    return `grid-template-columns: repeat(${cols}, minmax(0, 1fr));`;
  }}

  @media (max-width: 480px) {
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    ${props => props.smCols && `grid-template-columns: repeat(${props.smCols}, minmax(0, 1fr));`}
  }

  @media (min-width: 768px) {
    ${props => props.mdCols && `grid-template-columns: repeat(${props.mdCols}, minmax(0, 1fr));`}
  }

  @media (min-width: 1024px) {
    ${props => props.lgCols && `grid-template-columns: repeat(${props.lgCols}, minmax(0, 1fr));`}
  }
`;

// Typography Components
const Heading = styled.h1`
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  
  ${props => {
    switch (props.level) {
      case 1: return `
        font-size: clamp(1.875rem, 4vw, 2.25rem); 
        line-height: 1.2;
      `;
      case 2: return `
        font-size: clamp(1.5rem, 3.5vw, 1.875rem); 
        line-height: 1.25;
      `;
      case 3: return `
        font-size: clamp(1.25rem, 3vw, 1.5rem); 
        line-height: 1.3;
      `;
      case 4: return `
        font-size: clamp(1.125rem, 2.5vw, 1.25rem); 
        line-height: 1.35;
      `;
      case 5: return `
        font-size: clamp(1rem, 2vw, 1.125rem); 
        line-height: 1.4;
      `;
      case 6: return `
        font-size: clamp(0.875rem, 1.5vw, 1rem); 
        line-height: 1.45;
      `;
      default: return `
        font-size: clamp(1.875rem, 4vw, 2.25rem); 
        line-height: 1.2;
      `;
    }
  }}
`;

const Text = styled.p`
  color: var(--text-secondary);
  margin: 0;
  font-size: ${props => {
    switch (props.size) {
      case 'xs': return '0.75rem';
      case 'sm': return '0.875rem';
      case 'lg': return '1.125rem';
      case 'xl': return '1.25rem';
      default: return '1rem';
    }
  }};
  
  ${props => props.muted && 'color: var(--text-muted);'}
  ${props => props.primary && 'color: var(--text-primary);'}
`;

// Navigation Component
const Nav = styled.nav`
  background-color: var(--surface-raised);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--surface-raised);
  border-top: 1px solid var(--border);
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

// Export all components
export {
  DesignSystemBase,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Label,
  Container,
  Grid,
  Heading,
  Text,
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu
};
