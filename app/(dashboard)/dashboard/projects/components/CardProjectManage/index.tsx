'use client'

import HeaderName from "@/app/(dashboard)/components/HeaderName"
import { ProjectsArr } from "../../database"
import Image from "next/image"
import { button } from "@nextui-org/react"
import { ButtonManage } from "./components/ButtonManage"

const CardProjectManage = () => {
  const projects = ProjectsArr
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
          // style={{
          //   backgroundImage: `url(${item.imageUrl})`
          // }}
          >
            <div className="mt-2">
              <Image
                alt={item.name}
                src={item.imageUrl}
                height={200}
                width={200}
                className="rounded shadow-2xl"
              />
            </div>
            <div className="mt-2">
              <p className="border-b border-black">{item.name}</p>
            </div>
            <div className="w-4/5 text-center mt-2">
              <p>{item.description}</p>
            </div>
            <div className="flex justify-center w-10/12 px-2 py-1 mt-2 bg-gray-300 rounded">
              <div className="flex justify-between w-full">
                {
                  item.techs.map(tech => (
                    <Image
                      key={tech.id}
                      alt={tech.name}
                      src={tech.imageUrl || 'asd'}
                      height={20}
                      width={20}
                      className="rounded"
                    />
                  ))
                }
              </div>
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

export default CardProjectManage