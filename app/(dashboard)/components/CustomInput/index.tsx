import { InputTextProps } from './interface';


const CustomInput = ({ id, label, placeHolder, value, styles, type = "text" }: InputTextProps) => {
  return (
    <div className={`flex flex-col ${styles}`}>
      <label htmlFor={id}
        className="text-base"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeHolder}
        className="rounded bg-transparent border pl-2"
        required
        // value={value}
      />
    </div>
  )
}

export default CustomInput