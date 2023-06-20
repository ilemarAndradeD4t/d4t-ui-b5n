'use client'

import { Table } from '@tanstack/react-table'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { DataTableFacetedFilter } from './DataTableFacetedFilter'
import { IItemToFilter } from '@/lib/types/tables'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  itemsToFilter: IItemToFilter[]
}

export function DataTableToolbar<TData> ({ table, itemsToFilter }: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* <Input
          placeholder="Filter tasks..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        /> */}

        {
          itemsToFilter.map(item => {
            return table.getColumn(item.columnID) && (
              <DataTableFacetedFilter
                key={item.columnID}
                column={table.getColumn(item.columnID)}
                title={item.label}
                options={item.options}
              />
            )
          })
        }

        {
          isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 py-2 lg:px-3"
            >
              Limpiar Filtros
              <X className="ml-2 h-4 w-4" />
            </Button>
          )
        }
      </div>
    </div>
  )
}
