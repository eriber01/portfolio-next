import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import CustomInput from '@/app/(dashboard)/components/CustomInput';
import { CustomInputFile } from '@/app/(dashboard)/components/CustomInputFile';
import CustomTextarea from '@/app/(dashboard)/components/CustomTextarea';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { TechTypes } from '../../database/index';
import { Techs } from '../../interface';
import { onSaveTech } from '../../database/SaveTech';

interface Props {
  toggle: Dispatch<SetStateAction<boolean>>
  refetch: () => void
}

const INITIAL_STATE: Techs = {
  name: '',
  description: '',
  file: null,
  show_type: null
}

export const CreateTech = ({ toggle, refetch }: Props) => {
  const [state, setState] = useState(INITIAL_STATE)

  const addImage = (file: File) => {
    setState(prev => ({
      ...prev,
      file: file
    }))
  }

  const onChange = (path: string, value: string | number) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onSaveTech(state)
    setState(INITIAL_STATE)
    await refetch()
    toggle(false)
  }

  return (
    <div>
      <div className='flex justify-center mt-10'>
        <form
          className='w-10/12'
          onSubmit={(e) => onSave(e)}
        >
          <div className='flex justify-between w-full'>
            <CustomInput
              id='name'
              label='Name'
              placeHolder='Tech Name'
              value={state.name}
              styles='w-[45%]'
              onChange={onChange}
            />
            <div className='w-[45%]'>
              <CustomInputFile addImage={addImage} />
            </div>
          </div>
          <div className='mt-5'>
            <Select
              size='sm'
              label="Select a Type"
              variant='bordered'
              className='w-[45%]'
              onChange={({ target: { value } }) => onChange('show_type', parseInt(value))}
            >
              {
                TechTypes.map(item => (
                  <SelectItem
                    key={item.id}
                    className='text-black'
                    color='primary'
                  >
                    {item.name}
                  </SelectItem>
                ))
              }
            </Select>
          </div>
          <div className='mt-5'>
            <CustomTextarea
              placeholder='Description'
              rows={5}
              value={state.description}
              onChange={onChange}
            />
          </div>
          <div className="mt-10">
            <Button
              color='success'
              className='text-white'
              type="submit"
            >
              Save Tech
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
