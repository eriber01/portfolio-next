import { readFileSync } from "fs";
import path from "path";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

const validateEmail = (email: string) => {
  const divide1 = email.split('@')
  const divide2 = divide1[1].split('.')

  if (divide2[0] === 'gmail') return true
  return false
}

export interface EmailProps {
  name: string
  email: string
  message: string
}

export async function EmailToMe({ email, name, message }: EmailProps) {
  try {
    console.log('envio a mi');

    const config = path.resolve(process.cwd(), 'app/api/emails')
    const template = await readFileSync(path.join(config, `./template/me.html`), 'utf8')

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

export async function EmailToVisitor({ email, name, message }: EmailProps) {

  try {

    console.log({ email, name, message });

    const config = path.resolve(process.cwd(), 'app/api/emails')
    const template = await readFileSync(path.join(config, `./template/${validateEmail(email) ? 'google' : 'other'}.html`), 'utf8')
    const CV = await readFileSync(path.join(config, `./template/Eriber Tejeda - CV.pdf`))

    const { error } = await resend.emails.send({
      from: 'noreply@eriber-tejeda.com',
      to: [email],
      subject: `Hi! ${name} this is an automatic email response`,
      html: template.replace('@@name@@', name),
      attachments: [
        {
          filename: 'Eriber Tejeda CV.pdf',
          content: CV
        }
      ]
    });

    if (error) {
      return console.error({ error });
    }
  } catch (error) {
    console.log('error send the email visitor: ', error);
  }
}
