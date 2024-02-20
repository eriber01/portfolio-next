import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import path from "path";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

interface EmailProps {
  name: string
  email: string
  message: string
}

async function EmailToMe({ email, name, message }: EmailProps) {
  try {
    console.log('envio a mi');

    const config = path.resolve(process.cwd(), 'app/page/Contact/database')
    const template = await readFileSync(path.join(config, `./template/me.html`), 'utf8')

    // const config = process.cwd() + '/app/page/Contact/database/template/me.html'

    // const currentDirectory = __dirname;

    // console.log('aquiiiiiiiiiiiii', { currentDirectory });

    // const filePath = path.join(__dirname + '/me.html');

    // console.log('el segundo: ' + filePath);

    // const template = await readFileSync(filePath, 'utf8')

    const { error } = await resend.emails.send({
      from: 'portfolio@eriber-tejeda.com',
      to: ['eriber01@gmail.com'],
      subject: 'Hey! Eriber Hurry Up',
      html: template.replace('@@name@@', name).replace('@@email@@', email).replace('@@message@@', message)
    });

    if (error) {
      return console.error({ error });
    }
  } catch (error) {
    console.log('error send the email me: ', error);
  }
}

export async function POST(req: Request) {
  try {

    const data: EmailProps = await req.json()
    await EmailToMe({ ...data })
    return NextResponse.json({ message: 'email send' })

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error })
  }
}