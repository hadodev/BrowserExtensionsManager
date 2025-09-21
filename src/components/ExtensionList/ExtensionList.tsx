import type { Extension } from '../../types'
import Card from '../Card/Card'
import styles from './ExtensionList.module.css'

interface ExtensionListProps {
  extensions: Extension[]
  onToggleActive: (name: string, isActive: boolean) => void
  onRemove: (name: string) => void
}

const ExtensionList = ({ extensions, onToggleActive, onRemove }: ExtensionListProps) => {
  if (extensions.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No extensions found</p>
      </div>
    )
  }

  return (
    <article className={styles.extensionGrid}>
      {extensions.map((extension) => (
        <Card
          key={extension.name}
          card={extension}
          onToggleActive={(isActive: boolean) =>
            onToggleActive(extension.name, isActive)
          }
          onRemove={() => onRemove(extension.name)}
        />
      ))}
    </article>
  )
}

export default ExtensionList
