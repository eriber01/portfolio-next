'use client'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Techs } from '../../../techs/interface'
import Image from 'next/image'


interface Props {
  tech: Techs[],
  deleteTech: (id: number) => void
}

const TableTech = ({ tech, deleteTech }: Props) => {

  return (
    <div>
      <Table
        aria-label='prueba'
        className='rounded bg-transparent'
        isCompact
        isHeaderSticky
        isStriped
      >
        <TableHeader>
          <TableColumn align='center' className='text-base'>
            Tech
          </TableColumn>
          <TableColumn align='center' className='text-base'>
            Options
          </TableColumn>
        </TableHeader>
        <TableBody items={tech}
          className='text-black'
        >
          {(item) => (
            <TableRow key={item.id} className='bg-transparent text-black'>
              <TableCell className='w-full text-base'>
                <div className='flex items-center'>
                  <div>
                    <Image
                      alt={item.name}
                      src={item?.image?.url!}
                      height={25}
                      width={25}
                      className="rounded mr-2"
                    />
                  </div>
                  <div>
                    {item.name}
                  </div>
                </div>
              </TableCell>
              <TableCell className='text-center'>
                <Button
                  color='danger'
                  size='sm'
                  onClick={() => deleteTech(item.id!)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableTech