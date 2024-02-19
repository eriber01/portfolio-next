
import { Projects } from '@/app/(dashboard)/dashboard/projects/interfaces';
import { api } from '@/app/utils';
import { Status } from '@/app/interfaces';

interface GetProjectsProps {
  projects: Projects[],
  status: Status
}

export async function GetProjects(): Promise<Projects[]> {
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