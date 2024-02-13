import { toast } from "react-toastify"

import { ApiResponseMessage, api } from "@/app/utils"
import { Techs } from "../interface"
import { savedMessageProps } from "@/app/interfaces"
import { validateTech } from "./utils"

export async function onSaveTech(state: Techs) {

  const validate = await validateTech(state)

  if (!validate) return false

  const payload = new FormData();
  const image = state.file as File
  payload.append('image', image)

  Object.entries(state).forEach(([key, value]) => {
    payload.append(key, value)
  })

  try {
    toast.loading('Saving the tech')
    const { data } = await api.post<savedMessageProps>('/tech', payload)

    ApiResponseMessage(data)

    return true
  } catch (error) {
    console.log(error);
    return false
  }
}