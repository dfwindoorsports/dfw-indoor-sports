'use client'

import { ThemeProvider } from '@/context/ThemeContext'

/**
 * Minimal client-side provider wrapper for theme context.
 * Only this component needs 'use client' - children can be server components.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
 return <ThemeProvider>{children}</ThemeProvider>
}
