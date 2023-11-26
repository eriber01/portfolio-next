'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { MeButton } from './MeButton'
import NavLinks from './NavLinks'
import SocialButtons from './SocialButtons'
import TopNav from './TopNav'

import { SessionButton } from './SessionButton'

import NavLinksMobile from './NavLinksMobile'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { toggleNav } from '@/app/redux/features/nav/navSlice'

const Nav = () => {
  const { isOpen } = useAppSelector(state => state.nav)
  const dispatch = useAppDispatch()

  const toggle = () => dispatch(toggleNav(!isOpen))
// bg-[#1e1830]
  return (
    <main className='bg-transparent general-font-size pb-4'>
      <Navbar
        maxWidth="full"
        isMenuOpen={isOpen}
        className="bg-transparent"
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
            <TopNav />
            <div className='flex justify-between mt-2'>
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