'use server'

import { toast } from "react-toastify"
import { Techs } from "../interface"

export async function getTechForCreateProjects() {
  try {

    console.log('antes');

    const techs = await prisma?.techs.findMany({ where: { OR: [{ show_type: 2 }, { show_type: 3 }] }, include: { image: true } }) as Techs[]
    console.log('despues');
    return techs
  } catch (error) {
    console.log('el error: ', error);
    toast.error('Fail get Techs')
    return []
  }
}

// export const getTechForCreateProjects = async (): Promise<Techs[]> => {
//   try {

//     const techs = await prisma?.techs.findMany({ where: { OR: [{ show_type: 2 }, { show_type: 3 }] }, include: { image: true } }) as Techs[]

//     return techs
//   } catch (error) {
//     toast.error('Fail get Techs')
//     return []
//   }

// }