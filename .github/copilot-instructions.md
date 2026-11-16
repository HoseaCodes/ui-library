# GitHub Copilot Instructions

This document provides guidelines for GitHub Copilot to assist effectively with the UI Heat component library project.

## Project Summary

**UI Heat** is a beginner-friendly React component library designed for easier web development. The project consists of:

- **Main Application**: A React showcase app demonstrating the component library
- **Component Library Package**: Reusable UI components built with React, styled-components, and CSS
- **Documentation**: Storybook for component documentation and a Docusaurus-based docs site
- **Build System**: Rollup for library bundling, Create React App for the demo application

The project follows a monorepo-like structure with the main demo app in the root and the publishable library in the `/packages` directory.

## Coding Style & Architecture

### React Component Patterns
- **Prefer functional components** with React hooks over class components
- **Use styled-components** for component styling alongside CSS files
- **Follow the compound component pattern** for complex UI elements
- **Implement proper PropTypes** for all component props with detailed documentation

### File Structure & Naming
```
src/
├── components/           # Reusable components
│   ├── ComponentName/
│   │   ├── ComponentName.jsx
│   │   ├── componentName.css
│   │   └── index.js     # Re-export component
├── pages/               # Page-level components
├── api/                 # API integration modules
└── assets/              # Static assets

packages/
├── src/
│   ├── components/      # Library components
│   └── stories/         # Storybook stories
└── docs/                # Docusaurus documentation
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Button.jsx`, `Navigation.jsx`)
- **Files**: camelCase for utilities, PascalCase for components
- **CSS classes**: BEM methodology or styled-components
- **Props**: camelCase with descriptive names

### Styling Guidelines
- **Primary**: Use styled-components for dynamic theming
- **Secondary**: CSS files for static styles
- **Theme Structure**: Light/Dark mode support via ThemeProvider
- **CSS Classes**: Use `storybook-` prefix for library components

## Code Quality & Best Practices

### Component Development
- **Always include PropTypes** with detailed descriptions
- **Document components** with JSDoc comments explaining purpose and usage
- **Support theming** through styled-components theme props
- **Write Storybook stories** for every new component
- **Include accessibility attributes** (ARIA labels, roles, etc.)

### Testing Guidelines
- Use **React Testing Library** for component testing
- Write tests that focus on **user behavior** rather than implementation details
- Include **accessibility tests** using jest-axe or similar tools
- Test **theme variations** to ensure proper styling

### Error Handling & Validation
- **Validate props** with PropTypes and provide sensible defaults
- **Handle edge cases** gracefully (empty states, loading states)
- **Use semantic HTML** elements for better accessibility
- **Include error boundaries** for production robustness

### Performance Considerations
- **Lazy load** components when appropriate
- **Memoize expensive calculations** with useMemo/useCallback
- **Optimize bundle size** by avoiding unnecessary dependencies
- **Use React.memo** for components that render frequently

## Commit, Branching, and PR Conventions

### Commit Messages
Follow Conventional Commits format:
```
type(scope): description

Examples:
feat(button): add loading state support
fix(nav): resolve mobile navigation toggle issue
docs(storybook): update button component stories
style(theme): improve dark mode color contrast
refactor(components): extract common styled elements
```

### Branch Naming
- **Features**: `feature/component-name` or `feature/feature-description`
- **Bug fixes**: `fix/issue-description`
- **Documentation**: `docs/update-description`
- **Refactoring**: `refactor/scope-description`

### Pull Request Guidelines
- **Include Storybook screenshots** for UI changes
- **Update documentation** when adding new components
- **Add tests** for new functionality
- **Ensure accessibility compliance**
- **Test theme variations** (light/dark mode)

## Copilot Behavior Rules

### Code Generation Priorities
1. **Follow existing patterns** exactly when working with established components
2. **Prioritize accessibility** - always include proper ARIA attributes
3. **Support theming** - use theme props from styled-components
4. **Include comprehensive PropTypes** with descriptions
5. **Write self-documenting code** with clear variable names

