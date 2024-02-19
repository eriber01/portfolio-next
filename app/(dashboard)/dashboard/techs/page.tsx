'use client'
import { useEffect, useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CreateTech } from "./components/CreateTech";
import { ManageTech } from "./components/ManageTech";
import { CustomModal } from "../../components/CustomModal";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { Techs } from './interface';
import { GetTechById, GetTechs } from "./database/GetTechs";

interface stateProps {
  techs: Techs[]
  tech: Techs
}

const INITIAL_STATE: stateProps = {
  tech: {
    name: '',
    description: '',
    file: null,
    show_type: 0,
    area_type: 0,
  },
  techs: []
}

export default function Page() {
  const [isOpen, toggle] = useState(false)
  const [state, setState] = useState(INITIAL_STATE)

  const onChange = (path: string, value: any, reset?: boolean) => {
    if (reset) {
      setState(prev => ({
        ...prev,
        tech: INITIAL_STATE.tech
      }))
      return
    }
    setState(prev => ({
      ...prev,
      tech: {
        ...prev.tech,
        [path]: value
      }
    }))
  }

  const getTech = async () => {
    const res: Techs[] = await GetTechs()
    setState(prev => ({
      ...prev,
      techs: res
    }))
  }

  const getTechById = async (id: number) => {
    try {

      const tech = await GetTechById(id)
      if (tech?.id) {

        setState(prev => ({
          ...prev,
          tech
        }))

        toggle(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTech()
  }, [])

  return (
    <div>
      <ToastContainer />

      <AddMoreButton toggle={toggle} />

      <CustomModal
        isOpen={isOpen}
        name="Create Tech"
        toggle={toggle}
        onChange={onChange}
        style=""
        children={<CreateTech toggle={toggle} refetch={getTech} onChange={onChange} tech={state.tech} />}
      />

      <ManageTech techs={state.techs} refetch={getTech} getTechById={getTechById} />

    </div>
  )
}