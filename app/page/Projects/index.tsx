import React from 'react'
import HeaderLabel from '../UI/HeaderLabel'
import CardProject from './components/CardProject'

export const Projects = () => {
  return (
    <div className='h-full w-full mt-96 md:mt-0 xl:mt-0 bg-[#28213ec2] pt-20 flex justify-center' id='projects'>
      <div className='w-full md:w-10/12 xl:w-10/12'>
        <div className='w-2/4 pl-4 md:pl-0 xl:pl-0 md:w-[15%] xl:w-[15%] md:pt-5 xl:pt-5'>
          <HeaderLabel text='Project' />
        </div>

        <div className='w-full mt-10 flex flex-col justify-center md:justify-between xl:justify-between md:flex-row xl:flex-row items-center flex-wrap'>
          <CardProject img='https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Smart_Letters_sxucdc.png' />
          <CardProject img='https://res.cloudinary.com/eriber/image/upload/v1699374040/Portafolio/ProjectImage/Next_Dashboard_iygi2r.png' />
          <CardProject img='https://res.cloudinary.com/eriber/image/upload/v1687717039/Portafolio/ProjectImage/Daily_Task_App_xxvshx.png' />
          <CardProject img='https://res.cloudinary.com/eriber/image/upload/v1682708250/Portafolio/ProjectImage/Travel_Page_sac9m6.png' />
          {/* <CardProject />
          <CardProject />
          <CardProject /> */}
        </div>
      </div>
    </div>
  )
}
