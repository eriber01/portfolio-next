import { MeButton } from './MeButton'
import NavLinks from './NavLinks'
import TopNav from './TopNav'

const Nav = () => {
  return (
    <main className='bg-home general-font-size'>
      <TopNav />
      <div className='flex'>
        <MeButton />
        <NavLinks />
      </div>
    </main>
  )
}

export default Nav