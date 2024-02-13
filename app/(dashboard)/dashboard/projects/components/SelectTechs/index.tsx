'use client'
import { useEffect, useState } from "react"
import { Select, SelectItem, Avatar, Button } from "@nextui-org/react"
import { Techs } from "../../../techs/interface"
import { getTechForCreateProjects } from "../../../techs/database/GetTechsProjects"

interface PropState {
  techSelected: Techs | null
  techs: Techs[]
}

interface Props {
  addTech: (value: Techs) => void
}

const INITIAL_STATE: PropState = {
  techs: [],
  techSelected: null
}

const SelectTech = ({ addTech }: Props) => {
  const [state, setState] = useState(INITIAL_STATE)

  const onChangeTech = (id: number) => {

    const find = state.techs.find(item => item.id === id)

    if (find) {
      setState(prev => ({
        ...prev,
        techSelected: find
      }))
    }

  }

  const getTechs = async () => {

    const techs = await getTechForCreateProjects()

    setState(prev => ({
      ...prev,
      techs
    }))
  }

  useEffect(() => {
    getTechs()
  }, [])

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
          state.techs.map((item) => (
            <SelectItem
              className="text-black bg-transparent"
              color="primary"
              key={item.id!}
              startContent={<Avatar alt={item.name} className="w-6 h-6" src={item.image?.url} />}
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