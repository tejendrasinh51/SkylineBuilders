'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/cn'

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ImageReveal({ children, className }: ImageRevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={cn('overflow-hidden', className)}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={inView ? { clipPath: 'inset(0 0 0 0)' } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
