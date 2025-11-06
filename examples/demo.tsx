"use client";

import React from 'react';
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
  ThemeProvider
} from '../src/index';

export function DesignSystemDemo() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <Logo variant="full" size="lg" />
            <ThemeSwitcher />
          </div>

          {/* Typography Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Typography & Colors</CardTitle>
              <CardDescription>
                Demonstrating the IBM Plex Mono font family and color system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <h2 className="text-3xl font-semibold">Heading 2</h2>
                <h3 className="text-2xl font-medium">Heading 3</h3>
                <p className="text-base">Regular paragraph text with proper line height and spacing.</p>
                <p className="text-sm text-muted-foreground">Muted text for secondary information.</p>
              </div>
            </CardContent>
          </Card>

          {/* Button Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                All available button styles and sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🎨</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badge Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>
                Status indicators and labels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Logo Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Logo Variants</CardTitle>
              <CardDescription>
                Different logo styles and sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Logo variant="full" size="sm" />
                  <Logo variant="full" size="md" />
                  <Logo variant="full" size="lg" />
                </div>
                <div className="flex items-center gap-4">
                  <Logo variant="symbol" size="sm" />
                  <Logo variant="symbol" size="md" />
                  <Logo variant="symbol" size="lg" />
                </div>
                <div className="flex items-center gap-4">
                  <Logo variant="text" size="sm" />
                  <Logo variant="text" size="md" />
                  <Logo variant="text" size="lg" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Theme Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Theme System</CardTitle>
              <CardDescription>
                Switch between light, dark, and colored themes using the theme switcher above
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <div className="h-12 bg-primary rounded-md"></div>
                  <p className="text-xs text-center">Primary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-secondary rounded-md"></div>
                  <p className="text-xs text-center">Secondary</p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-accent rounded-md"></div>
                  <p className="text-xs text-center">Accent</p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-muted rounded-md"></div>
                  <p className="text-xs text-center">Muted</p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-destructive rounded-md"></div>
                  <p className="text-xs text-center">Destructive</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Try switching themes to see how colors adapt automatically
              </p>
            </CardFooter>
          </Card>

          {/* Special Effects */}
          <Card>
            <CardHeader>
              <CardTitle>Special Effects</CardTitle>
              <CardDescription>
                Gradient and glass morphism effects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-24 catalyst-gradient rounded-md flex items-center justify-center text-white font-mono font-bold">
                Catalyst Gradient
              </div>
              <div className="h-24 glass-morphism rounded-md flex items-center justify-center font-mono font-bold">
                Glass Morphism
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default DesignSystemDemo;