### Component Creation Guidelines
- **Start with PropTypes definition** to establish the component API
- **Include JSDoc comments** explaining the component's purpose
- **Support common props**: `className`, `style`, `children`, `disabled`
- **Implement responsive design** using CSS Grid/Flexbox
- **Add loading and error states** where applicable

### Storybook Integration
- **Create stories for all variants** of a component
- **Include interactive controls** for props
- **Add accessibility addon** documentation
- **Document usage examples** in the story descriptions

### Dependencies
- **Avoid adding new dependencies** without explicit approval
- **Prefer built-in React features** over external libraries
- **Use styled-components** for styling consistency
- **Leverage existing design tokens** and theme structure

## Examples & Patterns

### Ideal Component Structure
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './ComponentName.css';

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.pageBackground};
  color: ${props => props.theme.textColor};
  transition: all 0.3s ease;
`;

/**
 * ComponentName provides [brief description of functionality]
 * Supports theming and accessibility features.
 */
export const ComponentName = ({ 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  children,
  className,
  ...props 
}) => {
  const componentClasses = [
    'uiheat-component',
    `uiheat-component--${variant}`,
    `uiheat-component--${size}`,
    disabled && 'uiheat-component--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <StyledWrapper 
      className={componentClasses}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </StyledWrapper>
  );
};

ComponentName.propTypes = {
  /** Visual style variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  /** Size of the component */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Whether the component is disabled */
  disabled: PropTypes.bool,
  /** Content to render inside the component */
  children: PropTypes.node,
  /** Additional CSS classes */
  className: PropTypes.string,
};
```

### Theme Integration Pattern
```jsx
const ThemeAwareComponent = styled.div`
  background-color: ${props => props.theme.pageBackground};
  color: ${props => props.theme.textColor};
  border-color: ${props => props.theme.titleColor};
  
  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
  
  transition: all 0.3s ease;
`;
```

### Storybook Story Template
```javascript
import { ComponentName } from '../components/ComponentName/ComponentName';

export default {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ComponentName is used for [purpose]. It supports theming and accessibility.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select',
      options: ['primary', 'secondary', 'outline']
    },
    size: {
      control: 'select', 
      options: ['small', 'medium', 'large']
    }
  },
};

export const Default = {
  args: {
    children: 'Default Component',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ComponentName variant="primary">Primary</ComponentName>
      <ComponentName variant="secondary">Secondary</ComponentName>
      <ComponentName variant="outline">Outline</ComponentName>
    </div>
  ),
};
```

## Anti-Patterns to Avoid

❌ **Don't:**
- Use inline styles instead of styled-components/CSS classes
- Create components without PropTypes documentation
- Ignore accessibility requirements (missing ARIA labels, keyboard navigation)
- Add new dependencies without considering bundle size impact
- Use class components for new development
- Hard-code colors instead of using theme variables
- Create stories without interactive controls

✅ **Do:**
- Use theme variables for all colors and spacing
- Include comprehensive PropTypes with descriptions
- Support keyboard navigation and screen readers
- Follow the established file structure and naming conventions
- Write self-documenting code with clear variable names
- Test components in both light and dark themes

## Developer Checklist

Before pushing code, ensure:

- ✅ **Component has PropTypes** with detailed descriptions
- ✅ **Storybook story created** with interactive controls
- ✅ **Accessibility tested** (keyboard navigation, screen reader)
- ✅ **Theme support verified** (light/dark mode works)
- ✅ **Code formatted** with project conventions
- ✅ **No console errors** in development/Storybook
- ✅ **Responsive design** tested on mobile/tablet/desktop
- ✅ **Documentation updated** if adding new patterns

## Additional Resources

- [Storybook Documentation](https://storybook.uiheat.com)
- [Project Documentation](https://docs.uiheat.com)
- [styled-components Documentation](https://styled-components.com/)
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html)
