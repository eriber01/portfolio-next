
import { Input } from '@nextui-org/react'

interface Props {
  type: string
  label: string
}

export const InputForm = ({ type, label }: Props) => {
  return (
    <div>
      <Input
        type={type}
        color='success'
        isRequired
        isInvalid={false}
        errorMessage=''
        variant={'underlined'}
        label={label}
        className='bg-transparent text-white'
      />
    </div>
  )
}
