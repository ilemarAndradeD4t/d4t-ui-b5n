import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

import { DataTablePaginationProps } from '@/lib/types'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function TablePagination<TData> ({ table, pagination, rowsToSelect }: DataTablePaginationProps<TData>) {
  return (
    <div className='flex flex-wrap items-center justify-end px-2'>
      {
        rowsToSelect && (
          <div className='flex-1 text-sm text-muted-foreground'>
            {table.getFilteredSelectedRowModel().rows.length} de {' '}
            {table.getFilteredRowModel().rows.length} {pagination.labels.singularItem}(s) Seleccionados.
          </div>
        )
      }

      <div className='flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0'>
        <div className='flex flex-wrap items-center gap-2'>
          <p className='text-sm font-medium'>{pagination.labels.pluralItem} por Pagina</p>

          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>

            <SelectContent side='top'>
              {[5, 10, 15, 20].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Pagina {table.getState().pagination.pageIndex + 1} de{' '} { table.getPageCount() }
        </div> */}

        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            className='hidden h-8 w-8 p-0 lg:flex'
            onClick={() => table.setPageIndex(1)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Primera Pagina</span>
            <ChevronsLeft className='h-4 w-4' />
          </Button>

          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Pagina Anterior</span>
            <ChevronLeft className='h-4 w-4' />
          </Button>

          <Button
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className='sr-only'>Siguiente Pagina</span>
            <ChevronRight className='h-4 w-4' />
          </Button>

          <Button
            variant='outline'
            className='hidden h-8 w-8 p-0 lg:flex'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className='sr-only'>Ultima Pagina</span>
            <ChevronsRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}
