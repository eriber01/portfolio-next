'use client'
import HeaderLabel from '../UI/HeaderLabel'
import TechComponent from './components/TechComponent'
import AboutMeText from './components/AboutMeText'
import { Slide } from 'react-awesome-reveal'
import { Profile } from '@/app/(dashboard)/dashboard/profile/interface'
import { useEffect, useState } from 'react'
import { Techs } from '@/app/(dashboard)/dashboard/techs/interface'
import { GetTechsForAbout } from './database/GetTechs'
import { INITIAL_STATE } from './interfaces'

export const About = ({ profile }: { profile: Profile }) => {
  const [techs, setTechs] = useState(INITIAL_STATE)

  useEffect(() => {

    const getTechs = async () => {
      const getTechs = await GetTechsForAbout()
      setTechs(getTechs)
    }

    getTechs()

  }, [])

  return (
    <div className='h-screen w-full pt-20 bg-[#28213E] flex justify-center' id='about'>
      <div className='w-full md:w-10/12 xl:w-10/12'>
        <div className='w-2/4 pl-4 md:pl-0 xl:pl-0 md:w-[15%] xl:w-[15%] md:pt-5 xl:pt-5'>
          <HeaderLabel text='About' />
        </div>

        {/* about content container */}
        <div className='block md:flex xl:flex w-full mt-10 h-3/4 justify-between'>
          {/* tech container */}
          <div className='px-4 md:px-0 xl:px-0 md:w-[40%] xl:w-[40%] flex flex-col justify-between h-full'>
            <TechComponent year={profile.year} techs={techs.front} area='Front-End' descriptions='Build attractive web interfaces and User Friendly' />
            <TechComponent year={profile.year} techs={techs.back} area='Back-End' descriptions='Manages logic and data behind web applications' />
            <TechComponent year={profile.year} techs={techs.other} area='Others' descriptions='Analyze, create and manage processes' />
          </div>
          <div className='hidden md:flex xl:flex justify-center items-center h-full'>
            <span className='hidden md:block xl:block border-r-0 md:border-r-1 xl:border-r-1 opacity-50 h-[80%]'></span>
          </div>
          {/* text container */}
          <div className='px-8 md:px-0 xl:px-0 bg-[#28213E] w-full md:w-[40%] xl:w-[40%] h-full mt-10 md:mt-0 xl:mt-0 block md:flex xl:flex justify-center items-center'>
            <Slide direction='up'>
              <AboutMeText year={profile.year} />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  )
}
