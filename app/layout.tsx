import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'King Bolola - Premium Card Games',
  description: 'Luxurious casino-style card game lobby',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
