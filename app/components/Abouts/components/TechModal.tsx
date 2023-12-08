// 'use client'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button } from '@nextui-org/react';
import React from 'react'
import TechImages from './TechImages';
import { useAppSelector } from '@/app/redux/hooks';

interface tech {
  tech: string
}

interface Props {
  area: string
  tech: tech[]
  isOpen: boolean
}

const TechModal = ({ tech, area, isOpen }: Props) => {

  // const { isOpenTech } = useAppSelector((state) => state.ui)
  // console.log(isOpenTech);
  

  return (
    <div className=''>
      <Modal
        isOpen={isOpen}
        size='2xl'
        placement='center'
        hideCloseButton
        className='bg-gray-800'
      >
        <ModalContent>
          <ModalHeader>
            <p className=''>
              {area} Description
            </p>
          </ModalHeader>
          <ModalBody>
            <p className=''>
              With two years of experience as a Frontend Developer,
              I specialize in building dynamic web applications
              using React, Bootstrap, Next.js, and Tailwind CSS.
              I create interactive, efficient user interfaces,
              focusing on intuitive design and staying updated
              with the latest frontend trends.
            </p>

            <p className='my-3'>Tech:</p>
            <TechImages tech={tech} />
          </ModalBody>
          <ModalFooter>
            <Button color='primary'>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default TechModal