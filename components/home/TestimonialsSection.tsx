'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import SectionLabel from '@/components/ui/SectionLabel'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [paused, next])

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="section-padding relative noise-texture bg-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom">
        <div className="text-center">
          <SectionLabel className="justify-center">Testimonials</SectionLabel>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl text-center">
          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[12rem] leading-none text-gold/10 md:text-[14rem]">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="relative font-display text-2xl leading-relaxed text-text-primary md:text-3xl lg:text-4xl">
                {current.quote}
              </blockquote>
              <div className="mt-10">
                <p className="font-body text-sm font-medium uppercase tracking-widest text-gold">{current.name}</p>
                <p className="mt-1 font-body text-sm text-text-secondary">
                  {current.designation} · {current.property}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-8 bg-gold' : 'w-2 bg-border hover:bg-gold/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
