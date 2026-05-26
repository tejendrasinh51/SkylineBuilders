'use client'

import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    'Hello Skyline Builders, I would like to enquire about your properties in Vadodara.'
  )
  const href = `https://wa.me/${SITE.whatsapp}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-24 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:gap-3 hover:pr-5 animate-pulse-gold md:bottom-8"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <MessageCircle className="h-7 w-7 text-white" fill="white" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-body text-sm font-medium text-white transition-all duration-300 group-hover:max-w-[120px]">
        Chat with us
      </span>
    </a>
  )
}
