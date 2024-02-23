'use server'
import { Techs } from "@/app/(dashboard)/dashboard/techs/interface";
import prisma from "../../../../libs/db";
import { PropsInitialState } from "../interfaces";

const onFilter = (techs: Techs[], area_type: 1 | 2 | 3) => {
  const res = techs.filter(item => item.area_type === area_type)
  return res
}

export async function GetTechsForAbout(): Promise<PropsInitialState> {
  try {

    const techs = await prisma?.techs.findMany({ where: { OR: [{ show_type: 1 }, { show_type: 3 }] }, include: { image: true } }) as Techs[]

    const payload: PropsInitialState = {
      front: onFilter(techs, 1),
      back: onFilter(techs, 2),
      other: onFilter(techs, 3)
    }

    if (techs.length) {
      return payload
    }

    return {
      front: [],
      back: [],
      other: []
    }
  } catch (error) {
    console.log(error);
    return {
      front: [],
      back: [],
      other: []
    }
  }

}