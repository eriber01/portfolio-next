import React from 'react'
import HeaderLabel from '../UI/HeaderLabel'
import CardProject from './components/CardProject'

export const Projects = () => {
  return (
    <div className='h-full w-full mt-80 bg-[#28213ec2] pt-20 flex justify-center' id='projects'>
      <div className='w-full md:w-10/12 xl:w-10/12'>
        <div className='w-2/4 pl-4 md:pl-0 xl:pl-0 md:w-[15%] xl:w-[15%] md:pt-5 xl:pt-5'>
          <HeaderLabel text='Project' />
        </div>

        <div className='w-full mt-10 flex flex-col md:flex-row xl:flex-row items-center flex-wrap'>
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </div>
  )
}
