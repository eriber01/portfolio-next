import { toast } from "react-toastify"

import { ApiResponseMessage, api } from "@/app/utils"
import { Techs } from "../interface"
import { savedMessageProps } from "@/app/interfaces"

export async function onSaveTech(state: Techs) {
  let key: keyof Techs

  for (key in state) {
    const value = state[key]
    if (typeof value === 'string') {
      if (!value.trim()) {
        toast.error(`The field ${key} is required`)
        return
      }
    } else if (typeof 'number') {
      if (value === 0) {
        toast.error('Need add one Techs')
        return
      }
    }
  }

  const payload = new FormData();
  const image = state.file as File
  payload.append('image', image)

  Object.entries(state).forEach(([key, value]) => {
    payload.append(key, value)
  })

  try {
    toast.loading('Saving the tech')
    const { data } = await api.post<savedMessageProps>('/tech', payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

    ApiResponseMessage(data)

  } catch (error) {
    console.log(error);
  }
}