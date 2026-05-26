import { cn } from '@/lib/cn'

interface GoldDividerProps {
  withDiamond?: boolean
  className?: string
}

export default function GoldDivider({ withDiamond = false, className }: GoldDividerProps) {
  if (withDiamond) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="h-2 w-2 rotate-45 bg-gold" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    )
  }

  return (
    <div
      className={cn('h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent', className)}
    />
  )
}
