import { api } from "@/app/utils"
import { Techs } from "../interface"
import { Status } from "@/app/interfaces"

interface GetProfileProps {
  techs: Techs[],
  tech: Techs
  message: string
  status: Status
}

export const GetTechs = async (): Promise<Techs[]> => {
  const { data } = await api.get<GetProfileProps>('/tech')

  if (data.status === 'success') {
    console.log(data);
    return data.techs
  }

  return []
}

export const GetTechById = async (id: number): Promise<Techs | null> => {
  const { data } = await api.get<GetProfileProps>(`/tech/${id}`)

  console.log(data);
  if (data.status === 'success') {
    console.log('success');

    return data.tech
  }

  return null
}