// Tipos principales de la aplicación
export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export type FilterType = 'All' | 'Active' | 'Inactive'

// Props de componentes
export interface CardProps {
    card: Extension;
    onToggleActive?: (isActive: boolean) => void;
    onRemove?: () => void;
}

export interface FilterProps {
  onFilterChange?: (filter: string) => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}
