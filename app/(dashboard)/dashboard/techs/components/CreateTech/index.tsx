import HeaderName from '@/app/(dashboard)/components/HeaderName'
import CustomInput from '@/app/(dashboard)/components/CustomInput';
import { CustomInputFile } from '@/app/(dashboard)/components/CustomInputFile';
import CustomTextarea from '@/app/(dashboard)/components/CustomTextarea';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { TechTypes } from '../../database/index';

export const CreateTech = () => {
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <form
          className='w-10/12'
          action="">
          <div className='flex justify-between w-full'>
            <CustomInput
              id='name'
              label='Name'
              placeHolder='Tech Name'
              value=''
              styles='w-[45%]'
            />
            <div className='w-[45%]'>
              <CustomInputFile />
            </div>
          </div>
          <div className='mt-5'>
            <Select
              size='sm'
              label="Select a Type"
              variant='bordered'
              className='w-[45%]'
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
              value=''
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
