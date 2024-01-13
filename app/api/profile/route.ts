import { Profile } from "@/app/(dashboard)/dashboard/profile/interface";
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.profile.findFirst()
    console.log(res);
    return NextResponse.json({ message: 'Get profile Success', res, status: 'success' })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error get Profile', res: [], status: 'fail' })
  }
}

export async function POST(req: Request) {

  try {
    const data: Profile = await req.json()
    console.log({ data });

    if (data.id) {
      await prisma.profile.update({
        where: {
          id: data.id
        },
        data
      })
      return NextResponse.json({ message: 'Profile updated', status: 'success' })
    }

    await prisma.profile.create({
      data
    })

    return NextResponse.json({ message: 'Profile saved', status: 'success' })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 'fail' })
  }
}