import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Badge is a small label for status or categorization. Variants include default, secondary, outline, and destructive.\n\nAccessibility:\n- Semantics: Badge is text-first; avoid using role="img". Rely on visible text or provide additional context nearby.\n- Contrast: Ensure sufficient color contrast between background and text, especially for destructive/secondary variants.\n- Usage: Do not use Badge alone as the only indicator of state; pair with icons or text that conveys meaning for all users.\n\nDo:\n- Pair badges with explanatory text or icons.\n- Use contrast-aware combos like bg-primary + text-primary-foreground.\n- Announce dynamic status changes via surrounding context (e.g., aria-live).\n\nDon’t:\n- Don’t rely on color alone to convey meaning.\n- Don’t use Badge as the sole indicator of state.\n- Don’t assign role="img" or add redundant aria-labels to decorative badges.\n\nTesting:\n- No dedicated Badge tests yet; consider adding Axe coverage.\n- See src/components/a11y.smoke.test.tsx for patterns used by Card and Button.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'destructive'],
    },
    children: { control: { type: 'text' } },
  },
  args: {
    children: 'Badge',
  },
}

export default meta

export const Default = {
  args: { variant: 'default' },
}

export const Secondary = {
  args: { variant: 'secondary' },
}

export const Outline = {
  args: { variant: 'outline' },
}

export const Destructive = {
  args: { variant: 'destructive' },
}