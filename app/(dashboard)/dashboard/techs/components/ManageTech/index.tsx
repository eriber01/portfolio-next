import React, { useEffect, useState } from 'react'
import HeaderName from '@/app/(dashboard)/components/HeaderName'
import Image from 'next/image'
import { ButtonManage } from './components/ButtonManage'
import { Techs } from '../../interface'
import { AreaTypes, TechTypes } from '../../database/utils';

interface Props {
  techs: Techs[]
  refetch: () => void
  getTechById: (id: number) => void
}

export const ManageTech = ({ techs, refetch, getTechById }: Props) => {

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="mt-[-20px]">
        <HeaderName text="Manage Tech" />
      </div>
      <div className="flex flex-wrap justify-between w-10/12 mt-10">
        {techs?.map((item, index) => {

          const type = TechTypes.find(iType => iType.id === item.show_type)
          const area = AreaTypes.find(iType => iType.id === item.area_type)

          return (
            <div
              className='w-[300px] h-full bg-white text-black my-5 rounded flex flex-col items-center'
              key={index}
            >
              <div className="mt-4">
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
              <div className="w-4/5 text-center my-3 border rounded p-3 break-words bg-slate-50 shadow">
                <p>{item.description}</p>
              </div>
              <div className='flex flex-col text-center w-3/5 border bg-slate-50 px-2 rounded shadow mt-3'>
                <div>
                  <strong>View:</strong>
                  <span>{type?.name}</span>
                </div>
                <div>
                  <strong>Area:</strong>
                  <span>{area?.name}</span>
                </div>
              </div>
              <div className="my-5 flex justify-between w-full px-5">
                <ButtonManage actions="edit" name="Edit" tech={item} refetch={refetch} getTechById={getTechById} />
                <ButtonManage actions="enabled" name="" enabled={item.enabled} tech={item} refetch={refetch} />
                <ButtonManage actions="delete" name="Delete" tech={item} refetch={refetch} />
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
