
import { toast } from "react-toastify"
import { Techs } from "../interface"
import { api } from "@/app/utils";
import { Status } from "cloudinary";

interface GetTechsProps {
  techs: Techs[],
  message: string
  status: Status
}

export async function getTechForCreateProjects() {
  try {
    const { data } = await api.get<GetTechsProps>('/projects/techs')

    if (data.status === 'success') {
      return data.techs
    }
  
    return []
  } catch (error) {
    console.log('el error: ', error);
    toast.error('Fail get Techs')
    return []
  }
}
