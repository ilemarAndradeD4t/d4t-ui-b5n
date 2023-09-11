import type { ReactNode } from 'react'
import { UseFormReturn } from 'react-hook-form'

export interface TableFilterOption {
  id: string
  label: string
  value: string | boolean
  icon?: ReactNode
  selected?: boolean
}

export interface TableFilter {
  id: string
  label: string,
  icon?: ReactNode
  options: TableFilterOption[]
}

type DataProperty<Type> = {
  [Property in keyof Type as Exclude<Property, '__typename'>]: Type[Property]
}

export interface TableColumn<TDataSchema> {
  id: keyof DataProperty<TDataSchema> | 'actions'
  label: string
  filters?: TableFilterOption[]
  isQuery?: boolean
  render?: (item: DataProperty<TDataSchema>) => ReactNode
}

export interface TableQuery {
  id: string
  label: string
}

interface TablePaginationLabel {
  plural: string
  single: string
}

export interface TablePagination {
  labels?: TablePaginationLabel
  limit: number
  page: number
  hasPrevPage: boolean
  hasNextPage: boolean
}

export interface TableSubmitParams {
  queries: TableQuery[]
  filters: TableFilter[]
  limit: number
  page: number
}

export type TableSubmit = ({ page, limit, queries, filters }: TableSubmitParams) => Promise<void>

export interface InitialTable<TData = any> {
  data: TData[] | []
  filters: TableFilter[]
  queries: TableQuery[]
  showFilters: boolean
  columns: TableColumn<TData>[]
  pagination: TablePagination
  onSubmitTable: TableSubmit

  setShowFilters: (value: boolean) => void
  setSearchForm: (searchForm) => void
  selectOptionFilter: (filterId: string, optionId: string, optionValue: boolean) => void
  getFiltersWithOptionsSelected: () => any[]
  getFilterOptionsSelectedById: (filterId: string) => any[]
  resetFilters: () => void
  nextPage: () => void
  prevPage: () => void
  updateLimit: (limit: number) => void
}

export interface TableStore<TData> {
  data: TData[] | []
  showFilters: boolean
  columns: TableColumn<TData>[]
  pagination: TablePagination

  filters?: TableFilter[]
  queries?: TableQuery[]

  onSubmitTable: TableSubmit

  selectOptionFilter: (filterId: string, optionId: string, optionValue: boolean) => void
  getFiltersWithOptionsSelected: () => any[]
  getFilterOptionsSelectedById: (filterId: string) => any[]
  resetFilters: () => void
  nextPage: () => void
  prevPage: () => void

  setShowFilters: (value: boolean) => void
  setInitialTable: (initialState: InitialTable<TData>) => void
  updateLimit: (limit: number) => void
  updatePage: (page: number) => void
  setPagination: (pagination: TablePagination) => void
  setColumns: (columns: TableColumn<TData>[]) => void
  setFilters: (filters: TableFilter[]) => void
  setQueries: (queries: TableQuery[]) => void
  setData: (data: TData[] | []) => void
}

export interface TableContextStore<TData = any> {
  data: TData[] | []
  showFilters: boolean
  columns: TableColumn<TData>[]
  pagination: TablePagination
  searchForm?: UseFormReturn<any, any, any>

  filters?: TableFilter[]
  queries?: TableQuery[]
  onSubmitTable: TableSubmit

  setSearchForm: (searchForm) => void

  setShowFilters: (value: boolean) => void
  selectOptionFilter: (filterId: string, optionId: string, optionValue: boolean) => void
  getFiltersWithOptionsSelected: () => any[]
  getFilterOptionsSelectedById: (filterId: string) => any[]
  resetFilters: () => void
  nextPage: () => void
  prevPage: () => void
  updateLimit: (limit: number) => void
}
