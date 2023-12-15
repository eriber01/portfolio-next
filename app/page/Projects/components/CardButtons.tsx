import { Button } from '@nextui-org/react'
import React from 'react'

const CardButtons = () => {
  return (
    <div className='flex justify-between w-[40%] md:w-2/4 xl:w-2/4 mt-4'>
      <Button
        color='success'
        variant='ghost'
        size='sm'
        className='rounded shadow-2xl'
      >
        Demo
      </Button>
      <Button
        color='warning'
        variant='ghost'
        size='sm'
        className='rounded shadow-2xl'
      >
        Code
      </Button>
    </div>
  )
}

export default CardButtons