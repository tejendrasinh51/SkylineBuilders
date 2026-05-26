'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Only on fine pointer devices (desktop)
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovered(!!target.closest('a, button, [data-cursor="hover"], input, select, textarea, label'))
    }
    const hide = () => setHidden(true)
    const show = () => setHidden(false)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#C9A84C] mix-blend-difference"
      animate={{
        x: pos.x - (hovered ? 20 : 4),
        y: pos.y - (hovered ? 20 : 4),
        width: hovered ? 40 : 8,
        height: hovered ? 40 : 8,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.3 }}
    />
  )
}
