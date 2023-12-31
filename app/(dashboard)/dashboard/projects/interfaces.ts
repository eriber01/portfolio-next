
export interface Techs {
  id: number | null
  name: string
  description: string
  imageUrl?: string
  status?: boolean
}

export interface Projects {
  id: number | null
  name: string
  description: string
  linkUrl: string
  gitUrl: string
  imageUrl: string
  techs: Techs[]
  status?: boolean
}