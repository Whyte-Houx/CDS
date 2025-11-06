import React from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
  DropdownMenuGroup,
} from './dropdown-menu'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DropdownMenu displays a contextual menu triggered by a button. Use for small sets of related actions.\n\nAccessibility:\n- Trigger: provide a clear accessible name via the trigger button text or aria-label when using custom icons.\n- Roles: Content uses role="menu"; items use role="menuitem" automatically via Radix primitives; separators map to role="separator"; labels are announced.\n- Keyboard: ArrowUp/ArrowDown navigate items; Home/End jump to first/last; typeahead filters by first-letter; Enter/Space activates; Escape closes and returns focus to trigger.\n- Focus: Focus is trapped within the menu and returns to the trigger on close; avoid disabling focusable items unless necessary.\n- State: Checkbox/Radio items manage aria-checked and grouped selection for screen readers.\n\nDo:\n- Use clear, action-oriented labels and group related items.\n- Keep menus short and contextual; prefer dialogs or pages for complex workflows.\n- Provide separators and labels to structure options.\n\nDon’t:\n- Don’t use menus for primary navigation across the site.\n- Don’t remove close/escape affordances or trap focus.\n- Don’t disable the entire menu; prefer disabling specific items.\n\nExample:\n<DropdownMenu>\n  <DropdownMenuTrigger asChild><button aria-label="Open options">Open Menu</button></DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>Actions</DropdownMenuLabel>\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuCheckboxItem checked>Show sidebar</DropdownMenuCheckboxItem>\n  </DropdownMenuContent>\n</DropdownMenu>',
      },
    },
  },
  argTypes: {
    triggerLabel: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    items: { control: { type: 'object' } },
    align: { control: { type: 'select' }, options: ['start', 'center', 'end'] },
    side: { control: { type: 'select' }, options: ['top', 'right', 'bottom', 'left'] },
    showSeparator: { control: { type: 'boolean' } },
  },
  args: {
    triggerLabel: 'Open Menu',
    label: 'Options',
    items: ['Profile', 'Settings', 'Log out'],
    align: 'center',
    side: 'bottom',
    showSeparator: true,
  },
}

export default meta

export const Playground = {
  parameters: {
    docs: {
      description: {
        story:
          'Testing: See src/components/dropdown-menu.test.tsx for open/close; navigation, focus, wrap, typeahead, and home/end behaviors in the respective test files; Axe checks in src/components/a11y.more.test.tsx and src/components/a11y.combined.test.tsx.',
      },
    },
  },
  render: (args: any) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">
          {args.triggerLabel}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={args.align} side={args.side}>
        {args.label && <DropdownMenuLabel>{args.label}</DropdownMenuLabel>}
        {args.showSeparator && <DropdownMenuSeparator />}
        {Array.isArray(args.items) && args.items.map((item: string) => (
          <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithRadioAndCheckbox = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">
          Open Menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Show toolbar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show sidebar</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="name">
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="size">Size</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithSubmenuAndShortcuts = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">
          Open Menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Copy Link</DropdownMenuItem>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Download</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Close
          <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithGroups = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">
          Open Menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuItem>Language</DropdownMenuItem>
          <DropdownMenuItem>Accessibility</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}