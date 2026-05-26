'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/stats'
import CountUp from '@/components/ui/CountUp'
import { fadeUp } from '@/lib/animations'

export default function StatsSection() {
  return (
    <section id="stats" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg border border-border bg-surface shadow-card"
        >
          <div className="h-1 bg-gradient-to-r from-gold-dim via-gold to-gold-dim" />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-6 py-12 text-center ${
                  i < stats.length - 1 ? 'md:border-r md:border-gold/20' : ''
                } ${i % 2 === 0 ? 'border-r border-gold/10 md:border-r' : ''} ${
                  i < 2 ? 'border-b border-gold/10 md:border-b-0' : ''
                }`}
              >
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-4xl text-gold drop-shadow-[0_0_20px_rgba(201,168,76,0.3)] md:text-5xl"
                />
                <p className="mt-2 font-body text-sm font-medium text-text-primary">{stat.label}</p>
                <p className="font-body text-xs uppercase tracking-widest text-text-secondary">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
