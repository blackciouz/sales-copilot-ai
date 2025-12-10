import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Sales Copilot AI - Votre équipe commerciale IA autonome',
  description: 'Générez 15-70 rendez-vous qualifiés par mois automatiquement. L\'IA qui prospecte, converse et réserve des RDV pour vous. 24/7.',
  keywords: ['IA', 'sales', 'automation', 'prospection', 'B2B', 'rendez-vous', 'leads'],
  authors: [{ name: 'Sales Copilot AI' }],
  openGraph: {
    title: 'Sales Copilot AI - Votre équipe commerciale IA autonome',
    description: 'Générez 15-70 rendez-vous qualifiés par mois automatiquement.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Copilot AI',
    description: 'Générez 15-70 rendez-vous qualifiés par mois automatiquement.',
  },
}

import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
