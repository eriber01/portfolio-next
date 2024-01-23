'use client'
import { useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CustomModal } from "../../components/CustomModal";
import CardProjectManage from "./components/CardProjectManage";
import CreateProjects from "./components/CreateProjects";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

export default function Page() {
  const [isOpen, toggle] = useState(false)

  return (
    <div>
      <ToastContainer />
      <CustomModal
        name={'Create Project'}
        isOpen={isOpen}
        toggle={toggle}
        children={<CreateProjects />}
        style="h-full overflow-y-scroll"
      />

      <AddMoreButton toggle={toggle} />
      <CardProjectManage />

    </div>
  )
}