import HeaderLabel from "../UI/HeaderLabel"
import FormContact from "./components/FormContact"
import Informations from "./components/Informations"

export const Contact = () => {
  return (
    <div className='h-screen md:mt-0 xl:mt-0 bg-[#28213E] pt-20 w-full flex justify-center' id='contact'>
      <div className="w-full md:w-10/12 xl:w-10/12">
        <div className="w-2/4 pl-4 md:pl-0 xl:pl-0 md:w-[15%] xl:w-[15%] md:pt-5 xl:pt-5">
          <HeaderLabel text="Contact" />
        </div>

        {/* contact content container */}
        <div className="md:px-0 xl:px-0 mt-10 block md:flex xl:flex justify-between h-4/5">
          {/* formulary */}
          <div className="flex justify-center items-center md:w-[40%] xl:w-[40%] h-full">
            <FormContact />
          </div>
          <div className='hidden md:flex xl:flex justify-center items-center h-full'>
            <span className='hidden md:block xl:block border-r-0 md:border-r-1 xl:border-r-1 opacity-50 h-[80%]'></span>
          </div>
          {/* informations */}
          <div className="flex justify-center items-center md:w-[40%] xl:w-[40%] h-full bg-[#28213E] px-10 md:px-0 xl:px-0">
            <Informations />
          </div>
        </div>
      </div>
    </div>
  )
}
