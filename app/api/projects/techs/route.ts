import { NextResponse } from "next/server";

export async function GET(_: Request) {

  try {

    const techs = await prisma?.techs.findMany({ where: { OR: [{ show_type: 2 }, { show_type: 3 }] }, include: { image: true } })

    return NextResponse.json({ message: '', status: 'success', techs })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error get the Projects', status: 'fail', techs: [] })

  }

}