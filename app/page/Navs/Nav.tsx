'use client'
import { Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { MeButton } from './components/MeButton'
import NavLinks from './components/NavLinks'
import SocialButtons from './components/SocialButtons'
import { SessionButton } from './components/SessionButton'
import NavLinksMobile from './components/NavLinksMobile'
import { useState } from 'react'
import { Profile } from '@/app/(dashboard)/dashboard/profile/interface'

const Nav = ({ profile }: { profile: Profile }) => {
  const [isOpen, toggle] = useState(false)

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

        <NavLinksMobile toggle={toggle} profile={profile} />

        <NavbarContent>
          <div className='hidden md:flex flex-col w-full'>
            <div className='flex justify-between'>
              <MeButton />
              <NavLinks />
              <SocialButtons profile={profile} />
            </div>
          </div>
        </NavbarContent>

      </Navbar>
    </main>
  )
}

export default Nav