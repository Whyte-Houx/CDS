import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from '../src/providers/theme-provider'

export const decorators = [
  (Story: any) => (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-4">
        <Story />
      </div>
    </ThemeProvider>
  ),
]
