'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import Badge from '@/components/ui/Badge'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp } from '@/lib/animations'

export default function FeaturedProjects() {
  const featured = getFeaturedProjects()
  const [main, ...rest] = featured

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel>Our Projects</SectionLabel>
            <h2 className="mt-4 font-display text-4xl uppercase text-text-primary md:text-5xl">
              Featured Projects.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-body text-sm uppercase tracking-widest text-gold"
          >
            View All
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-6">
          {main && (
            <ProjectCard project={main} className="md:row-span-2 md:min-h-[520px]" large />
          )}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} className="min-h-[240px] md:min-h-[250px]" />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  className,
  large = false,
}: {
  project: (typeof import('@/data/projects').projects)[0]
  className?: string
  large?: boolean
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block min-h-[280px] overflow-hidden rounded-lg ${className}`}
    >
      <Image
        src={project.images[0]}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
      <div className="absolute left-4 top-4 z-10">
        <Badge status={project.status} label={project.statusLabel} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <span className="font-body text-xs uppercase tracking-widest text-gold">
          {project.type.join(' · ')} · {project.area}
        </span>
        <h3 className={`mt-1 font-display text-text-primary ${large ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
          {project.name}
        </h3>
        <p className="mt-1 font-body text-sm text-text-secondary">{project.priceLabel}</p>
        <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
          <p className="line-clamp-2 font-body text-sm text-text-secondary">{project.tagline}</p>
          <span className="mt-4 inline-flex items-center gap-2 border border-gold px-4 py-2 font-body text-xs uppercase tracking-widest text-gold">
            View Project <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
