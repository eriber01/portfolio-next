'use client'
import { ProfessionsLabel } from './components/ProfessionsLabel'
import Image from 'next/image'
import Link from 'next/link'
import WhatsappSvgImg from './components/WhatsappSvgImg'
import CvSvgImg from './components/CvSvgImg'
import { Fade, Slide } from 'react-awesome-reveal'
import { Profile } from '@/app/(dashboard)/dashboard/profile/interface'

export default function HomePage({ profile }: { profile: Profile }) {
  
  return (
    <div
      className='h-screen w-full bg-home pt-20 flex flex-col md:flex-row xl:flex-row justify-between items-center'
      id='home'
    >
      <div className='w-full items-center md:w-2/4 h-3/4 md:items-start xl:items-start md:pl-[10%] xl:pl-[10%]'>

        <div className='h-3/4 flex flex-col items-center md:items-start justify-center'>

          <Slide delay={0}>
            <ProfessionsLabel label={profile.job} />
          </Slide>

          <Fade cascade damping={1e-1} delay={1000}>
            <div className='mt-10 mb-5 header-mobile-font-size flex flex-col text-center md:text-start md:items-start xl:items-start md:header-font-size xl:header-font-size'>
              <p>If you are here.</p>
              <p>You are looking for me.</p>
            </div>
          </Fade>

          <div className='w-3/4 md:w-[80%] xl:w-[50%] flex flex-col text-center md:text-start md:items-start'>
            <Fade cascade damping={1e-1} delay={1500}>
              <p className='medium-font-size md:big-font-size xl:big-font-size secondary-font-color'>
                Don't think about anyone else, I'm the one, send me a message.
              </p>
            </Fade>
          </div>

        </div>

        <div className='w-full flex justify-center md:justify-start xl:justify-start'>
          <div className='w-[50%] xl:w-[70%] md:w-[100%] flex flex-col md:flex-row xl:flex-row justify-between'>
            <Link
              href={`https://api.whatsapp.com/send?phone=${profile.phone}&text=Hello`}
              target={'_blank'}
              rel='noreferrer'
              className='mb-2 md:mb-0 xl:mb-0 md:mr-3'
            >
              <Slide direction='left'>
                <div className='transition-custom py-2 px-5 flex items-center justify-center bg-[#00D95F] hover:bg-[#066B32] rounded-tl-2xl md:rounded-br-2xl rounded-tr-2xl md:rounded-tr-md rounded-md'>
                  <WhatsappSvgImg />

                  <span className='ml-3'>
                    Whatsapp
                  </span>
                </div>
              </Slide>
            </Link>

            <Link
              href={profile.cv}
              target={'_blank'}
              rel='noreferrer'
            >
              <Slide direction='right'>
                <div className='transition-custom py-2 px-5 flex items-center justify-center bg-[#9747FF] hover:bg-[#3b1b64] rounded-br-2xl md:rounded-br-md rounded-bl-2xl md:rounded-tr-2xl rounded-md'>
                  <CvSvgImg />
                  <span className='ml-3'>
                    Download CV
                  </span>
                </div>
              </Slide>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden xl:w-[40%] xl:pr-8 h-3/4 xl:flex justify-center items-center'>
        <Slide direction='down'>
          <Image
            width={1000}
            height={1000}
            alt='Image home'
            src={'/home.png'}
            className='w-auto'
          />
        </Slide>
      </div>
    </div>
  )
}