'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { MeButton } from './components/MeButton'
import NavLinks from './components/NavLinks'
import SocialButtons from './components/SocialButtons'
import { SessionButton } from './components/SessionButton'
import NavLinksMobile from './components/NavLinksMobile'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, toggle] = useState(false)

  // const onToggle = () => toggle(!isOpen)

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
            onClick={() => toggle(!isOpen)}
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