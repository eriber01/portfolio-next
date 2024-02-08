import { ApiResponseMessage, api } from "@/app/utils";
import { Techs } from "../interface";
import { validateTech } from "./utils";
import { savedMessageProps } from "@/app/interfaces";
import { toast } from "react-toastify";

export async function UpdateTech(tech: Techs) {
  console.log(tech);

  const validate = await validateTech(tech)

  if (!validate) return false

  try {
    toast.loading('Updating Tech')

    const payload = new FormData();
    const file = tech.file as File
    payload.append('image', file)

    Object.entries(tech).forEach(([key, value]) => {
      payload.append(key, value)
    })

    console.log(payload);

    const { data } = await api.put<savedMessageProps>('/tech', payload)

    ApiResponseMessage(data)
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}