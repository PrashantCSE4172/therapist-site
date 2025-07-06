// app/layout.tsx
import '../styles/globals.css';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Therapist Site',
  description: 'Site for Dr. Serena Blake',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
