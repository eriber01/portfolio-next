import { NextResponse } from "next/server";
import { deleteImage, updateImage } from "../utils";
import { ProjectImage, ProjectsTechs } from "@/app/(dashboard)/dashboard/projects/interfaces";
import prisma from '@/libs/db'
import { Techs } from "@/app/(dashboard)/dashboard/techs/interface";
import { Prisma } from "@prisma/client";
import { GET_PROJECTS } from "./queries";

export async function POST(request: Request) {
  const data = await request.formData()
  const file = data.get('file') as File

  const techs = data.get('tech') as unknown

  const payload = {
    id: undefined,
    name: String(data.get('name')),
    description: String(data.get('description')),
    git: String(data.get('git')),
    link: String(data.get('link')),
    enabled: true
  }

  try {

    const { publicId, success, url } = await updateImage(file, 'projects')

    if (!success) {
      return NextResponse.json({ message: 'Update image Fail', status: 'fail' })
    }

    const project = await prisma.projects.create({ data: payload })

    const payloadImage: ProjectImage = {
      project_id: project.id,
      public_id: publicId,
      url
    }

    await prisma.project_images.create({ data: payloadImage })

    const arrTechs = JSON.parse(techs as string) as Techs[]

    const payloadTech: ProjectsTechs[] = arrTechs?.map(item => {
      return {
        tech_id: item.id!,
        project_id: project.id!
      }
    })

    if (payloadTech.length) {
      await prisma.tech_projects.createMany({ data: payloadTech })
    }

    return NextResponse.json({ message: 'Project saved', status: 'success' })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 'fail' })
  }

}

export async function PUT(request: Request) {
  const data = await request.formData()
  const file = data.get('file') as File
  const techs = data.get('tech') as unknown

  const enabled = data.get('enabled') === "true" ? true : false

  try {

    const payload = {
      id: Number(data.get('id')),
      name: String(data.get('name')),
      description: String(data.get('description')),
      git: String(data.get('git')),
      link: String(data.get('link')),
      enabled,
    }

    const project = await prisma.projects.findUnique({
      where: {
        id: payload.id
      },
      include: {
        image: true
      }
    })

    if (!project?.id) {
      return NextResponse.json({ message: 'Project not Found', status: 'fail' })
    }

    await prisma.projects.update({ where: { id: project.id }, data: { ...payload } })

    const arrTechs = JSON.parse(techs as string) as Techs[]

    await prisma?.$queryRaw(Prisma.sql`
      delete from portafolio.tech_projects
      where project_id = ${project.id}
    `)

    const payloadTech: ProjectsTechs[] = arrTechs?.map(item => {
      return {
        tech_id: item.id!,
        project_id: project.id!
      }
    })

    if (payloadTech.length) {
      await prisma.tech_projects.createMany({ data: payloadTech })
    }

    if (file?.name) {

      await deleteImage(project.image?.public_id!)

      const { publicId, success, url } = await updateImage(file, 'techs')

      if (!success) {
        return NextResponse.json({ message: 'Update image Fail', status: 'fail' })
      }

      const payloadImage = {
        public_id: publicId,
        url
      }

      await prisma.project_images.update({ where: { id: project.image?.id }, data: payloadImage })

    }

    return NextResponse.json({ message: 'Tech updated', status: 'success' })
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: 'Error updated Tech', status: 'fail' })
  }
}

export async function GET(_: Request) {

  try {
    const projects = await prisma.$queryRawUnsafe(
      GET_PROJECTS
    )

    return NextResponse.json({ message: '', status: 'success', projects })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error get the Projects', status: 'fail', projects: [] })

  }

}