import { DeleteTech } from "../../../database/DeleteTech"
import { Techs } from "../../../interface"

type actions = "edit" | "delete" | "enabled"

interface Props {
  tech: Techs
  name: string
  actions: actions
  enabled?: boolean
  refetch: () => void
}

const Buttons = ({ actions, name, enabled, tech, refetch }: Props) => {
  switch (actions) {
    case 'edit':
      return <button
        className={`bg-blue-600 text-white text-sm rounded px-2`}
      >
        {name}
      </button>;
    case "enabled":
      return <button
        className={`${enabled ? "bg-green-600" : "bg-orange-600"} text-white text-sm rounded px-2`}
      >
        {enabled ? 'Active' : 'Disable'}
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

export const ButtonManage = ({ name, actions, enabled, tech, refetch }: Props) => {
  return (
    <div>
      {<Buttons actions={actions} name={name} enabled={enabled} tech={tech} refetch={refetch} />}
    </div>
  )
}
