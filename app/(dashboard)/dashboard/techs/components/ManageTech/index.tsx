import HeaderName from '@/app/(dashboard)/components/HeaderName'
import React from 'react'
import { TechArr } from '../../../projects/database'
import Image from 'next/image'
import { ButtonManage } from './components/ButtonManage'

export const ManageTech = () => {
  const tech = TechArr
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="mt-[-20px]">
        <HeaderName text="Manage Tech" />
      </div>
      <div className="flex flex-wrap justify-between w-10/12 mt-10">
        {tech.map((item, index) => (
          <div
            className='w-[300px] h-full bg-white text-black my-5 rounded flex flex-col items-center'
            key={index}
          >
            <div className="mt-2">
              <Image
                alt={item.name}
                src={item.imageUrl || ''}
                height={80}
                width={80}
                className="rounded"
              />
            </div>
            <div className="mt-2">
              <p className="border-b border-black">{item.name}</p>
            </div>
            <div className="w-4/5 text-center mt-2">
              <p>{item.description}</p>
            </div>
            <div className="my-5 flex justify-between w-full px-5">
              <ButtonManage color="blue" name="Edit" />
              <ButtonManage color={item.status ? "green" : "orange"} name={item.status ? "Enable" : "Disable"} />
              <ButtonManage color="red" name="Delete" />
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}
