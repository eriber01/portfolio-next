'use client'

import CardButtons from "./CardButtons"

import style from '../style.module.css'

const CardProject = ({ img }: { img: string }) => {
  return (
    <div className={`card-container ${style.cardContainer}`}
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <div className={`card ${style.card, style.card} hover:bg-black/100 hover:-rotate-6`}>
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
    </div>
  )
}

export default CardProject