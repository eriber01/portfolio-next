import prisma from '@/libs/db';
import { GET_PROJECTS_ENABLE } from '../queries';
import { NextResponse } from 'next/server';
export async function GET(_: Request) {

  try {
    const projects = await prisma.$queryRawUnsafe(
      GET_PROJECTS_ENABLE
    )

    return NextResponse.json({ message: '', status: 'success', projects })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error get the Projects', status: 'fail', projects: [] })

  }

}