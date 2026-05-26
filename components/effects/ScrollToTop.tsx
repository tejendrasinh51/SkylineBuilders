'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-40 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-bg shadow-gold transition-transform hover:scale-105 md:bottom-24"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  )
}
