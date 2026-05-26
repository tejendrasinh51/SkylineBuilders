'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/stats'
import CountUp from '@/components/ui/CountUp'

export default function StatsSection() {
  return (
    <section id="stats" className="py-0">
      <div className="bg-[#111111] border-y border-[#1A1A1A]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1A1A1A]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group px-6 md:px-10 py-12 md:py-14 relative overflow-hidden"
              >
                {/* Hover gold glow */}
                <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/[0.03] transition-colors duration-500" />
                <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div
                  className="font-display font-light text-[#C9A84C] leading-none mb-3"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    textShadow: '0 0 60px rgba(201,168,76,0.2)',
                  }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-xs text-text-secondary tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
                <div className="font-body text-[10px] text-text-muted tracking-widest uppercase mt-0.5">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
