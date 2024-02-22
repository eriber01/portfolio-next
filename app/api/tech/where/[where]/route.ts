import { NextResponse } from "next/server";
import prisma from '@/libs/db';


interface getParams {
  params: {
    where: {
      area_type: number,
      enabled: boolean
    }
  }
}

export async function GET(_: Request, { params: { where } }: getParams) {

  try {

    const w = {
      area_type: where.area_type,
      enabled: where.enabled
    }

    if (!where) {
      return NextResponse.json({ message: 'No have Where', success: 'fail', techs: [] })
    }

    const techs = await prisma?.techs.findMany({ where: w, include: { image: true } })

    return NextResponse.json({ message: '', success: 'success', techs })

  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: 'Error getting the Techs', success: 'fail', techs: [] })
  }
}