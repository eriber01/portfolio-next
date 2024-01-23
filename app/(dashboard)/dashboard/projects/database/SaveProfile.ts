import { toast } from "react-toastify"
import { Projects } from "../interfaces"
import { api } from "@/app/utils"

export async function onSaveProject(state: Projects) {
  let key: keyof Projects

  for (key in state) {
    const value = state[key]
    if (typeof value === 'string') {
      if (!value.trim()) {
        toast.error(`The field ${key} is required`)
        return
      }
    } else if (typeof 'object') {
      if (key === 'techs') {
        if (state.techs.length === 0) {
          toast.error('Need add one Techs')
          return
        }
      }
    }
  }

  const payload = new FormData()
  const image = state.image as File
  payload.append('image', image)

  Object.entries(state).forEach(([key, value]) => {
    payload.append(key, value)
  })

  await api.post('/projects', payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
}