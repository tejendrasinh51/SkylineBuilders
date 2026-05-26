'use client'

import { useInView } from 'react-intersection-observer'
import CountUpLib from 'react-countup'
import { motion } from 'framer-motion'
import { counterReveal } from '@/lib/animations'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({ end, suffix = '', duration = 2, className }: CountUpProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div ref={ref} variants={counterReveal} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {inView ? (
        <span className={className}>
          <CountUpLib end={end} duration={duration} enableScrollSpy={false} />
          {suffix}
        </span>
      ) : (
        <span className={className}>0{suffix}</span>
      )}
    </motion.div>
  )
}
