import { Techs } from "../techs/interface"

export interface Projects {
  id?: number | null
  name: string
  description: string
  image: File | null | ProjectImage
  link: string
  git: string
  techs: Techs[]
  enabled?: boolean
}

export interface ProjectImage {
  id?: number
  url: string
  public_id: string
  project_id: number
}