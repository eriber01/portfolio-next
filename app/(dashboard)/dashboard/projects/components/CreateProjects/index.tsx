'use client'
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import CustomInput from "@/app/(dashboard)/components/CustomInput"
import { CustomInputFile } from "@/app/(dashboard)/components/CustomInputFile"
import CustomTextarea from "@/app/(dashboard)/components/CustomTextarea"
import SelectTech from "../SelectTechs"
import TableTech from "../TableTech"
import { Button } from "@nextui-org/react"
import { Projects } from "../../interfaces"
import { onSaveProject } from "../../database/SaveProjects"
import { Techs } from "../../../techs/interface"

interface Props {
  toggle: Dispatch<SetStateAction<boolean>>
  refetch: () => void
  project: Projects
  onChange: (path: string, value: any, reset?: boolean) => void
  addTech: (value: Techs) => void
  deleteTech: (id: number) => void
}
const CreateProjects = ({ onChange, refetch, project, toggle, addTech, deleteTech }: Props) => {

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let save = false

    save = await onSaveProject(project)

    if (save) {
      await refetch()
      onChange('project', null, true)
      toggle(false)
    }
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
              value={project.name}
              styles="w-[80%]"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-between mt-5 w-full">
            <div className="w-2/4">
              <CustomTextarea
                placeholder="Project Descriptions"
                value={project.description}
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
                value={project.link}
                styles="w-full"
                onChange={onChange}
              />
              <CustomInput
                id="git"
                label="Git Url"
                placeHolder="http://www.github.com"
                value={project.git}
                styles="w-full"
                onChange={onChange}
              />
              <CustomInputFile addImage={onChange} />
            </div>
          </div>
          <div className="mt-10">
            <SelectTech addTech={addTech} />
          </div>
          <div className="mt-5">
            {
              <TableTech tech={project.tech} deleteTech={deleteTech} />
            }
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