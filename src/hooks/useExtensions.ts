import { useState, useMemo } from 'react'
import type { Extension, FilterType } from '../types'
import jsonData from '@data/data.json'

export const useExtensions = () => {
  const [data, setData] = useState<Extension[]>(jsonData)
  const [currentFilter, setCurrentFilter] = useState<FilterType>('All')

  const filteredData = useMemo(() => {
    switch (currentFilter) {
      case 'Active':
        return data.filter(extension => extension.isActive)
      case 'Inactive':
        return data.filter(extension => !extension.isActive)
      default:
        return data
    }
  }, [data, currentFilter])

  const handleToggleActive = (name: string, isActive: boolean) => {
    setData(prevData => 
      prevData.map(extension => 
        extension.name === name 
          ? { ...extension, isActive }
          : extension
      )
    )
  }

  const handleRemove = (name: string) => {
    setData(prevData => 
      prevData.filter(extension => extension.name !== name)
    )
  }

  const handleFilterChange = (filter: FilterType) => {
    setCurrentFilter(filter)
  }

  return {
    data,
    filteredData,
    currentFilter,
    handleToggleActive,
    handleRemove,
    handleFilterChange
  }
}
