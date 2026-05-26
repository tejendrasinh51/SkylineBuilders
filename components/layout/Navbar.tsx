'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-500',
          scrolled ? 'border-b border-white/5 bg-black/80 backdrop-blur-xl' : 'bg-transparent'
        )}
      >
        <div className="container-custom flex items-center justify-between py-5 md:py-6">
          <Link href="/" className="group">
            <span className="font-display text-2xl font-semibold tracking-wide text-gold md:text-3xl">
              SKYLINE
            </span>
            <span className="block font-body text-[10px] uppercase tracking-[0.35em] text-text-secondary">
              BUILDERS
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-body text-sm uppercase tracking-widest text-text-secondary transition-colors hover:text-gold',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-gold'
                    : ''
                )}
              >
                {link.label}
                {(pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden border border-gold px-5 py-2.5 font-body text-xs uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-bg lg:inline-block"
          >
            Schedule Visit
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-text-primary lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bg pt-24 lg:hidden"
          >
            <motion.nav
              className="flex flex-col items-center gap-8 px-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-4xl text-text-primary hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href="/contact"
                  className="mt-4 inline-block border border-gold px-8 py-4 font-body text-sm uppercase tracking-widest text-gold"
                >
                  Schedule Visit
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
