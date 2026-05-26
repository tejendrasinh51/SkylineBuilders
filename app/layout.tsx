import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import ClientProviders from '@/components/providers/ClientProviders'
import WhatsAppFloat from '@/components/effects/WhatsAppFloat'
import ScrollToTop from '@/components/effects/ScrollToTop'
import { SITE } from '@/lib/constants'
import { createMetadata } from '@/lib/metadata'

const CustomCursor = dynamic(() => import('@/components/effects/CustomCursor'), { ssr: false })

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = createMetadata({
  title: 'Skyline Builders | Luxury Residences in Vadodara, Gujarat',
  description:
    'Skyline Builders — premium 2, 3 & 4 BHK apartments and penthouses in Vadodara. RERA registered. Ready to move & under construction projects in Alkapuri, Gotri & Sama.',
  path: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Skyline House, Alkapuri',
        addressLocality: 'Vadodara',
        postalCode: '390007',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'RealEstateAgent',
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      areaServed: {
        '@type': 'City',
        name: 'Vadodara',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${cormorant.variable} ${dmSans.variable} font-body antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ClientProviders>{children}</ClientProviders>
        <CustomCursor />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  )
}
