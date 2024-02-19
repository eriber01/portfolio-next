'use client'
import React, { useEffect, useState } from 'react'
import HeaderLabel from '../UI/HeaderLabel'
import CardProject from './components/CardProject'
import { GetProjects } from './database/GetProjects'
import { Projects as ProjectsI } from '@/app/(dashboard)/dashboard/projects/interfaces'

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectsI[]>([])


  useEffect(() => {
    const getProjects = async () => {
      const p = await GetProjects()
      setProjects(p)
    }

    getProjects()
  }, [])

  console.log(projects);


  return (
    <div className='h-full w-full mt-96 md:mt-0 xl:mt-0 bg-[#28213ec2] pt-20 flex justify-center' id='projects'>
      <div className='w-full md:w-10/12 xl:w-10/12'>
        <div className='w-2/4 pl-4 md:pl-0 xl:pl-0 md:w-[15%] xl:w-[15%] md:pt-5 xl:pt-5'>
          <HeaderLabel text='Project' />
        </div>

        <div className='w-full mt-10 flex flex-col justify-center md:justify-between xl:justify-between md:flex-row xl:flex-row items-center flex-wrap'>
          {
            projects.map(item => (
              <CardProject projects={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
