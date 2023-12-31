export type NavLinksTypes = '/' | 'profile' | 'projects' | 'techs'
export type NavNameTypes = 'Home' | 'Profile' | 'Projects' | 'Techs'

export type Nav = {
  id: NavLinksTypes
  name: NavNameTypes
}

export const Navs: Nav[] = [
  {
    id: '/',
    name: 'Home'
  },
  {
    id: 'profile',
    name: 'Profile'
  },
  {
    id: 'projects',
    name: 'Projects'
  },
  {
    id: 'techs',
    name: 'Techs',
  },
]