// @ts-nocheck
import { createContext } from 'react'

import { ITableContextStore } from './types'

export const TableContext = createContext<ITableContextStore>({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: true,
  searchForm: null,
  setMultiItemsSelected: () => {},
  onSubmitTable: null,
  setSearchForm: () => {},
  setSelectItem: () => {},
  getGlobalFilters: () => { },
  resetOptionsByFilter: () => { },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: 'Items', single: 'Item' },
    hasPrevPage: false,
    hasNextPage: false
  }
})