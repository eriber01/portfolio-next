import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

interface Props {
  link: string
  git: string
}

const CardButtons = ({ git, link }: Props) => {
  return (
    <div className='flex justify-between w-[40%] md:w-2/4 xl:w-2/4 mt-4'>
      <Link
        href={link}
        target='_blank'
      >
        <Button
          color='success'
          variant='ghost'
          size='sm'
          className='rounded shadow-2xl'
        >
          Demo
        </Button>
      </Link>
      <Link
        href={git}
        target='_blank'
      >
        <Button
          color='warning'
          variant='ghost'
          size='sm'
          className='rounded shadow-2xl'
        >
          Code
        </Button>
      </Link>
    </div>
  )
}

export default CardButtons