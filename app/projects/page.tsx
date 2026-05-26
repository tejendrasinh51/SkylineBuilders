'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilters from '@/components/projects/ProjectFilters'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const statusMatch = status === 'all' || p.status === status
      const typeMatch = type === 'all' || p.type.some((t) => t.includes(type))
      return statusMatch && typeMatch
    })
  }, [status, type])

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative flex h-[40vh] min-h-[280px] items-end bg-surface">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
          <div className="container-custom relative z-10 pb-12">
            <nav className="mb-4 font-body text-xs uppercase tracking-widest text-text-secondary">
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gold">Projects</span>
            </nav>
            <h1 className="font-display text-5xl uppercase text-text-primary md:text-6xl">Our Projects</h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <ProjectFilters status={status} type={type} onStatusChange={setStatus} onTypeChange={setType} />
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </div>
            {filtered.length === 0 && (
              <p className="mt-12 text-center font-body text-text-secondary">No projects match your filters.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
