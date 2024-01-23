import { Textarea } from '@nextui-org/react'
import React from 'react'
import { TextareaProps } from './interfaces'

const CustomTextarea = ({ style, value, placeholder, rows, onChange }: TextareaProps) => {
  return (
    <div className={`flex flex-col ${style}`}>
      <label>Description</label>
      <textarea
        required
        className='rounded bg-transparent border pl-2'
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={({ target: { value } }) => onChange('description', value)}
      />
    </div>
  )
}

export default CustomTextarea