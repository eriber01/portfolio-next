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