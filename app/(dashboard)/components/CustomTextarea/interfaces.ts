export interface TextareaProps {
  style?: string
  value: string
  placeholder: string
  rows: number
  onChange: (path: string, value: string) => void
}