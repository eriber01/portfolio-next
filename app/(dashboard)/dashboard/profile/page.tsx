'use client'
import { Button } from "@nextui-org/react";
import CustomInput from "../../components/CustomInput";
import { FormEvent, useEffect, useState } from "react";
import HeaderName from "../../components/HeaderName";
import { Profile } from "./interface";
import { onSaveProfile } from "./database/SaveProfile";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { GetProfile } from "./database/GetProfile";

export const INITIAL_STATE: Profile = {
  name: '',
  job: '',
  phone: '',
  email: '',
  git_url: '',
  linkedin: '',
  linkedin_url: '',
  cv: '',
  year: 0
}

export default function Page() {
  const [state, setState] = useState(INITIAL_STATE)

  const onChange = (path: string, value: string | number) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onSaveProfile(state)
  }


  const getProfile = async () => {
    const res: Profile | null = await GetProfile()
    if (res?.id) {
      setState(res)
    }

    return res
  }

  useEffect(() => {
    getProfile()
  }, [])


  return (
    <div>
      <ToastContainer />
      <HeaderName text="Profile" />
      <div className="flex justify-center mt-10">
        <form
          className="w-10/12"
          action=""
          onSubmit={onSave}
        >
          <div className="flex flex-wrap justify-between">
            <CustomInput
              id="name"
              label="Name"
              placeHolder="Enter your name"
              styles="w-[45%]"
              value={state.name}
              onChange={onChange}
            />
            <CustomInput
              id="job"
              label="Job"
              placeHolder="Enter your Job"
              styles="w-[45%]"
              value={state.job}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            <CustomInput
              id="phone"
              label="Phone"
              placeHolder="Phone"
              styles="w-[30%]"
              value={state.phone}
              type="tel"
              onChange={onChange}
            />
            <CustomInput
              id="email"
              label="Email"
              placeHolder="test@email.com"
              styles="w-[30%]"
              value={state.email}
              type="email"
              onChange={onChange}
            />
            <CustomInput
              id="git_url"
              label="GitHub"
              placeHolder="GitHub"
              styles="w-[30%]"
              value={state.git_url}
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            <CustomInput
              id="linkedin_url"
              label="Linkedin Url"
              placeHolder="Linkedin Url"
              styles="w-[45%]"
              value={state.linkedin_url}
              type="text"
              onChange={onChange}
            />
            <CustomInput
              id="linkedin"
              label="Linkedin"
              placeHolder="Linkedin"
              styles="w-[45%]"
              value={state.linkedin}
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-wrap justify-start mt-5">
            <CustomInput
              id="cv"
              label="CV"
              placeHolder="CV"
              styles="w-[45%]"
              value={state.cv}
              type="text"
              onChange={onChange}
            />
            <CustomInput
              id="year"
              label="Year"
              placeHolder="Year"
              styles="pl-10 w-[120px]"
              value={state.year}
              type="number"
              onChange={onChange}
            />
          </div>
          <div className="mt-10">
            <Button
              color='success'
              className='text-white'
              type="submit"
            >
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </div >
  )
}