'use client'

import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/react"
import { Trispace } from "next/font/google"
import { FormEvent, useState } from "react"
import 'react-toastify/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { signIn } from "next-auth/react";

const inter = Trispace({ subsets: ['latin'] })

interface Props {
  email: string
  password: string
}

export default function Page() {
  const [state, setState] = useState<Props>({ email: '', password: '' })
  const router = useRouter()

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!state.email.trim()) {
      toast.error('The email is Required')
      return
    } else if (!state.password.trim()) {
      toast.error('The password is Required')
      return
    }

    toast.loading('Loading')

    const login = await signIn('credentials',
      {
        email: state.email,
        password: state.password,
        redirect: false
      })

    toast.dismiss()
    if (!login?.ok) {
      toast.error(login?.error)
      return
    }

    toast.success('Logged in')
    router.push('/dashboard/profile')
  }

  return (
    <main className={inter.className}>
      <ToastContainer />
      <div className="bg-white h-screen flex justify-center items-center">
        <title>Login</title>
        <div className="border rounded-md text-center p-4 text-black shadow-md w-4/5 xl:w-[20%] h-[55%] xl:h-[55%] md:w-[40%] md:h-[65%] sm:w-[40%]">
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-2">Login</h1>
            <span className="text-gray-400 text-sm">Welcome to the Dashboard Eriber</span>
          </div>
          <form action=""
            className="h-4/5 xl:h-4/5"
            onSubmit={(e) => onSave(e)}
          >
            <div className="h-full flex flex-col items-center justify-center">
              <div className="flex flex-col w-full items-start mb-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="flex h-10 w-full rounded-md border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 border-pink-400"
                  type="text"
                  required
                  placeholder="email@mail.om"
                  value={state.email}
                  onChange={({ target: { value } }) => setState({ ...state, email: value })}
                />
              </div>
              <div className="flex flex-col w-full items-start mb-8">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="flex h-10 w-full rounded-md border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 border-pink-400"
                  required
                  placeholder="********"
                  value={state.password}
                  onChange={({ target: { value } }) => setState({ ...state, password: value })}
                />
              </div>
              <Button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 text-primary-foreground h-10 px-4 py-2 w-full bg-pink-400 hover:bg-pink-600"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}