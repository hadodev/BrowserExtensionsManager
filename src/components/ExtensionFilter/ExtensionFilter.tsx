import type { FilterType } from '../../types'
import styles from '@components/ExtensionFilter/ExtensionFilter.module.css'

interface ExtensionFilterProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

const ExtensionFilter = ({ currentFilter, onFilterChange }: ExtensionFilterProps) => {
  const filters: { id: FilterType; label: string }[] = [
    { id: 'All', label: 'All' },
    { id: 'Active', label: 'Active' },
    { id: 'Inactive', label: 'Inactive' }
  ]

  return (
    <div className={styles.filterContainer}>
      {filters.map(({ id, label }) => (
        <div key={id} className={styles.filterItem}>
          <input
            type="checkbox"
            id={id.toLowerCase()}
            name="extensionFilter"
            checked={currentFilter === id}
            onChange={() => onFilterChange(id)}
          />
          <label htmlFor={id.toLowerCase()}>{label}</label>
        </div>
      ))}
    </div>
  )
}

export default ExtensionFilter
