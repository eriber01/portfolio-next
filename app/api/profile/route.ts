import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json()

  console.log({ data });

  const test = await prisma.test.upsert({
    where: { id: data.id },
    update: {
      name: data.name
    },
    create: {
      name: data.name
    }
  })

  console.log({ test });


  return NextResponse.json({ message: 'guardado' })
}