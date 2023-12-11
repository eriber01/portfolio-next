import Link from 'next/link'
import { nav } from "../database";

import { NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { SessionButton } from './SessionButton'
import styles from '../style.module.css'
import SocialButtons from './SocialButtons'
import { Dispatch, SetStateAction } from 'react';

interface Props {
  toggle: (value: boolean) => void
}

const NavLinksMobile = ({ toggle }: Props) => {

  return (
    <main>
      <NavbarMenu className='bg-transparent text-white flex flex-col w-full'>
        <div className='flex flex-col justify-between h-[85%]'>
          <div>
            <NavbarMenuItem className='mt-2'>
              <Link
                onClick={() => toggle(false)}
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
                        onClick={() => toggle(false)}
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