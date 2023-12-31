'use client'
import { useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CustomModal } from "../../components/CustomModal";
import CardProjectManage from "./components/CardProjectManage";
import CreateProjects from "./components/CreateProjects";

export default function Page() {
  const [isOpen, toggle] = useState(false)

  return (
    <div>
      <CustomModal
        name={'Create Project'}
        isOpen={isOpen}
        toggle={toggle}
        children={<CreateProjects />}
      />

      <AddMoreButton toggle={toggle} />
      <CardProjectManage />

    </div>
  )
}