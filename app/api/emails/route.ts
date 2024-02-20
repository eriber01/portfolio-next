import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import { EmailProps, EmailToMe, EmailToVisitor } from "./utils";

export async function POST(req: Request) {
  try {

    const data: EmailProps = await req.json()

    await EmailToVisitor({ ...data })
    await EmailToMe({ ...data })

    return NextResponse.json({ message: 'email send' })

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error })
  }
}