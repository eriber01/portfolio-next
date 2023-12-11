import { Button } from '@nextui-org/react'
import React from 'react'

const CardButtons = () => {
  return (
    <div className='flex justify-between w-[80%] mt-4'>
      <Button
        color='success'
        variant='ghost'
        className='rounded shadow-2xl'
      >
        Demo
      </Button>
      <Button
        color='warning'
        variant='ghost'
        className='rounded shadow-2xl'
      >
        Code
      </Button>
    </div>
  )
}

export default CardButtons