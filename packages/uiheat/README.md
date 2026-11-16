# <div style="display: flex; align-items: center;"><img src="assets/logo.png" width="50px" height="50px"> UI Heat - Frontend Toolkit </p>

<span id="hashtag">#UILibrary</span>
<span id="hashtag">#DesignSystem</span>
 
UI Heat is a versatile, feature-packed component library designed to empower developers in building dynamic and visually appealing user interfaces. With a rich collection of stylized components, prebuilt elements, and powerful JavaScript plugins, UI Heat simplifies the frontend development process and allows you to bring your projects to life with ease.

## Features

- **Powerful Component Library**: Access a comprehensive collection of stylized and customizable UI components for various use cases.
- **Modularity**: Easily integrate and customize components to suit your project's unique design requirements.
- **Prebuilt Components**: Accelerate development with prebuilt elements like buttons, forms, navigation bars, and more.
- **JavaScript Plugins**: Enhance interactivity and functionality with a wide range of JavaScript plugins.
- **Responsive Design**: Ensure your UI looks great on all devices with built-in responsive design support.
- **Extensive Documentation**: Find detailed documentation, examples, and guidelines for using UI Heat effectively.

## Installation

To install UI Heat in your React project, use the following npm command:

```bash
npm install ui-heat
```

## Usage

Here's an example of how to use UI Heat components in a React application:

```jsx
import React from 'react';
import { Button, Card, Navbar } from 'ui-heat';

function App() {
  return (
    <div>
      <Navbar title="My App" />
      <div className="container">
        <Card>
          <h2>Welcome to UI Heat!</h2>
          <p>Build beautiful and interactive user interfaces with ease.</p>
          <Button primary>Get Started</Button>
        </Card>
      </div>
    </div>
  );
}

export default App;
```

In this example, we import and use UI Heat's Navbar, Card, and Button components to create a simple user interface. You can customize these components to match your project's design requirements.

For more advanced usage and component customization options, please refer to our [detailed documentation](https://your-documentation-link.com).

## Folder Structure

``` 
┌── .github/workflows          # Settings for GitHub Actions
├── .storybook                 # Storybook settings
├── .vscode                    # VSCode settings for ESLint auto-fix function
├── demo                       # Storybook static file
├── dist                       # Bundled JS and TS declaration file for deployed npm package
├── src                        # All source code
│    ├── components            # React components
│    │    └── button           # Component folder
│    │          ├── MyButton.tsx           # Component for npm package
│    │          └── MyButton.stories.tsx   # Component displayed in storybook
│    ├── index.dev.tsx         # Development entry that uses ReactDOM.redner for local development
│    └── index.tsx             # Production entry that exports all components
├── .gitignore                 # Excluded files for ignoring Git version control
├── .eslintrc.js               # ESLint settings
├── index.html                 # HTML for local development
├── README.md                  # README
├── package-lock.json          # Package settings that locked the version of dependencies packages
├── package.json               # Package settings that listed dependencies packages, npm scripts, project name etc.
├── webpack.config.common.js   # Webpack settings in both development and production mode
├── webpack.config.dev.js      # Webpack settings in development mode
├── webpack.config.prod.js     # Webpack settings in production mode
└── tsconfig.json              # TypeScript settings
```
## Tools & Frameworks

1. [React Storybook](https://storybook.js.org/) for UI components

2. [TypeScript](https://www.typescriptlang.org/) for type-safety

3. [Rollup](https://rollupjs.org/) for bundling the package

4. [Husky](https://typicode.github.io/husky) for performing pre-push checks

5. [Jest](https://www.npmjs.com/package/jest) and [TestingLibrary](https://testing-library.com/) for testing

6. [Concurrently](https://www.npmjs.com/package/concurrently) for running pre-push checks in parallel

## Contributing

We welcome contributions from the community. If you find a bug or have an enhancement in mind, please open an issue or submit a pull request on our [GitHub repository](https://github.com/your-repo-link).

## License

UI Heat is distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need assistance, feel free to contact us at [support@ui-heat.com](mailto:support@ui-heat.com).

Start building stunning frontend experiences with UI Heat today!