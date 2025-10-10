# UI Heat Design System

A modern, minimal design system based on utility-first principles with your existing red color palette.

## Color Palette

### Light Theme
```css
:root {
  /* Primary Red Color System */
  --primary: #E84545; /* Primary Red */
  --primary-50: #fff5f5;
  --primary-100: #fee2e2;
  --primary-200: #fecaca;
  --primary-300: #fca5a5;
  --primary-400: #f87171;
  --primary-500: #E84545; /* Primary Red */
  --primary-600: #C62828; /* Deep Red */
  --primary-700: #b91c1c;
  --primary-800: #991b1b;
  --primary-900: #7f1d1d;

  /* Red Palette Variations */
  --coral-red: #EF5350;
  --light-coral: #FF6B6B;
  --deep-red: #C62828;

  /* Neutral Colors */
  --background: #FFFFFF; /* Background White */
  --surface: #f9fafb;
  --surface-raised: #FFFFFF;
  --text-primary: black;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --border: #e5e7eb;
  --border-strong: #d1d5db;

  /* Accent Colors */
  --accent: #FF6B6B; /* Light Coral for accents */
  --accent-light: #fee2e2;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #E84545; /* Primary Red for errors */
  --info: #3b82f6;

  /* Interactive States */
  --focus: #3b82f6;
  --hover-overlay: rgba(232, 69, 69, 0.08); /* Primary Red with transparency */
  --active-overlay: rgba(232, 69, 69, 0.12);
}
```

### Dark Theme
```css
[data-theme="dark"] {
  /* Primary Red Colors for Dark Mode */
  --primary: #FF6B6B; /* Light Coral for better visibility */
  --primary-50: #1f1415;
  --primary-100: #2c1a1a;
  --primary-200: #3d2020;
  --primary-300: #5a2d2d;
  --primary-400: #8b4747;
  --primary-500: #FF6B6B; /* Light Coral */
  --primary-600: #EF5350; /* Coral Red */
  --primary-700: #E84545; /* Primary Red */
  --primary-800: #C62828; /* Deep Red */
  --primary-900: #991b1b;

  /* Red Palette Variations for Dark Mode */
  --coral-red: #EF5350;
  --light-coral: #FF6B6B;
  --deep-red: #C62828;

  /* Neutral Colors for Dark Mode */
  --background: #1a1a1a;
  --surface: #262626;
  --surface-raised: #404040;
  --text-primary: white;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
  --border: #525252;
  --border-strong: #737373;

  /* Accent Colors for Dark Mode */
  --accent: #E84545; /* Primary Red for accents */
  --accent-light: #2c1a1a;
  --tagline: #EF5350; /* Coral Red for taglines */
  --success: #34d399;
  --warning: #fbbf24;
  --error: #FF6B6B; /* Light Coral for errors in dark mode */
  --info: #60a5fa;

  /* Interactive States for Dark Mode */
  --focus: #60a5fa;
  --hover-overlay: rgba(255, 107, 107, 0.08); /* Light Coral with transparency */
  --active-overlay: rgba(255, 107, 107, 0.12);
}
```

## Typography Scale

```css
/* Typography System */
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.text-6xl { font-size: 3.75rem; line-height: 1; }

/* Font Weights */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Text Colors */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-muted { color: var(--text-muted); }
.text-accent { color: var(--primary); }
```

## Spacing System

```css
/* Spacing Scale (4px base unit) */
.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.p-5 { padding: 1.25rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.p-10 { padding: 2.5rem; }
.p-12 { padding: 3rem; }
.p-16 { padding: 4rem; }

/* Directional padding/margin utilities */
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.m-4 { margin: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
/* ... etc for all directions and sizes */
```

## Component System

### Buttons
```css
/* Button Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
}

.btn:focus {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Button Sizes */
.btn-sm { padding: 0.5rem 0.75rem; font-size: 0.875rem; }
.btn-md { padding: 0.625rem 1rem; font-size: 0.875rem; }
.btn-lg { padding: 0.75rem 1.5rem; font-size: 1rem; }

/* Button Variants */
.btn-primary {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

.btn-primary:hover {
  background-color: var(--primary-600);
  border-color: var(--primary-600);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border-color: var(--border-strong);
}

.btn-secondary:hover {
  background-color: var(--hover-overlay);
}

.btn-ghost {
  background-color: transparent;
  color: var(--text-secondary);
  border-color: transparent;
}

.btn-ghost:hover {
  background-color: var(--hover-overlay);
  color: var(--text-primary);
}
```

### Cards
```css
.card {
  background-color: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.card-header {
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-top: 1px solid var(--border);
  margin-top: 1rem;
  padding-top: 1rem;
}
```

### Forms
```css
.input {
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background-color: var(--surface-raised);
  color: var(--text-primary);
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.input:focus {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
  border-color: var(--focus);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}
```

## Layout System

```css
/* Container */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

/* Grid System */
.grid {
  display: grid;
  gap: 1rem;
}

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

/* Flexbox Utilities */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 1rem; }
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default styles for mobile (0-639px) */

@media (min-width: 640px) {
  /* sm: Small screens (tablets) */
  .sm\:text-lg { font-size: 1.125rem; }
  .sm\:p-6 { padding: 1.5rem; }
}

@media (min-width: 768px) {
  /* md: Medium screens (small laptops) */
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:text-xl { font-size: 1.25rem; }
}

@media (min-width: 1024px) {
  /* lg: Large screens (desktops) */
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\:text-2xl { font-size: 1.5rem; }
}

@media (min-width: 1280px) {
  /* xl: Extra large screens */
  .xl\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
```

## Accessibility Features

```css
/* Focus Management */
.focus\:ring {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Reduce Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
