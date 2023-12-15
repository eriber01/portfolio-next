'use client'

import Image from "next/image"
import TechImages from "../../Abouts/components/TechImages"
import { getTech } from "../../Abouts/database"
import CardButtons from "./CardButtons"

const CardProject = () => {
  return (
    <div className="w-[90%] md:w-[30%] h-[300px] bg-black my-4 rounded-xl flex flex-col justify-between items-center text-center">
      <div className="w-3/4 pt-16">
        <p className="big-font-size pb-5">
          Nombre del Projecto
        </p>
      </div>
      <div className="w-[80%]">
        <span className="medium-font-size">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Beatae fugiat odio possimus nemo, vel animi dolorem saepe.
          {/* repudiandae adipisci error neque delectus labore eligendi
          eaque. Sequi ab reiciendis quaerat! Minus? */}
        </span>
      </div>
      <div className="flex justify-center pb-10 w-full">
        <CardButtons />
      </div>
    </div>
  )
}

export default CardProject