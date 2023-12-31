type colors = "blue" | "red" | "green" | 'orange'

interface Props {
  name: string
  color: colors
}

export const ButtonManage = ({ name, color }: Props) => {
  return (
    <div>
      <button
        className={`bg-${color}-600 text-white text-sm rounded px-2`}
      >
        {name}
      </button>
    </div>
  )
}
