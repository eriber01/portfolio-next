'use client'
import { TechArr } from "../../database"
import { Select, SelectItem, Avatar, Input, Button } from "@nextui-org/react"

const SelectTech = () => {
  const tech = TechArr

  return (
    <div className="flex items-center">
      <Select
        className="max-w-xs bg-transparent"
        label="Select a Tech"
        variant="bordered"
        size="sm"
      >
        {
          tech.map((item, index) => (
            <SelectItem
              className="text-black bg-transparent"
              color="primary"
              key={index}
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
      >
        Add Tech
      </Button>
    </div>
  )
}

export default SelectTech