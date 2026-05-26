'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section id="cta" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        {/* Gold radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-px bg-[#C9A84C] mx-auto mb-10"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-text-primary mb-6 leading-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          Your Dream Home
          <br />
          <em className="text-[#C9A84C] not-italic">Awaits.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-text-secondary font-body text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Schedule a free site visit and let our experts guide you to the perfect residence in Vadodara.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="group relative px-10 py-5 bg-[#C9A84C] text-black font-body font-medium
                       text-sm tracking-[0.15em] uppercase overflow-hidden
                       hover:shadow-[0_0_60px_rgba(201,168,76,0.5)] transition-shadow duration-300"
          >
            <span className="relative z-10">Schedule a Free Visit</span>
            <div className="absolute inset-0 bg-[#E8C97A] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <a
            href={SITE.phoneHref}
            className="font-body text-text-secondary text-sm tracking-wider hover:text-[#C9A84C] transition-colors duration-300"
          >
            {SITE.phone}
          </a>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-16 h-px bg-[#C9A84C] mx-auto mt-10"
        />
      </div>
    </section>
  )
}
