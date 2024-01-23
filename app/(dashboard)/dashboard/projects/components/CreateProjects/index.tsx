'use client'
import { FormEvent, useState } from "react"
import CustomInput from "@/app/(dashboard)/components/CustomInput"
import { CustomInputFile } from "@/app/(dashboard)/components/CustomInputFile"
import CustomTextarea from "@/app/(dashboard)/components/CustomTextarea"
import SelectTech from "../SelectTechs"
import TableTech from "../TableTech"
import { Button } from "@nextui-org/react"
import { Projects } from "../../interfaces"
import { toast } from "react-toastify"
import { onSaveProject } from "../../database/SaveProfile"
import { Techs } from "../../../techs/interface"

const INITIAL_STATE: Projects = {
  description: '',
  git: '',
  image: null,
  link: '',
  name: "",
  techs: [],
}

const CreateProjects = () => {

  const [state, setState] = useState(INITIAL_STATE);

  const addTech = (value: Techs) => {

    const validate = state.techs.find(item => item.id === value.id)

    if (validate) {
      toast.error(`The techs ${validate.name} exist for this project`)
      return
    }

    const tech = [...state.techs];
    tech.push(value)

    setState(prev => ({
      ...prev,
      techs: tech
    }))

  }

  const addImage = (file: File) => {
    setState(prev => ({
      ...prev,
      image: file
    }))
  }

  const deleteTech = (id: number) => {

    const tech = [...state.techs]

    const filter = tech.filter(item => item.id !== id)

    setState(prev => ({
      ...prev,
      techs: filter
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
    await onSaveProject(state)
  }

  return (
    <div>
      <div className="flex justify-center mt-10">
        <form
          className="w-10/12"
          onSubmit={(e) => onSave(e)}
        >
          <div className="">
            <CustomInput
              id="name"
              label="Name"
              placeHolder="Project Name"
              value={state.name}
              styles="w-[80%]"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-between mt-5 w-full">
            <div className="w-2/4">
              <CustomTextarea
                placeholder="Project Descriptions"
                value={state.description}
                style="w-full"
                rows={6}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col justify-between w-[45%]">
              <CustomInput
                id="link"
                label="Link Url"
                placeHolder="http://www.projectname.com"
                value={state.link}
                styles="w-full"
                onChange={onChange}
              />
              <CustomInput
                id="git"
                label="Git Url"
                placeHolder="http://www.github.com"
                value={state.git}
                styles="w-full"
                onChange={onChange}
              />
              <CustomInputFile addImage={addImage} />
            </div>
          </div>
          <div className="mt-10">
            <SelectTech addTech={addTech} />
          </div>
          <div className="mt-5">
            <TableTech tech={state.techs} deleteTech={deleteTech} />
          </div>
          <div className="my-10">
            <Button
              color='success'
              className='text-white'
              type="submit"
            >
              Save Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProjects