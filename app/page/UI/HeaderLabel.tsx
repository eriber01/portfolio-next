'use client'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const HeaderLabel = ({ text }: { text: string }) => {
  return (
    <Slide>
      <div className='bg-[#58CB90] text-center py-2 font-medium rounded'>
        <p className='text-[#362B56]'>{text}</p>
      </div>
    </Slide>
  )
}

export default HeaderLabel