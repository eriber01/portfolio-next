import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import './globals.css'

const inter = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'My portfolio with next.js ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth text-white'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
