import Image from 'next/image'
import style from '../style.module.css'

interface tech {
  tech: string
}

interface Props {
  tech: tech[]
}

const TechImages = ({ tech }: Props) => {
  return (
    <div className={`flex items-center h-[60%]`}>
      {
        tech.map(item => (
          <Image
            alt="tech image"
            width={25}
            height={25}
            src={item.tech}
            className={`bg-white rounded-full mx-2 ${style.tech}`}
          />
        ))
      }
    </div>
  )
}

export default TechImages