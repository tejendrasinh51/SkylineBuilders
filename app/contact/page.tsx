import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EnquiryForm from '@/components/forms/EnquiryForm'
import SectionLabel from '@/components/ui/SectionLabel'
import { SITE } from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact Us | Skyline Builders Vadodara',
  description:
    'Contact Skyline Builders for property enquiries, site visits, and pricing. Call +91 98765 43210 or visit our Alkapuri office in Vadodara.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <SectionLabel>Get in Touch</SectionLabel>
                <h1 className="mt-4 font-display text-5xl uppercase text-text-primary">Let&apos;s Talk.</h1>
                <p className="mt-4 font-body text-text-secondary">
                  We&apos;d love to help you find your perfect home. Reach out for site visits, pricing, or any
                  questions about our projects.
                </p>

                <ul className="mt-10 space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="font-body text-sm text-text-secondary">{SITE.address}</span>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
                    <a href={SITE.phoneHref} className="font-body text-sm text-text-secondary hover:text-gold">
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="h-5 w-5 flex-shrink-0 text-gold" />
                    <a href={`mailto:${SITE.email}`} className="font-body text-sm text-text-secondary hover:text-gold">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="font-body text-sm text-text-secondary">{SITE.hours}</span>
                  </li>
                </ul>

                <div className="mt-10 aspect-video overflow-hidden rounded-lg border border-border">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=73.165%2C22.305%2C73.175%2C22.315&layer=mapnik&marker=22.31%2C73.17"
                    title="Skyline Builders office location"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-surface p-8">
                <h2 className="font-display text-2xl uppercase text-text-primary">Send an Enquiry</h2>
                <p className="mt-2 font-body text-sm text-text-secondary">
                  Fill in the form and our team will respond within 24 hours.
                </p>
                <div className="mt-8">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
