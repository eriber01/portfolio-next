import Link from "next/link"

export const MeButton = () => {
  return (
    <main className="general-font-size mr-2 w-8/12 md:w-[20%] xl:w-[20%]">
      <div className="cursor-pointer transition-all duration-1000 ease-in-out mr-2 border w-6/12 md:w-[70%] xl:w-[50%] text-center hover:me-hover">
        <Link href={'#home'} >
          <span>{'Eriber'}</span>
          <span> </span>
          <span className="secondary-font-color">{'Tejeda'}</span>
        </Link>
      </div>
    </main>
  )
}
