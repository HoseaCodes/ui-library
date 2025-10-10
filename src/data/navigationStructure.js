// UI Heat Documentation Navigation Structure
// Following Bootstrap's versioning pattern with version-locked URLs

export const NAVIGATION_STRUCTURE = {
  '1.0': {
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', path: '/getting-started/introduction/', icon: '📚' },
          { title: 'Installation', path: '/getting-started/installation/', icon: '⚡' },
          { title: 'Version History', path: '/getting-started/changelog/', icon: '📋' },
          { title: 'Quick Start', path: '/getting-started/quick-start/', icon: '🚀' },
          { title: 'CDN Links', path: '/getting-started/cdn/', icon: '🔗' },
          { title: 'Package Manager', path: '/getting-started/package-manager/', icon: '📦' },
          { title: 'Browser Support', path: '/getting-started/browser-support/', icon: '🌐' }
        ]
      },
      {
        title: 'Layout',
        items: [
          { title: 'Grid System', path: '/layout/grid/', icon: '🏗️' },
          { title: 'Container', path: '/layout/container/', icon: '📋' },
          { title: 'Flexbox', path: '/layout/flexbox/', icon: '🔄' },
          { title: 'Spacing', path: '/layout/spacing/', icon: '📐' }
        ]
      },
      {
        title: 'Components',
        items: [
          { title: 'Button', path: '/components/buttons/', icon: '🔘' },
          { title: 'Card', path: '/components/cards/', icon: '🎴' },
          { title: 'Form Controls', path: '/components/forms/', icon: '📝' },
          { title: 'Input Group', path: '/components/input-group/', icon: '🔤' },
          { title: 'Navigation', path: '/components/navigation/', icon: '🧭' },
          { title: 'Modal', path: '/components/modal/', icon: '🖼️' },
          { title: 'Tooltip', path: '/components/tooltip/', icon: '💬' },
          { title: 'Dropdown', path: '/components/dropdown/', icon: '📋' }
        ]
      },
      {
        title: 'Utilities',
        items: [
          { title: 'Colors', path: '/utilities/colors/', icon: '🎨' },
          { title: 'Typography', path: '/utilities/typography/', icon: '✍️' },
          { title: 'Shadows', path: '/utilities/shadows/', icon: '🌫️' },
          { title: 'Borders', path: '/utilities/borders/', icon: '🔲' }
        ]
      },
      {
        title: 'Customization',
        items: [
          { title: 'Theme Configuration', path: '/customize/theme/', icon: '🎛️' },
          { title: 'CSS Variables', path: '/customize/css-variables/', icon: '🔧' },
          { title: 'Build Tools', path: '/customize/build-tools/', icon: '⚙️' }
        ]
      },
      {
        title: 'Examples',
        items: [
          { title: 'Starter Templates', path: '/examples/templates/', icon: '📄' },
          { title: 'Dashboard', path: '/examples/dashboard/', icon: '📊' },
          { title: 'Landing Page', path: '/examples/landing/', icon: '🏠' }
        ]
      }
    ]
  },
  '1.1': {
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', path: '/getting-started/introduction/', icon: '📚' },
          { title: 'Installation', path: '/getting-started/installation/', icon: '⚡' },
          { title: 'Version History', path: '/getting-started/changelog/', icon: '📋' },
          { title: 'Quick Start', path: '/getting-started/quick-start/', icon: '🚀' },
          { title: 'CDN Links', path: '/getting-started/cdn/', icon: '🔗' },
          { title: 'Package Manager', path: '/getting-started/package-manager/', icon: '📦' },
          { title: 'Browser Support', path: '/getting-started/browser-support/', icon: '🌐' },
          { title: 'Accessibility', path: '/getting-started/accessibility/', icon: '♿' } // New in 1.1
        ]
      },
      {
        title: 'Layout',
        items: [
          { title: 'Grid System', path: '/layout/grid/', icon: '🏗️' },
          { title: 'Container', path: '/layout/container/', icon: '📋' },
          { title: 'Flexbox', path: '/layout/flexbox/', icon: '🔄' },
          { title: 'Spacing', path: '/layout/spacing/', icon: '📐' },
          { title: 'Responsive Design', path: '/layout/responsive/', icon: '📱' } // New in 1.1
        ]
      },
      {
        title: 'Components',
        items: [
          { title: 'Button', path: '/components/buttons/', icon: '🔘' },
          { title: 'Card', path: '/components/cards/', icon: '🎴' },
          { title: 'Form Controls', path: '/components/forms/', icon: '📝' },
          { title: 'Input Group', path: '/components/input-group/', icon: '🔤' },
          { title: 'Navigation', path: '/components/navigation/', icon: '🧭' },
          { title: 'Modal', path: '/components/modal/', icon: '🖼️' },
          { title: 'Tooltip', path: '/components/tooltip/', icon: '💬' },
          { title: 'Dropdown', path: '/components/dropdown/', icon: '📋' },
          { title: 'Alert', path: '/components/alert/', icon: '⚠️' }, // New in 1.1
          { title: 'Badge', path: '/components/badge/', icon: '🏷️' }, // New in 1.1
          { title: 'Progress', path: '/components/progress/', icon: '📊' } // New in 1.1
        ]
      },
      {
        title: 'Utilities',
        items: [
          { title: 'Colors', path: '/utilities/colors/', icon: '🎨' },
          { title: 'Typography', path: '/utilities/typography/', icon: '✍️' },
          { title: 'Shadows', path: '/utilities/shadows/', icon: '🌫️' },
          { title: 'Borders', path: '/utilities/borders/', icon: '🔲' },
          { title: 'Focus Management', path: '/utilities/focus/', icon: '🎯' } // New in 1.1
        ]
      },
      {
        title: 'Accessibility',
        items: [
          { title: 'ARIA Support', path: '/accessibility/aria/', icon: '🗣️' }, // New section in 1.1
          { title: 'Keyboard Navigation', path: '/accessibility/keyboard/', icon: '⌨️' },
          { title: 'Screen Readers', path: '/accessibility/screen-readers/', icon: '👁️' },
          { title: 'Color Contrast', path: '/accessibility/contrast/', icon: '🌈' }
        ]
      },
      {
        title: 'Customization',
        items: [
          { title: 'Theme Configuration', path: '/customize/theme/', icon: '🎛️' },
          { title: 'CSS Variables', path: '/customize/css-variables/', icon: '🔧' },
          { title: 'Build Tools', path: '/customize/build-tools/', icon: '⚙️' }
        ]
      },
      {
        title: 'Examples',
        items: [
          { title: 'Starter Templates', path: '/examples/templates/', icon: '📄' },
          { title: 'Dashboard', path: '/examples/dashboard/', icon: '📊' },
          { title: 'Landing Page', path: '/examples/landing/', icon: '🏠' },
          { title: 'Accessible Forms', path: '/examples/accessible-forms/', icon: '📝' } // New in 1.1
        ]
      }
    ]
  },
  '2.0': {
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Introduction', path: '/getting-started/introduction/', icon: '📚' },
          { title: 'Installation', path: '/getting-started/installation/', icon: '⚡' },
          { title: 'Version History', path: '/getting-started/changelog/', icon: '📋' },
          { title: 'Quick Start', path: '/getting-started/quick-start/', icon: '🚀' },
          { title: 'CDN Links', path: '/getting-started/cdn/', icon: '🔗' },
          { title: 'Package Manager', path: '/getting-started/package-manager/', icon: '📦' },
          { title: 'Browser Support', path: '/getting-started/browser-support/', icon: '🌐' },
          { title: 'Accessibility', path: '/getting-started/accessibility/', icon: '♿' },
          { title: 'Migration Guide', path: '/getting-started/migration/', icon: '🔄' } // New in 2.0
        ]
      },
      {
        title: 'Architecture',
        items: [
          { title: 'Design System', path: '/architecture/design-system/', icon: '🎨' }, // New section in 2.0
          { title: 'Component API', path: '/architecture/component-api/', icon: '🔌' },
          { title: 'State Management', path: '/architecture/state/', icon: '🏪' },
          { title: 'Performance', path: '/architecture/performance/', icon: '⚡' }
        ]
      },
      {
        title: 'Layout',
        items: [
          { title: 'CSS Grid', path: '/layout/css-grid/', icon: '🔲' }, // Updated in 2.0
          { title: 'Flexbox', path: '/layout/flexbox/', icon: '🔄' },
          { title: 'Container Queries', path: '/layout/container-queries/', icon: '📐' }, // New in 2.0
          { title: 'Responsive Design', path: '/layout/responsive/', icon: '📱' },
          { title: 'Spacing System', path: '/layout/spacing/', icon: '📏' }
        ]
      },
      {
        title: 'Components',
        items: [
          { title: 'Button', path: '/components/buttons/', icon: '🔘' },
          { title: 'Card', path: '/components/cards/', icon: '🎴' },
          { title: 'Form Controls', path: '/components/forms/', icon: '📝' },
          { title: 'Input Group', path: '/components/input-group/', icon: '🔤' },
          { title: 'Navigation', path: '/components/navigation/', icon: '🧭' },
          { title: 'Modal', path: '/components/modal/', icon: '🖼️' },
          { title: 'Tooltip', path: '/components/tooltip/', icon: '💬' },
          { title: 'Dropdown', path: '/components/dropdown/', icon: '📋' },
          { title: 'Alert', path: '/components/alert/', icon: '⚠️' },
          { title: 'Badge', path: '/components/badge/', icon: '🏷️' },
          { title: 'Progress', path: '/components/progress/', icon: '📊' },
          { title: 'Data Table', path: '/components/table/', icon: '📊' }, // New in 2.0
          { title: 'Date Picker', path: '/components/datepicker/', icon: '📅' }, // New in 2.0
          { title: 'Autocomplete', path: '/components/autocomplete/', icon: '🔍' } // New in 2.0
        ]
      },
      {
        title: 'Utilities',
        items: [
          { title: 'Design Tokens', path: '/utilities/design-tokens/', icon: '🎨' }, // Updated in 2.0
          { title: 'Typography Scale', path: '/utilities/typography/', icon: '✍️' },
          { title: 'Color System', path: '/utilities/colors/', icon: '🌈' },
          { title: 'Elevation', path: '/utilities/elevation/', icon: '📏' }, // Updated in 2.0
          { title: 'Motion', path: '/utilities/motion/', icon: '🎬' }, // New in 2.0
          { title: 'Focus Management', path: '/utilities/focus/', icon: '🎯' }
        ]
      },
      {
        title: 'Accessibility',
        items: [
          { title: 'WCAG Compliance', path: '/accessibility/wcag/', icon: '✅' }, // Updated in 2.0
          { title: 'Keyboard Navigation', path: '/accessibility/keyboard/', icon: '⌨️' },
          { title: 'Screen Readers', path: '/accessibility/screen-readers/', icon: '👁️' },
          { title: 'Color Contrast', path: '/accessibility/contrast/', icon: '🌈' },
          { title: 'Testing Tools', path: '/accessibility/testing/', icon: '🧪' } // New in 2.0
        ]
      },
      {
        title: 'Customization',
        items: [
          { title: 'Theme Builder', path: '/customize/theme-builder/', icon: '🛠️' }, // New in 2.0
          { title: 'CSS-in-JS', path: '/customize/css-in-js/', icon: '💅' }, // New in 2.0
          { title: 'Design Tokens', path: '/customize/tokens/', icon: '🎛️' },
          { title: 'Build Tools', path: '/customize/build-tools/', icon: '⚙️' }
        ]
      },
      {
        title: 'Examples',
        items: [
          { title: 'Starter Templates', path: '/examples/templates/', icon: '📄' },
          { title: 'Dashboard', path: '/examples/dashboard/', icon: '📊' },
          { title: 'Landing Page', path: '/examples/landing/', icon: '🏠' },
          { title: 'E-commerce', path: '/examples/ecommerce/', icon: '🛒' }, // New in 2.0
          { title: 'SaaS App', path: '/examples/saas/', icon: '☁️' }, // New in 2.0
          { title: 'Design System', path: '/examples/design-system/', icon: '🎨' } // New in 2.0
        ]
      }
    ]
  }
};

export const getNavigationForVersion = (version) => {
  return NAVIGATION_STRUCTURE[version] || NAVIGATION_STRUCTURE['1.0'];
};
