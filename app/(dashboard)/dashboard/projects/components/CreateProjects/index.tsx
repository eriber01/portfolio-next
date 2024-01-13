'use client'
import { FormEvent, useState } from "react"
import CustomInput from "@/app/(dashboard)/components/CustomInput"
import { CustomInputFile } from "@/app/(dashboard)/components/CustomInputFile"
import CustomTextarea from "@/app/(dashboard)/components/CustomTextarea"
import SelectTech from "../SelectTechs"
import TableTech from "../TableTech"
import { Button } from "@nextui-org/react"
import { Projects } from "../../interfaces"

const INITIAL_STATE: Projects = {
  description: 'desc',
  git: 'git',
  image: '',
  link: 'link',
  name: "name",
  techs: [],
}

const CreateProjects = () => {

  const [state, setState] = useState(INITIAL_STATE);
  console.log({ state });

  const onChange = (path: string, value: string | number) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
              <CustomInputFile />
            </div>
          </div>
          <div className="mt-10">
            <SelectTech />
          </div>
          <div className="mt-5">
            <TableTech />
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