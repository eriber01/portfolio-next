import { onSaveProject } from "../../../database/SaveProjects"
import { Projects } from "../../../interfaces"

type actions = "edit" | "delete" | "enabled"

interface Props {
  project: Projects
  name: string
  actions: actions
  refetch: () => void
  getProjectById?: (id: number) => void
}

const Buttons = ({ actions, name, refetch, project, getProjectById }: Props) => {
  switch (actions) {
    case 'edit':
      return <button
        className={`bg-blue-600 text-white text-sm rounded px-2`}
        onClick={async () => {
          if (getProjectById) {
            await getProjectById(project?.id!)
          }
        }}
      >
        {name}
      </button>;
    case "enabled":
      return <button
        className={`${project.enabled ? "bg-green-600" : "bg-orange-600"} text-white text-sm rounded px-2`}
        onClick={async () => {
          const data = {
            ...project,
            enabled: !project.enabled
          }
          await onSaveProject(data)
          await refetch()
        }}
      >
        {project.enabled ? 'Active' : 'Disable'}
      </button>;
    case "delete":
      return <button
        className={`bg-red-600 text-white text-sm rounded px-2`}
      >
        {name}
      </button>;
    default:
      break;
  }
}

export const ButtonManage = ({ name, actions, refetch, project, getProjectById }: Props) => {
  return (
    <div>
      {<Buttons actions={actions} name={name} refetch={refetch} project={project} getProjectById={getProjectById} />}
    </div>
  )
}
