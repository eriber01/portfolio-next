import { NextResponse } from "next/server";
import prisma from '@/libs/db';

export async function GET(_: Request) {

  try {

    const techs = await prisma.techs.findMany({ where: { OR: [{ show_type: 2 }, { show_type: 3 }], enabled: true }, include: { image: true } })

    return NextResponse.json({ message: '', status: 'success', techs })
  } catch (error) {
    console.log('the error: ', error);
    return NextResponse.json({ message: 'Error get the Projects', status: 'fail', techs: [] })

  }

}