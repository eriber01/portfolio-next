'use client'
import { useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CreateTech } from "./components/CreateTech";
import { ManageTech } from "./components/ManageTech";
import { CustomModal } from "../../components/CustomModal";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

export default function Page() {
  const [isOpen, toggle] = useState(false)

  return (
    <div>
      <ToastContainer />

      <AddMoreButton toggle={toggle} />

      <CustomModal
        isOpen={isOpen}
        name="Create Tech"
        toggle={toggle}
        style=""
        children={<CreateTech toggle={toggle}/>}
      />

      <ManageTech />

    </div>
  )
}