'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import GoldDivider from '@/components/ui/GoldDivider'

// Inline SVG social icons (lucide-react doesn't include social icons in this version)
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0A0A0A" />
    </svg>
  )
}

function TwitterXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socials = [
  { Icon: LinkedInIcon, href: SITE.social.linkedin, label: 'LinkedIn' },
  { Icon: InstagramIcon, href: SITE.social.instagram, label: 'Instagram' },
  { Icon: YoutubeIcon, href: SITE.social.youtube, label: 'YouTube' },
  { Icon: TwitterXIcon, href: SITE.social.twitter, label: 'Twitter' },
]

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
            <h3 className="font-display text-xl text-text-primary font-light">Subscribe for updates</h3>
            <p className="mt-2 font-body text-sm text-text-secondary">
              Market insights, new launches, and exclusive offers.
            </p>
            {subscribed ? (
              <p className="mt-4 font-body text-sm text-[#4caf7a]">Thank you for subscribing!</p>
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
                  className="border border-gold bg-gold px-5 py-3 font-body text-sm uppercase tracking-widest text-bg transition-colors hover:bg-[#E8C97A]"
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
                  <Link href={link.href} className="font-body text-sm text-text-secondary hover:text-gold transition-colors">
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
                  <Link href={link.href} className="font-body text-sm text-text-secondary hover:text-gold transition-colors">
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
                  <Link href={link.href} className="font-body text-sm text-text-secondary hover:text-gold transition-colors">
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
                <a href={SITE.phoneHref} className="hover:text-gold transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">
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
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center
                           text-text-secondary hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-text-muted">
            Crafted by{' '}
            <a href={SITE.nuvirexa} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-[#E8C97A] transition-colors">
              Nuvirexa Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
