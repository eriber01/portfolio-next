import React from 'react'

interface Props {
  addImage: (file: File) => void
}

export const CustomInputFile = ({ addImage }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="image">Select Image</label>
      <input
        id="image"
        type="file"
        className="file:bg-transparent file:rounded file:text-white
                file:border-white"
        onChange={({ target: { files } }) => {
          if (files?.length) {
            addImage(files[0])
          }
        }}
      />
    </div>
  )
}
