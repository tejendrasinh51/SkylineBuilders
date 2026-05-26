import Image from 'next/image'
import Link from 'next/link'
import { Award, Eye, Heart, Shield } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldDivider from '@/components/ui/GoldDivider'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'About Us | Skyline Builders Vadodara',
  description:
    'Learn about Skyline Builders — Vadodara\'s trusted luxury developer since 2015. Our story, values, leadership team, and commitment to quality homes.',
  path: '/about',
})

const milestones = [
  { year: '2015', title: 'Founded', desc: 'Skyline Builders established in Alkapuri, Vadodara with a vision for premium residences.' },
  { year: '2017', title: 'First Tower', desc: 'Delivered our inaugural residential tower, housing 120 families in Alkapuri.' },
  { year: '2019', title: 'RERA Registered', desc: 'Achieved full RERA compliance, setting new transparency standards in Gujarat real estate.' },
  { year: '2021', title: 'Gotri Expansion', desc: 'Launched Skyline Residences, expanding into Gotri with accessible luxury homes.' },
  { year: '2024', title: 'The Meridian', desc: 'Flagship tower The Meridian completed — ready-to-move luxury in Alkapuri.' },
  { year: '2026', title: 'The Pinnacle', desc: 'Ultra-luxury launch in Sama — 48 exclusive residences redefining Vadodara living.' },
]

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Transparent pricing, honest timelines, and RERA-compliant practices in every transaction.' },
  { icon: Eye, title: 'Excellence', desc: 'Premium materials, meticulous craftsmanship, and architecture that endures generations.' },
  { icon: Heart, title: 'Community', desc: 'Homes designed to foster connection — from clubhouses to landscaped gathering spaces.' },
  { icon: Award, title: 'Innovation', desc: 'Smart home readiness, sustainable systems, and forward-thinking design in every project.' },
]

const team = [
  {
    name: 'Rajendra Shah',
    role: 'Founder & Managing Director',
    bio: '25+ years in Gujarat real estate. Visionary behind Skyline\'s design-first philosophy.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  },
  {
    name: 'Anita Desai',
    role: 'Chief Architect',
    bio: 'IIT Kharagpur graduate. Leads design across all Skyline projects with global sensibility.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    name: 'Vikram Mehta',
    role: 'Head of Sales',
    bio: 'Guides families through every step — from site visit to keys in hand with warmth and clarity.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Sneha Patel',
    role: 'Customer Experience Director',
    bio: 'Ensures 98% satisfaction through dedicated after-sales support and community engagement.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
]

const awards = ['CREDAI Excellence 2024', 'Best Luxury Developer Gujarat', 'RERA Compliance Award', 'Green Building Certified', 'Customer Choice Award 2025']

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative flex min-h-[50vh] items-end bg-surface">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
          <div className="container-custom relative z-10 pb-16 pt-32">
            <SectionLabel>Our Story</SectionLabel>
            <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-tight text-text-primary md:text-6xl">
              Building Trust, One Home at a Time.
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                alt="Rajendra Shah, Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <SectionLabel>Founder&apos;s Message</SectionLabel>
              <blockquote className="mt-6 font-display text-2xl leading-relaxed text-text-primary md:text-3xl">
                &ldquo;We don&apos;t build apartments — we craft addresses that families are proud to call home. Every
                brick, every finish, every amenity reflects our promise to Vadodara.&rdquo;
              </blockquote>
              <p className="mt-6 font-body text-sm font-medium uppercase tracking-widest text-gold">
                — Rajendra Shah, Founder
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionLabel className="justify-center">Timeline</SectionLabel>
            <h2 className="mt-4 text-center font-display text-4xl uppercase text-text-primary">Our Journey</h2>
            <div className="relative mt-16">
              <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gold/30 md:block" />
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative mb-12 grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'}`}
                >
                  <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                    <span className="font-display text-4xl text-gold">{m.year}</span>
                    <h3 className="mt-2 font-display text-xl text-text-primary">{m.title}</h3>
                    <p className="mt-2 font-body text-sm text-text-secondary">{m.desc}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-1/2 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gold md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="section-padding">
          <div className="container-custom">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="mt-4 font-display text-4xl uppercase text-text-primary">Our Values</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="rounded-lg border border-border bg-surface p-8">
                    <Icon className="h-8 w-8 text-gold" />
                    <h3 className="mt-4 font-display text-xl text-text-primary">{v.title}</h3>
                    <p className="mt-2 font-body text-sm text-text-secondary">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="team" className="section-padding bg-surface">
          <div className="container-custom">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-4 font-display text-4xl uppercase text-text-primary">Our Team</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full border-2 border-gold/30">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-text-primary">{member.name}</h3>
                  <p className="font-body text-xs uppercase tracking-widest text-gold">{member.role}</p>
                  <p className="mt-2 font-body text-sm text-text-secondary">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-bg py-12">
          <div className="container-custom">
            <p className="mb-6 text-center font-body text-xs uppercase tracking-widest text-text-secondary">
              Awards & Recognition
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {awards.map((award) => (
                <span
                  key={award}
                  className="rounded border border-gold/20 px-6 py-3 font-body text-xs uppercase tracking-widest text-gold"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding text-center">
          <div className="container-custom">
            <h2 className="font-display text-3xl uppercase text-text-primary">Ready to Find Your Home?</h2>
            <Link
              href="/contact"
              className="mt-6 inline-block border border-gold px-8 py-4 font-body text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-bg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
