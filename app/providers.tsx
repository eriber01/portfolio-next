'use client'
import { NextUIProvider } from "@nextui-org/react";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <ToastContainer />
      {children}
    </NextUIProvider>
  )
}