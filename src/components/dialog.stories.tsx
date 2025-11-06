import React from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './dialog'

const meta = {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dialog presents content in a modal overlay, focusing user attention for confirmations or detailed forms.\n\nAccessibility:\n- Semantics: Content renders as role="dialog" with aria-modal="true"; Title and Description are announced to assistive tech.\n- Keyboard: Focus is trapped while open; Escape closes; Tab/Shift+Tab move between focusable elements; close button has an accessible name.\n- Labels: Ensure form fields inside the dialog are associated with <label> or aria-label/aria-labelledby.\n- Focus management: Initial focus moves inside the dialog; on close, focus returns to the trigger.\n- Motion: Overlay/content use reduced motion-friendly animations; respect prefers-reduced-motion system settings.\n\nDo:\n- Use a clear, concise title and supportive description.\n- Return focus to the trigger on close and preserve scroll position.\n- Label all inputs and controls and ensure a visible close affordance.\n\nDon’t:\n- Don’t use dialogs for trivial notifications; prefer toast/snackbar.\n- Don’t hide focus outlines or block Escape.\n- Don’t stack multiple dialogs; prefer progressive disclosure.\n\nExample:\n<Dialog>\n  <DialogTrigger asChild><button aria-haspopup="dialog">Open Dialog</button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Profile Update</DialogTitle>\n      <DialogDescription>Make changes to your profile here.</DialogDescription>\n    </DialogHeader>\n    <label htmlFor="name">Name</label>\n    <input id="name" />\n    <DialogFooter>\n      <button>Cancel</button>\n      <button>Save</button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>',
      },
    },
  },
}

export default meta

export const Default = {
  parameters: {
    docs: {
      description: {
        story:
          'Testing: See src/components/dialog.test.tsx for open/close; src/components/a11y.more.test.tsx and src/components/a11y.combined.test.tsx for Axe and ARIA checks.',
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile Update</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="name">Name</label>
          <input id="name" className="rounded-md border px-2 py-1" defaultValue="Jane Doe" />
        </div>
        <DialogFooter>
          <button className="rounded-md border px-3 py-1.5">Cancel</button>
          <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5">Save</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}