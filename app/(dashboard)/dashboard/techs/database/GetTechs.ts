// 'use server'

import { api } from "@/app/utils"
import { Techs } from "../interface"
import { Status } from "@/app/interfaces"
import { toast } from "react-toastify"
import prisma from '@/libs/db';

interface GetTechsProps {
  techs: Techs[],
  tech: Techs
  message: string
  status: Status
}

export const GetTechs = async (): Promise<Techs[]> => {

  const { data } = await api.get<GetTechsProps>('/tech')

  if (data.status === 'success') {
    return data.techs
  }

  return []
}

export const GetTechById = async (id: number): Promise<Techs | null> => {
  const { data } = await api.get<GetTechsProps>(`/tech/${id}`)

  console.log(data);
  if (data.status === 'success') {
    console.log('success');

    return data.tech
  }

  return null
}


