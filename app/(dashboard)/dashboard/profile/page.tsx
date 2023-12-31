'use client'
import { Button } from "@nextui-org/react";
import CustomInput from "../../components/CustomInput";
import { FormEvent } from "react";
import HeaderName from "../../components/HeaderName";

export default function Page() {

  const onSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
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
              value=""
            />
            <CustomInput
              id="job"
              label="Job"
              placeHolder="Enter your Job"
              styles="w-[45%]"
              value=""
            />
          </div>
          {/* <div className="flex flex-wrap justify-between mt-5">
            <CustomInput
              id="home_description_1"
              label="Home description One"
              placeHolder="Home description One"
              styles="w-[45%]"
              value=""
            />
            <CustomInput
              id="home_description_2"
              label="Home description Two"
              placeHolder="Home description Two"
              styles="w-[45%]"
              value=""
            />
          </div> */}
          <div className="flex flex-wrap justify-between mt-5">
            <CustomInput
              id="cellphone"
              label="Cellphone"
              placeHolder="Cellphone"
              styles="w-[30%]"
              value=""
              type="tel"
            />
            <CustomInput
              id="email"
              label="Email"
              placeHolder="test@email.com"
              styles="w-[30%]"
              value=""
              type="email"
            />
            <CustomInput
              id="git"
              label="GitHub"
              placeHolder="GitHub"
              styles="w-[30%]"
              value=""
              type="text"
            />
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            <CustomInput
              id="linkedin_url"
              label="Linkedin Url"
              placeHolder="Linkedin Url"
              styles="w-[45%]"
              value=""
              type="text"
            />
            <CustomInput
              id="linkedin_name"
              label="Linkedin Name"
              placeHolder="Linkedin Name"
              styles="w-[45%]"
              value=""
              type="text"
            />
          </div>
          <div className="flex flex-wrap justify-start mt-5">
            <CustomInput
              id="cv_url"
              label="CV"
              placeHolder="CV Url"
              styles="w-[45%]"
              value=""
              type="text"
            />
            <CustomInput
              id="year"
              label="Year"
              placeHolder="Year"
              styles="pl-10 w-[120px]"
              value=""
              type="number"
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