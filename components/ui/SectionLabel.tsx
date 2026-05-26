'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex items-center gap-3', className)}
    >
      <span className="h-px w-6 bg-[#C9A84C]" />
      <span className="font-body text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase">
        {children}
      </span>
    </motion.div>
  )
}
