'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import Button from '@/components/ui/Button'

const headline = "VADODARA'S MOST ANTICIPATED ADDRESS.".split(' ')

const heroStats = [
  { value: '850+', label: 'Families Housed' },
  { value: '12+', label: 'Years Experience' },
  { value: '4', label: 'Projects Delivered' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920"
            alt="Luxury apartment exterior at golden hour"
            fill
            priority
            className="object-cover hero-ken-burns"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <div className="container-custom relative z-10 flex min-h-screen flex-col justify-center pb-32 pt-28">
        <div className="max-w-2xl lg:w-1/2">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-6 font-body text-xs uppercase tracking-[0.25em] text-gold"
          >
            EST. 2015 · VADODARA, GUJARAT
          </motion.p>

          <h1 className="font-display text-[var(--text-hero)] font-medium uppercase leading-[1.05] text-text-primary">
            {headline.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Premium residences crafted for those who demand more from life.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/projects" size="lg">
              Explore Projects
            </Button>
            <Link
              href="/about"
              className="group flex items-center gap-2 font-body text-sm uppercase tracking-widest text-text-primary transition-colors hover:text-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 transition-colors group-hover:border-gold group-hover:bg-gold/10">
                <Play size={14} className="ml-0.5 fill-gold text-gold" />
              </span>
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-gold" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container-custom grid grid-cols-3 divide-x divide-white/10 py-6">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-4 text-center md:px-8">
              <p className="font-display text-2xl text-gold md:text-3xl">{stat.value}</p>
              <p className="mt-1 font-body text-[10px] uppercase tracking-widest text-text-secondary md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
