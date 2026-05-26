'use client'

import { cn } from '@/lib/cn'

const statusFilters = [
  { id: 'all', label: 'All' },
  { id: 'ready', label: 'Ready to Move' },
  { id: 'construction', label: 'Under Construction' },
  { id: 'launch', label: 'New Launch' },
]

const typeFilters = [
  { id: 'all', label: 'All' },
  { id: '2 BHK', label: '2 BHK' },
  { id: '3 BHK', label: '3 BHK' },
  { id: '4 BHK', label: '4 BHK' },
  { id: 'Penthouse', label: 'Penthouse' },
]

interface ProjectFiltersProps {
  status: string
  type: string
  onStatusChange: (s: string) => void
  onTypeChange: (t: string) => void
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-4 py-2 font-body text-xs uppercase tracking-widest transition-colors',
        active ? 'bg-gold text-bg' : 'border border-border text-text-secondary hover:border-gold hover:text-gold'
      )}
    >
      {children}
    </button>
  )
}

export default function ProjectFilters({ status, type, onStatusChange, onTypeChange }: ProjectFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {statusFilters.map((f) => (
          <FilterPill key={f.id} active={status === f.id} onClick={() => onStatusChange(f.id)}>
            {f.label}
          </FilterPill>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {typeFilters.map((f) => (
          <FilterPill key={f.id} active={type === f.id} onClick={() => onTypeChange(f.id)}>
            {f.label}
          </FilterPill>
        ))}
      </div>
    </div>
  )
}
