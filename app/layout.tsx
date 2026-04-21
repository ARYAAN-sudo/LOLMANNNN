import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Futuristic 3D Experience',
  description: 'An immersive 3D animation website with cutting-edge design',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body>
        {children}
      </body>
    </html>
  )
}
