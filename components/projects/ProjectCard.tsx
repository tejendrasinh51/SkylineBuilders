'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import Badge from '@/components/ui/Badge'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-300 hover:shadow-card"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute left-4 top-4">
            <Badge status={project.status} label={project.statusLabel} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-2xl text-text-primary">{project.name}</h3>
          <p className="mt-1 font-body text-sm text-text-secondary">
            {project.location} · {project.type.join(', ')}
          </p>
          <p className="mt-2 font-body text-sm font-medium text-gold">{project.priceLabel}</p>
          <span className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-text-secondary transition-colors group-hover:text-gold">
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
