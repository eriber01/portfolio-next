import React from 'react'

export const CustomInputFile = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="image">Select Image</label>
      <input
        id="image"
        type="file"
        className="file:bg-transparent file:rounded file:text-white
    file:border-white"
      />
    </div>
  )
}
