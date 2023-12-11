'use client'

import Image from "next/image"
import TechImages from "../../Abouts/components/TechImages"
import { getTech } from "../../Abouts/database"
import CardButtons from "./CardButtons"

const CardProject = () => {
  return (
    <div className="flex flex-col items-center bg-white w-[30%] shadow-2xl rounded-3xl">
      <div>
        <Image
          alt="project image"
          width={'500'}
          height={'500'}
          src={'https://res.cloudinary.com/eriber/image/upload/v1691249333/Portafolio/ProjectImage/Open_Jira_Next_App_ptj9cg.png'}
          className="w-full rounded-3xl p-1"
        />
      </div>
      <div className="w-[90%] mt-5">
        {/* project name */}
        <div>
          <p className="text-black big-font-size font-semibold">
            Primer Projecto
          </p>
        </div>
        {/* descriptions */}
        <div>
          <p className="secondary-font-color mt-5 medium-font-size">
            Introducing Smart Letters: My side project that blends
            AI and emotions. ✉️✨ Create personalized letters with
            Next.js, Tailwind CSS, and NextUI, using OpenAI's
            artificial intelligence. Express yourself uniquely.
            Join the beta now and get ready for more exciting features.
          </p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <TechImages tech={getTech()} />
        </div>
        <div className="w-full flex justify-center">
          <CardButtons />
        </div>
      </div>
    </div>
  )
}

export default CardProject