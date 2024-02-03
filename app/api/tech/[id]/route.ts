import { NextResponse } from "next/server"
import prisma from "@/libs/db"

interface Params {
  params: {
    id: number
  }
}

export async function DELETE(request: Request, { params }: Params) {

  try {
    const id = Number(params.id)
    console.log({ id });
    console.log('antes de techg images');

    await prisma.tech_images.delete({
      where: {
        tech_id: id
      }
    })

    console.log('despues de techg images');

    await prisma.techs.delete({
      where: {
        id
      },
    })
    return NextResponse.json({ message: 'Tech Delete', status: 'success' })
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: 'Error Deleted Tech', status: 'fail' })
  }
}