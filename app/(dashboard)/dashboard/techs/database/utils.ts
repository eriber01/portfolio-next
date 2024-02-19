import { toast } from "react-toastify";
import { Techs } from "../interface";

export const TechTypes = [
  {
    id: 1,
    name: 'UI'
  },
  {
    id: 2,
    name: 'Projects'
  },
  {
    id: 3,
    name: 'Both'
  },
];

export const AreaTypes = [
  {
    id: 1,
    name: 'FrontEnd'
  },
  {
    id: 2,
    name: 'BackEnd'
  },
  {
    id: 3,
    name: 'Others'
  },
];

export const validateTech = async (state: Techs) => {

  let key: keyof Techs

  for (key in state) {
    const value = state[key]

    if (typeof value === 'string') {
      if (!value.trim()) {
        toast.error(`The field ${key} is required`)
        return false
      }
    } else if (typeof value === 'boolean') {

      return true
    } else if (!value) {
      toast.error(`The field ${key} is required`)
      return false
    }
  }

  return true

}