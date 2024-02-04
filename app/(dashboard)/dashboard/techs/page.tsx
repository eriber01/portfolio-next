'use client'
import { useEffect, useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CreateTech } from "./components/CreateTech";
import { ManageTech } from "./components/ManageTech";
import { CustomModal } from "../../components/CustomModal";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { Techs } from "./interface";
import { GetTechs } from "./database/GetTechs";

export default function Page() {
  const [isOpen, toggle] = useState(false)

  const [tech, setTech] = useState<Techs[]>([])

  const getTech = async () => {
    const res: Techs[] = await GetTechs()
    setTech(res)
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
        style=""
        children={<CreateTech toggle={toggle} refetch={getTech}/>}
      />

      <ManageTech techs={tech} refetch={getTech} />

    </div>
  )
}