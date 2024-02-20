'use client'

import { Button } from '@nextui-org/react'
import { validateForm } from '../database'
import { FormEvent, useState } from 'react'
import CustomInput from '@/app/(dashboard)/components/CustomInput'
import { toast } from 'react-toastify'
import { api } from '@/app/utils'

interface EmailProps {
  name: string
  email: string
  message: string
}

export const INITIAL_STATE: EmailProps = {
  email: '',
  message: '',
  name: ''
}

const FormContact = () => {
  const [state, setState] = useState(INITIAL_STATE)

  const onChange = (path: string, value: string | number) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  async function onSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validate = await validateForm(state)
    console.log(validate);

    if (validate.success) {
      toast.loading('Sending Message')
      await api.post('/emails', state)
      setState(INITIAL_STATE)
      toast.dismiss()
      toast.success('Thanks for Send a Message')
      return
    }

    toast.error(validate.message)
  }

  return (
    <div className='bg-[#1c172d] w-full h-4/5 flex justify-center items-center rounded-lg shadow-2xl m-4 md:m-0 xl:m-0'>
      <form className='flex flex-col items-center justify-center w-full h-full'
        onSubmit={(e) => onSend(e)}
      >
        <div className='w-3/4 h-4/5 flex flex-col justify-between'>
          <CustomInput
            id="name"
            label="Name"
            placeHolder="Enter your name"
            styles="w-[100%] mb-3"
            value={state.name}
            onChange={onChange}
          />

          <CustomInput
            id="email"
            label="Email"
            type='email'
            placeHolder="Enter your Email"
            styles="w-[100%] mb-3"
            value={state.email}
            onChange={onChange}
          />

          <div className='flex flex-col'>
            <label>Description</label>
            <textarea
              required
              className='rounded bg-transparent border pl-2'
              placeholder={'Enter your Message'}
              rows={5}
              value={state.message}
              onChange={({ target: { value } }) => onChange('message', value)}
            />
          </div>
          <div className='float-right mt-5 flex justify-end'>
            <Button
              className='px-11'
              type='submit'
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContact