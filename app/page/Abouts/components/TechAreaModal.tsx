'use client'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button } from '@nextui-org/react';
import React from 'react'
import TechImages from './TechImages';
import { Techs } from '@/app/(dashboard)/dashboard/techs/interface';
import { ModalAreaDescriptions, areaTypes } from '../database';


interface Props {
  area: areaTypes
  tech: Techs[]
  isOpen: boolean
  toggle: (value: boolean) => void
  year: number
}

const TechAreaModal = ({ tech, area, isOpen, toggle, year }: Props) => {

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
              {ModalAreaDescriptions(area, year)}
            </p>

            <p className='my-3'>Technologies:</p>
            <TechImages tech={tech} />
          </ModalBody>
          <ModalFooter>
            <Button color='primary'
              onClick={() => toggle(!isOpen)}
            >Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default TechAreaModal