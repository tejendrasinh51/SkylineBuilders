'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import Badge from '@/components/ui/Badge'
import SectionLabel from '@/components/ui/SectionLabel'

export default function FeaturedProjects() {
  const featured = getFeaturedProjects()
  const [main, ...rest] = featured

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>Our Projects</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 font-display font-light text-text-primary leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Featured Projects.
            </motion.h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-body text-sm uppercase tracking-widest text-gold"
          >
            View All
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
          {main && (
            <ProjectCard project={main} className="md:row-span-2 md:min-h-[560px]" large />
          )}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} className="min-h-[260px] md:min-h-[270px]" />
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group relative overflow-hidden ${className}`}
    >
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-20" aria-label={project.name} />

      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent transition-opacity duration-500" />
      {/* Hover darkening */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Status badge */}
      <div className="absolute top-5 left-5 z-10">
        <Badge status={project.status} label={project.statusLabel} />
      </div>

      {/* Gold corner accent — top right */}
      <div className="absolute top-0 right-0 w-14 h-px bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-px h-14 bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-7">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-body mb-2">
          {project.type.join(' · ')} · {project.area}
        </p>
        <h3
          className={`font-display font-light text-text-primary ${large ? 'text-3xl md:text-4xl' : 'text-2xl'}`}
        >
          {project.name}
        </h3>
        <p className="mt-1 font-body text-sm text-text-secondary">{project.priceLabel}</p>

        {/* Hover reveal */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-28 transition-all duration-500 ease-out">
          <p className="font-body text-sm text-text-secondary leading-relaxed mt-3 mb-4 line-clamp-2">
            {project.tagline}
          </p>
          <span className="inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.15em] uppercase font-body group-hover:gap-4 transition-all duration-300">
            View Project <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
