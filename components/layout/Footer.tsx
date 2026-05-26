'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe, Share2, Mail, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'
import GoldDivider from '@/components/ui/GoldDivider'

const projectLinks = [
  { href: '/projects/the-meridian', label: 'The Meridian' },
  { href: '/projects/skyline-residences', label: 'Skyline Residences' },
  { href: '/projects/the-pinnacle', label: 'The Pinnacle' },
  { href: '/projects', label: 'All Projects' },
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/about#team', label: 'Our Team' },
  { href: '/about#values', label: 'Our Values' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Use' },
  { href: '#', label: 'RERA Information' },
  { href: '#', label: 'Disclaimer' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative border-t border-gold/20 bg-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link href="/">
              <span className="font-display text-3xl text-gold">SKYLINE</span>
              <span className="block font-body text-xs uppercase tracking-[0.35em] text-text-secondary">
                BUILDERS
              </span>
            </Link>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-text-secondary">
              {SITE.tagline} Premium residences in Vadodara since 2015.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-text-primary">Subscribe for updates</h3>
            <p className="mt-2 font-body text-sm text-text-secondary">
              Market insights, new launches, and exclusive offers.
            </p>
            {subscribed ? (
              <p className="mt-4 font-body text-sm text-success">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 border border-border bg-surface px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="border border-gold bg-gold px-5 py-3 font-body text-sm uppercase tracking-widest text-bg transition-colors hover:bg-gold-light"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        <GoldDivider className="my-12" />

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-body text-xs uppercase tracking-widest text-gold">Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-text-secondary hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-body text-xs uppercase tracking-widest text-gold">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-text-secondary hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-body text-xs uppercase tracking-widest text-gold">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-text-secondary hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-body text-xs uppercase tracking-widest text-gold">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-text-secondary">
              <li>{SITE.address}</li>
              <li>
                <a href={SITE.phoneHref} className="hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.hoursShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <p className="text-center font-body text-xs text-text-muted md:text-left">
            © {new Date().getFullYear()} Skyline Builders. All rights reserved. · RERA Reg. No. {SITE.rera}
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: Globe, href: SITE.social.linkedin, label: 'LinkedIn' },
              { Icon: Share2, href: SITE.social.instagram, label: 'Instagram' },
              { Icon: MessageCircle, href: SITE.social.youtube, label: 'YouTube' },
              { Icon: Mail, href: SITE.social.twitter, label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-gold hover:text-gold"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-text-muted">
            Crafted by{' '}
            <a href={SITE.nuvirexa} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">
              Nuvirexa Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
