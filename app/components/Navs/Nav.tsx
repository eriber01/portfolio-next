'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { MeButton } from './components/MeButton'
import NavLinks from './components/NavLinks'
import SocialButtons from './components/SocialButtons'
import TopNav from './components/TopNav'

import { SessionButton } from './components/SessionButton'

import NavLinksMobile from './components/NavLinksMobile'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { toggleNav } from '@/app/redux/features/nav/navSlice'

const Nav = () => {
  const { isOpen } = useAppSelector(state => state.nav)
  const dispatch = useAppDispatch()

  const toggle = () => dispatch(toggleNav(!isOpen))
// bg-[#1e1830]
  return (
    <main className='bg-transparent general-font-size'>
      <Navbar
        maxWidth="full"
        isMenuOpen={isOpen}
        className="bg-transparent shadow md:pb-1 xl:pb-1 pt-1"
      >

        <NavbarContent className="md:hidden pr-3" justify="center">
          <NavbarMenuToggle
            aria-label={isOpen ? "Close" : 'Open'}
            className='md:hidden'
            onClick={() => toggle()}
          />
        </NavbarContent>

        <NavLinksMobile toggle={toggle} />

        <NavbarContent>
          <div className='hidden md:flex flex-col w-full'>
            {/* <TopNav /> */}
            <div className='flex justify-between'>
              <MeButton />
              <NavLinks />
              <SocialButtons />
              {/* <div className='border ml-3'></div> */}
              <SessionButton />
            </div>
          </div>
        </NavbarContent>

      </Navbar>
    </main>
  )
}

export default Nav