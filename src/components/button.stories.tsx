import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
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

export const Ghost = {
  args: { variant: 'ghost' },
}

export const Link = {
  args: { variant: 'link' },
}