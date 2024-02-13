import { toast } from "react-toastify"
import { Projects } from "../interfaces"


export const validateProject = (state: Projects) => {
  let key: keyof Projects

  for (key in state) {
    const value = state[key]
    if (typeof value === 'string') {
      if (!value.trim()) {
        toast.error(`The field ${key} is required`)
        return false
      }
    } else if (typeof 'object') {
      if (key === 'tech') {
        if (state.tech.length === 0) {
          toast.error('Need add one Techs')
          return false
        }
      }
    }
  }

  return true
}