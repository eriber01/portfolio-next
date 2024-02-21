'use client'

import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"


function Provider({ children }: PropsWithChildren) {

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}


export default Provider