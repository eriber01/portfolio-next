
export interface Techs {
  id?: number | null
  name: string
  description: string
  imageUrl?: string
  status?: boolean
}

export interface Projects {
  id?: number | null
  name: string
  description: string
  image: string
  link: string
  git: string
  techs: Techs[]
  status?: boolean
}