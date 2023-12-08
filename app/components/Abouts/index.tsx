
import HeaderLabel from '../UI/HeaderLabel'
import TechComponent from './components/TechComponent'
import AboutMeText from './components/AboutMeText'
// import TechModal from './components/TechModal'

const arr = [
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1683686089/Portafolio/TechImage/Next_ypqi0c.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682707385/Portafolio/TechImage/Mongo_bbsnp9.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682707229/Portafolio/TechImage/Node_j6gk3i.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682565758/Portafolio/TechImage/javas_oeirj7.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682425350/Portafolio/TechImage/React_hm3wdk.png'
  },
]

export const About = () => {
  return (
    <div className='h-screen w-full  pt-20 bg-[#28213E] flex justify-center' id='about'>
      <div className='w-full md:w-10/12 xl:w-10/12'>
        <div className='w-2/4 pl-4 md:pl-0 xl:pl-0 md:w-[15%] xl:w-[15%] md:pt-5 xl:pt-5'>
          <HeaderLabel text='About' />
        </div>

        {/* about content container */}
        <div className='block md:flex xl:flex w-full mt-10 h-3/4 justify-between'>
          {/* tech container */}
          <div className='px-4 md:px-0 xl:px-0 md:w-[40%] xl:w-[40%] flex flex-col justify-between h-full'>
            <TechComponent area='Front-End' descriptions='Una descripcion sobre el area' tech={arr} />
            <TechComponent area='Back-End' descriptions='Una descripcion sobre el area' tech={arr} />
            <TechComponent area='Others' descriptions='Una descripcion sobre el area' tech={[]} />
          </div>
          <div className='hidden md:flex xl:flex justify-center items-center h-full'>
            <span className='hidden md:block xl:block border-r-0 md:border-r-1 xl:border-r-1 opacity-50 h-[80%]'></span>
          </div>
          {/* text container */}
          <div className='px-8 md:px-0 xl:px-0 bg-[#28213E] w-full md:w-[40%] xl:w-[40%] h-full mt-10 md:mt-0 xl:mt-0 block md:flex xl:flex justify-center items-center'>
            <AboutMeText />
          </div>
        </div>
      </div>
    </div>
  )
}
