'use client'
import { useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CreateTech } from "./components/CreateTech";
import { ManageTech } from "./components/ManageTech";
import { CustomModal } from "../../components/CustomModal";


export default function Page() {
  const [isOpen, toggle] = useState(false)

  return (
    <div>
      {/* Aqui el boton de mas */}

      <AddMoreButton toggle={toggle} />

      <CustomModal
        isOpen={isOpen}
        name="Create Tech"
        toggle={toggle}
        style=""
        children={<CreateTech />}
      />

      <ManageTech />

      {/* <HeaderTabs
        createChildren={<CreateTech />}
        manageChildren={<ManageTech />}
      /> */}
    </div>
  )
}