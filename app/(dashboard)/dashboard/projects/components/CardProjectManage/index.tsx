'use client'

import HeaderName from "@/app/(dashboard)/components/HeaderName"
import Image from "next/image"
import { ButtonManage } from "./components/ButtonManage"
import { Projects } from "../../interfaces"

interface Props {
  projects: Projects[]
  refetch: () => void
  getProjectById: (id: number) => void
}

const CardProjectManage = ({ projects, refetch, getProjectById }: Props) => {
  console.log(projects);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="mt-[-20px]">
        <HeaderName text="Manage Project" />
      </div>
      <div className="flex flex-wrap justify-between w-10/12 mt-10">
        {projects.map((item, index) => (
          <div
            className='w-[300px] h-full bg-white text-black my-5 rounded flex flex-col items-center'
            key={index}
          >
            <div className="mt-2">
              <Image
                alt={item.name}
                src={item?.image?.url!}
                height={200}
                width={200}
                className="rounded shadow-2xl"
              />
            </div>
            <div className="mt-2">
              <p className="border-b border-black">{item.name}</p>
            </div>
            <div className="w-4/5 text-center my-3 border p-2 bg-white rounded shadow-md break-words">
              <p>{item.description}</p>
            </div>
            <div className="flex justify-center w-10/12 px-2 py-1 mt-2 bg-gray-300 rounded">
              <div className="flex justify-between w-full">
                {
                  item?.tech?.map(tech => (
                    <Image
                      key={tech?.id}
                      alt={tech?.name!}
                      src={tech?.image?.url!}
                      height={20}
                      width={20}
                      className="rounded"
                    />
                  ))
                }
              </div>
            </div>
            <div className="my-5 flex justify-between w-full px-5">
              <ButtonManage actions="edit" name="Edit" refetch={refetch} project={item} getProjectById={getProjectById}/>
              <ButtonManage actions="enabled" name="" refetch={refetch} project={item} />
              <ButtonManage actions="delete" name="Delete" refetch={refetch} project={item} />
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default CardProjectManage