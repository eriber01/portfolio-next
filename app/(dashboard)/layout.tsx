import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'

const inter = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'My portfolio with next.js',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" className={`scroll-smooth text-white bg-[#1F2128] ${inter.className} flex w-full h-screen`}>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='w-4/5 overflow-auto'>
        {children}
      </div>
    </div>
  )
}
