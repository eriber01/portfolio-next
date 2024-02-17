import { Techs } from "@/app/(dashboard)/dashboard/techs/interface"

export interface PropsInitialState {
  front: Techs[]
  back: Techs[]
  other: Techs[]
}

export const INITIAL_STATE: PropsInitialState = {
  front: [],
  back: [],
  other: []
}