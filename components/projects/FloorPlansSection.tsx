'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloorPlansSection({
  floorPlanImages,
  projectName,
}: {
  floorPlanImages: Record<string, string>
  projectName: string
}) {
  const tabs = Object.keys(floorPlanImages)
  const [active, setActive] = useState(tabs[0])
  const [zoomed, setZoomed] = useState(false)

  if (tabs.length === 0) return null

  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <h2 className="mb-8 font-display text-3xl uppercase text-text-primary">Floor Plans</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`px-5 py-2 font-body text-xs uppercase tracking-widest transition-colors ${
                active === tab
                  ? 'bg-gold text-bg'
                  : 'border border-border text-text-secondary hover:border-gold hover:text-gold'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="group relative mx-auto block max-w-2xl overflow-hidden rounded-lg border border-border"
        >
          <Image
            src={floorPlanImages[active]}
            alt={`${projectName} ${active} floor plan`}
            width={800}
            height={600}
            className="h-auto w-full object-cover transition-opacity group-hover:opacity-90"
          />
          <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-bg/80 px-3 py-2 font-body text-xs uppercase tracking-widest text-gold">
            <ZoomIn size={14} /> Click to zoom
          </span>
        </button>
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setZoomed(false)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-text-primary hover:text-gold"
              onClick={() => setZoomed(false)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={floorPlanImages[active]}
                alt={`${projectName} ${active} floor plan zoomed`}
                width={1200}
                height={900}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
