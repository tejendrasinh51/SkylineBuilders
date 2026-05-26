'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'

const words = ["VADODARA'S", 'MOST', 'ANTICIPATED', 'ADDRESS.']

const heroStats = [
  { value: 850, suffix: '+', label: 'Families Housed' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 4, suffix: '', label: 'Projects Delivered' },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, -120])
  const textY = useTransform(scrollY, [0, 600], [0, 60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]">

      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=90"
          alt="Skyline Builders luxury residence"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }}
        />
      </motion.div>

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center container-custom pt-32 pb-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl lg:w-1/2">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-body">
              Est. 2015 · Vadodara, Gujarat
            </span>
          </motion.div>

          {/* Headline — word by word reveal */}
          <h1
            className="font-display font-light leading-[0.95] mb-8 text-text-primary"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.22em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-text-secondary font-body font-light text-lg md:text-xl max-w-lg leading-relaxed mb-12"
          >
            Premium residences crafted for those who demand more from life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-[#C9A84C] text-black font-body font-medium
                         text-sm tracking-wider uppercase overflow-hidden transition-all duration-300
                         hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-[#E8C97A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-3 text-text-primary font-body text-sm tracking-wider uppercase hover:text-[#C9A84C] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
                <Play size={14} className="ml-0.5" fill="currentColor" />
              </div>
              Our Story
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {heroStats.map((stat, i) => (
            <div key={i} className="px-4 md:px-8 py-6 text-center backdrop-blur-sm bg-black/20">
              <div className="font-display text-3xl md:text-4xl text-[#C9A84C] font-light leading-none">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-secondary text-[10px] tracking-wider uppercase font-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/60 to-transparent" />
        <ArrowDown size={14} className="text-[#C9A84C]" />
      </motion.div>
    </section>
  )
}
