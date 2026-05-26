'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageReveal from '@/components/ui/ImageReveal'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function AboutIntro() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Ghost number — properly styled with outline only */}
      <div
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold leading-none"
        style={{
          fontSize: 'clamp(8rem, 20vw, 22rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.06)',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        12
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ImageReveal>
              <div className="relative -rotate-1 overflow-hidden rounded-lg border border-border shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
                  alt="Skyline Builders luxury residence interior"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            </ImageReveal>
          </div>

          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={staggerItem}>
              <SectionLabel>About Skyline</SectionLabel>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="mt-5 font-display font-light leading-tight text-text-primary"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Building Vadodara&apos;s Finest Addresses Since 2015.
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 font-body text-sm leading-relaxed text-text-secondary md:text-base">
              Skyline Builders was founded with one conviction — that exceptional design and lasting quality are not
              luxuries, but necessities. Every tower we raise reflects our commitment to craftsmanship, transparency,
              and homes that stand the test of time.
            </motion.p>
            <motion.p variants={staggerItem} className="mt-4 font-body text-sm leading-relaxed text-text-secondary md:text-base">
              Over 12 years and 850+ families housed across Alkapuri, Gotri, and Sama, we continue to raise the bar for
              residential development in Gujarat.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-gold"
              >
                Our Story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
