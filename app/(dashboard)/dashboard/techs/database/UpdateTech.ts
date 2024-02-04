import { ApiResponseMessage, api } from "@/app/utils";
import { Techs } from "../interface";
import { validateTech } from "./utils";
import { savedMessageProps } from "@/app/interfaces";
import { toast } from "react-toastify";

export async function UpdateTech(tech: Techs) {
  console.log(tech);

  const validate = await validateTech(tech)

  if (!validate) return

  try {
    toast.loading('Updating Tech')

    const { data } = await api.put<savedMessageProps>('/tech', tech)

    ApiResponseMessage(data)

  } catch (error) {
    console.log(error);
  }
}