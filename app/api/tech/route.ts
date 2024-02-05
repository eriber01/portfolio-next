import { TechImage, Techs } from "@/app/(dashboard)/dashboard/techs/interface"
import { NextResponse } from "next/server"
import { deleteImage, updateImage } from "../utils"

import prisma from "@/libs/db"

export async function POST(request: Request) {
  const data = await request.formData()
  const file = data.get('image') as File

  const payload = {
    id: Number(data.get('id')) ? Number(data.get('id')) : undefined,
    name: String(data.get('name')),
    description: String(data.get('description')),
    show_type: Number(data.get('show_type')),
    enabled: true,
  }

  try {

    const { publicId, success, url } = await updateImage(file, 'techs')

    if (!success) {
      return NextResponse.json({ message: 'Update image Fail', status: 'fail' })
    }

    const tech = await prisma.techs.create({
      data: { ...payload }
    })

    const payloadImage: TechImage = {
      public_id: publicId,
      tech_id: tech.id,
      url
    }

    await prisma.tech_images.create({ data: payloadImage });

    return NextResponse.json({ message: 'Tech saved', status: 'success' })

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 'fail' })
  }
}

export async function PUT(request: Request) {
  const data: Techs = await request.json()

  try {
    const id = Number(data.id)

    const tech = await prisma.techs.findUnique({ where: { id } })

    if (!tech?.id) {
      return NextResponse.json({ message: 'Tech not Found', status: 'fail' })
    }

    const payload = {
      id,
      description: String(data.description),
      name: String(data.name),
      show_type: Number(data.show_type),
      enabled: data.enabled
    }

    await prisma.techs.update({ where: { id: tech.id }, data: payload })

    return NextResponse.json({ message: 'Tech updated', status: 'success' })
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: 'Error updated Tech', status: 'fail' })
  }
}

export async function GET() {
  try {
    const techs = await prisma.techs.findMany({ include: { image: true }, orderBy: [{ enabled: 'desc' }, { name: 'desc' }] })
    return NextResponse.json({ message: 'Get Tech Success', techs, status: 'success' })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Get Tech Fail', techs: [], status: 'fail' })
  }
}

export async function DELETE(request: Request) {
  const data: Techs = await request.json()

  try {
    const id = Number(data.id)

    if (data.image?.public_id) {
      await deleteImage(data.image?.public_id)
    }

    await prisma.tech_images.delete({
      where: {
        tech_id: id
      }
    })

    await prisma.techs.delete({
      where: {
        id
      },
    })

    return NextResponse.json({ message: 'Tech Delete', status: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error Deleted Tech', status: 'fail' })
  }
}