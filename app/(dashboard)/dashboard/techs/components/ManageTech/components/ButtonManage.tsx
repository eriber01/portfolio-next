type actions = "edit" | "delete" | "status"

interface Props {
  name: string
  actions: actions
  status?: boolean
}

const Buttons = ({ actions, name, status }: Props) => {
  switch (actions) {
    case 'edit':
      return <button
        className={`bg-blue-600 text-white text-sm rounded px-2`}
      >
        {name}
      </button>;
    case "status":
      return <button
        className={`${status ? "bg-green-600" : "bg-orange-600"} text-white text-sm rounded px-2`}
      >
        {status ? 'Active' : 'Disable'}
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

export const ButtonManage = ({ name, actions, status }: Props) => {
  return (
    <div>
      {<Buttons actions={actions} name={name} status={status} />}
    </div>
  )
}
