type TypeInput = 'text' | 'number' | 'tel' | 'email'

export interface InputTextProps {
  id: string
  label: string
  placeHolder: string
  value: string
  type?: TypeInput
  styles?: string
}