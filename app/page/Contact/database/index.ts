'use server'

import { readFile, readFileSync } from 'fs';
import path from 'path';
import { toast } from 'react-toastify';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

interface EmailProps {
  name: string
  email: string
  message: string
}

export async function validateForm(state: EmailProps) {
  let key: keyof EmailProps

  for (key in state) {
    const value = state[key]
    console.log(value);

    if (!value.trim()) {
      console.log(key + ' no tiene valor');
      // toast.error(`The field ${key} is required`)
      return { success: false, message: `The field ${key} is required` }
    }

  }
  return { success: true, message: '' }
}

const validateEmail = (email: string) => {
  const divide1 = email.split('@')
  const divide2 = divide1[1].split('.')

  if (divide2[0] === 'gmail') return true
  return false
}

async function EmailToMe({ email, name, message }: EmailProps) {
  try {
    console.log('envio a mi');

    // const config = path.resolve(process.cwd(), 'app/page/Contact/database')
    // const template = await readFileSync(path.join(config, `./template/me.html`), 'utf8')

    // const config = process.cwd() + '/app/page/Contact/database/template/me.html'

    const currentDirectory = __dirname;

    console.log('aquiiiiiiiiiiiii', { currentDirectory });

    const filePath = path.join(__dirname + 'me.html');

    console.log('el segundo: ' + filePath);

    const template = await readFileSync(filePath, 'utf8')

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

async function EmailToVisitor({ email, name, message }: EmailProps) {

  try {

    console.log({ email, name, message });

    const config = path.resolve(process.cwd(), 'app/page/Contact/database')
    const template = await readFileSync(path.join(config, `./template/${validateEmail(email) ? 'google' : 'other'}.html`), 'utf8')

    const { error } = await resend.emails.send({
      from: 'noreply@eriber-tejeda.com',
      to: [email],
      subject: `Hi! ${name} this is an automatic email response`,
      html: template.replace('@@name@@', name)
    });

    if (error) {
      return console.error({ error });
    }
  } catch (error) {
    console.log('error send the email visitor: ', error);
  }
}

export async function SendEmail({ email, name, message }: EmailProps) {
  try {

    // await EmailToVisitor({ email, name, message })
    await EmailToMe({ email, name, message })

  } catch (error) {
    console.log(error);

  }
}