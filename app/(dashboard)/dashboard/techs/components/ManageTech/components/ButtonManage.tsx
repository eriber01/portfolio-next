type actions = "edit" | "delete" | "enabled"

interface Props {
  name: string
  actions: actions
  enabled?: boolean
}

const Buttons = ({ actions, name, enabled }: Props) => {
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
        className={`bg-red-600 text-white text-sm rounded px-2`}
      >
        {name}
      </button>;
    default:
      break;
  }
}

export const ButtonManage = ({ name, actions, enabled }: Props) => {
  return (
    <div>
      {<Buttons actions={actions} name={name} enabled={enabled} />}
    </div>
  )
}
