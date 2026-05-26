'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { amenities } from '@/data/amenities'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp } from '@/lib/animations'

export default function AmenitiesPreview() {
  const preview = amenities

  return (
    <section id="amenities" className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionLabel className="justify-center">Lifestyle</SectionLabel>
          <h2 className="mt-4 font-display text-4xl uppercase text-text-primary md:text-5xl">
            World-Class Amenities.
          </h2>
        </motion.div>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:gap-8">
          {preview.map((amenity) => {
            const Icon = amenity.icon
            return (
              <div
                key={amenity.id}
                className="group flex min-w-[100px] flex-shrink-0 flex-col items-center gap-3"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                  <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-bg" />
                </div>
                <span className="text-center font-body text-xs tracking-wide text-text-secondary">{amenity.label}</span>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/amenities"
            className="group inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-gold"
          >
            View All Amenities
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
