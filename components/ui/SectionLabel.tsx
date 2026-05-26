import { cn } from '@/lib/cn'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span className="h-px w-8 bg-gold" />
      <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
        {children}
      </span>
    </div>
  )
}
