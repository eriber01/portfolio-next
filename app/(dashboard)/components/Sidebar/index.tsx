'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

import { Navs } from "./interfaces & constans"

import { IconsMenu } from "../IconsMenu";
import { Button } from "@nextui-org/react";


const Sidebar = () => {
  const paths = usePathname()
  const exactPath = paths.split('/')[2]

  return (
    <div className="border-r-medium border-r-gray-700 h-screen w-full shadow-2xl pt-4 bg-[#1F2128] flex flex-col">
      <div className="transition-custom flex justify-center items-center text-center">
        <Link
          href={'/'}
          className="transition-custom w-2/4 border rounded cursor-pointer hover:w-3/5"
        >
          Go Back
        </Link>
      </div>
      <div className="pt-10">
        <nav>
          <ul className="flex flex-col justify-center items-center">
            {
              Navs.map(({ id, name }) => (
                <Link
                  href={`/dashboard/${id}`}
                  className={`transition-custom mb-5 ml-5 py-3 px-4 w-3/4 rounded-xl hover:bg-purple-500 ${exactPath === id ? 'bg-purple-500' : ''}`}
                  key={id}
                >
                  <div className="flex items-center">
                    <IconsMenu id={id} />
                    {name}
                  </div>
                </Link>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="mt-auto pb-10 text-center">
        <Button color="danger">
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Sidebar