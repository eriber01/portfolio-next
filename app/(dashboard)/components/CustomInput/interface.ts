
type TypeInput = 'text' | 'number' | 'tel' | 'email'

export interface InputTextProps {
  id: string
  label: string
  placeHolder: string
  value: string | number
  type?: TypeInput
  styles?: string
  onChange: (path: string, value: string | number) => void
}