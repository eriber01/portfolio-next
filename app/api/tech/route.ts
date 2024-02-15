import { TechImage, Techs } from "@/app/(dashboard)/dashboard/techs/interface"
import { NextResponse } from "next/server"
import { deleteImage, updateImage } from "../utils"

import prisma from "@/libs/db"

export async function POST(request: Request) {
  const data = await request.formData()
  const file = data.get('image') as File

  const payload = {
    id: undefined,
    name: String(data.get('name')),
    description: String(data.get('description')),
    show_type: Number(data.get('show_type')),
    area_type: Number(data.get('area_type')),
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
  const data = await request.formData()
  const file = data.get('file') as File

  const enabled = data.get('enabled') === "true" ? true : false

  try {

    const payload = {
      id: Number(data.get('id')),
      name: String(data.get('name')),
      description: String(data.get('description')),
      show_type: Number(data.get('show_type')),
      area_type: Number(data.get('area_type')),
      enabled,
    }

    const tech = await prisma.techs.findUnique({ where: { id: payload.id }, include: { image: true } })

    if (!tech?.id) {
      return NextResponse.json({ message: 'Tech not Found', status: 'fail' })
    }

    await prisma.techs.update({ where: { id: tech.id }, data: { ...payload } })

    if (file?.name) {

      await deleteImage(tech.image?.public_id!)

      const { publicId, success, url } = await updateImage(file, 'techs')

      if (!success) {
        return NextResponse.json({ message: 'Update image Fail', status: 'fail' })
      }

      const payloadImage = {
        public_id: publicId,
        url
      }

      await prisma.tech_images.update({ where: { id: tech.image?.id }, data: payloadImage })

    }

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