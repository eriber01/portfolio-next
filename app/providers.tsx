'use client'
import { NextUIProvider } from "@nextui-org/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ReduxProvider>
  )
}