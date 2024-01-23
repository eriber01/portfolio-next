'use client'
import { useState } from "react"
import { TechArr } from "../../database"
import { Select, SelectItem, Avatar, Input, Button } from "@nextui-org/react"
import { Techs } from '../../interfaces';

interface PropState {
  techSelected: Techs | null
}

interface Props {
  addTech: (value: Techs) => void
}

const SelectTech = ({ addTech }: Props) => {
  const tech = TechArr
  const [state, setState] = useState<PropState>({ techSelected: null })

  const onChangeTech = (id: number) => {

    const find = tech.find(item => item.id === id)
    if (find) {
      setState({ techSelected: find })
    }

  }

  return (
    <div className="flex items-center">
      <Select
        className="max-w-xs bg-transparent"
        label="Select a Tech"
        variant="bordered"
        size="sm"
        onChange={({ target: { value } }) => onChangeTech(parseInt(value))}

      >
        {
          tech.map((item) => (
            <SelectItem
              className="text-black bg-transparent"
              color="primary"
              key={item.id!}
              startContent={<Avatar alt={item.name} className="w-6 h-6" src={item.imageUrl} />}
            >
              {item.name}
            </SelectItem>
          ))
        }
      </Select>

      <Button
        color="primary"
        size="sm"
        className="ml-5"
        onClick={() => {
          if (state.techSelected) {
            addTech(state.techSelected)
          }
        }}
      >
        Add Tech
      </Button>
    </div>
  )
}

export default SelectTech