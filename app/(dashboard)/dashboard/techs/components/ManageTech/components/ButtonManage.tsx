import { DeleteTech } from "../../../database/DeleteTech"
// import { GetTechById } from "../../../database/GetTechs"
import { UpdateTech } from "../../../database/UpdateTech"
import { Techs } from "../../../interface"

type actions = "edit" | "delete" | "enabled"

interface Props {
  tech: Techs
  name: string
  actions: actions
  refetch: () => void
  getTechById?: (id: number) => void
}

const Buttons = ({ actions, name, tech, refetch, getTechById }: Props) => {
  switch (actions) {
    case 'edit':
      return <button
        className={`bg-blue-600 text-white text-sm rounded px-2`}
        onClick={async () => {
          console.log('click');
          if (getTechById) {
            await getTechById(tech.id!)
          }
        }}
      >
        {name}
      </button>;
    case "enabled":
      return <button
        className={`${tech.enabled ? "bg-green-600" : "bg-orange-600"} text-white text-sm rounded px-2`}
        onClick={async () => {
          const data = {
            ...tech,
            enabled: !tech.enabled
          }
          await UpdateTech(data)
          await refetch()
        }}
      >
        {tech.enabled ? 'Active' : 'Disable'}
      </button>;
    case "delete":
      return <button
        onClick={async () => {
          await DeleteTech(tech)
          await refetch()
        }}
        className={`bg-red-600 text-white text-sm rounded px-2`}
      >
        {name}
      </button>;
    default:
      break;
  }
}

export const ButtonManage = ({ name, actions, tech, refetch, getTechById }: Props) => {
  return (
    <div>
      {<Buttons actions={actions} name={name} tech={tech} refetch={refetch} getTechById={getTechById} />}
    </div>
  )
}
