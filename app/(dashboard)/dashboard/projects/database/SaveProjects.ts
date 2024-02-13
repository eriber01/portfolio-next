import { toast } from "react-toastify"
import { Projects } from "../interfaces"
import { ApiResponseMessage, api } from "@/app/utils"
import { validateProject } from "./utils"

export async function onSaveProject(state: Projects) {

  const validate = validateProject(state)

  if (!validate) return false

  const payload = new FormData()
  const image = state.file as File
  payload.append('image', image)

  payload.append('tech', JSON.stringify(state.tech))

  Object.entries(state).forEach(([key, value]) => {
    if (key !== 'tech') {
      payload.append(key, value)
    }
  })


  try {

    toast.loading(`${state.id ? 'Updating' : 'Saving'} the Project`)

    const { data } = state.id ? await api.put('/projects', payload) : await api.post('/projects', payload)

    ApiResponseMessage(data)

    return true
  } catch (error) {
    console.log(error);
    return false
  }
}