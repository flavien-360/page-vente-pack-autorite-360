import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pack Autorité 360 — Acquisition de Mandats Exclusifs',
  description:
    'L’infrastructure digitale clé en main des conseillers immobiliers : visibilité locale continue, capture de propriétaires vendeurs et prise de rendez-vous qualifiés sans pige.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/logo-pack-transparent.png',
    apple: '/logo-pack-transparent.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="antialiased bg-[#09090B] text-zinc-100">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}