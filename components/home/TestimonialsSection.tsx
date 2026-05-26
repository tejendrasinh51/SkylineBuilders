'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const testimonials = [
  {
    id: '1',
    quote:
      'Skyline Builders delivered exactly what they promised — quality craftsmanship, transparent pricing, and a home we are truly proud of. The Meridian exceeded every expectation we had.',
    name: 'Rajesh Patel',
    role: 'Business Owner',
    property: 'The Meridian, Alkapuri',
  },
  {
    id: '2',
    quote:
      'From booking to possession, the entire journey was smooth and transparent. The quality of construction and amenities is genuinely world-class. Our family couldn\'t be happier.',
    name: 'Priya & Anand Shah',
    role: 'Software Engineers',
    property: 'Skyline Residences, Gotri',
  },
  {
    id: '3',
    quote:
      'As an NRI investor purchasing remotely, I was nervous. Skyline\'s team was honest, responsive, and delivered on every single commitment. The ROI has already exceeded projections.',
    name: 'Mihir Desai',
    role: 'NRI Investor, Dubai',
    property: 'The Pinnacle, Sama',
  },
  {
    id: '4',
    quote:
      'We compared 6 builders before choosing Skyline. The difference in transparency, design quality, and after-sales support is night and day. Best decision we ever made.',
    name: 'Kavita & Suresh Mehta',
    role: 'Retired Professionals',
    property: 'The Meridian, Alkapuri',
  },
  {
    id: '5',
    quote:
      'The smart home features alone are worth the investment. Coming home to automated lighting, climate control, and security — it feels like the future. Extraordinary attention to detail.',
    name: 'Arjun Nair',
    role: 'Tech Entrepreneur',
    property: 'The Pinnacle, Sama',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      id="testimonials"
      className="py-32 bg-[#0D0D0D] relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <SectionLabel className="justify-center">Testimonials</SectionLabel>
        </div>

        {/* Decorative oversized quote mark */}
        <div
          className="font-display leading-none text-[#C9A84C] select-none mb-[-40px] opacity-[0.12]"
          style={{ fontSize: 'clamp(8rem, 18vw, 14rem)' }}
        >
          &ldquo;
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[active].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote
              className="font-display font-light text-text-primary leading-relaxed italic mb-10"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 2.1rem)' }}
            >
              {testimonials[active].quote}
            </blockquote>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
            <p className="text-[#C9A84C] font-body font-medium tracking-wider uppercase text-sm">
              {testimonials[active].name}
            </p>
            <p className="text-text-secondary font-body text-sm mt-1">
              {testimonials[active].role} · {testimonials[active].property}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-8 h-2 bg-[#C9A84C]'
                  : 'w-2 h-2 bg-[#2A2A2A] hover:bg-[#C9A84C]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
