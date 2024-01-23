import React, { useEffect, useState } from 'react'
import HeaderName from '@/app/(dashboard)/components/HeaderName'
import Image from 'next/image'
import { ButtonManage } from './components/ButtonManage'
import { Techs } from '../../interface'
import { GetTechs } from '../../database/GetTechs'

export const ManageTech = () => {
  const [state, setState] = useState<Techs[]>()

  const getTech = async () => {

    const res: Techs[] = await GetTechs()
    console.log(res);

    if (res.length) {
      setState(res)
    }
  }

  useEffect(() => {
    getTech()
  }, [])

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="mt-[-20px]">
        <HeaderName text="Manage Tech" />
      </div>
      <div className="flex flex-wrap justify-between w-10/12 mt-10">
        {state?.map((item, index) => (
          <div
            className='w-[300px] h-full bg-white text-black my-5 rounded flex flex-col items-center'
            key={index}
          >
            <div className="mt-2">
              <Image
                alt={item.name}
                src={item?.image?.url!}
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>
            <div className="mt-2">
              <p className="border-b border-black">{item.name}</p>
            </div>
            <div className="w-4/5 text-center mt-2">
              <p>{item.description}</p>
            </div>
            <div className="my-5 flex justify-between w-full px-5">
              <ButtonManage actions="edit" name="Edit" />
              <ButtonManage actions="enabled" name="" enabled={item.enabled} />
              <ButtonManage actions="delete" name="Delete" />
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}
