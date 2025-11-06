import { ThemeSwitcher } from './theme-switcher'

const meta = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    docs: {
      description: {
        component:
          'ThemeSwitcher lets users choose light, dark, or brand color palettes.\n\nKeyboard and Roles:\n- Underlying menu: Uses DropdownMenu, which provides role="menu" with role="menuitem" entries, separators, and labels. See [DropdownMenu docs](/?path=/docs/components-dropdownmenu--docs).\n- Keyboard: ArrowUp/ArrowDown navigate; Home/End jump; typeahead filters by first letter; Enter/Space activates; Escape closes and returns focus to the trigger.\n- Trigger: The toggle button includes a screen-reader-only label. If replacing with a custom icon-only trigger, ensure a visible or aria-label name (e.g., aria-label="Toggle theme").\n\nDo:\n- Provide an accessible name for the trigger (visible text or sr-only).\n- Persist the selected theme and indicate the active theme in the menu.\n- Verify color contrast after switching, especially for text and interactive controls.\n\nDon’t:\n- Don’t hide focus indicators or override Escape behavior.\n- Don’t switch themes automatically without user intent or clear messaging.\n\nNotes:\n- Themes: "light", "dark", and palette variants (blue/green/purple).\n- Focus: Focus stays within the menu and returns to the trigger on close.\n- Contrast: Verify selected theme maintains sufficient color contrast across components.\n\nAccessibility:\n- Name: Ensure the trigger has a clear accessible name (visible text or aria-label).\n- Roles: Provided by the underlying DropdownMenu (role="menu", role="menuitem", labels, separators).\n- Focus: Focus stays within the menu and returns to the trigger on close.\n- Contrast: After selection, verify text and control contrast across components.\n\nTesting:\n- See src/components/theme-switcher.test.tsx for theme application, keyboard selection, checked indicators, and system preference behavior.',
      },
    },
  },
}

export default meta
export const Default = {}