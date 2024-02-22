import { NextResponse } from "next/server";
import { ParamsGetById } from "../../utils";
import { GET_PROJECT_BY_ID } from "../queries";
import prisma from '@/libs/db';


export async function GET(_: Request, { params: { id } }: ParamsGetById) {

  try {

    const project: any = await prisma.$queryRawUnsafe(
      GET_PROJECT_BY_ID,
      Number(id)
    )

    if (!project[0]?.id) {
      return NextResponse.json({ message: 'Project not Found', project: null, status: 'fails' })
    }

    return NextResponse.json({ message: '', project: project[0], status: 'success' })

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error getting the Project', project: null, status: 'fails' })
  }
}