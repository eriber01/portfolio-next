import { Techs } from "../techs/interface"

export interface Projects {
  id?: number | null
  name: string
  description: string
  file?: File | null | string
  link: string
  git: string
  techs?: ProjectsTechs[]
  tech: Techs[]
  enabled?: boolean
  image?: ProjectImage
}

export interface ProjectImage {
  id?: number
  url: string
  public_id: string
  project_id: number
}

export interface ProjectsTechs {
  id?: number
  tech_id: number
  project_id: number
  techs?: Techs
}

export const INITIAL_STATE: Projects = {
  name: '',
  description: '',
  git: '',
  link: '',
  tech: [],
  file: null
}