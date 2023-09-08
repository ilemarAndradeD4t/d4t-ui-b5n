import React from 'react'
import { useTableStore } from './store'
import { SearchQuery } from './SearchQuery'
import { Button } from 'd4t-ui-demo'
import { X } from 'lucide-react'
import { FacetedFilter } from './FacetedFilter'
import { VisibilityFilters } from './VisibilityFilters'

export const TableToolbar = ({ form, onSubmit }) => {
  const { queries, filters, showFilters, resetFilters } = useTableStore()
  const watchFields = form.watch(queries.map(item => item.id))

  return (
    <div className='w-10/12 flex items-center justify-between'>
      <div className='w-full flex flex-col items-start gap-x-2 gap-y-2'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex justify-start items-center sm:mr-4'>
          <section className='mr-3 flex justify-start items-center gap-x-3'>
            {
              queries.map((item, idx) => (
                <SearchQuery
                  queryText={watchFields[idx]}
                  label={item.label}
                  key={item.id}
                  id={item.id}
                  form={form}
                />
              ))
            }
          </section>
        </form>

        <div className='w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center'>
          <VisibilityFilters />

          {
            (showFilters && filters) && filters.map(filter => (
              <FacetedFilter
                key={filter.id}
                id={filter.id}
                icon={filter.icon}
                label={filter.label}
                options={filter.options}
              />
            ))
          }
          {
            showFilters && (
              <Button
                type='button'
                variant='ghost'
                onClick={() => {
                  // table.resetColumnFilters()
                  resetFilters()
                }}
                className='px-2 py-5 lg:px-3 ml-0 lg:ml-auto'
              >
                  Limpiar Filtros
                <X className='ml-2 h-4 w-4' />
              </Button>
            )
          }
        </div>
      </div>
    </div>
  )
}