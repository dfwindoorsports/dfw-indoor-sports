'use client'

import React, { createContext, useContext, ReactNode } from 'react'

interface ThemeContextType {
  theme: 'light'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

/**
 * Light-only theme provider.
 * Dark mode has been intentionally removed.
 * This wrapper is kept for API compatibility.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}