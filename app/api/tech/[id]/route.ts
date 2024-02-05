import { NextResponse } from "next/server";

interface ParamsGet {
  params: {
    id: number
  }
}

export async function GET(_: Request, { params: { id } }: ParamsGet) {
  console.log('el id: ', id);

  try {

    const tech = await prisma?.techs.findUnique({
      where: {
        id: Number(id)
      },
      include: { image: true }
    })

    if (!tech?.id) {
      return NextResponse.json({ tech: null, message: 'Tech not found', status: 'Fail' })
    }

    console.log({ tech });

    return NextResponse.json({ tech, message: '', status: 'success' })

  } catch (error) {
    console.log(error);
    return NextResponse.json({ tech: null, message: 'Error getting the Tech', status: 'Fail' })
  }

}