'use client'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Techs } from '../../interfaces'

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
                {item.name}
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