export interface Techs {
  id?: number
  name: string
  description: string
  show_type: number | null
  file?: File | null | string
  enabled?: boolean
  image?: TechImage
}

export interface TechImage {
  id?: number
  url: string
  public_id: string
  tech_id: number
}


export const INITIAL_STATE: Techs = {
  name: '',
  description: '',
  show_type: null,
  file: null,
  image: {
    public_id: '',
    tech_id: 0,
    url: '',
  }
}