# 🔥 UI Heat

<div align="center">

![UI Heat Logo](./assets/logo-nobg.png)

**A modern, framework-agnostic component library for faster web development**

[![GitHub last commit](https://img.shields.io/github/last-commit/HoseaCodes/ui-library)](https://github.com/HoseaCodes/ui-library)
[![GitHub](https://img.shields.io/github/license/HoseaCodes/ui-library)](LICENSE)
[![npm version](https://badge.fury.io/js/uiheat.svg)](https://www.npmjs.com/package/uiheat)

[🚀 Live Demo](https://uiheat.com) • [📚 Documentation](https://docs.uiheat.com) • [📖 Storybook](https://storybook.uiheat.com)

</div>

## 🎯 Overview

UI Heat is a comprehensive component library ecosystem consisting of:

- **📱 Demo Application** - Interactive showcase and documentation site (this repository root)
- **📦 Component Library** - Publishable npm package with reusable components (`/packages` directory)
- **📖 Storybook** - Interactive component documentation and playground
- **📚 Docusaurus Site** - Comprehensive documentation and guides

Built for developers who value **simplicity**, **performance**, and **flexibility** across React, React Native, and vanilla JavaScript.

## 🏗️ Project Structure

```
ui-library/
├── 📱 Demo App (Root)           # React showcase application
│   ├── src/
│   │   ├── components/          # Demo app components
│   │   ├── pages/              # Documentation pages
│   │   └── api/                # API integration examples
│   └── package.json            # Demo app dependencies
│
└── 📦 Component Library (/packages)
    ├── src/
    │   ├── components/         # Reusable UI components
    │   └── stories/           # Storybook stories
    ├── docs/                  # Docusaurus documentation
    ├── rollup.config.js       # Library build configuration
    └── package.json           # Library package configuration
```

## 🚀 Quick Start

### For Users (Install the Library)

```bash
# Install UI Heat in your project
npm install ui-heat

# Or with yarn
yarn add ui-heat
```

### For Contributors (Development Setup)

```bash
# 1. Clone the repository
git clone https://github.com/HoseaCodes/ui-library.git
cd ui-library

# 2. Install demo app dependencies
npm install

# 3. Install library dependencies
cd packages && npm install && cd ..

# 4. Start the demo application
npm start
```

The demo app will open at [http://localhost:3000](http://localhost:3000)

## 📚 Usage Examples

### React Application

```jsx
import React from 'react';
import { Button, Card } from 'ui-heat';

function App() {
  return (
    <Card>
      <h2>Welcome to UI Heat</h2>
      <Button variant="primary" size="large">
        Get Started
      </Button>
    </Card>
  );
}

export default App;
```

### React Native Application

```jsx
import React from 'react';
import { Button } from 'ui-heat/native';

export default function App() {
  return (
    <Button 
      variant="primary"
      title="Click me"
      onPress={() => alert('Hello from UI Heat!')}
    />
  );
}
```

### Vanilla JavaScript

```javascript
import { createButton } from 'ui-heat';

const button = createButton({
  variant: 'primary',
  text: 'Click me',
  onClick: () => console.log('Button clicked!')
});

document.body.appendChild(button);
```

## 🧩 Component Overview

UI Heat provides a comprehensive set of components organized by category:

### 🎯 Core Components
- **Button** - Versatile button component with multiple variants
- **Card** - Flexible container component for content
- **Input** - Form input with validation and styling
- **Modal** - Accessible modal dialogs

### 🧭 Navigation
- **Navbar** - Responsive navigation bar
- **Sidebar** - Collapsible sidebar navigation
- **Breadcrumb** - Navigation breadcrumb trail
- **Tabs** - Tabbed content interface

### 📊 Data Display
- **Table** - Feature-rich data tables
- **List** - Styled list components
- **Badge** - Status and notification badges
- **Progress** - Progress bars and indicators

### 📝 Forms
- **FormGroup** - Form organization and layout
- **Select** - Dropdown select component
- **Checkbox** - Styled checkbox inputs
- **Radio** - Radio button groups

### 🎨 Feedback
- **Alert** - Contextual feedback messages
- **Toast** - Temporary notification system
- **Tooltip** - Contextual help and information
- **Loading** - Loading states and spinners

> 📖 **[View complete component documentation →](https://docs.uiheat.com/components)**

## 🔧 Development Workflow

### Working with the Demo App

```bash
# Start demo application
npm start

# Build demo for production
npm run build

# Run tests
npm test
```

### Working with the Component Library

```bash
cd packages

# Start Storybook for component development
npm run storybook

# Build the library for publishing
npm run build-lib

# Build Storybook for deployment
npm run build-storybook
```

### Working with Documentation

```bash
cd packages/docs

# Start Docusaurus development server
npm start

# Build documentation site
npm run build
```

## 📋 Available Scripts

### Demo App Scripts
| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build demo app for production |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App |

### Library Scripts (in `/packages`)
| Script | Description |
|--------|-------------|
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm run build-lib` | Build library for npm publishing |

## 🌐 Resources & Links

| Resource | Description | Link |
|----------|-------------|------|
| 🚀 **Live Demo** | Interactive showcase and documentation | [uiheat.com](https://uiheat.com) |
| 📚 **Documentation** | Comprehensive guides and API reference | [docs.uiheat.com](https://docs.uiheat.com) |
| 📖 **Storybook** | Interactive component playground | [storybook.uiheat.com](https://storybook.uiheat.com) |
| 📦 **NPM Package** | Install UI Heat in your project | [npmjs.com/package/ui-heat](https://www.npmjs.com/package/ui-heat) |
| 💻 **GitHub** | Source code and issue tracking | [github.com/HoseaCodes/ui-library](https://github.com/HoseaCodes/ui-library) |
<!-- | 🐦 **Twitter** | Updates and announcements | [@ui_heat](https://twitter.com/ui_heat) | -->

## 🎨 Theming & Customization

UI Heat supports comprehensive theming through CSS custom properties:

```css
:root {
  --ui-primary: #E84545;        /* Primary brand color */
  --ui-secondary: #FF6B6B;      /* Secondary/accent color */
  --ui-background: #1a1a1a;     /* Background color */
  --ui-text: #ffffff;           /* Text color */
  --ui-radius: 8px;             /* Border radius */
  --ui-spacing: 1rem;           /* Base spacing unit */
}
```

> 🎨 **[Learn more about theming →](https://docs.uiheat.com/theming)**

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** in the appropriate directory:
   - Demo app changes: `/src`
   - Library components: `/packages/src/components`
   - Documentation: `/packages/docs`
4. **Add tests** and update documentation
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Guidelines

- **Follow the coding style** defined in `.github/copilot-instructions.md`
- **Write tests** for new components using React Testing Library
- **Update Storybook stories** for UI changes
- **Include accessibility features** (ARIA labels, keyboard navigation)
- **Test responsive design** on multiple screen sizes

> 🤝 **[Read our full contributing guide →](https://docs.uiheat.com/contributing)**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by [Dominique Hosea](https://github.com/HoseaCodes)
- Inspired by modern design systems and developer experience
- Community-driven development and feedback

---

<div align="center">

**[⭐ Star this repository](https://github.com/HoseaCodes/ui-library) if UI Heat helps you build better interfaces!**

Made with ❤️ for the developer community

</div>