'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  loading?: boolean
  href?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-bg hover:bg-gold-light border border-gold',
  outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-bg',
  ghost: 'bg-transparent text-gold border border-transparent hover:text-gold-light',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-3 text-sm tracking-widest',
  lg: 'px-8 py-4 text-sm tracking-widest',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  href,
  children,
  className,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-body font-medium uppercase transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ scale: disabled || loading ? 1 : 1.02 }} whileTap={{ scale: disabled || loading ? 1 : 0.98 }} className="inline-block w-full">
      <button type={type} className={cn(classes, 'w-full')} disabled={disabled || loading} onClick={onClick}>
        {content}
      </button>
    </motion.div>
  )
}
