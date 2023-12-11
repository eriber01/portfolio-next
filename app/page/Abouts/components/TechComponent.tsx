'use client'
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";

import TechImages from "./TechImages";
import TechAreaModal from "./TechAreaModal";
import { getTech } from "../database";
import { Tech } from "../interfaces";

interface Props {
  area: string
  descriptions: string
}

const TechComponent = ({ area, descriptions }: Props) => {
  const [isOpen, toggle] = useState(false)

  const tech: Tech[] = getTech()

  return (
    <div className="transition-custom hover:green-label hover:scale-105 hover:shadow-xl bg-gradient-to-tl from-[#130e2257] to-[#120C23] w-full pl-5 my-2 md:w-full xl:w-full h-full rounded">
      <TechAreaModal toggle={toggle} tech={tech} area={area} isOpen={isOpen} />
      <div className="h-1/4">
        <div className="flex justify-between items-center mt-5">
          <p
            className="cursor-pointer"
            onClick={() => toggle(true)}
          >
            {area}
          </p>
          <div className="mr-3">
            <CiShare1 className="w-5 h-5 cursor-pointer"
              onClick={() => toggle(true)}
            />
          </div>
        </div>
        <div className="medium-font-size secondary-font-color mt-1">
          {descriptions}
        </div>
      </div>
      < TechImages tech={tech} />
    </div>
  )
}

export default TechComponent