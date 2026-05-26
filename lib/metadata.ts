import type { Metadata } from 'next'
import { SITE } from './constants'

export function createMetadata({
  title,
  description,
  path = '',
  image = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200',
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `${SITE.url}${path}`

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
