'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = useCallback(() => {
    setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const next = useCallback(() => {
    setActive((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, prev, next])

  return (
    <>
      <div className="relative h-[50vh] w-full cursor-pointer md:h-[70vh]" onClick={() => setLightbox(true)}>
        <Image src={images[active]} alt={`${name} gallery`} fill className="object-cover" priority sizes="100vw" />
      </div>
      <div className="flex gap-2 overflow-x-auto bg-surface p-4 scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => setActive(i)}
            className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded border-2 transition-colors ${
              i === active ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <Image src={img} alt={`${name} thumbnail ${i + 1}`} fill className="object-cover" sizes="112px" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95"
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 z-10 text-text-primary hover:text-gold"
              onClick={() => setLightbox(false)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <button
              type="button"
              className="absolute left-4 z-10 p-2 text-text-primary hover:text-gold md:left-8"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            <div className="relative h-[80vh] w-[90vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image src={images[active]} alt={`${name} full view`} fill className="object-contain" sizes="90vw" />
            </div>
            <button
              type="button"
              className="absolute right-4 z-10 p-2 text-text-primary hover:text-gold md:right-8"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
