'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function MobileEnquiryBar({ projectName }: { projectName: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-border bg-bg/95 p-3 backdrop-blur-lg md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border border-gold py-3 font-body text-xs uppercase tracking-widest text-gold"
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link
        href={`/contact?project=${encodeURIComponent(projectName)}`}
        className="flex flex-1 items-center justify-center bg-gold py-3 font-body text-xs uppercase tracking-widest text-bg"
      >
        Enquire Now
      </Link>
    </div>
  )
}
