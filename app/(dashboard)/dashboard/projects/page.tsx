'use client'
import { useEffect, useState } from "react";
import AddMoreButton from "../../components/AddMoreButton";
import { CustomModal } from "../../components/CustomModal";
import CardProjectManage from "./components/CardProjectManage";
import CreateProjects from "./components/CreateProjects";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { INITIAL_STATE as INITIAL, Projects } from "./interfaces";
import { Techs } from "../techs/interface";
import { GetProjectById, GetProjects } from "./database/GetProjects";


interface stateProps {
  projects: Projects[]
  project: Projects
}

const INITIAL_STATE: stateProps = {
  projects: [],
  project: INITIAL
}

export default function Page() {
  const [isOpen, toggle] = useState(false)
  const [state, setState] = useState(INITIAL_STATE)

  const onChange = (path: string, value: any, reset?: boolean) => {
    if (reset) {
      setState(prev => ({
        ...prev,
        project: INITIAL_STATE.project
      }))
      return
    }

    setState(prev => ({
      ...prev,
      project: {
        ...prev.project,
        [path]: value
      }
    }))
  }

  const getProjectById = async (id: number) => {
    try {

      const project = await GetProjectById(id)

      if (project?.id) {

        setState(prev => ({
          ...prev,
          project
        }))

        toggle(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTech = (id: number) => {

    const tech = state.project.tech

    const filter = tech.filter(item => item.id !== id);

    setState(prev => ({
      ...prev,
      project: {
        ...prev.project,
        tech: filter
      },
    }))

  }

  const addTech = (value: Techs) => {

    const validate = state.project.tech.find(item => item.id === value.id)

    if (validate) {
      toast.error(`The techs ${validate.name} exist for this project`)
      return
    }

    const techs = [...state.project.tech];

    techs.push(value)

    setState(prev => ({
      ...prev,
      project: {
        ...prev.project,
        tech: techs
      }
    }))

  }

  const getProjects = async () => {

    const projects = await GetProjects()

    setState(prev => ({
      ...prev,
      projects
    }))
  }


  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div>
      <ToastContainer />
      <CustomModal
        name={'Create Project'}
        isOpen={isOpen}
        toggle={toggle}
        children={<CreateProjects refetch={getProjects} deleteTech={deleteTech} onChange={onChange} project={state.project} toggle={toggle} addTech={addTech} />}
        onChange={onChange}
        style="h-full overflow-y-scroll"
      />

      <AddMoreButton toggle={toggle} />
      <CardProjectManage projects={state.projects} refetch={getProjects} getProjectById={getProjectById} />

    </div>
  )
}