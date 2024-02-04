import { savedMessageProps } from "@/app/interfaces";
import { ApiResponseMessage, api } from "@/app/utils";
import { toast } from "react-toastify";
import { Techs } from "../interface";

export async function DeleteTech(tech: Techs) {

  try {
    toast.loading('Deleting the tech')
    const { data } = await api.delete<savedMessageProps>(`/tech`, { data: tech })
    ApiResponseMessage(data)
  } catch (error) {
    console.log(error);
  }

}