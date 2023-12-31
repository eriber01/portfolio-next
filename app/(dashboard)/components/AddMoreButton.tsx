import { Button } from '@nextui-org/react'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  toggle: Dispatch<SetStateAction<boolean>>
}

const AddMoreButton = ({ toggle }: Props) => {
  return (
    <div className='text-lg float-right pt-5 pr-10'>
      <Button
        color='primary'
        size='sm'
        className='text-base'
        onClick={() => toggle(true)}
      >
        Add
      </Button>
    </div>
  )
}

export default AddMoreButton