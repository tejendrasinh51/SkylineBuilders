import { cn } from '@/lib/cn'

type StatusType = 'ready' | 'construction' | 'launch' | string

interface BadgeProps {
  status: StatusType
  label?: string
  className?: string
}

const statusStyles: Record<string, string> = {
  ready: 'bg-success/20 text-success border-success/30',
  'Ready to Move': 'bg-success/20 text-success border-success/30',
  construction: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Under Construction': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  launch: 'bg-gold/20 text-gold border-gold/30',
  'New Launch': 'bg-gold/20 text-gold border-gold/30',
}

export default function Badge({ status, label, className }: BadgeProps) {
  const displayLabel =
    label ||
    (status === 'ready'
      ? 'Ready to Move'
      : status === 'construction'
        ? 'Under Construction'
        : status === 'launch'
          ? 'New Launch'
          : status)

  const styleKey =
    typeof status === 'string' && statusStyles[status]
      ? status
      : status === 'ready'
        ? 'ready'
        : status === 'construction'
          ? 'construction'
          : 'launch'

  return (
    <span
      className={cn(
        'inline-block rounded-sm border px-3 py-1 font-body text-xs uppercase tracking-widest',
        statusStyles[styleKey] || statusStyles[displayLabel] || statusStyles.launch,
        className
      )}
    >
      {displayLabel}
    </span>
  )
}
