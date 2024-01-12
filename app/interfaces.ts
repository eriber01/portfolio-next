// nav interfaces
export interface Nav {
  id: string
  name: string
}

export type Status = 'fail' | 'success'

export interface savedMessageProps {
  message: string
  status: Status
}