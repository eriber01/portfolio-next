'use client'

import CardButtons from "./CardButtons"
import style from '../style.module.css'
import { Projects } from "@/app/(dashboard)/dashboard/projects/interfaces"
import TechImages from "../../Abouts/components/TechImages"

interface Props {
  projects: Projects
}

const CardProject = ({ projects }: Props) => {
  return (
    <div className={`card-container ${style.cardContainer}`}
      style={{
        backgroundImage: `url(${projects.image?.url})`
      }}
    >
      <div className={`card ${style.card, style.card} hover:bg-black/95 hover:-rotate-6`}>
        <div className="w-3/4 pt-16">
          <p className="big-font-size pb-5">
            {projects.name}
          </p>
        </div>
        <div className="w-[80%]">
          <span className="medium-font-size">
            {projects.description}
          </span>
        </div>
        <div className="my-2">
          <TechImages tech={projects?.tech!} />
        </div>
        <div className="flex justify-center pb-10 w-full">
          <CardButtons git={projects.git} link={projects.link} />
        </div>
      </div>
    </div>
  )
}

export default CardProject