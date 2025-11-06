# Catalyst Design System

A modern, accessible, and customizable design system extracted from the Catalyst project. Built with Tailwind CSS, featuring multiple themes, IBM Plex Mono typography, and a comprehensive component library.

## 🎨 Features

- **Multiple Themes**: Light, Dark, Blue, Green, and Purple variants
- **Typography**: IBM Plex Mono font family with consistent spacing
- **Color System**: Comprehensive color palette with semantic naming
- **Components**: Pre-built UI components with variants
- **Accessibility**: WCAG compliant with proper focus states
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design approach

## 🚀 Quick Start

### Installation

```bash
npm install @catalyst/design-system
# or
yarn add @catalyst/design-system
# or
pnpm add @catalyst/design-system
```

### Setup

1. **Install dependencies:**
```bash
npm install tailwindcss next-themes class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-slot
```

2. **Configure Tailwind CSS:**
```javascript
// tailwind.config.js
module.exports = require('@catalyst/design-system/tailwind.config.js')
```

3. **Import global styles:**
```css
/* globals.css */
@import '@catalyst/design-system/styles/globals.css';
```

4. **Setup theme provider:**
```jsx
// app/layout.tsx or _app.tsx
import { ThemeProvider } from '@catalyst/design-system'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## 📦 Package Consumption (SDK)

To consume the design system as an SDK across your projects:

- Install the package and peer dependencies:
  - `npm install @catalyst/design-system`
  - Ensure `react`, `react-dom`, `next`, and `tailwindcss` are present as peers.
- Reuse the Tailwind configuration:
  - `// tailwind.config.js`
  - `module.exports = require('@catalyst/design-system/tailwind.config.js')`
- Import the global styles once in your app:
  - `@import '@catalyst/design-system/styles/globals.css';`
- Wrap your app with the `ThemeProvider` and start using components from the package.

### Example

```jsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  ThemeSwitcher,
  Logo,
  // Dropdown Menu suite
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@catalyst/design-system'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Catalyst</CardTitle>
        <CardDescription>Modern design system</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="default">Get Started</Button>
        <Badge variant="secondary">New</Badge>
      </CardContent>
      <CardFooter>
        <ThemeSwitcher />
      </CardFooter>
    </Card>
  )
}
```

## 🎯 Usage

### Components

```jsx
import { Button, Card, Badge, ThemeSwitcher } from '@catalyst/design-system'

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome to Catalyst</Card.Title>
        <Card.Description>Modern design system</Card.Description>
      </Card.Header>
      <Card.Content>
        <Button variant="default">Get Started</Button>
        <Badge variant="secondary">New</Badge>
      </Card.Content>
      <Card.Footer>
        <ThemeSwitcher />
      </Card.Footer>
    </Card>
  )
}
```

### Themes

Available themes:
- `light` (default)
- `dark`
- `theme-blue`
- `theme-green`
- `theme-purple`

```jsx
import { useTheme } from 'next-themes'

function ThemeExample() {
  const { theme, setTheme } = useTheme()
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="theme-blue">Blue</option>
      <option value="theme-green">Green</option>
      <option value="theme-purple">Purple</option>
    </select>
  )
}
```

## 🔧 Customization

### Colors

The design system uses CSS custom properties for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... more colors */
}
```

### Typography

IBM Plex Mono is the primary font family:

```css
.font-mono {
  font-family: 'IBM Plex Mono', monospace;
}
```

## 📦 Components

### Button
- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`

### Card
- Components: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

### Badge
- Variants: `default`, `secondary`, `destructive`, `outline`

### Theme Switcher
- Dropdown menu for theme selection
- Animated icons for light/dark modes

## 🐛 Known Issues & Fixes

### Issue 1: Incomplete Theme Implementation
**Problem**: The theme switcher only shows Light/Dark options, but the theme provider supports 5 themes.

**Fix**: Update the theme switcher to include all available themes.

### Issue 2: Color Inconsistencies
**Problem**: Some color variables may not be properly defined across all themes.

**Fix**: Ensure all CSS custom properties are defined for each theme variant.

### Issue 3: Font Loading
**Problem**: IBM Plex Mono may not load properly in all environments.

**Fix**: Include proper font loading strategies and fallbacks.

## 🔄 Migration Guide

### From Catalyst Project

If you're migrating from the original Catalyst project:

1. Replace local imports with design system imports
2. Update theme provider setup
3. Ensure all color variables are properly mapped
4. Test all theme variants

### Breaking Changes

- Theme names now use `theme-` prefix for colored variants
- Some color variables have been renamed for consistency
- Font loading strategy has been updated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across all themes
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [Documentation](https://catalyst-design-system.vercel.app)
- [Storybook](https://storybook.catalyst-design-system.vercel.app)
- [GitHub](https://github.com/catalyst/design-system)