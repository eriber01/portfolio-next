import Link from 'next/link'

import { NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { useAppSelector } from '@/app/redux/hooks'
import { SessionButton } from './SessionButton'
import styles from '../style.module.css'
import SocialButtons from './SocialButtons'

const NavLinksMobile = ({ toggle }: { toggle: () => void }) => {
  const { nav } = useAppSelector((state) => state.nav)
// bg-[#1d1730]
  return (
    <main>
      <NavbarMenu className='bg-transparent text-white flex flex-col w-full'>
        <div className='flex flex-col justify-between h-[85%]'>
          <div>
            <NavbarMenuItem className='mt-2'>
              <Link
                onClick={() => toggle()}
                href={'#home'} className={`${styles.links}`}>
                Home
              </Link>
            </NavbarMenuItem>

            <div className='my-5 flex flex-col'>
              {
                nav.map(({ id, name }) => (
                  <NavbarMenuItem className='py-3'>
                    <li key={id}>
                      <Link
                        onClick={() => toggle()}
                        className={`${styles.links}`} key={id} href={`#${id}`}>
                        {name}
                      </Link>
                    </li>
                  </NavbarMenuItem>
                ))
              }
            </div>

            <NavbarMenuItem>
              <div className='flex'>
                <SessionButton />
              </div>
            </NavbarMenuItem>
          </div>

          <div className='w-[90%]'>
            <NavbarMenuItem >
              <SocialButtons />
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>

    </main>
  )
}

export default NavLinksMobile