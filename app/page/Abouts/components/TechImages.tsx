
import Image from 'next/image'
import style from '../style.module.css'
import { Techs } from '@/app/(dashboard)/dashboard/techs/interface'

interface tech {
  tech: string
}

interface Props {
  tech: Techs[]
}

const TechImages = ({ tech }: Props) => {
  console.log(tech);
  
  return (
    <div className={`flex items-center h-[60%]`}>
      {
        tech.map(item => (
          <Image
            alt="tech image"
            width={25}
            height={25}
            src={item.image?.url!}
            className={`bg-white rounded-full mx-2 ${style.tech}`}
          />
        ))
      }
    </div>
  )
}

export default TechImages