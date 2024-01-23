import { NextResponse } from "next/server";
import { updateImage } from "../utils";
import { ProjectImage, Projects } from "@/app/(dashboard)/dashboard/projects/interfaces";
import prisma from '@/libs/db'

export async function POST(request: Request) {
  const data = await request.formData()
  const file = data.get('image') as File
  const techs = data.get('tech')

  /* 
  id?: number | null
  name: string
  description: string
  image: string | File
  link: string
  git: string
  techs: Techs[]
  status?: boolean
  public_img_id?: string
  */

  const payload = {
    id: Number(data.get('id')) ? Number(data.get('id')) : undefined,
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

    if (payload.id) {
      console.log('is updated');
      return NextResponse.json({ message: 'Project updated', status: 'success' })
    }

    const project = await prisma.projects.create({ data: payload })

    const payloadImage: ProjectImage = {
      project_id: project.id,
      public_id: publicId,
      url
    }

    await prisma.project_images.create({ data: payloadImage })

    return NextResponse.json({ message: 'Project saved', status: 'success' })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 'fail' })
  }

}