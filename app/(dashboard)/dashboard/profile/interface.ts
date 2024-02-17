export interface Profile {
  id?: number
  name: string
  job: string
  phone: string
  email: string
  git_url: string
  linkedin_url: string
  linkedin: string
  cv: string
  year: number
}

export const INITIAL_STATE: Profile = {
  name: '',
  job: '',
  phone: '',
  email: '',
  git_url: '',
  linkedin: '',
  linkedin_url: '',
  cv: '',
  year: 0
}