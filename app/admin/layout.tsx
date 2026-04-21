import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel - Futuristic 3D',
  description: 'Manage your 3D website content',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}
