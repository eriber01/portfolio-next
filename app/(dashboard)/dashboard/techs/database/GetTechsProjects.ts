'use server'

import { toast } from "react-toastify"
import { Techs } from "../interface"


export const getTechForCreateProjects = async (): Promise<Techs[]> => {
  try {

    const techs = await prisma?.techs.findMany({ where: { OR: [{ show_type: 2 }, { show_type: 3 }] }, include: { image: true } }) as Techs[]

    return techs
  } catch (error) {
    toast.error('Fail get Techs')
    return []
  }

}