import React from 'react'

const HeaderLabel = ({ text }: { text: string }) => {
  return (
    <div className='bg-[#58CB90] text-center py-2 font-medium rounded'>
      <p className='text-[#362B56]'>{text}</p>
    </div>
  )
}

export default HeaderLabel