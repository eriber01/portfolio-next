'use client'
import { FormEvent } from "react"
import CustomInput from "@/app/(dashboard)/components/CustomInput"
import { CustomInputFile } from "@/app/(dashboard)/components/CustomInputFile"
import CustomTextarea from "@/app/(dashboard)/components/CustomTextarea"
import SelectTech from "../SelectTechs"
import TableTech from "../TableTech"
import { Button } from "@nextui-org/react"
import { api } from "@/app/utils"


const CreateProjects = () => {

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await api.post('profile', {id: 10, name: 'eriber editado 2' })
    console.log({ data });
  }

  return (
    <div>
      {/* <div className="mt-[-20px]">
        <HeaderName text="Create Project" />
      </div> */}
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
              value=""
              styles="w-[80%]"
            />
          </div>
          <div className="flex justify-between mt-5 w-full">
            <div className="w-2/4">
              <CustomTextarea
                placeholder="Project Descriptions"
                value=""
                style="w-full"
                rows={6}
              />
            </div>
            <div className="flex flex-col justify-between w-[45%]">
              <CustomInput
                id="link_url"
                label="Link Url"
                placeHolder="http://www.projectname.com"
                value=""
                styles="w-full"
              />
              <CustomInput
                id="git_url"
                label="Git Url"
                placeHolder="http://www.github.com"
                value=""
                styles="w-full"
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