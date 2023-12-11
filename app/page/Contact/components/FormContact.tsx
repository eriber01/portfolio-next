import React from 'react'
import { InputForm } from './InputForm'
import { Button, Textarea } from '@nextui-org/react'

const FormContact = () => {
  return (
    <div className='bg-[#1c172d] w-full h-4/5 flex justify-center items-center rounded-lg shadow-2xl m-4 md:m-0 xl:m-0'>
      <form className='flex flex-col items-center justify-center w-full h-full'>
        <div className='w-3/4 h-4/5 flex flex-col justify-between'>
          <InputForm type='name' label='Name' />
          <InputForm type='email' label='Email' />
          <Textarea
            variant='underlined'
            label='Message'
            color='success'
            required
            isInvalid={false}
            disableAnimation
            disableAutosize
            errorMessage=''
          />
          <div className='float-right mt-10 flex justify-end'>
            <Button
              className='px-11'
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