'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { MeButton } from './MeButton'
import NavLinks from './NavLinks'
import SocialButtons from './SocialButtons'
import TopNav from './TopNav'
import { useState } from 'react'
import { SessionButton } from './SessionButton'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className='bg-home general-font-size'>
      <Navbar
        maxWidth="full"
        isMenuOpen={isOpen}
        className="bg-home"
      >

        <NavbarContent className="md:hidden pr-3" justify="center">
          <NavbarMenuToggle
            aria-label={isOpen ? "Close" : 'Open'}
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          />
        </NavbarContent>

        <NavbarContent>
          <div className='hidden md:flex flex-col w-full'>
            <TopNav />
            <div className='flex justify-between bg-black'>
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