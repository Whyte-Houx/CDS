# Quick Start Guide - Catalyst Design System

## 🚀 Immediate Usage (Copy & Paste)

If you want to use the design system immediately in your project without publishing to npm:

### 1. Copy the Design System

```bash
# Copy the entire design system folder to your project
cp -r catalyst-design-system /path/to/your/project/
```

### 2. Install Dependencies

```bash
cd your-project
npm install tailwindcss next-themes class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-slot @radix-ui/react-dropdown-menu
```

### 3. Update Your Tailwind Config

Replace your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './catalyst-design-system/src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 4. Update Your Global CSS

Replace your global CSS file (e.g., `globals.css` or `app/globals.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Copy all the CSS from catalyst-design-system/styles/globals.css */
```

### 5. Setup Theme Provider

Update your root layout or app component:

```jsx
// app/layout.tsx (Next.js 13+) or _app.tsx (Next.js 12)
import { ThemeProvider } from './catalyst-design-system/src/providers/theme-provider'

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

### 6. Start Using Components

```jsx
// components/example.tsx
import { Button, Card, CardHeader, CardTitle, CardContent, ThemeSwitcher } from './catalyst-design-system/src'

export function Example() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My App</h1>
        <ThemeSwitcher />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

## 🎨 Available Themes

Switch between these themes using the ThemeSwitcher component:

- **Light** - Clean, minimal light theme
- **Dark** - Professional dark theme  
- **Blue** - Ocean-inspired blue theme
- **Green** - Nature-inspired green theme
- **Purple** - Creative purple theme

## 📦 Available Components

- **Button** - Multiple variants (default, secondary, outline, ghost, link, destructive)
- **Card** - Container with header, content, footer
- **Badge** - Status indicators and labels
- **Logo** - Brand logo with different variants
- **ThemeSwitcher** - Theme selection dropdown
- **DropdownMenu** - Accessible dropdown menus

## 🔧 Customization

### Adding Custom Colors

Add to your CSS:

```css
:root {
  --my-custom-color: 200 50% 60%;
}

.dark {
  --my-custom-color: 200 50% 40%;
}
```

Then use in Tailwind:

```javascript
// tailwind.config.js
colors: {
  custom: "hsl(var(--my-custom-color))",
}
```

### Creating Custom Themes

Add a new theme class in your CSS:

```css
.theme-orange {
  --primary: 25 95% 53%;
  --primary-foreground: 0 0% 98%;
  /* ... other color definitions */
}
```

Update the ThemeProvider:

```jsx
<ThemeProvider themes={["light", "dark", "theme-blue", "theme-green", "theme-purple", "theme-orange"]}>
```

## 🚨 Common Issues

### 1. Fonts Not Loading
Make sure the Google Fonts import is in your CSS file and not blocked by CSP.

### 2. Colors Not Working
Ensure all CSS custom properties are defined in your global CSS.

### 3. Components Not Styled
Check that Tailwind is processing the design system files in your content array.

### 4. Theme Switching Not Working
Verify the ThemeProvider is wrapping your app and next-themes is installed.

## 📱 Mobile Support

The design system is fully responsive and mobile-friendly. All components adapt to different screen sizes automatically.

## ♿ Accessibility

- WCAG 2.1 AA compliant color contrasts
- Keyboard navigation support
- Screen reader friendly
- Proper focus management

## 🔄 Migration from Original Catalyst

If migrating from the original Catalyst codebase:

1. Replace theme switcher component
2. Update global CSS with complete theme definitions  
3. Ensure all 5 themes are available in ThemeProvider
4. Test all theme variants
5. Update any custom components to use design system

## 💡 Tips

- Use the demo file (`examples/demo.tsx`) to test all components
- Check the issues document for known problems and fixes
- Customize themes by modifying CSS custom properties
- Use the `cn` utility for conditional classes