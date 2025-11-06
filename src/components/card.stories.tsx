import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card groups related content with a header, content, and footer. Use sub-components for consistent layout.\n\nAccessibility:\n- Grouping: Treat Card as a visual container; semantics come from its children. Use headings (`CardTitle`) with appropriate levels for document outline.\n- Labels: Ensure interactive controls (buttons, links, inputs) inside the card have clear, accessible names and labels.\n- Focus: Maintain logical tab order; avoid placing non-interactive elements before primary actions.\n- Contrast: Verify text and control contrast against card backgrounds, including hover/active states.\n\nDo:\n- Use `CardTitle` as a real heading appropriate to the page hierarchy.\n- Label inputs and controls inside `CardContent` with `<label>` or aria-*.\n- Place primary actions in `CardFooter` to support predictable navigation.\n\nDon’t:\n- Don’t nest interactive elements without clear labels.\n- Don’t rely on visual position alone; keep DOM/tab order logical.\n- Don’t use Card as a replacement for landmarks (use `section`, `aside`, etc. when appropriate).\n\nExample (labeled controls and contrast-aware actions):\n<Card>\n  <CardHeader>\n    <CardTitle>Profile</CardTitle>\n    <CardDescription>Update your details</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <label htmlFor="email">Email</label>\n    <input id="email" className="rounded-md border px-2 py-1" placeholder="name@example.com" />\n  </CardContent>\n  <CardFooter className="flex gap-2">\n    <button className="rounded-md border px-3 py-1.5">Cancel</button>\n    <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Save</button>\n  </CardFooter>\n</Card>',
      },
    },
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    showFooter: { control: { type: 'boolean' } },
    footerText: { control: { type: 'text' } },
  },
  args: {
    title: 'Card Title',
    description: 'Supporting description text',
    content: 'Card content goes here.',
    showFooter: true,
    footerText: 'Footer area',
  },
}

export default meta

export const Playground = {
  parameters: {
    docs: {
      description: {
        story:
          'Testing: See src/components/a11y.smoke.test.tsx for Axe checks and Card composition.',
      },
    },
  },
  render: (args: any) => (
    <Card>
      <CardHeader>
        <CardTitle>{args.title}</CardTitle>
        <CardDescription>{args.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{args.content}</p>
      </CardContent>
      {args.showFooter && (
        <CardFooter>
          <span className="text-xs text-muted-foreground">{args.footerText}</span>
        </CardFooter>
      )}
    </Card>
  ),
}

export const WithActions = {
  render: (args: any) => (
    <Card>
      <CardHeader>
        <CardTitle>{args.title}</CardTitle>
        <CardDescription>{args.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{args.content}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <button className="rounded-md border px-3 py-1.5">Cancel</button>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Save</button>
      </CardFooter>
    </Card>
  ),
}

export const MediaHeader = {
  render: () => (
    <Card className="overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
        alt="Mountain landscape with clouds"
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>Mountain Escape</CardTitle>
        <CardDescription>Relax and unwind with nature</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Discover scenic trails, fresh air, and breathtaking views. Perfect for a weekend
          getaway or a longer retreat.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <button className="rounded-md border px-3 py-1.5">Learn More</button>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Book Now</button>
      </CardFooter>
    </Card>
  ),
}

export const MediaOverlay = {
  render: () => (
    <Card className="overflow-hidden">
      <div className="relative w-full h-48">
        <img
          src="https://images.unsplash.com/photo-1521464302862-5d0dbb3bb420?q=80&w=1200&auto=format&fit=crop"
          alt="Forest trail with sunlight"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-semibold">Sunlit Trails</h3>
          <p className="text-sm text-white/80">Explore nature with guided hikes and maps</p>
        </div>
      </div>
      <CardContent>
        <p className="text-sm">
          Plan your adventure and discover new paths. Perfect for both beginners and seasoned hikers.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <button className="rounded-md border px-3 py-1.5">Details</button>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Start</button>
      </CardFooter>
    </Card>
  ),
}

export const GradientHeader = {
  render: () => (
    <Card className="overflow-hidden">
      <div className="relative w-full h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-semibold">Creative Showcase</h3>
          <p className="text-sm text-white/80">Vibrant gradient header without an image</p>
        </div>
      </div>
      <CardContent>
        <p className="text-sm">
          Use gradients for expressive headers when imagery isn’t available. Works well for product or feature highlights.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <button className="rounded-md border px-3 py-1.5">Learn More</button>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Try It</button>
      </CardFooter>
    </Card>
  ),
}