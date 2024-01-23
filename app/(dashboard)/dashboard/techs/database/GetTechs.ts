import { api } from "@/app/utils"
import { Techs } from "../interface"
import { Status } from "@/app/interfaces"

interface GetProfileProps {
  res: Techs[],
  message: string
  status: Status
}

export const GetTechs = async (): Promise<Techs[]> => {
  const { data } = await api.get<GetProfileProps>('/tech')

  if (data.status === 'success') {
    console.log(data);
    return data.res
  }

  return []
}