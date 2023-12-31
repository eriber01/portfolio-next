import { Modal, ModalBody, ModalContent, ModalHeader, toggle } from '@nextui-org/react'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  name: string
  children: ReactNode
  isOpen: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

export const CustomModal = ({ name, children, isOpen, toggle }: Props) => {
  return (
    <div className='h-full'>
      <Modal
        isOpen={isOpen}
        size='3xl'
        hideCloseButton
        className='bg-[#1F2128]'
      >
        <ModalContent>
          <ModalHeader>
            <div className='flex justify-between w-full'>
              {name}
              <span
                className='border rounded-full px-2 cursor-pointer'
                onClick={() => toggle(false)}
              >
                X
              </span>
            </div>
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
