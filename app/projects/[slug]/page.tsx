import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProjectGallery from '@/components/projects/ProjectGallery'
import ProjectCard from '@/components/projects/ProjectCard'
import MobileEnquiryBar from '@/components/projects/MobileEnquiryBar'
import EnquiryForm from '@/components/forms/EnquiryForm'
import Badge from '@/components/ui/Badge'
import GoldDivider from '@/components/ui/GoldDivider'
import { projects, getProjectBySlug } from '@/data/projects'
import { amenities } from '@/data/amenities'
import { createMetadata } from '@/lib/metadata'
import FloorPlansSection from '@/components/projects/FloorPlansSection'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return createMetadata({
    title: `${project.name} | Skyline Builders Vadodara`,
    description: project.description.slice(0, 155) + '…',
    path: `/projects/${project.slug}`,
    image: project.images[0],
  })
}

function AvailabilityDot({ status }: { status: string }) {
  const colors = {
    available: 'bg-success',
    limited: 'bg-gold',
    sold: 'bg-error',
  }
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${colors[status as keyof typeof colors] || colors.available}`}
    />
  )
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const similar = projects.filter((p) => p.slug !== project.slug).slice(0, 2)
  const paragraphs = project.description.split('\n\n')

  return (
    <>
      <Navbar />
      <main className="pb-24 pt-20 md:pb-0">
        <ProjectGallery images={project.images} name={project.name} />

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Badge status={project.status} label={project.statusLabel} />
                <h1 className="mt-4 font-display text-4xl uppercase text-text-primary md:text-5xl">{project.name}</h1>
                <p className="mt-2 font-body text-gold">{project.location}</p>
                <GoldDivider className="my-8" />
                {paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 font-body text-sm leading-relaxed text-text-secondary md:text-base">
                    {p}
                  </p>
                ))}
                <h2 className="mt-8 font-display text-2xl text-text-primary">Key Highlights</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 font-body text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-body text-xs text-text-muted">RERA: {project.reraNumber}</p>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-28 hidden rounded-lg border border-border bg-surface p-6 md:block">
                  <h3 className="font-display text-xl uppercase text-text-primary">Enquire Now</h3>
                  <p className="mt-2 font-body text-sm text-text-secondary">
                    Get pricing, floor plans, and schedule a site visit.
                  </p>
                  <div className="mt-6">
                    <EnquiryForm defaultProject={project.name} compact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="container-custom overflow-x-auto">
            <h2 className="mb-8 font-display text-3xl uppercase text-text-primary">Configurations</h2>
            <table className="w-full min-w-[600px] border-collapse font-body text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-widest text-gold">
                  <th className="pb-4 pr-4">Type</th>
                  <th className="pb-4 pr-4">Carpet Area</th>
                  <th className="pb-4 pr-4">Price</th>
                  <th className="pb-4">Availability</th>
                </tr>
              </thead>
              <tbody>
                {project.configurations.map((config) => (
                  <tr key={config.type} className="border-b border-border/50">
                    <td className="py-4 pr-4 text-text-primary">{config.type}</td>
                    <td className="py-4 pr-4 text-text-secondary">{config.carpetArea}</td>
                    <td
                      className={`py-4 pr-4 ${config.availability === 'sold' ? 'text-text-muted line-through' : 'text-gold'}`}
                    >
                      {config.price}
                    </td>
                    <td className="py-4">
                      <span className="flex items-center gap-2 capitalize text-text-secondary">
                        <AvailabilityDot status={config.availability} />
                        {config.availability === 'sold'
                          ? 'Sold Out'
                          : config.availability === 'limited'
                            ? 'Limited'
                            : 'Available'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FloorPlansSection floorPlanImages={project.floorPlanImages} projectName={project.name} />

        <section className="section-padding">
          <div className="container-custom">
            <h2 className="mb-10 text-center font-display text-3xl uppercase text-text-primary">Amenities</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {amenities.map((a) => {
                const Icon = a.icon
                return (
                  <div key={a.id} className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="font-body text-xs text-text-secondary">{a.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="container-custom">
            <h2 className="mb-8 font-display text-3xl uppercase text-text-primary">Location</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="aspect-video overflow-hidden rounded-lg border border-border">
                <iframe
                  src={project.mapEmbed}
                  title={`${project.name} location map`}
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-body text-sm text-text-secondary">Nearby landmarks</p>
                <ul className="mt-4 space-y-3">
                  {project.nearbyPlaces.map((place) => (
                    <li
                      key={place.name}
                      className="flex items-center justify-between border-b border-border/50 py-3 font-body text-sm"
                    >
                      <span className="text-text-primary">{place.name}</span>
                      <span className="text-gold">{place.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <h2 className="mb-10 font-display text-3xl uppercase text-text-primary">Similar Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {similar.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileEnquiryBar projectName={project.name} />
    </>
  )
}
