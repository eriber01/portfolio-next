import { toast } from "react-toastify";
import { Profile } from "../interface";
import { api, ApiResponseMessage } from "@/app/utils";
import { savedMessageProps } from "@/app/interfaces";

export async function onSaveProfile(state: Profile) {
  let key: keyof Profile

  for (key in state) {
    const value = state[key]
    if (typeof value === 'string') {
      if (!value.trim()) {
        toast.error(`The field ${key} is required`)
        return
      }
    } else if (typeof 'number') {
      if (state.year === 0) {
        toast.error(`Years must be greater than zero! `)
      }
    }
  }

  const { data } = await api.post<savedMessageProps>('/profile', state)

  ApiResponseMessage(data)

}