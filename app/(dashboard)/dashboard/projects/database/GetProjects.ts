import { Status } from "@/app/interfaces"
import { api } from "@/app/utils"
import { Projects } from "../interfaces"

interface GetProjectsProps {
  projects: Projects[],
  project: Projects
  message: string
  status: Status
}

export const GetProjects = async () => {
  try {

    const { data } = await api.get<GetProjectsProps>('/projects')

    if (data.status === 'success') {
      return data.projects
    }

    return []
  } catch (error) {
    console.log(error);
    return []
  }
}


export const GetProjectById = async (id: number): Promise<Projects | null> => {
  const { data } = await api.get<GetProjectsProps>(`/projects/${id}`)

  if (data.status === 'success') {
    return data.project
  }

  return null
}