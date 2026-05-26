'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'

export default function CTABanner() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="noise-texture absolute inset-0 bg-surface" />
      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          <h2 className="relative font-display text-4xl uppercase text-text-primary md:text-6xl">
            Your Dream Home Awaits.
          </h2>
          <p className="relative mt-6 font-body text-base text-text-secondary md:text-lg">
            Schedule a free site visit and let our experts guide you to the perfect residence in Vadodara.
          </p>
          <div className="relative mt-10">
            <Button href="/contact" size="lg">
              Schedule a Free Visit
            </Button>
          </div>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 font-body text-sm text-text-secondary sm:flex-row sm:gap-8">
            <a href={SITE.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone size={16} className="text-gold" />
              {SITE.phone}
            </a>
            <span className="hidden text-border sm:inline">·</span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" />
              Vadodara, Gujarat
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
