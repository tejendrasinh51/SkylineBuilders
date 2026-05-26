import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { amenities } from '@/data/amenities'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Amenities & Lifestyle | Skyline Builders Vadodara',
  description:
    'Discover world-class amenities at Skyline Builders — infinity pool, fitness centre, clubhouse, smart home tech, and more across our Vadodara residences.',
  path: '/amenities',
})

export default function AmenitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-custom text-center">
            <SectionLabel className="justify-center">Lifestyle</SectionLabel>
            <h1 className="mt-4 font-display text-5xl uppercase text-text-primary md:text-6xl">
              Amenities & Lifestyle
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-text-secondary">
              Every Skyline residence is designed around how you live — with amenities that elevate daily life from
              morning yoga to evening celebrations.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-custom grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => {
              const Icon = amenity.icon
              return (
                <div
                  key={amenity.id}
                  className="group rounded-lg border border-border bg-surface p-8 transition-colors hover:border-gold/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 transition-all group-hover:bg-gold">
                    <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-bg" />
                  </div>
                  <h2 className="mt-4 font-display text-xl text-text-primary">{amenity.label}</h2>
                  <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">{amenity.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
